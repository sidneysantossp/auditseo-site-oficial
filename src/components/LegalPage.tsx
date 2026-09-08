import Header from "./Header";
import SiteFooter from "./SiteFooter";

type LegalKind = "privacy" | "terms";

type LegalSection = {
  title: string;
  text?: string;
  items?: string[];
};

const routeByNav: Record<string, string> = {
  inicio: "/",
  signal: "/metodo-signal",
  solucoes: "/solucoes",
  conteudo: "/blog",
  diagnostico: "/diagnostico",
  parceria: "/parceria",
  "geo-ia": "/geo-ia",
};

const PRIVACY_SECTIONS: LegalSection[] = [
  {
    title: "1. Escopo desta política",
    text: "Esta Política de Privacidade explica como a AUDITSEO trata informações fornecidas por visitantes, empresas, profissionais e potenciais clientes ao utilizar o site, solicitar uma avaliação, concluir um diagnóstico, assinar conteúdos ou entrar em contato por nossos canais.",
  },
  {
    title: "2. Informações que podemos coletar",
    items: [
      "dados de contato, como nome, e-mail e telefone ou WhatsApp;",
      "informações profissionais e empresariais, como empresa, site, faixa de faturamento informada e contexto do projeto;",
      "respostas e contexto enviados no diagnóstico estratégico, inclusive a origem de descoberta quando o próprio visitante opta por informá-la;",
      "e-mail informado voluntariamente para receber conteúdos e insights da AUDITSEO;",
      "dados de atribuição comercial, como página de entrada, referrer, parâmetros UTM e identificadores de lead/campanha quando presentes na URL;",
      "dados técnicos básicos de navegação e analytics, quando essas ferramentas estiverem habilitadas.",
    ],
  },
  {
    title: "3. Como usamos essas informações",
    items: [
      "responder solicitações e avaliar o contexto de uma possível contratação;",
      "preparar conversas, diagnósticos e próximos passos relacionados aos serviços da AUDITSEO;",
      "enviar conteúdos quando o usuário se inscreve voluntariamente na newsletter ou em comunicações equivalentes;",
      "medir a origem de leads e a efetividade de campanhas, inclusive campanhas de prospecção;",
      "melhorar a experiência, a segurança, o conteúdo e os processos comerciais do site;",
      "cumprir obrigações legais e exercer direitos quando aplicável.",
    ],
  },
  {
    title: "4. Bases e critérios de tratamento",
    text: "O tratamento pode ocorrer, conforme o contexto, a partir de consentimento, medidas solicitadas pelo próprio titular antes de uma contratação, interesses legítimos relacionados à operação comercial e segurança, ou obrigações legais. A AUDITSEO procura limitar o uso ao que seja necessário e compatível com a finalidade informada.",
  },
  {
    title: "5. Ferramentas e operadores",
    text: "As informações podem ser processadas por provedores necessários à operação do site e do relacionamento comercial, como hospedagem, entrega de e-mail, webhooks, CRM/SDR, formulários e analytics quando habilitados. Esses provedores recebem apenas os dados necessários para a respectiva função. A AUDITSEO não vende dados pessoais.",
  },
  {
    title: "6. Leads, campanhas e atribuição",
    text: "Quando um visitante chega ao site por uma campanha ou por outro canal de descoberta, podemos registrar parâmetros de origem, campanha, conteúdo, termo, referrer, página de entrada e identificadores técnicos de lead/campanha presentes na URL. Para diferenciar o primeiro contato da página em que a conversão ocorreu, a primeira origem da sessão pode ser mantida temporariamente no armazenamento de sessão do navegador (sessionStorage) e enviada somente quando o visitante solicita contato ou diagnóstico. No diagnóstico, o visitante também pode optar por declarar como conheceu a AUDITSEO, por exemplo por Google, ChatGPT, Gemini, Perplexity, LinkedIn, indicação ou outro canal. A origem declarada é tratada separadamente dos sinais técnicos de atribuição. O registro de sessão é limitado à sessão do navegador e não é usado, por si só, como identificador persistente do usuário. Esses dados são usados para relacionar a origem do contato ao diagnóstico, reunião, proposta e demais etapas comerciais, sem alterar o conteúdo informado pelo titular.",
  },
  {
    title: "7. Newsletter e comunicações",
    text: "O e-mail da newsletter é enviado voluntariamente pelo usuário. A confirmação de inscrição só é exibida quando o site recebe confirmação de entrega do cadastro ao canal operacional configurado. O titular pode solicitar interrupção das comunicações e exclusão do cadastro pelo e-mail contato@auditseo.com.br.",
  },
  {
    title: "8. Retenção e segurança",
    text: "Mantemos informações pelo período necessário para as finalidades descritas, obrigações legais, prevenção de abuso e exercício de direitos. Adotamos medidas razoáveis de segurança compatíveis com a operação, sem prometer segurança absoluta.",
  },
  {
    title: "9. Direitos do titular",
    text: "O titular pode solicitar informações, correção, atualização, eliminação quando cabível ou esclarecimentos sobre o tratamento de seus dados. Solicitações devem ser enviadas para contato@auditseo.com.br.",
  },
  {
    title: "10. Atualizações e contato",
    text: "Esta política pode ser atualizada para refletir mudanças no site, nas ferramentas ou nos processos operacionais. Dúvidas sobre privacidade podem ser encaminhadas para contato@auditseo.com.br.",
  },
];

