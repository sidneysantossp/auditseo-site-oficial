# Case Study #001 — External Web Presence Baseline

Data da coleta: 2026-09-08
Status: baseline pré-release

## Objetivo

Congelar uma fotografia da presença pública da entidade AUDITSEO antes do release da nova arquitetura Authority → Lead.

Este baseline não substitui Google Search Console, URL Inspection, logs ou o protocolo Search AI. Ele registra apenas o que apareceu em uma pequena amostra de buscas públicas feitas em 08/09/2026 e quais ambiguidades de entidade estavam observáveis antes do lançamento.

## Regra de interpretação

- Um resultado encontrado comprova apenas que aquela página foi recuperada na busca observada.
- Uma página que não apareceu nesta amostra não deve ser descrita como “não indexada”.
- A ordem dos resultados observados não deve ser tratada como ranking estável.
- Resultados podem mudar entre data centers, interfaces, personalização e tempo.
- A finalidade é registrar contexto de entidade/discoverability, não criar uma métrica de ranking paralela ao Search Console.

## Observações congeladas

### 1. O domínio oficial já era recuperável para a marca AUDITSEO

Uma busca por `AUDITSEO SEO` recuperou a homepage oficial:

https://www.auditseo.com.br/

O conteúdo público observado ainda era a versão anterior do site, com o H1 “Construímos autoridade na nova era da busca” e elementos decorativos apresentados como `CORE STATUS: ACTIVE`, `LIVE`, `Densidade de Sinal 94.2%`, `46 Nós Ativos`, `< 12ms` e `Autoridade L1`.

Interpretação: a entidade/domínio já possuía alguma discoverability pública antes do novo release, mas a narrativa encontrada ainda não correspondia à versão Authority → Lead preparada nas branches de lançamento.

### 2. Uma página de solução da AUDITSEO já aparecia publicamente

Foi recuperada a URL:

https://www.auditseo.com.br/solucoes/projetos-comecando-do-zero

Título observado: `Search Foundation | Inteligência para Lançamentos | AUDITSEO`.

Interpretação: o domínio não partia de ausência total de páginas recuperáveis. O baseline de 0 impressões/0 cliques do GSC deve continuar sendo descrito como baseline de Search Performance, não como prova de zero indexação.

### 3. Sidney Santos já possuía uma associação externa com AUDITSEO

Uma página de diretório do LinkedIn para o nome Sidney Santos exibia uma entrada `Sidney Santos — São Paulo, SP — AUDITSEO`.

Fonte observada:
https://br.linkedin.com/pub/dir/Sidney/Santos%2B/br-0-Brasil

Interpretação: existe ao menos um sinal externo associando o nome Sidney Santos à marca AUDITSEO. A página observada é um diretório de resultados do LinkedIn, não uma validação de perfil específico nem uma prova de autoridade temática.

### 4. Existe uma representação externa antiga e potencialmente inconsistente

A Opendi exibia:

- `Auditseo | Agência de SEO`
- categoria `Consultores de Marketing São Paulo`
- endereço `Rua Baronesa de Bela Vista 411, 04612-002 São Paulo`
- telefone `(11) 99638-4376`

Fonte observada:
https://sao-paulo.opendi.com.br/C/133.html

Interpretação: o rótulo `Agência de SEO` conflita com o posicionamento atual de consultoria de Search Intelligence. Endereço e telefone não foram confirmados como dados atuais neste estudo e não devem ser corrigidos/publicados em outros canais até validação pelo responsável da empresa.

### 5. Há colisão de marca com uma entidade não relacionada em outro domínio

Buscas pela marca também recuperaram `auditseo.app`, um produto estrangeiro não relacionado à AUDITSEO brasileira. A página se apresenta como `Free SEO Audit Tool & Instant Website Score`, e existe também uma extensão Chrome associada à mesma marca textual `AuditSEO`.

Fontes observadas:
https://auditseo.app/
https://chromewebstore.google.com/detail/auditseo-instant-on-page/ofnckloealippiiapdppahaeieeopdie

Interpretação: `AUDITSEO` não é uma string globalmente exclusiva. A nova arquitetura deve reforçar desambiguação através de domínio, país/mercado, fundador, serviços, categoria Search Intelligence, publisher/author graph, consistência externa e evidência proprietária. Este achado não significa que Google ou qualquer LLM “confunde” necessariamente as entidades; significa apenas que existe outra entidade pública usando o mesmo nome textual.

### 6. Os novos ativos Authority → Lead ainda não foram observados nesta amostra pré-release

Foram pesquisados termos/títulos relacionados a:

- `AUDITSEO Research`
- `Quanto custa uma consultoria de SEO + GEO/IA em 2026`
- `Como o mercado brasileiro vende GEO e Search AI em 2026`
- `Case Study #001 AUDITSEO`

Nesta amostra, os novos ativos preparados na branch não foram recuperados como resultados AUDITSEO.

Interpretação permitida: os ativos ainda não foram observados nesta amostra pré-release.

Interpretação proibida: “os ativos não estão indexados”.

## Hipóteses que este baseline permite testar depois do release

### H-EXT-01 — Desambiguação da entidade

A nova arquitetura de Organization/Person/Service/Article/Dataset, autoria, Research Hub e consistência de posicionamento deve tornar mais claro que `www.auditseo.com.br` representa a consultoria brasileira de Search Intelligence fundada/representada por Sidney Santos — distinta de produtos homônimos externos.

Sinais futuros possíveis:

- maior consistência do snippet/título/descrição recuperados para a marca;
- mais resultados do domínio oficial em buscas branded relevantes;
- recuperação consistente da página de autor para Sidney Santos + AUDITSEO;
- novas fontes externas descrevendo a AUDITSEO como Search Intelligence/SEO + Search AI em vez de apenas “agência de SEO”.

### H-EXT-02 — Expansão da superfície de autoridade

Os novos benchmarks, Research Hub, Case Study e documentos de Search AI devem passar a ser recuperáveis para buscas relacionadas aos respectivos temas.

Sinais futuros possíveis:

- primeiras impressões/pages/queries no GSC;
- recuperação pública de ativos de pesquisa em buscas temáticas;
- backlinks ou menções externas aos datasets;
- citações/menções em interfaces Search AI segundo protocolo congelado.

## Fontes observadas na coleta

1. AUDITSEO homepage — https://www.auditseo.com.br/
2. AUDITSEO Search Foundation — https://www.auditseo.com.br/solucoes/projetos-comecando-do-zero
3. LinkedIn public directory — https://br.linkedin.com/pub/dir/Sidney/Santos%2B/br-0-Brasil
4. Opendi — https://sao-paulo.opendi.com.br/C/133.html
5. Unrelated AuditSEO product — https://auditseo.app/
6. Unrelated Chrome extension — https://chromewebstore.google.com/detail/auditseo-instant-on-page/ofnckloealippiiapdppahaeieeopdie

## Maturidade

Classificação inicial: `M0 — baseline`.

Este documento registra contexto externo antes do release. Não demonstra impacto da nova estratégia e não deve ser usado para alegar melhora até existir uma coleta comparável posterior.
