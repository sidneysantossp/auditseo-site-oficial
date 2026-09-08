import type { Article } from "./articles";

const aiSeoBrasil = "https://www.aiseobrasil.com/";
const maudy = "https://www.maudy.com.br/consultoria-de-seo/";
const laurware = "https://www.laurware.com.br/seo-para-ia";
const apareca = "https://aparecanochatgpt.com.br/agencia";
const zpDigital = "https://zpdigital.com.br/";
const brasilGeo = "https://brasilgeo.ai/v2/";
const neurowits = "https://geo.neurowits.com.br/";
const aCarioca = "https://www.acarioca.com.br/servicos/seo-para-ia/";
const flowup = "https://flowup.agency/consultoria-geo-aeo/";
const netlinks = "https://netlinks.com.br/geo/";
const jidu = "https://jidu.com.br/consultoria-de-geo-2/";
const rankia = "https://rankia.ia.br/";

export const geoMarketBenchmarkArticles: Record<string, Article> = {
  "como-mercado-brasileiro-vende-geo-search-ai": {
    slug: "como-mercado-brasileiro-vende-geo-search-ai",
    title: "Como o mercado brasileiro vende GEO e Search AI em 2026: benchmark de promessa, prazo e mensuração",
    metaTitle: "Como Consultorias GEO Vendem Search AI em 2026 | AUDITSEO",
    description:
      "Benchmark exploratório de 12 páginas brasileiras de GEO e SEO para IA: garantias, prazos, métricas, métodos e evidências públicas para comparar fornecedores com mais critério.",
    eyebrow: "BENCHMARK DE MERCADO · 12 PÁGINAS",
    publishedAt: "2026-09-08",
    updatedAt: "2026-09-08",
    readTime: "14 min",
    author: "Sidney Santos",
    authorUrl: "/autor/sidney-santos",
    directAnswer:
      "Em uma amostra exploratória de 12 páginas públicas de fornecedores de GEO/Search AI observadas em 8 de setembro de 2026, a comunicação do mercado varia bastante: 3 páginas usam linguagem explícita de garantia para presença/citação/recomendação em IA, 4 publicam algum prazo de resultado, 7 expõem um protocolo de mensuração suficientemente concreto e 4 apresentam método ou framework próprio nomeado. Esses números descrevem somente a amostra congelada; não são estimativas representativas de todo o mercado brasileiro nem avaliação de qualidade dos fornecedores.",
    takeaways: [
      "Promessa, prazo, método, mensuração e evidência são dimensões diferentes e devem ser avaliadas separadamente.",
      "3 de 12 páginas da amostra usam linguagem explícita de garantia para presença, citação ou recomendação em IA.",
      "4 de 12 publicam prazo associado a primeira visibilidade, menções ou resultado consolidado.",
      "7 de 12 descrevem um mecanismo de mensuração suficientemente concreto para ser auditado na página observada.",
      "4 de 12 apresentam um método, framework ou score proprietário nomeado.",
      "Ter framework próprio não prova resultado; e não ter framework nomeado não prova ausência de método operacional.",
      "O dataset e a metodologia foram congelados antes do artigo e permanecem públicos para revisão.",
    ],
    blocks: [
      { type: "heading", text: "Por que medir a comunicação do mercado — e não tentar eleger a melhor consultoria" },
      { type: "paragraph", text: "GEO e Search AI ainda são categorias comerciais recentes. O mesmo rótulo pode descrever uma sessão consultiva, uma auditoria, uma operação mensal, um software de monitoramento ou uma combinação de SEO, conteúdo, autoridade e mensuração. Para um comprador, comparar apenas o nome do serviço cria uma falsa equivalência." },
      { type: "paragraph", text: "Este estudo não avalia qualidade real da execução, satisfação de clientes ou causalidade. Ele responde uma pergunta mais simples e verificável: o que 12 páginas públicas do mercado brasileiro comunicavam sobre promessa, prazo, método, mensuração e evidência em 8 de setembro de 2026?" },
      { type: "callout", title: "O que este benchmark não é", text: "Não é ranking de agências. Não é auditoria de clientes dos fornecedores. Não é prova de que um claim é verdadeiro ou falso. É uma fotografia auditável da comunicação pública observada." },

      { type: "heading", text: "A amostra: 12 páginas encontradas em pesquisas atuais por GEO, SEO para IA e auditoria de visibilidade" },
      { type: "paragraph", text: "Foram observadas páginas públicas de AI SEO Brasil, Maudy, Laurware, Apareça no ChatGPT, ZP Digital, Brasil GEO, NeuroWits GEO, A Carioca, Flowup Agency, Netlinks, Jidu e RankIA. A AUDITSEO foi excluída para que o dataset descreva mercado externo, não a própria empresa." },
      { type: "paragraph", text: "A seleção é exploratória e orientada por descoberta em SERPs atuais; portanto não representa censo nem amostra probabilística. Se uma página mudar amanhã, a coleta de 2026-09-08 continua intacta e uma nova rodada recebe nova data." },
      { type: "list", items: [
        "snapshot congelado antes da redação do artigo",
        "uma linha por fornecedor/página na classificação agregada",
        "definições públicas para cada coluna",
        "ausência de informação classificada como não observada — nunca inferida",
        "nenhuma nota de qualidade geral atribuída aos fornecedores",
      ] },

      { type: "heading", text: "1. Garantia explícita apareceu em 3 das 12 páginas" },
      { type: "paragraph", text: "A classificação de garantia foi deliberadamente restritiva. Linguagem como ajudar, preparar, otimizar ou trabalhar para aumentar presença não foi tratada automaticamente como garantia. A coluna só recebe `yes` quando a página usa linguagem explícita de garantia para presença, citação ou recomendação em IA." },
      { type: "paragraph", text: "Nesse critério, 3 das 12 páginas observadas usam garantia explícita. Outras usam linguagem forte de resultado — por exemplo, colocar a marca na resposta ou fazer com que ela seja citada — mas permanecem separadas na análise por não utilizar o termo de garantia definido no protocolo." },
      { type: "callout", title: "Por que essa distinção importa", text: "Uma promessa comercial pode ser mais agressiva ou mais cautelosa sem que isso, sozinho, revele qualidade técnica. O comprador precisa perguntar como aquele resultado será medido e o que acontece se a plataforma variar." },

      { type: "heading", text: "2. Apenas duas páginas publicam alguma declaração explícita de não-garantia na amostra" },
      { type: "paragraph", text: "Duas das 12 páginas observadas apresentam alguma limitação pública explícita. Em uma delas, a ressalva está ligada à promessa de primeiro lugar no Google; em outra, a página declara não prometer citação ou posição em IA. Isso não significa que os demais fornecedores necessariamente garantam resultados — significa apenas que a limitação não foi observada de forma explícita na página capturada." },
      { type: "paragraph", text: "Para o comprador, a pergunta útil não é apenas 'vocês garantem?'. É: quais partes do processo vocês controlam, quais dependem de plataformas terceiras e como vocês documentam a diferença entre implementação, observação e resultado?" },

      { type: "heading", text: "3. Prazo de diagnóstico não é prazo de resultado" },
      { type: "paragraph", text: "A amostra contém ofertas que prometem diagnóstico em 48 horas, ferramenta com resposta em segundos e avaliações rápidas. Isso pode ser perfeitamente compatível com um bom serviço — desde que o comprador não confunda velocidade de coleta inicial com velocidade de mudança de visibilidade." },
      { type: "paragraph", text: "Quatro das 12 páginas publicam algum prazo associado a primeira visibilidade, menções ou resultado. Entre os exemplos observados estão faixas de 14–21 dias, 4–8 semanas, 30–60 dias e 3–6 meses para diferentes estágios. Esses prazos pertencem às páginas que os publicaram; este benchmark não os valida nem os transforma em média de mercado." },
      { type: "list", items: [
        "turnaround de diagnóstico: tempo para produzir uma leitura inicial",
        "baseline: momento em que a régua de comparação fica registrada",
        "primeiro sinal: primeira mudança observada em prompts ou citações",
        "resultado consolidado: efeito sustentado ao longo de múltiplas medições",
      ] },

      { type: "heading", text: "4. Mensuração é a dimensão em que o mercado já começa a amadurecer" },
      { type: "paragraph", text: "Sete das 12 páginas observadas descrevem algum protocolo de mensuração suficientemente concreto para classificação `yes`. A unidade muda: algumas usam conjuntos de prompts, outras Citation Rate, Mention Rate, share of voice, histórico por modelo, dashboards, comparação competitiva ou tráfego atribuído." },
      { type: "paragraph", text: "Isso é um avanço relevante porque GEO sem baseline tende a virar narrativa retrospectiva. Quando prompt set, modelos, data e repetição são definidos antes da implementação, o fornecedor e o cliente conseguem discutir mudança observada sem escolher apenas exemplos favoráveis depois." },
      { type: "callout", title: "Métrica não é causalidade", text: "Mesmo uma medição bem estruturada mostra mudança observada; ela não prova automaticamente que uma única implementação causou a mudança. Atualizações de modelo, novas fontes, concorrentes e variação de resposta continuam existindo." },

      { type: "heading", text: "5. Quatro páginas publicam método ou framework proprietário nomeado" },
      { type: "paragraph", text: "A amostra inclui métodos, arquiteturas e scores próprios. Nomear um método pode ser útil porque torna o processo mais comunicável e auditável. Mas o nome, sozinho, não transforma uma sequência de tarefas em evidência." },
      { type: "paragraph", text: "O comprador deveria pedir que qualquer método proprietário seja decomposto: quais dados entram, qual decisão cada etapa produz, quais saídas são verificáveis, quais métricas mudariam uma prioridade e quais partes são hipótese do fornecedor." },
      { type: "list", items: [
        "método nomeado ajuda a entender processo",
        "protocolo de mensuração ajuda a entender observação",
        "case ajuda a entender aplicação em contexto",
        "fonte pública ajuda a verificar afirmações externas",
        "nenhum desses elementos substitui os demais",
      ] },

      { type: "heading", text: "6. Evidência pública não é uma categoria binária" },
      { type: "paragraph", text: "Durante a coleta apareceram links públicos de conversas, tabelas de resultado, dashboards, cases, depoimentos, logos de clientes, histórico profissional e benchmarks externos. Colocar tudo na mesma coluna 'tem prova / não tem prova' apagaria diferenças relevantes." },
      { type: "paragraph", text: "Por isso o dataset usa `yes`, `partial` e `no` e mantém notas. Uma conversa pública reproduzível é um tipo de evidência. Um depoimento é outro. Um case com baseline, datas e escopo é outro. Nenhum deve ser automaticamente tratado como equivalente." },

      { type: "heading", text: "Como usar este benchmark para contratar melhor" },
      { type: "list", items: [
        "peça a definição exata do resultado vendido: menção, citação, recomendação, referral ou lead",
        "se houver prazo, pergunte se é prazo de diagnóstico, primeiro sinal ou resultado consolidado",
        "peça o prompt set e a regra de repetição antes da implementação",
        "pergunte como respostas variáveis entre sessões/modelos entram no relatório",
        "se houver método proprietário, peça entradas, decisões e saídas de cada etapa",
        "peça um exemplo de evidência que você mesmo consiga revisar",
        "pergunte quais limitações a consultoria documenta antes da assinatura",
        "avalie se o trabalho continua sustentado por SEO, conteúdo, entidade e fontes verificáveis",
      ] },
      { type: "callout", title: "Uma régua que também vale para a AUDITSEO", text: "A AUDITSEO publica seus frameworks, baseline, prompt sets e limitações justamente para que o comprador possa aplicar a mesma cobrança a nós. Um método que só funciona quando ninguém pergunta como foi medido não é uma boa base de decisão." },

      { type: "heading", text: "Dataset público e reprodução" },
      { type: "paragraph", text: "O CSV congelado da coleta de 2026-09-08 está disponível publicamente em /dados/benchmark-comunicacao-geo-search-ai-2026-09-08.csv. A metodologia versionada define as regras usadas para garantia, prazo, mensuração, método e evidência. Futuras rodadas terão novos arquivos e novas datas; o snapshot original não será reescrito para acompanhar mudanças posteriores nas páginas." },
      { type: "paragraph", text: "Esse desenho transforma o estudo em histórico. Se o mercado amadurecer, poderemos observar se garantias diminuem, mensuração fica mais explícita, métodos se tornam mais reproduzíveis e evidências públicas ganham contexto — sem alterar retroativamente o ponto de partida." },

      { type: "heading", text: "Limitações" },
      { type: "list", items: [
        "amostra pequena e exploratória, não probabilística",
        "classificação baseada na comunicação pública observada na data do snapshot",
        "ausência na página não prova ausência operacional no fornecedor",
        "o estudo não valida os resultados alegados",
        "o estudo não mede satisfação de clientes nem qualidade de execução",
        "mudanças posteriores nas páginas exigem nova coleta, não edição do passado",
      ] },
    ],
    sources: [
      { label: "AI SEO Brasil — página pública observada", url: aiSeoBrasil, note: "Fonte da classificação de promessa, diagnóstico, prazo e monitoramento observados na coleta." },
      { label: "Maudy — Consultoria SEO, GEO e IAO", url: maudy, note: "Fonte da classificação de posicionamento e limitação pública sobre promessa de ranking." },
      { label: "Laurware — SEO para IA", url: laurware, note: "Fonte da classificação de preparação, entidades, schema e conteúdo estruturado." },
      { label: "Apareça no ChatGPT — assessoria para empresas", url: apareca, note: "Fonte do protocolo público de prompts/modelos, prazo de primeiro sinal e evidências públicas observadas." },
      { label: "ZP Digital — SEO, GEO e IA", url: zpDigital, note: "Fonte do posicionamento comercial e histórico profissional observado." },
      { label: "Brasil GEO — plataforma/consultoria", url: brasilGeo, note: "Fonte da linguagem de garantia, diagnóstico, Score 6D/share of voice e evidências/depoimentos públicos observados." },
      { label: "NeuroWits GEO", url: neurowits, note: "Fonte da linguagem de garantia, diagnóstico, relatórios e metodologia proprietária observada." },
      { label: "A Carioca — SEO para IA", url: aCarioca, note: "Fonte das sete entregas, diagnóstico por perguntas e monitoramento de citações." },
      { label: "Flowup — Consultoria GEO e AEO", url: flowup, note: "Fonte da declaração de não-garantia, Método B.I.N.A., medição e evidências públicas observadas." },
      { label: "Netlinks — GEO", url: netlinks, note: "Fonte do baseline por perguntas, auditoria de entidade e monitoramento por modelo observado." },
      { label: "Jidu — Consultoria de GEO", url: jidu, note: "Fonte de prazos públicos, Método CITAR e métricas Citation Rate, Mention Rate e CTS observadas." },
      { label: "RankIA — Agência SEO e GEO", url: rankia, note: "Fonte da garantia explícita, prazos e baseline/verificador público observados." },
      { label: "Dataset congelado AUDITSEO", url: "/dados/benchmark-comunicacao-geo-search-ai-2026-09-08.csv", note: "CSV público com as classificações do snapshot de 2026-09-08." },
    ],
    relatedServices: [["Auditoria GEO & Search AI", "/solucoes/geo-ia-readiness"], ["Consultoria de Search AI + GEO", "/geo-ia"], ["Intent Content Architecture", "/solucoes/conteudo-por-intencao"]],
  },
};

export const geoMarketBenchmarkArticleList = Object.values(geoMarketBenchmarkArticles);
