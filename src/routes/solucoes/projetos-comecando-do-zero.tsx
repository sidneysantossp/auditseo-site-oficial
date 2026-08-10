import { useEffect, useState } from "react";
import { createFileRoute } from '@tanstack/react-router';
import { 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Search, 
  Layers3, 
  Sparkles, 
  Network, 
  ShieldCheck, 
  FileText,
  AlertTriangle,
  ChevronRight,
  Bot,
  Home
} from "lucide-react";
import SiteFooter from "../../components/SiteFooter";

export const Route = createFileRoute('/solucoes/projetos-comecando-do-zero')({
  head: () => ({
    meta: [
      { title: "Search Foundation | Inteligência para Lançamentos | AUDITSEO" },
      {
        name: "description",
        content:
          "Evite que seu novo site, marca ou serviço nasça com limitações que levarão meses para serem corrigidas. Estruturamos a fundação estratégica de busca para garantir visibilidade e autoridade desde o primeiro dia.",
      },
      {
        property: "og:title",
        content: "Search Foundation | Inteligência para Lançamentos | AUDITSEO",
      },
      {
        property: "og:description",
        content:
          "Evite que seu novo site, marca ou serviço nasça com limitações que levarão meses para serem corrigidas. Estruturamos a fundação estratégica de busca para garantir visibilidade e autoridade desde o primeiro dia.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.auditseo.com.br/solucoes/projetos-comecando-do-zero" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Search Foundation | Inteligência para Lançamentos | AUDITSEO",
      },
      {
        name: "twitter:description",
        content:
          "Evite que seu novo site, marca ou serviço nasça com limitações que levarão meses para serem corrigidas. Estruturamos a fundação estratégica de busca para garantir visibilidade e autoridade desde o primeiro dia.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.auditseo.com.br/solucoes/projetos-comecando-do-zero" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://www.auditseo.com.br/solucoes/projetos-comecando-do-zero#webpage",
          "url": "https://www.auditseo.com.br/solucoes/projetos-comecando-do-zero",
          "name": "Search Foundation | Inteligência para Lançamentos | AUDITSEO",
          "description": "Evite que seu novo site, marca ou serviço nasça com limitações que levarão meses para serem corrigidas. Estruturamos a fundação estratégica de busca para garantir visibilidade e autoridade desde o primeiro dia."
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.auditseo.com.br/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Soluções",
              "item": "https://www.auditseo.com.br/solucoes"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Search Foundation",
              "item": "https://www.auditseo.com.br/solucoes/projetos-comecando-do-zero"
            }
          ]
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Search Foundation",
          "provider": {
            "@type": "ProfessionalService",
            "@id": "https://www.auditseo.com.br/#organization"
          },
          "description": "Consultoria estratégica para novos sites, marcas ou serviços digitais.",
          "areaServed": "BR",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Entregas Search Foundation",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mapa de Entidades e Autoridade" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Arquitetura Semântica de URLs" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Estrutura de Dados JSON-LD" } }
            ]
          }
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Quando é o momento ideal para contratar?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "O ideal é no início da fase de planejamento, antes que o design e a arquitetura sejam finalizados."
              }
            },
            {
              "@type": "Question",
              "name": "Vocês fazem o site?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Não. Nós fornecemos a inteligência e as diretrizes estratégicas para que sua equipe ou agência de tecnologia execute."
              }
            },
            {
              "@type": "Question",
              "name": "Quanto tempo dura a consultoria?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "O projeto Foundation costuma durar entre 45 a 90 dias, dependendo da complexidade do lançamento."
              }
            }
          ]
        })
      }
    ],
  }),
  component: SearchFoundationPage
});

