import { Search, ClipboardList, Compass, Users, Cpu, MapPin, ArrowRight } from "lucide-react";

interface SolutionsSectionProps {
  onCtaClick: (targetId: string) => void;
}

export default function SolutionsSection({ onCtaClick }: SolutionsSectionProps) {
  const solutions = [
    {
      id: "sol-1",
      icon: <Search className="w-6 h-6 text-[#b28453]" />,
      title: "Auditoria SEO/GEO White-Label",
      description: "Diagnóstico completo de visibilidade para sua agência de marketing apresentar ao cliente final direto sob a própria marca. Inclui análise semântica técnica profunda, conteúdo, competidores, score de menções em IA e plano consultivo de curto prazo.",
      ideal: "Fechar novos contratos recorrentes, renovar contas com baixa percepção de valor e justificar expansão comercial de escopo das contas atuais."
    },
    {
      id: "sol-2",
      icon: <ClipboardList className="w-6 h-6 text-[#b28453]" />,
      title: "Plano Estratégico Orgânico 90 dias",
      description: "Roadmap prático para organizar as próximas ações de SEO, otimizações estruturais, produção de conteúdo estratégico e visibilidade em ambientes generativos de IA.",
      ideal: "Transformar auditorias complexas e insights em execução prática clara focada em resultados no curto prazo."
    },
    {
      id: "sol-3",
      icon: <Compass className="w-6 h-6 text-[#b28453]" />,
      title: "Consultoria Estratégica",
      description: "Apoio consultivo recorrente para priorização de tarefas de inteligência de busca, revisão de entregas de conteúdo, homologação técnica e direcionamento executivo do time operacional.",
      ideal: "Agências que já possuem equipe de redatores ou programadores, mas carecem de know-how especializado sênior de busca."
    },
    {
      id: "sol-4",
      icon: <Users className="w-6 h-6 text-[#b28453]" />,
      title: "Squad SEO para Agências",
      description: "A AUDITSEO atua diretamente nos bastidores como uma extensão especializada do time de busca da agência, apoiando o planejamento tático mensal, análises avançadas de indexação, sitemap e monitoramento analítico estrutural.",
      ideal: "Agências que buscam comercializar projetos orgânicos mais estratégicos sem ampliar a estrutura interna."
    },
    {
      id: "sol-5",
      icon: <Cpu className="w-6 h-6 text-[#b28453]" />,
      title: "Estratégia de autoridade de entidade (IA e GEO)",
      description: "Estratégia para organizar clareza de entidade, dados estruturados, conteúdo semântico, reputação e sinais de confiança que fortalecem a presença orgânica da marca em buscadores tradicionais e ambientes de IA.",
      ideal: "Clientes high-ticket que dependem de confiança, autoridade e validação estratégica robusta antes da decisão de compra."
    },
    {
      id: "sol-6",
      icon: <MapPin className="w-6 h-6 text-[#b28453]" />,
      title: "SEO Local para Carteira de Clientes",
      description: "Estratégias estruturadas focadas em negócios locais físico-geográficos: ranqueamento em mapas, auditorias cadastrais NAP em mais de 30 canais coletivos, otimização de avaliações ricas, páginas de serviços hiper-locais e rotas.",
      ideal: "Contas de Clínicas de Saúde, Escritórios Jurídicos, Estética, Redes de Franquias e Prestadores de Serviços Locais."
    }
  ];

  return (
    <section
      id="solucoes"
      className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32"
    >
      <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
        
        {/* HEADER BLOCK */}
        <div className="text-center flex flex-col items-center mb-16 md:mb-24">
          <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">
            PORTFÓLIO DE PRODUTOS E ENTREGAS 
          </span>
          <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#f8f8f8] leading-[1.1] tracking-tight max-w-4xl">
            Soluções criadas para fortalecer a entrega da sua agência
          </h2>
          <div className="w-[140px] h-[4px] bg-[#b28453] mt-6 mb-8" />
          <p className="text-[#c9c9c9] text-base md:text-lg lg:text-xl font-normal max-w-3xl leading-[1.6]">
            Da demanda pontual ao apoio recorrente de inteligência, a AUDITSEO molda-se ao estágio operacional e maturidade de cada agência de marketing digital parceira.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mb-16">
          {solutions.map((sol) => (
            <div
              id={`solution-card-${sol.id}`}
              key={sol.id}
              className="bg-[#181716] border border-[#b28453]/25 p-8 rounded-2xl transition-all duration-300 hover:border-[#b28453] hover:-translate-y-1.5 flex flex-col justify-between group shadow-lg shadow-black/40"
            >
              <div>
                <div className="mb-6 p-3 bg-[#b28453]/10 rounded-xl border border-[#b28453]/15 w-fit group-hover:bg-[#b28453]/20 group-hover:border-[#b28453]/40 transition-colors">
                  {sol.icon}
                </div>
                
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#f8f8f8] mb-4 group-hover:text-[#b28453] transition-colors">
                  {sol.title}
                </h3>
                
                <p className="text-[#c9c9c9] text-sm leading-[1.6] mb-6">
                  {sol.description}
                </p>
              </div>

              <div className="border-t border-white/5 pt-4 mt-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#b28453] font-bold block mb-1">
                  Ideal para:
                </span>
                <p className="text-[#e0d3c3] text-xs leading-[1.5] leading-relaxed">
                  {sol.ideal}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM REDIRECT ACTION */}
        <div className="text-center">
          <button
            id="solutions-cta"
            onClick={() => onCtaClick("diagnostico")}
            className="border-2 border-[#b28453] text-[#f8f8f8] px-8 py-4 rounded-full text-base font-bold tracking-wide transition-all duration-300 hover:bg-[#b28453] hover:text-white flex items-center space-x-2 mx-auto cursor-pointer"
          >
            <span>Encontrar o melhor modelo para minha agência</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
