import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { AccordionItem } from "../types";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqItems: AccordionItem[] = [
    {
      id: "faq-1",
      question: "A AUDITSEO vai disputar meus clientes?",
      answer: "Não. A AUDITSEO atua estritamente como parceira estratégica dos bastidores da sua agência. Toda a gestão de conta, atendimento comercial, faturamento e relacionamento continuam sendo de exclusividade sua. Nós não aparecemos nem disputamos espaço."
    },
    {
      id: "faq-2",
      question: "A parceria pode ser white-label?",
      answer: "Sim. Podemos entregar todos os diagnósticos técnicos, estudos de intenção, roadmaps de 90 dias e análises de Search Intelligence com a identidade visual da sua agência (marca própria), permitindo que você revenda a serviço com sua margem usual."
    },
    {
      id: "faq-3",
      question: "Minha agência já tem equipe de conteúdo. Ainda faz sentido?",
      answer: "Faz total sentido. Muitas agências produzem conteúdo que não gera tráfego qualificado porque carecem de inteligência de intenção e autoridade semântica. A AUDITSEO entra na camada estratégica para direcionar o que deve ser escrito, as estruturas semânticas adequadas e os ganchos que o Google e os mecanismos de busca com IA priorizam."
    },
    {
      id: "faq-4",
      question: "Vocês executam ou apenas orientam?",
      answer: "Nosso core é inteligente e consultivo. Fornecemos a estratégia, o diagnóstico de inteligência, planos detalhados de 90 dias, e orientamos a aplicação técnica passo a passo. Dependendo do modelo de parceria (como o Squad Externo), acompanhamos de perto os ajustes técnicos e homologações táticas dos programadores e redatores para garantir conformidade."
    },
    {
      id: "faq-5",
      question: "Preciso vender SEO para todos os meus clientes?",
      answer: "Não. A parceria é altamente flexível. Ela pode começar com propostas pontuais para 1 ou 2 contas importantes da agência (para estancar churn ou elevar ticket), ou ser implementada de forma recorrente em toda a carteira de mapeamento local, sem barreiras operacionais mínimas."
    },
    {
      id: "faq-6",
      question: "O que é GEO?",
      answer: "GEO (Generative Engine Optimization) é a otimização focada em ambientes generativos e motores de recomendação baseados em Inteligência Artificial, como AI Overviews do Google, ChatGPT, Gemini, Copilot e Perplexity. O objetivo do GEO é garantir que a marca do seu cliente seja mencionada, explicada e recomendada contextualizadamente de modo positivo quando o usuário faz uma pergunta direta à IA."
    },
    {
      id: "faq-7",
      question: "A AUDITSEO substitui minha equipe?",
      answer: "Não. A AUDITSEO atua para somar. Nós eliminamos a necessidade de você passar meses testando redatores ou contratando especialistas sêniores com altos custos de CLT. Fortalecemos o time técnico, criamos metodologia focada em resultados perceptíveis e oferecemos a retaguarda que o seu diretor de arte ou gerente de contas necessita."
    },
    {
      id: "faq-8",
      question: "Como sei se minha agência está pronta?",
      answer: "Se a sua agência atende clientes que realizam buscas orgânicas de negócios táticos, negócios locais ou institucionais e o cliente expressa preocupação sobre 'tráfego diminuindo', 'presença no maps' ou 'IA no Google', sua agência já possui uma oportunidade comercial latente para faturar com Search Intelligence no próximo escopo."
    }
  ];

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="bg-[#e0d3c3] text-[#11100f] py-24 md:py-32"
    >
      <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
        {/* SECTION HEADER CHASSIS */}
        <div className="text-center flex flex-col items-center mb-16">
          <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">
            SUPORTE E RESPOSTAS INSTITUCIONAIS
          </span>
          <h2 className="font-display text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#11100f] leading-[1.15] tracking-tight max-w-3xl">
            Perguntas frequentes de agências
          </h2>
          <div className="w-[160px] h-[4px] bg-[#b28453] mt-6" />
        </div>

        {/* ACCORDION ITEMS */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                id={`accordion-block-${item.id}`}
                key={item.id}
                className="bg-[#f4eee5] rounded-xl border border-[#b28453]/15 overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(17,16,15,0.03)] hover:border-[#b28453]/40"
              >
                <button
                  id={`accordion-btn-${item.id}`}
                  onClick={() => handleToggle(item.id)}
                  className="w-full flex items-center justify-between p-6 cursor-pointer text-left transition-colors font-display"
                >
                  <div className="flex items-center space-x-3 text-[#11100f]">
                    <HelpCircle size={18} className="text-[#b28453] mt-0.5 shrink-0" />
                    <span className="text-[16px] sm:text-[18px] font-bold tracking-tight">
                      {item.question}
                    </span>
                  </div>
                  <span className="p-1 rounded-full bg-[#e0d3c3]/40 text-[#b28453] transition-all">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {/* Animated accordion panel */}
                <div
                  id={`accordion-content-${item.id}`}
                  className={`transition-all duration-350 ease-in-out ${
                    isOpen ? "max-h-[300px] opacity-100 border-t border-[#b28453]/10" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="p-6 bg-[#fcf9f4] text-[#2a2927] text-[15px] sm:text-[16px] leading-[1.65]">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
