# Benchmark de ofertas públicas de SEO + GEO / Search AI no Brasil — 08/09/2026

## Objetivo

Registrar uma fotografia reproduzível de **ofertas com preço publicado em páginas oficiais** de prestadores e softwares que atendem o mercado brasileiro de SEO, GEO, AEO e Search AI.

O objetivo não é produzir um “preço médio do mercado”. As ofertas observadas têm estruturas econômicas diferentes: sessão consultiva, auditoria/diagnóstico, sprint, projeto, retainer mensal, serviço híbrido de SEO + GEO e software. Misturá-las em uma média única produziria um número fácil de repetir e difícil de defender.

Arquivo de dados congelado:

`docs/research/seo-geo-public-offers-benchmark-2026-09-08.csv`

Data de captura: **08/09/2026**.

## Critérios de inclusão

Uma oferta entrou na base quando atendia aos seguintes critérios no momento da captura:

1. página pública acessível na web;
2. domínio oficial do próprio fornecedor/produto;
3. oferta relacionada explicitamente a SEO, GEO, AEO, Search AI ou visibilidade em IA;
4. valor em reais publicado na própria página, ou faixa de preço publicada pela própria empresa;
5. atuação ou venda orientada ao mercado brasileiro.

Não entraram no dataset principal:

- estimativas de terceiros sobre quanto outra empresa cobra;
- posts que descrevem “faixas de mercado” sem serem uma oferta própria identificável;
- páginas sem preço público;
- valores em moeda estrangeira sem oferta brasileira direta;
- preços inferidos de screenshots, snippets sem página oficial ou comentários em redes sociais.

## Universo observado

A base congelada contém **10 fornecedores/produtos** e múltiplas ofertas quando a página publicava mais de um plano.

Prestação humana / híbrida observada:

- Analista de SEO — Consultoria SEO Express;
- Lucas Ferraz SEO — diagnóstico e otimização para IA;
- AI SEO Brasil — auditoria pontual GEO;
- SOY — pacotes de SEO para IA;
- Brasil GEO — Sprint GEO;
- Organic301 — consultoria GEO mensal;
- SEOPARA — retainers híbridos de SEO local + GEO.

Software / stack observado separadamente:

- Dolomite AI;
- AgentRank;
- Contentor.

## Taxonomia de ofertas

### `consultation_session`

Sessão curta, normalmente em horas, com aconselhamento e/ou análise prévia. Não equivale a auditoria completa nem a acompanhamento recorrente.

### `audit_diagnostic`

Entrega pontual cujo núcleo é diagnosticar o estado atual e produzir prioridades/recomendações.

### `consulting_sprint`

Projeto consultivo delimitado em horas/dias, com múltiplos artefatos e roadmap.

### `service_package`

Pacote de serviço com preço público, mas cuja periodicidade ou estrutura comercial não está suficientemente clara para ser classificada como retainer puro.

### `managed_service`

Acompanhamento/execução recorrente com cobrança mensal explicitada.

### `hybrid_seo_geo_retainer`

Mensalidade que combina GEO/Search AI com outras disciplinas relevantes — por exemplo SEO local, conteúdo, digital PR, desenvolvimento ou gestão de perfil local. Deve ser comparada com cautela a um retainer dedicado de GEO.

### `software`

Ferramenta ou plataforma. **Software não entra em qualquer cálculo de honorários de consultoria.** Pode ser usado apenas para mostrar custo de stack e diferença entre comprar tecnologia e comprar trabalho consultivo.

## O que os dados permitem afirmar

A amostra permite afirmar que, em 08/09/2026, existiam publicamente ofertas brasileiras com preços que ocupavam camadas muito diferentes do mercado, incluindo:

- sessões consultivas abaixo de R$ 500;
- diagnósticos publicados a partir de aproximadamente R$ 1.350–R$ 2.000;
- pacotes/serviços de entrada na faixa de milhares de reais;
- sprints consultivos estruturados em cinco dígitos;
- retainers mensais que vão de ofertas híbridas de baixo ticket a consultorias dedicadas de R$ 15 mil/mês ou mais;
- software de monitoramento/AI readiness a partir de dezenas ou centenas de reais por mês.

Essas observações são **faixas da amostra**, não estimativas universais do mercado brasileiro.

## O que os dados NÃO permitem afirmar

Esta base não permite dizer, sem pesquisa adicional:

- “o preço médio de GEO no Brasil é X”;
- que o serviço mais caro é melhor;
- que o serviço mais barato entrega menos valor;
- que todos os fornecedores usam a mesma definição de GEO/AEO/Search AI;
- que uma mensalidade inclui as mesmas horas, canais, ferramentas, produção ou implementação que outra;
- que preços publicados são os preços finais negociados em contratos reais;
- que a amostra representa todas as empresas brasileiras do setor.

## Principais vieses

### Viés de publicação

A maioria das consultorias B2B não publica preço. Portanto, a amostra favorece empresas que optaram por transparência comercial pública.

### Viés de escopo

“GEO” é usado para ofertas muito diferentes. Algumas vendem diagnóstico; outras conteúdo, digital PR, schema, monitoramento, software ou execução contínua.

### Viés de seleção

A pesquisa foi orientada a páginas encontráveis na web em 08/09/2026 e não constitui censo do mercado.

### Viés temporal

Preços, planos e escopos podem mudar após a data de captura. O artigo público deve sempre exibir a data do levantamento.

## Regras para análise pública

1. nunca calcular média única somando software, sessão, auditoria, sprint e retainer;
2. sempre citar a página oficial ao mencionar um preço específico;
3. usar “observado na amostra” ou “ofertas públicas encontradas”, nunca “mercado cobra” sem qualificação;
4. deixar preços com `a partir de` como limites inferiores, não como valor fechado;
5. quando a periodicidade não estiver explícita, marcar como `public_package_from`, sem assumir mensalidade;
6. apresentar software em quadro separado;
7. descrever o escopo junto com o preço para evitar comparação por número isolado;
8. publicar limitações na mesma página dos resultados.

## Hipótese editorial / comercial

A hipótese a testar é que a intenção “quanto custa consultoria GEO / SEO para IA?” está próxima de contratação e pode gerar um documento de alta utilidade se a AUDITSEO fizer o que a maioria das páginas de preço não faz: **separar formatos de oferta antes de comparar números**.

O conteúdo público deve responder três perguntas:

1. quanto custavam as ofertas públicas observadas em 08/09/2026, por tipo de serviço?;
2. por que os valores não são diretamente comparáveis?;
3. o que um comprador precisa perguntar para entender se uma proposta de R$ 2 mil, R$ 8 mil ou R$ 20 mil está comprando diagnóstico, execução, monitoramento, conteúdo, autoridade, software ou uma combinação?

## Regra de integridade

A base CSV congelada não deve ser reescrita retroativamente para melhorar a narrativa do artigo. Correções factuais devem ser versionadas com justificativa. Uma nova coleta futura deve gerar um novo arquivo/data ou uma versão explicitamente identificada.
