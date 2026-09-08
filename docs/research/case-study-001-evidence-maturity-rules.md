# Case Study #001 — Evidence Maturity Rules

Data: 2026-09-08
Status: ativo antes do release

## Objetivo

Definir quando a AUDITSEO pode tratar uma observação como baseline, sinal inicial, tendência ou evidência consolidada — especialmente ao discutir prazos, expectativas e promessas com clientes.

A regra central é simples:

> O dado deve limitar a narrativa. A narrativa nunca pode elevar a maturidade do dado.

## Níveis de maturidade

### M0 — Baseline

O ponto de partida foi registrado antes da intervenção ou antes da primeira medição válida.

Pode sustentar:

- estado inicial observado;
- comparação futura contra o mesmo método;
- definição de zero/ponto de partida daquela métrica específica.

Não pode sustentar:

- causa;
- tendência;
- prazo;
- expectativa de resultado.

Exemplo AUDITSEO: GSC registrou 0 impressões e 0 cliques no período finalizado 2026-08-09 → 2026-09-05. Isso não significa zero URLs indexadas.

### M1 — Sinal inicial

Uma mudança apareceu pela primeira vez após uma ação.

Exemplos:

- primeira impressão não-branded;
- primeira query comercial;
- primeira citação observada em um prompt congelado;
- primeiro referral de uma pesquisa;
- primeiro lead declarando Google/Search AI como origem.

Pode sustentar:

- “observamos o primeiro sinal de...”;
- priorização de investigação.

Não pode sustentar:

- “a estratégia funcionou”;
- previsão de crescimento;
- promessa de repetibilidade.

### M2 — Tendência emergente

O mesmo tipo de sinal se repete em múltiplas observações comparáveis e não depende de um único ponto.

Condições mínimas recomendadas:

- mais de um período de medição comparável; e
- repetição em mais de uma query/página/prompt quando a métrica permitir; e
- ausência de explicação óbvia por erro de tracking ou evento isolado.

Pode sustentar:

- “há uma tendência emergente compatível com a hipótese”;
- ajuste de prioridade e capacidade operacional.

Ainda não sustenta:

- garantia de continuidade;
- causalidade exclusiva;
- prazo prometido a cliente com base em um único case.

### M3 — Evidência operacional

A tendência persiste por janelas comparáveis e pode ser ligada a uma sequência operacional reproduzível.

Requer, conforme o caso:

- múltiplos checkpoints;
- método de medição estável;
- histórico de ações datadas;
- ausência de mudança metodológica não documentada;
- análise de fatores externos relevantes;
- resultado observável em mais de uma superfície quando a hipótese envolver múltiplas superfícies.

Pode sustentar:

- faixas de expectativa baseadas no histórico observado;
- planejamento de capacidade e marcos;
- conversa comercial do tipo “no nosso case observamos X após Y, sob estas condições”.

Não permite:

- transformar uma faixa histórica em SLA de Google/IA;
- prometer ranking, citação ou recomendação de terceiros.

### M4 — Evidência comercial

Além da visibilidade, existe efeito repetido na jornada de negócio.

Exemplos:

- múltiplos leads qualificados atribuídos a páginas/queries/pesquisas;
- reuniões originadas de Search/Search AI;
- receita atribuída com trilha de evidência;
- declaração recorrente de descoberta por Google, ChatGPT, Gemini ou pesquisa AUDITSEO.

Pode sustentar:

- estimativas comerciais contextualizadas;
- discussão de payback/faixa de aquisição com dados próprios;
- refinamento de proposta e pricing.

Ainda exige ressalvas de amostra, contexto e não-garantia.

## Regra para falar de prazo

Nenhum prazo deve nascer de opinião retrospectiva.

Para usar o histórico AUDITSEO em uma conversa com cliente, registrar separadamente:

1. tempo da implementação até o primeiro crawl/descoberta observável;
2. tempo até a primeira impressão;
3. tempo até primeira query relevante;
4. tempo até clique orgânico;
5. tempo até primeira menção/citação/recomendação em Search AI;
6. tempo até primeira referência externa/link;
7. tempo até lead qualificado;
8. tempo até receita atribuída, quando aplicável.

Somente depois de múltiplas observações comparáveis essas durações podem virar uma faixa empírica. Mesmo então, comunicar como histórico observado, não como garantia.

Exemplo permitido:

> “No Case Study da AUDITSEO, o primeiro sinal ocorreu em X dias e a tendência se consolidou em Y. Em outros projetos o tempo pode variar porque crawl, concorrência, autoridade, mercado e velocidade de implementação mudam.”

Exemplo proibido:

> “Em 30 dias sua empresa estará sendo citada pelo ChatGPT.”

## Polarity

Toda atualização do Evidence Ledger deve receber uma classificação:

- `positive`: sinal compatível com o objetivo;
- `negative`: movimento contrário ao objetivo ou regressão relevante;
- `neutral`: implementação/baseline sem resultado direcional;
- `inconclusive`: existe mudança, mas o dado não permite interpretar direção com confiança.

Resultado negativo nunca deve ser removido do histórico.

## Causalidade

Usar três níveis de linguagem:

### Observado

“Após o release, a página começou a receber impressões.”

### Compatível com a hipótese

“O crescimento é compatível com a hipótese de que a nova arquitetura aumentou descoberta e relevância.”

### Causalidade forte

Reservada para situações em que o desenho permite excluir explicações concorrentes de forma razoável. Em SEO/Search AI, isso será raro.

Evitar “X causou Y” quando existirem mudanças simultâneas de conteúdo, técnica, autoridade, demanda ou plataforma.

## Checkpoints oficiais do Case Study

O acompanhamento pode ser diário para detecção, mas a narrativa pública deve usar checkpoints mais estáveis:

- pós-release imediato;
- D+7;
- D+14;
- D+30;
- D+60;
- D+90;
- D+180.

Checkpoints podem ser adicionados por evento material (ex.: primeira citação, primeiro lead), sem apagar os checkpoints pré-definidos.

## Fontes de evidência

Prioridade:

1. Google Search Console;
2. logs/runtime e deploy evidence;
3. respostas congeladas do protocolo Search AI;
4. analytics/referrals;
5. lead attribution + declaração de descoberta;
6. backlinks/menções verificáveis;
7. CRM/receita quando disponível.

Screenshots isolados e depoimentos não substituem séries ou registros estruturados quando estes existirem.

## Uso no briefing diário das 9h

O briefing deve:

- identificar o `evidence_maturity` de cada evolução;
- separar resultado positivo/negativo/inconclusivo;
- nunca transformar M1 em promessa;
- indicar o que falta observar para elevar a evidência ao próximo nível;
- apontar quais tarefas do dia/semana/mês reduzem a incerteza sobre prazo e resultado.

## Integridade

- não editar o passado para acomodar a narrativa atual;
- correções factuais devem ser registradas com motivo e data;
- mudanças de método criam uma nova versão ou anotação explícita;
- ausência de resultado é resultado observável e deve permanecer no ledger;
- o objetivo é aprender uma faixa operacional real, não fabricar um case de sucesso.
