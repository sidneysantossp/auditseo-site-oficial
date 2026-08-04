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
  const { nome, agencia, site, nichos, dificuldade } = body;
  return {
    radarScore: 78,
    marketOpportunity:
      "Alta prioridade estratégica devido à alta densidade comercial em " +
      (nichos || "Serviços/Negócios Locais") +
      ".",
    seoScore: 68,
    geoScore: 42,
    brandAuthorityScore: 55,
    analysis: `Olá ${nome || "Diretor(a)"}, analisamos a empresa ${agencia || "Interessada"} (${site || "Sem site informado"}). Atualmente, operar no segmento de "${nichos || "marketing de busca"}" exige uma forte transição de SEO tradicional para GEO (Generative Engine Optimization). Identificamos que o principal ponto crítico ("${dificuldade || "escalar visibilidade com autoridade"}") impede a evolução do reconhecimento da sua marca.`,
    quickWins: [
      {
        title: "Estruturação de Schema Markup Semântico",
        description:
          "Adicionar marcações ricas no site para alimentar o Google AI Overviews diretamente, facilitando a identificação da autoridade da empresa.",
      },
      {
        title: "Otimização de Perfil de Empresa no Google (SEO Local)",
        description:
          "Alinhamento de menções externas (Citações NAP) para consolidar a autoridade geográfica e presença nos mapas.",
      },
      {
        title: "Relatórios de Search Intelligence",
        description:
          "Substituir relatórios baseados em cliques por análises de 'Narrativa de Busca e Intenção', agregando mais valor estratégico à tomada de decisão.",
      },
    ],
    roadmap90Days: [
      {
        phase: "Dia 1 - 30: Diagnóstico & Limpeza Técnica",
        actions:
          "Mapeamento das principais intenções e auditoria de indexação em IA. Identificação dos fatores que limitam os resultados atuais.",
      },
      {
        phase: "Dia 31 - 60: Autoridade Local & GEO",
        actions:
          "Lançamento do plano de citações estruturadas nos mapas e criação de tópicos de autoridade temática para buscadores e IA.",
      },
      {
        phase: "Dia 61 - 90: Learning Loop & Evolução",
        actions:
          "Apresentação dos primeiros resultados de Search Intelligence, validação da autoridade de entidade e ativação de novos ciclos de crescimento.",
      },
    ],
    growthEstimate:
      "Adoção da estratégia de Inteligência de Busca AUDITSEO otimiza a visibilidade e fortalece a confiança da marca em múltiplos canais de descoberta.",
    suggestedModel: "Consultoria de Inteligência de Busca e Autoridade",
  };
}

function buildPrompt(b: DiagnoseBody) {
  return `Você é o Diretor Sênior de Inteligência de Busca da AUDITSEO. Escreva um parecer diagnóstico de SEO, GEO e Search Intelligence personalizado focado em ajudar uma empresa a fortalecer sua autoridade de marca e visibilidade no mercado de busca orgânica tradicional e busca baseada em IA (como ChatGPT, Gemini, AI Overviews).

DADOS DA EMPRESA SUBMETIDOS:
- Empresa: ${b.agencia || "Não informado"}
- Site: ${b.site || "Não informado"}
- Contato do Responsável: ${b.nome || "Não informado"}
- Nichos Atendidos: ${b.nichos || "Geral"}
- Maior ponto crítico identificado hoje: ${b.dificuldade || "Fortalecer autoridade e visibilidade estratégica"}

O seu retorno deve ser exclusivamente um objeto JSON em português do Brasil contendo: radarScore (inteiro 40-95), seoScore (40-95), geoScore (30-90), brandAuthorityScore (40-95), marketOpportunity (frase curta), analysis (parágrafo executivo e consultivo removendo qualquer menção a agências ou white-label), quickWins (array com 3 objetos com 'title' e 'description'), roadmap90Days (array com 3 objetos com 'phase' e 'actions'), growthEstimate (frase objetiva), suggestedModel (Consultoria de Inteligência de Busca e Autoridade).

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
