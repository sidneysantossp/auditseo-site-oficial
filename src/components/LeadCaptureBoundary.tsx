import { useRef, type FormEvent, type ReactNode } from "react";

type LeadPayload = {
  kind: "consultation" | "diagnostic";
  nome: string;
  empresa?: string;
  email: string;
  whatsapp: string;
  site?: string;
  faturamento?: string;
  clientUrl?: string;
  context?: string;
  sourcePath?: string;
  referrer?: string;
  utm?: Record<string, string>;
};

function attribution() {
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};

  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "lead_id", "campaign_id"]) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }

  return {
    sourcePath: `${window.location.pathname}${window.location.search}`,
    referrer: document.referrer || undefined,
    utm: Object.keys(utm).length ? utm : undefined,
  };
}

function buildPayload(form: HTMLFormElement): LeadPayload | null {
  if (form.closest("#form-contato")) {
    const inputs = Array.from(form.querySelectorAll<HTMLInputElement>("input"));
    const revenue = form.querySelector<HTMLSelectElement>("select")?.value || undefined;

    if (inputs.length < 4) return null;

    return {
      kind: "consultation",
      nome: inputs[0]?.value.trim() || "",
      email: inputs[1]?.value.trim() || "",
      whatsapp: inputs[2]?.value.trim() || "",
      site: inputs[3]?.value.trim() || "",
      faturamento: revenue,
      ...attribution(),
    };
  }

  if (form.closest("#organic-opportunity-scan")) {
    const inputs = Array.from(form.querySelectorAll<HTMLInputElement>("input"));
    const context = form.querySelector<HTMLTextAreaElement>("textarea")?.value.trim();
    const diagnosticText = document.getElementById("diagnostic-result")?.textContent?.replace(/\s+/g, " ").trim();

    if (inputs.length < 5) return null;

    return {
      kind: "diagnostic",
      nome: inputs[0]?.value.trim() || "",
      empresa: inputs[1]?.value.trim() || "",
      whatsapp: inputs[2]?.value.trim() || "",
      email: inputs[3]?.value.trim() || "",
      site: inputs[4]?.value.trim() || "",
      clientUrl: inputs[5]?.value.trim() || undefined,
      context: [context, diagnosticText ? `Resumo exibido: ${diagnosticText.slice(0, 3000)}` : ""].filter(Boolean).join("\n\n") || undefined,
      ...attribution(),
    };
  }

  return null;
}

function localWhatsappFallback(payload: LeadPayload) {
  const message = [
    "Olá, AUDITSEO. Tentei enviar uma solicitação pelo site e quero continuar pelo WhatsApp.",
    `Nome: ${payload.nome}`,
    payload.empresa ? `Empresa/Agência: ${payload.empresa}` : "",
    `E-mail: ${payload.email}`,
    `WhatsApp: ${payload.whatsapp}`,
    payload.site ? `Site: ${payload.site}` : "",
    payload.faturamento ? `Faturamento: ${payload.faturamento}` : "",
    payload.clientUrl ? `Projeto: ${payload.clientUrl}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/5511995250742?text=${encodeURIComponent(message)}`;
}

export default function LeadCaptureBoundary({ children }: { children: ReactNode }) {
  const submittingRef = useRef(false);

  const handleSubmitCapture = async (event: FormEvent<HTMLDivElement>) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;

    const payload = buildPayload(form);
    if (!payload) return;

    event.preventDefault();
    event.stopPropagation();

    if (submittingRef.current) return;
    submittingRef.current = true;

    const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const originalDisabled = submitButton?.disabled;
    if (submitButton) submitButton.disabled = true;

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | { success?: boolean; fallbackUrl?: string }
        | null;

      if (response.ok && result?.success) {
        window.location.assign(`/obrigado?origem=${encodeURIComponent(payload.kind)}`);
        return;
      }

      if (result?.fallbackUrl) {
        window.location.assign(result.fallbackUrl);
        return;
      }

      window.location.assign(localWhatsappFallback(payload));
    } catch (error) {
      console.error("Lead capture failed", error);
      window.location.assign(localWhatsappFallback(payload));
    } finally {
      submittingRef.current = false;
      if (submitButton) submitButton.disabled = originalDisabled ?? false;
    }
  };

  return (
    <div className="contents" onSubmitCapture={handleSubmitCapture}>
      {children}
    </div>
  );
}