function SectionHeader({
  eyebrow,
  title,
  text,
  dark = true,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto items-center text-center" : "items-start"} flex max-w-4xl flex-col`}>
      {eyebrow && (
        <span className={`mb-4 font-mono text-[12px] font-bold uppercase tracking-[0.16em] ${dark ? "text-[#b28453]" : "text-[#6d5132]"}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-[34px] sm:text-[44px] md:text-[56px] font-bold leading-[1.08] ${dark ? "text-[#f8f8f8]" : "text-[#11100f]"}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-6 text-base md:text-lg leading-[1.7] ${dark ? "text-[#f8f8f8]/70" : "text-[#11100f]/72"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

function PrimaryButton({ children, onClick, dark = true }: { children: string; onClick: () => void; dark?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
        dark
          ? "bg-[#b28453] text-white hover:bg-[#e0d3c3] hover:text-[#11100f]"
          : "bg-[#11100f] text-white hover:bg-[#b28453]"
      }`}
    >
      {children}
      <ArrowRight size={16} />
    </button>
  );
}

function SearchFoundationPage() {
  const navigate = (id: string) => {
    // Basic navigation simulation for the placeholder
    if (id === 'diagnostico') {
      window.location.href = '/diagnostico';
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#11100f] text-[#f8f8f8] selection:bg-[#b28453] selection:text-white">
      {/* 0. BREADCRUMBS */}
      <nav className="absolute top-[102px] left-0 right-0 z-20">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#f8f8f8]/40">
            <a href="/" className="hover:text-[#b28453] transition-colors flex items-center gap-1">
              <Home size={12} />
              Início
            </a>
            <ChevronRight size={12} />
            <a href="/solucoes" className="hover:text-[#b28453] transition-colors">
              Soluções
            </a>
            <ChevronRight size={12} />
            <span className="text-[#b28453]">Search Foundation</span>
          </div>
        </div>
      </nav>

      {/* 1. HERO */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden pb-16 pt-[120px] md:pt-[140px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(178,132,83,0.15),transparent_40%)]" />
        <div className="container relative z-10 mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="max-w-4xl">
            <span className="mb-5 inline-block font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">
              SOLUÇÃO: SEARCH FOUNDATION
            </span>
            <h1 className="font-display text-[clamp(44px,5vw,82px)] font-bold leading-[1.02] tracking-[-0.04em]">
              Construa a base correta antes de lançar seu projeto.
            </h1>
            <p className="mt-8 max-w-[720px] text-[clamp(18px,1.3vw,22px)] leading-[1.55] text-[#f8f8f8]/76">
              Evite que seu novo site, marca ou serviço nasça com limitações que levarão meses para serem corrigidas. Estruturamos a fundação estratégica de busca para garantir visibilidade e autoridade desde o primeiro dia.
            </p>
            <div className="mt-11 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton onClick={() => navigate('diagnostico')}>Planejar meu novo projeto</PrimaryButton>
              <button className="rounded-full border border-[#b28453]/45 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10">
                Falar com um especialista
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. O RISCO DE NASCER ERRADO */}
      <section className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <SectionHeader 
              dark={false}
              eyebrow="O RISCO DO PONTO ZERO"
              title="O custo de corrigir é sempre maior que o de planejar."
              text="Muitos projetos digitais fracassam em visibilidade orgânica não por falta de conteúdo, mas porque foram construídos sobre uma base técnica e semântica falha."
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { title: "Arquitetura falha", desc: "Estruturas que dificultam a leitura de buscadores e usuários." },
                { title: "Entidade confusa", desc: "Falta de clareza sobre quem é a empresa e o que ela faz." },
                { title: "Gaps de intenção", desc: "Páginas que não respondem ao que o público realmente busca." },
                { title: "Limitação técnica", desc: "Erros de indexação e performance que travam o crescimento." }
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#11100f]/10 bg-white/40 p-6">
                  <h3 className="font-display text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#11100f]/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. A ABORDAGEM SEARCH FOUNDATION */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader 
            center
            eyebrow="NOSSA ABORDAGEM"
            title="Inteligência central para o seu lançamento."
            text="A Search Foundation não é apenas SEO. É a coordenação entre tecnologia, conteúdo, autoridade e objetivos de negócio."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              { icon: <Search className="text-[#b28453]" />, title: "Leitura de Intenção", desc: "Mapeamos como seu público busca antes de você decidir o que escrever." },
              { icon: <Layers3 className="text-[#b28453]" />, title: "Arquitetura Orgânica", desc: "Projetamos a estrutura de URLs e taxonomia para máxima eficiência de busca." },
              { icon: <Bot className="text-[#b28453]" />, title: "IA & GEO Readiness", desc: "Estruturamos os sinais de entidade para que a marca seja compreendida por IAs." }
            ].map((box, i) => (
              <div key={i} className="rounded-2xl border border-[#b28453]/20 bg-[#171614] p-8 transition-all hover:border-[#b28453]">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#b28453]/10">
                  {box.icon}
                </div>
                <h3 className="font-display text-2xl font-bold">{box.title}</h3>
                <p className="mt-4 text-[#f8f8f8]/70 leading-relaxed text-sm md:text-base">{box.desc}</p>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <a href="/metodo-signal" className="text-xs font-bold text-[#b28453] hover:text-[#e0d3c3] flex items-center gap-2">
                    Ver como aplicamos no S.I.G.N.A.L <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. O QUE ENTREGAMOS */}
      <section className="bg-[#181716] py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader 
                eyebrow="ENTREGAS ESTRATÉGICAS"
                title="O que o seu projeto recebe."
                text="Documentação técnica e estratégica completa para guiar o desenvolvimento e a criação de conteúdo."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Mapa de Entidades e Autoridade",
                  "Arquitetura Semântica de URLs",
                  "Diretrizes de Conteúdo por Intenção",
                  "Estrutura de Dados JSON-LD",
                  "Plano de Autoridade Local (se aplicável)",
                  "Checklist de Lançamento Técnico",
                  "Monitoramento Inicial de Indexação",
                  "Roadmap de Evolução Pós-Lançamento"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg bg-[#11100f] p-4 border border-white/5">
                    <CheckCircle2 size={18} className="text-[#b28453] shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PARA QUEM É ESTA SOLUÇÃO */}
      <section className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1120px] px-6 text-center xl:px-12">
          <SectionHeader 
            dark={false}
            center
            eyebrow="PERFIL DO PROJETO"
            title="Esta solução é ideal para..."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Lançamento de novas marcas ou sites corporativos",
              "Novas unidades de negócio ou serviços",
              "Redesign estrutural completo (rebranding)",
              "Expansão para novos mercados ou países",
              "Projetos que buscam autoridade desde o início",
              "Empresas que não querem acumular dívida técnica"
            ].map((text) => (
              <div key={text} className="flex flex-col items-center">
                <div className="mb-4 h-1.5 w-8 bg-[#b28453]" />
                <p className="text-lg font-bold leading-tight">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROCESSO S.I.G.N.A.L. (Mapeado para Foundation) */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader 
            eyebrow="METODOLOGIA"
            title="Como aplicamos o método no seu lançamento."
          />
          <div className="mt-16 space-y-12">
            {[
              { s: "S", t: "Search Diagnosis", d: "Avaliamos o nicho, concorrentes e o potencial de busca antes de qualquer código ser escrito." },
              { s: "I", t: "Intent Mapping", d: "Mapeamos as dúvidas e caminhos que os clientes percorrem antes da decisão." },
              { s: "G", t: "GEO Readiness", d: "Preparamos os sinais para que a nova marca seja recomendada por IAs." },
              { s: "N", t: "Narrative & Entity", d: "Garantimos consistência entre o que a empresa diz e o que os buscadores entendem." }
            ].map((step, i) => (
              <div key={step.s} className="flex gap-8 md:gap-12">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#b28453] font-display text-3xl font-bold">
                  {step.s}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold">{step.t}</h3>
                  <p className="mt-2 max-w-2xl text-[#f8f8f8]/70">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTEGRAÇÃO COM EQUIPES */}
      <section className="bg-[#181716] py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="rounded-[32px] bg-[linear-gradient(145deg,rgba(178,132,83,0.1),transparent)] p-8 md:p-16 border border-[#b28453]/20">
            <div className="max-w-3xl">
              <h2 className="font-display text-[32px] md:text-[48px] font-bold leading-tight">
                Trabalhamos em conjunto com seus desenvolvedores e designers.
              </h2>
              <p className="mt-6 text-lg text-[#f8f8f8]/70 leading-relaxed">
                A AUDITSEO não substitui sua agência de desenvolvimento ou design. Nós atuamos como a inteligência de busca que fornece as diretrizes para que eles construam o projeto com a base técnica e estratégica correta. Embora não desenvolvamos o código do site diretamente, nossa consultoria entra na fase de concepção, antes do desenvolvimento, para estruturar arquitetura, entidades e requisitos.
              </p>
              <div className="mt-10 flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#b28453]" />
                  <span className="font-mono text-xs uppercase tracking-wider">Diretrizes Tech</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#b28453]" />
                  <span className="font-mono text-xs uppercase tracking-wider">Homologação de Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#b28453]" />
                  <span className="font-mono text-xs uppercase tracking-wider">Briefings de Conteúdo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ ESPECÍFICO */}
      <section className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader 
            dark={false}
            center
            eyebrow="SUPORTE"
            title="Dúvidas comuns sobre lançamentos."
          />
          <div className="mt-16 mx-auto max-w-3xl space-y-6">
            {[
              { q: "Quando é o momento ideal para contratar?", a: "O ideal é no início da fase de planejamento, antes que o design e a arquitetura sejam finalizados." },
              { q: "Vocês fazem o site?", a: "Não. Nós fornecemos a inteligência e as diretrizes estratégicas para que sua equipe ou agência de tecnologia execute." },
              { q: "Quanto tempo dura a consultoria?", a: "O projeto Foundation costuma durar entre 45 a 90 dias, dependendo da complexidade do lançamento. Ele foca especificamente na base, sendo um processo distinto da Migração SEO (que foca na proteção de ativos já existentes)." }
            ].map((item) => (
              <div key={item.q} className="rounded-xl border border-[#11100f]/10 bg-white/30 p-6">
                <h4 className="font-bold">{item.q}</h4>
                <p className="mt-3 text-sm text-[#11100f]/70 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTAs FINAIS */}
      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 text-center xl:px-12">
          <h2 className="font-display text-[36px] md:text-[54px] font-bold leading-tight">
            Não deixe seu projeto ao acaso.
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-[#f8f8f8]/70">
            Comece com a base que sua empresa precisa para dominar os buscadores e as IAs generativas.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <PrimaryButton onClick={() => navigate('diagnostico')}>Solicitar avaliação estratégica</PrimaryButton>
            <button 
              onClick={() => window.location.href = '/solucoes'}
              className="rounded-full border border-[#b28453]/45 px-8 py-4 font-bold transition-all hover:bg-[#b28453]/10"
            >
              Conhecer outras soluções
            </button>
          </div>
        </div>
      </section>

      <SiteFooter onNavigate={navigate} />
    </main>
  );
}
