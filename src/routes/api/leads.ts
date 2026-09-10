import { z } from "zod";
import { createFileRoute } from "@tanstack/react-router";

const attributionRecord = z.record(z.string(), z.string().max(500));

const LeadSchema = z
  .object({
    kind: z.enum(["consultation", "diagnostic", "newsletter"]),
    nome: z.string().trim().max(120).optional(),
    empresa: z.string().trim().max(160).optional(),
    email: z.string().trim().email().max(180),
    whatsapp: z.string().trim().max(40).optional(),
    site: z.string().trim().max(500).optional(),
    faturamento: z.string().trim().max(100).optional(),
    clientUrl: z.string().trim().max(500).optional(),
    context: z.string().trim().max(5000).optional(),
    discoverySource: z.string().trim().max(120).optional(),
    sourcePath: z.string().trim().max(500).optional(),
    referrer: z.string().trim().max(1000).optional(),
    utm: attributionRecord.optional(),
    firstTouchPath: z.string().trim().max(500).optional(),
    firstTouchReferrer: z.string().trim().max(1000).optional(),
    firstTouchUtm: attributionRecord.optional(),
    firstTouchAt: z.string().datetime({ offset: true }).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.kind === "newsletter") return;

    if (!data.nome) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["nome"], message: "Nome obrigatório" });
    }
    if (!data.whatsapp) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["whatsapp"], message: "WhatsApp obrigatório" });
    }
    if (data.kind === "consultation" && !data.site) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["site"], message: "Site obrigatório" });
    }
  });

type LeadPayload = z.infer<typeof LeadSchema>;

const json = (payload: unknown, status = 200) =>
  new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });

function leadLabel(kind: LeadPayload["kind"]) {
  if (kind === "diagnostic") return "Diagnóstico";
  if (kind === "newsletter") return "Newsletter";
  return "Avaliação estratégica";
}

function formatAttribution(values?: Record<string, string>) {
  if (!values) return "";
  return Object.entries(values)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
}

function formatLead(payload: LeadPayload) {
  const currentUtm = formatAttribution(payload.utm);
  const firstTouchUtm = formatAttribution(payload.firstTouchUtm);

  return [
    `Tipo: ${leadLabel(payload.kind)}`,
    `Nome: ${payload.nome || "-"}`,
    `Empresa/Agência: ${payload.empresa || "-"}`,
    `E-mail: ${payload.email}`,
    `WhatsApp: ${payload.whatsapp || "-"}`,
    `Site: ${payload.site || "-"}`,
    `Faturamento: ${payload.faturamento || "-"}`,
    `URL cliente/projeto: ${payload.clientUrl || "-"}`,
    `Como conheceu a AUDITSEO (declarado): ${payload.discoverySource || "-"}`,
    `Primeiro touch AUDITSEO: ${payload.firstTouchPath || "-"}`,
    `Primeiro touch em: ${payload.firstTouchAt || "-"}`,
    `Referrer do primeiro touch: ${payload.firstTouchReferrer || "-"}`,
    firstTouchUtm ? `UTM do primeiro touch:\n${firstTouchUtm}` : "",
    `Origem da conversão: ${payload.sourcePath || "-"}`,
    `Referrer da conversão: ${payload.referrer || "-"}`,
    currentUtm ? `UTM da conversão:\n${currentUtm}` : "",
    payload.context ? `Contexto:\n${payload.context}` : "",
  ]
    .filter(Boolean)
    .join("\n\n");
}

function whatsappFallback(payload: LeadPayload) {
  const message = [
    `Olá, AUDITSEO. Quero solicitar uma ${leadLabel(payload.kind).toLowerCase()}.`,
    payload.nome ? `Nome: ${payload.nome}` : "",
    payload.empresa ? `Empresa/Agência: ${payload.empresa}` : "",
    `E-mail: ${payload.email}`,
    payload.whatsapp ? `WhatsApp: ${payload.whatsapp}` : "",
    payload.site ? `Site: ${payload.site}` : "",
    payload.faturamento ? `Faturamento: ${payload.faturamento}` : "",
    payload.clientUrl ? `Projeto: ${payload.clientUrl}` : "",
    payload.discoverySource ? `Como conheceu a AUDITSEO: ${payload.discoverySource}` : "",
    payload.firstTouchPath ? `Primeiro touch AUDITSEO: ${payload.firstTouchPath}` : "",
    payload.sourcePath ? `Origem da conversão: ${payload.sourcePath}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/5511995250742?text=${encodeURIComponent(message)}`;
}

async function deliverWebhook(payload: LeadPayload) {
  const url = process.env["LEAD_WEBHOOK_URL"];
  if (!url) return false;

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  const token = process.env["LEAD_WEBHOOK_TOKEN"];
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      ...payload,
      source: "auditseo-site",
      receivedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    console.error("Lead webhook returned non-success status", { status: response.status });
  }

  return response.ok;
}

async function deliverEmail(payload: LeadPayload) {
  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) return false;

  const to = process.env["LEAD_NOTIFICATION_EMAIL"] || "contato@auditseo.com.br";
  const from = process.env["LEAD_FROM_EMAIL"] || "AUDITSEO <contato@auditseo.com.br>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `[AUDITSEO] Novo lead — ${leadLabel(payload.kind)}`,
      text: formatLead(payload),
    }),
  });

  if (!response.ok) {
    console.error("Lead email returned non-success status", { status: response.status });
  }

  return response.ok;
}

export const Route = createFileRoute("/api/leads")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const contentType = request.headers.get("content-type") || "";
        if (!contentType.includes("application/json")) {
          return json({ success: false, error: "Content-Type inválido" }, 415);
        }

        let raw = "";
        try {
          raw = await request.text();
        } catch {
          return json({ success: false, error: "Não foi possível ler a solicitação" }, 400);
        }

        if (raw.length > 20_000) {
          return json({ success: false, error: "Solicitação muito grande" }, 413);
        }

        let parsedJson: unknown;
        try {
          parsedJson = JSON.parse(raw);
        } catch {
          return json({ success: false, error: "JSON inválido" }, 400);
        }

        const parsed = LeadSchema.safeParse(parsedJson);
        if (!parsed.success) {
          return json({ success: false, error: "Dados inválidos" }, 422);
        }

        const payload = parsed.data;
        let delivered = false;

        try {
          delivered = (await deliverWebhook(payload)) || delivered;
        } catch (error) {
          console.error("Lead webhook delivery failed", error);
        }

        try {
          delivered = (await deliverEmail(payload)) || delivered;
        } catch (error) {
          console.error("Lead email delivery failed", error);
        }

        if (delivered) {
          return json({ success: true });
        }

        console.warn("Lead delivery unavailable", {
          webhookConfigured: Boolean(process.env["LEAD_WEBHOOK_URL"]),
          emailConfigured: Boolean(process.env["RESEND_API_KEY"]),
        });

        return json(
          {
            success: false,
            error: "Canal de entrega indisponível",
            fallbackUrl: whatsappFallback(payload),
          },
          503,
        );
      },
    },
  },
});
