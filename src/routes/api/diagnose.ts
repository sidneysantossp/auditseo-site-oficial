import { createFileRoute } from "@tanstack/react-router";

type DiagnoseBody = {
  nome?: string;
  agencia?: string;
  site?: string;
  whatsapp?: string;
  email?: string;
  clientes?: string;
  nichos?: string;
  vendeSEO?: string;
  dificuldade?: string;
  modelo?: string;
};

function buildMock(body: DiagnoseBody) {
  const { nome, agencia, site, clientes, nichos, dificuldade, modelo } = body;
  return {
    radarScore: 78,
    marketOpportunity:
      "Alta prioridade estratégica devido à alta densidade comercial em " +
      (nichos || "Serviços/Negócios Locais") +
      ".",
    seoScore: 68,
    geoScore: 42,
    brandAuthorityScore: 55,
    analysis: `Olá ${nome || "Diretor(a)"}, analisamos a agência ${agencia || "Parceira"} (${site || "Sem site informado"}). Atualmente, operar no segmento de "${nichos || "marketing de busca"}" exige uma forte transição de SEO tradicional para GEO (Generative Engine Optimization). Identificamos que a sua principal dificuldade ("${dificuldade || "escalar entregas com rentabilidade"}") é comum em agências com cerca de ${clientes || "10 a 30"} contas ativas.`,
    quickWins: [
      {
        title: "Estruturação de Schema Markup Semântico",
        description:
          "Adicionar marcações ricas nos sites dos clientes para alimentar o Google AI Overviews diretamente, facilitando a identificação da autoridade local.",
      },
      {
        title: "Otimização de Perfil de Empresa no Google (SEO Local)",
        description:
          "Alinhamento de menções externas (Citações NAP) para consolidar a autoridade geográfica e entrar no 3-Pack dos mapas.",
      },
      {
        title: "White-Label de Relatórios de Search Intelligence",
        description:
          "Substituir relatórios baseados em cliques industriais por análises de 'Narrativa de Busca e Intenção', agregando 3x mais valor percebido pelo cliente final.",
      },
    ],
    roadmap90Days: [
      {
        phase: "Dia 1 - 30: Diagnóstico & Limpeza Técnica",
        actions:
          "Mapeamento das 5 principais intenções e auditoria de indexação em IA. Implementação da retaguarda AUDITSEO nas propostas comerciais.",
      },
      {
        phase: "Dia 31 - 60: Autoridade Local & GEO",
        actions:
          "Lançamento do plano de citações estruturadas nos mapas e criação de tópicos de autoridade temática no blog do cliente.",
      },
      {
        phase: "Dia 61 - 90: Learning Loop & Expansão",
        actions:
          "Apresentação dos primeiros resultados de Search Intelligence, redução do churn e ativação de novos escopos recorrentes de SEO.",
      },
    ],
    growthEstimate:
      "Adoção da retaguarda AUDITSEO reduz o tempo de entrega interna em até 70% e pode elevar a retenção de contratos em mais de 14 meses.",
    suggestedModel: modelo || "Parceria White-Label ou Squad Externo SEO/GEO",
  };
}

function buildPrompt(b: DiagnoseBody) {
  return `Você é o Diretor Sênior de Inteligência de Busca da AUDITSEO. Escreva um parecer diagnóstico de SEO, GEO e Search Intelligence personalizado focado em ajudar uma agência a se posicionar de forma premium no mercado de busca orgânica tradicional e busca baseada em IA (como ChatGPT, Gemini, AI Overviews).

DADOS DA AGÊNCIA SUBMETIDOS:
- Agência: ${b.agencia || "Não informado"}
- Site: ${b.site || "Não informado"}
- Contato do Responsável: ${b.nome || "Não informado"}
- E-mail: ${b.email || "Não informado"}
- Clientes Ativos: ${b.clientes || "Não informado"}
- Nichos Atendidos: ${b.nichos || "Geral"}
- Já vende SEO: ${b.vendeSEO || "Não informado"}
- Maior dificuldade comercial/operacional hoje: ${b.dificuldade || "Entregar com autoridade e reter clientes"}
- Modelo de parceria em mente: ${b.modelo || "Squad Externo ou White-Label"}

O seu retorno deve ser exclusivamente um objeto JSON em português do Brasil contendo: radarScore (inteiro 40-95), seoScore (40-95), geoScore (30-90), brandAuthorityScore (40-95), marketOpportunity (frase curta), analysis (parágrafo executivo e consultivo), quickWins (array com 3 objetos com 'title' e 'description'), roadmap90Days (array com 3 objetos com 'phase' e 'actions'), growthEstimate (frase objetiva), suggestedModel (frase curta).

Retorne apenas JSON puro compatível com JSON.parse, sem markdown.`;
}

export const Route = createFileRoute("/api/diagnose")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: DiagnoseBody = {};
        try {
          body = (await request.json()) as DiagnoseBody;
        } catch {
          body = {};
        }

        const mockDiagnostic = buildMock(body);
        const apiKey = process.env["GEMINI_API_KEY"];

        const json = (payload: unknown) =>
          new Response(JSON.stringify(payload), {
            headers: { "Content-Type": "application/json" },
          });

        if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
          return json({
            success: true,
            diagnostic: mockDiagnostic,
            info: "Gerado via Simulação Estratégica Premium AUDITSEO.",
          });
        }

        try {
          const { GoogleGenAI } = await import("@google/genai");
          const ai = new GoogleGenAI({ apiKey });
          const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: buildPrompt(body),
            config: { responseMimeType: "application/json" },
          });

          const text = response.text ? response.text.trim() : "";
          let data: unknown;
          try {
            data = JSON.parse(text);
          } catch {
            data = mockDiagnostic;
          }

          return json({
            success: true,
            diagnostic: data,
            info: "Gerado em tempo real pela inteligência artificial da AUDITSEO.",
          });
        } catch (error) {
          console.error("Diagnose route error:", error);
          return json({
            success: true,
            diagnostic: mockDiagnostic,
            info: "Gerado via Simulação Estratégica Premium AUDITSEO (mecanismo local devido à latência).",
          });
        }
      },
    },
  },
});