const TERMS_SECTIONS: LegalSection[] = [
  {
    title: "1. Aceitação dos termos",
    text: "Ao acessar e utilizar o site da AUDITSEO, o usuário concorda com estes Termos de Uso e com a Política de Privacidade aplicável aos dados fornecidos nos formulários e canais de contato.",
  },
  {
    title: "2. Finalidade do site",
    text: "O site possui finalidade institucional, informativa e comercial. Ele apresenta a consultoria, o método S.I.G.N.A.L., conteúdos, diagnósticos, soluções e canais de contato voltados principalmente a empresas e profissionais interessados em inteligência de busca, SEO, GEO e autoridade de entidade.",
  },
  {
    title: "3. Conteúdos e diagnósticos",
    text: "Conteúdos, guias e diagnósticos publicados pela AUDITSEO têm caráter informativo e estratégico. Leituras instantâneas ou questionários não substituem uma auditoria completa baseada em dados, histórico, concorrência, implementação e contexto específico do negócio.",
  },
  {
    title: "4. Ausência de garantia de resultado",
    text: "A AUDITSEO não garante posições, volume de tráfego, receita, indexação, citações, menções ou recomendações por Google, ChatGPT, Gemini, Perplexity ou qualquer plataforma de terceiros. Resultados dependem de múltiplos fatores fora do controle de uma consultoria.",
  },
  {
    title: "5. Formulários, newsletter e contato",
    text: "O usuário deve fornecer informações verdadeiras e pertinentes. Dados enviados em solicitações, diagnósticos e newsletter podem ser processados para retorno comercial, avaliação do cenário, atribuição de campanha e comunicações relacionadas ao contexto informado, conforme descrito na Política de Privacidade.",
  },
  {
    title: "6. Campanhas e links identificados",
    text: "Links enviados em campanhas podem conter parâmetros de atribuição, como UTM ou identificadores de campanha/lead. Esses parâmetros servem para medir origem e desempenho comercial e não representam garantia de oferta, condição ou resultado individual.",
  },
  {
    title: "7. Propriedade intelectual",
    text: "Textos, identidade visual, nomes, metodologia, estruturas, materiais, relatórios e demais ativos produzidos pela AUDITSEO são protegidos nos limites aplicáveis, salvo quando houver indicação expressa de autoria ou licença de terceiros.",
  },
  {
    title: "8. Serviços e ferramentas de terceiros",
    text: "O site pode utilizar ou direcionar para serviços de terceiros, inclusive hospedagem, e-mail, WhatsApp, analytics e outras plataformas. A disponibilidade e as políticas desses serviços são de responsabilidade dos respectivos fornecedores.",
  },
  {
    title: "9. Limitação de responsabilidade",
    text: "Embora busquemos manter informações úteis e o site operacional, não garantimos ausência permanente de erros, indisponibilidades ou mudanças em plataformas externas. O uso das informações do site deve considerar o contexto e a necessidade de validação técnica específica.",
  },
  {
    title: "10. Alterações e contato",
    text: "Estes termos podem ser atualizados para refletir mudanças na operação. Dúvidas podem ser enviadas para contato@auditseo.com.br.",
  },
];

function navigateTo(sectionId: string) {
  if (typeof window === "undefined") return;
  window.location.assign(routeByNav[sectionId] || "/");
}

export default function LegalPage({ kind }: { kind: LegalKind }) {
  const privacy = kind === "privacy";
  const sections = privacy ? PRIVACY_SECTIONS : TERMS_SECTIONS;

  return (
    <div className="min-h-screen bg-[#11100f] text-[#f8f8f8]">
      <Header onNavClick={navigateTo} activeSection="" />
      <main>
        <section className="border-b border-[#b28453]/12 px-6 pb-20 pt-[142px] md:pb-24 md:pt-[166px] xl:px-12">
          <div className="mx-auto max-w-[1120px]">
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">INSTITUCIONAL</span>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.03] tracking-[-0.04em] md:text-7xl">
              {privacy ? "Política de Privacidade" : "Termos de Uso"}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-[1.7] text-[#f8f8f8]/70 md:text-xl">
              {privacy
                ? "Como a AUDITSEO trata informações fornecidas em formulários, diagnósticos, newsletter, campanhas e canais de contato."
                : "Condições de uso do site, seus conteúdos, diagnósticos, formulários, newsletter e canais comerciais."}
            </p>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-[#8c8275]">Atualizado em 8 de setembro de 2026</p>
          </div>
        </section>

        <section className="bg-[#e0d3c3] px-6 py-20 text-[#11100f] md:py-24 xl:px-12">
          <div className="mx-auto grid max-w-[1120px] gap-6">
            {sections.map((section) => (
              <article key={section.title} className="rounded-[22px] border border-[#11100f]/10 bg-[#f4eee5] p-7 shadow-[0_18px_50px_rgba(17,16,15,0.07)] md:p-9">
                <h2 className="font-display text-2xl font-bold leading-[1.2] md:text-3xl">{section.title}</h2>
                {section.text ? <p className="mt-5 max-w-4xl text-[15px] leading-[1.75] text-[#2a2927] md:text-base">{section.text}</p> : null}
                {section.items ? (
                  <ul className="mt-5 grid gap-3 text-[15px] leading-[1.7] text-[#2a2927] md:text-base">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b28453]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter onNavigate={navigateTo} />
    </div>
  );
}
