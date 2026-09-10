---
project: AUDITSEO
memory_version: 1.0.0
last_updated: 2026-09-10T17:27:00-03:00
status: production_released_indexing_activation
repository: sidneysantossp/auditseo-site-oficial
branch: main
production_commit_before_this_memory: 32a76f64c9db033b724d473505eafd139c3e8210
production_deployment: dpl_34LMbvm8vbWyoJi9QewnCmGoiz5N
canonical_host: https://www.auditseo.com.br
current_phase: Indexacao -> Descoberta -> Evidencia -> Distribuicao -> Medicao
---

# AUDITSEO — Memory / Project Handoff

> **Leia este arquivo primeiro.** Ele e a memoria operacional versionada do projeto AUDITSEO. O objetivo e permitir que qualquer humano ou LLM entenda rapidamente o que o projeto e, quais decisoes foram tomadas, o que ja esta em producao, o que foi validado, quais restricoes devem ser respeitadas e qual e o proximo passo exato.

## 0. Contrato de manutencao deste arquivo

`memory.md` deve ser tratado como parte do produto, nao como uma anotacao opcional.

A partir desta versao, **toda implementacao relevante deve atualizar este arquivo no mesmo ciclo de trabalho**. O update deve ocorrer antes de considerar a tarefa encerrada.

### Regras obrigatorias

1. Atualizar `memory_version` e `last_updated` sempre que houver mudanca material.
2. Atualizar a secao **Estado atual / Onde paramos** para refletir o estado real depois da implementacao.
3. Registrar commits, PRs, deployments, gates e evidencias relevantes quando existirem.
4. Registrar novas decisoes na secao **Decision Log**.
5. Registrar o proximo passo exato, para que outro humano/LLM consiga continuar sem reconstruir o contexto.
6. Nunca apagar historico importante para “deixar bonito”. Corrigir fatos incorretos explicitamente e registrar a correcao no changelog.
7. **Nunca registrar secrets, senhas, tokens, API keys, cookies, valores secretos de variaveis de ambiente ou credenciais.** Pode registrar apenas o nome da variavel/secret e se esta configurada.
8. Nao inventar metricas, resultados, rankings, citacoes em IA, leads, performance ou estados de indexacao. Se ainda nao ha evidencia, escrever `nao medido`, `pendente` ou equivalente.
9. Git continua sendo a fonte de verdade para versao. Este arquivo resume o estado humano/operacional e deve acompanhar o historico do repositorio.

### Convencao de versao da memoria

- **PATCH** (`1.0.x`): esclarecimentos, correcoes documentais, pequenos estados operacionais sem mudanca de estrategia/arquitetura.
- **MINOR** (`1.x.0`): nova feature, novo gate, nova integracao, nova fase operacional, alteracao de workflow ou nova evidencia importante.
- **MAJOR** (`x.0.0`): mudanca de arquitetura central, posicionamento, modelo de negocio, estrategia principal, migracao estrutural ou redefinicao do projeto.

### Formato minimo para cada nova entrada

Registrar no changelog:

- data/hora;
- versao da memoria;
- o que mudou;
- commit/PR/deployment, quando aplicavel;
- validacao/evidencia;
- novo bloqueio, se existir;
- proximo passo.

---

# 1. TL;DR — Estado atual / Onde paramos

O AUDITSEO **saiu do pre-release e esta publicado em producao** com a nova arquitetura de Search Intelligence + Authority -> Lead.

A pilha de PRs foi integrada em ordem segura:

- PR #2 — P0 Search Foundation -> merged;
- PR #3 — Search Intelligence Positioning V1 -> merged;
- PR #4 — Positioning V2 / Diagnostic -> merged;
- PR #5 — Authority -> Lead V1 -> merged.

O merge final que colocou a superficie completa em `main` foi:

- `32a76f64c9db033b724d473505eafd139c3e8210`
- deployment Vercel: `dpl_34LMbvm8vbWyoJi9QewnCmGoiz5N`
- estado do deployment: `READY`
- aliases confirmados: `www.auditseo.com.br`, `auditseo.com.br` e aliases Vercel do projeto.

## Release gates fechados

### HTTP / SEO

Foi executada em Production a matriz completa equivalente ao `scripts/smoke-launch.mjs`.

Resultado:

- **65/65 checks PASS**
- 50 URLs canonicas indexaveis validadas;
- redirects permanentes validados;
- canonical unico e correto;
- canonical de query limpa validado em `/diagnostico?cenario=geo`;
- 404 real validado;
- 404 com `noindex` e sem canonical;
- `robots.txt` 200;
- `sitemap.xml` 200.

### Lead delivery

O endpoint real de producao foi validado:

- `POST /api/leads` -> HTTP 200;
- resposta -> `{"success":true}`;
- Vercel runtime log -> POST 200 no deployment final;
- Resend -> mensagem `[AUDITSEO] Novo lead — Diagnóstico` marcada como `delivered` para `contato@auditseo.com.br`.

Portanto, **o release tecnico principal esta fechado**.

## Descoberta / Search Console

O trabalho parou agora na ativacao de indexacao e medicao.

Situacao atual:

- canonical host real: `https://www.auditseo.com.br`;
- `https://auditseo.com.br/` responde **308** para `https://www.auditseo.com.br/`;
- sitemap de producao: `https://www.auditseo.com.br/sitemap.xml`;
- sitemap de producao contem **50 URLs**;
- `llms.txt` esta publicado e responde 200;
- GSC Wizard esta conectado;
- propriedade atualmente registrada no GSC Wizard: `https://auditseo.com.br/`;
- foi criado um **Indexing Tracker com 50 URLs**, todas inicialmente `pending`;
- tracker ID: `7d14af72-97f8-449d-a560-471aad2debe2`;
- stats no momento da criacao: total 50, indexed 0, notIndexed 0, pending 50, errors 0, warnings 0;
- cota de URL Inspection antes da primeira bateria: 2000/dia disponiveis;
- a URL Inspection nao foi executada porque a autorizacao Google do GSC Wizard ainda precisa de **full access**;
- a propriedade URL-prefix sem `www` nao e a propriedade ideal para medir a superficie canonica `www`.

### Proximo passo exato

O usuario foi orientado a fazer duas acoes e responder `pronto`:

1. No GSC Wizard, habilitar **Enable full access** para permitir URL Inspection.
2. No Google Search Console, criar a propriedade de dominio **`auditseo.com.br`**, que devera aparecer como `sc-domain:auditseo.com.br`.

Depois do `pronto`, continuar diretamente daqui:

1. registrar `sc-domain:auditseo.com.br` no GSC Wizard;
2. usar essa propriedade como base principal de medicao;
3. garantir que as 50 URLs canonicas estejam no tracker correto (migrar/recriar tracker se necessario);
4. executar primeira bateria de URL Inspection;
5. classificar URLs em `indexada`, `descoberta`, `rastreada mas nao indexada`, `ainda desconhecida` ou estados equivalentes da API;
6. registrar o checkpoint no Case Study #001 e atualizar este `memory.md`.

**Nao recomecar auditoria, nao reabrir release, nao criar novos artigos antes desse checkpoint.**

---

# 2. Visao do projeto

AUDITSEO deve ser mais do que um site institucional ou uma agencia generica de SEO.

O posicionamento definido e **Search Intelligence**: diagnosticar e coordenar o sistema completo de busca, do acesso tecnico ate citacao, confianca e conversao.

A tese operacional central e:

`Crawl -> Index -> Retrieve -> Understand -> Trust -> Cite -> Convert`

O site deve provar o proprio metodo.

O principal ativo estrategico e transformar o proprio AUDITSEO no **Case Study #001**, construindo autoridade do zero e documentando publicamente o que acontece quando a metodologia e aplicada ao proprio negocio.

A narrativa de aquisicao desejada e um prospect chegar a uma conversa comercial praticamente convencido porque encontrou a AUDITSEO por Google ou Search AI.

Exemplos de narrativas-alvo:

- “Perguntei ao ChatGPT por uma agencia especializada em busca por IA e encontrei voces.”
- “Procurei um especialista em SEO que entende de IA para fazer minha empresa ser citada e encontrei a AUDITSEO.”
- “Pesquisei agencia de SEO com GEO e encontrei voces.”
- “Li um artigo de voces e pensei: se entregam esse nivel de valor antes de eu ser cliente, quero ver o que fariam no meu site.”

Essa visao e resumida pelo framework:

`Create -> Publish -> Discover -> Cite -> Trust -> Lead`

## Prioridade estrategica

O SDR foi deliberadamente adiado para uma segunda fase.

A prioridade atual e:

`Site -> Conteudo -> Autoridade -> Descoberta -> Evidencia -> Lead`

Nao retomar SDR enquanto o ciclo atual de indexacao/descoberta/autoridade nao estiver medido e operacional.

---

# 3. Principios estrategicos e editoriais

## 3.1 Search Intelligence como categoria principal

SEO tradicional continua sendo a fundacao tecnica. Search AI / GEO / AEO sao extensoes que dependem de:

- crawlability;
- indexability;
- retrieval;
- entendimento semantico;
- clareza de entidade;
- evidencia;
- citabilidade;
- reputacao/confianca;
- mensuracao.

Nao vender GEO como uma “sacola de truques”.

## 3.2 O site precisa provar o servico

A AUDITSEO deve demonstrar no proprio site:

- arquitetura tecnica;
- informacao estruturada;
- clareza de entidades;
- conteudo citavel;
- datasets publicos;
- metodologia explicita;
- pesquisa propria;
- rastreabilidade de evidencias;
- mensuracao antes/depois.

## 3.3 Grafo editorial

Modelo mental:

`Entities -> Concepts -> Subtopics -> Documents -> Evidence -> Sources`

## 3.4 Politica de evidencia

Nunca publicar:

- garantias de ranking;
- garantias de citacao em ChatGPT/Gemini/etc.;
- metricas inventadas;
- resultados sem baseline;
- porcentagens de mercado derivadas de amostras pequenas como se fossem estimativas do mercado inteiro;
- FAQs/schema artificiais so para SEO;
- conteudo copiado;
- “telemetria” visual falsa.

## 3.5 Congelamento editorial atual

**Nao criar novos artigos agora.**

O gargalo deixou de ser conteudo. A sequencia operacional atual e:

`Release -> Indexacao -> Descoberta -> Evidencia -> Distribuicao -> Medicao -> Novo conteudo orientado por dados reais`

---

# 4. Arquitetura tecnica e infraestrutura

## 4.1 Repositorio

Repositorio oficial do site:

`sidneysantossp/auditseo-site-oficial`

Branch de producao:

`main`

## 4.2 Hosting / runtime

Vercel Team:

`auditseo`

Projeto:

`auditseo-site-oficial`

Framework reportado pela Vercel:

`tanstack-start-lovable`

Canonical host:

`https://www.auditseo.com.br`

O host sem `www` redireciona permanentemente para `www`.

## 4.3 SSR / rotas / SEO

A release consolidou:

- SSR para rotas indexaveis;
- canonical absoluto HTTPS e autorreferente;
- um unico canonical por pagina indexavel;
- query/fragment limpos no canonical;
- 404 real;
- 404 com `noindex` e sem canonical;
- redirects 308 para URLs legadas;
- metadata e structured data alinhados ao grafo de entidade.

### Padrao estrutural importante de TanStack

Foi comprovado durante a integracao da stack que um parent route pode executar `beforeLoad/head` antes do child.

Para evitar vazamento de canonical/redirect do parent para children, a solucao estrutural adotada e:

- parent layout neutro com `Outlet`;
- comportamento de index/hub colocado na rota `index` exata.

Aplicado em especial em:

- `/solucoes`;
- `/guias`.

**Nao voltar a colocar canonical/redirect de hub no parent route quando houver children.**

---

# 5. Grafo de entidades

IDs estruturados oficiais:

- Organization: `https://www.auditseo.com.br/#organization`
- WebSite: `https://www.auditseo.com.br/#website`
- Person / fundador: `https://www.auditseo.com.br/autor/sidney-santos#person`

Paginas-chave de entidade:

- `/autor/sidney-santos`
- homepage / Organization
- `/geo-ia`
- Research Hub
- Case Study #001

A pagina do fundador foi fortalecida para a intencao “especialista em SEO que entende de IA”, conectando SEO tecnico, Search AI/GEO, autoridade de entidade, mensuracao e o Case Study #001.

Nao adicionar `sameAs` especulativo ou dados empresariais nao verificados.

---

# 6. Funil comercial e atribuicao

Fluxo principal:

`Home / Metodo -> /diagnostico -> cenario -> solucao -> contato`

A homepage usa diagnostico como CTA principal de qualificacao.

`LeadCaptureBoundary` preserva contexto comercial, incluindo:

- `sourcePath`;
- query como `?cenario=`;
- UTMs;
- referrer;
- contexto do diagnostico;
- fallback de WhatsApp quando API server-side nao esta disponivel.

Endpoint server-side:

`/api/leads`

Tipos suportados:

- `consultation`
- `diagnostic`
- `newsletter`

Regra critica:

**Nao retornar falso sucesso.**

Se nenhum canal server-side estiver configurado, deve retornar indisponibilidade/503 e disponibilizar fallback; nunca responder `success:true` sem pelo menos um canal real confirmar entrega.

---

# 7. Resend / entrega de leads

## 7.1 Dominio

Dominio Resend:

`auditseo.com.br`

Domain ID:

`d2e95cd1-21e7-4351-81a2-be8525f33472`

Regiao:

`sa-east-1`

Estado atual:

- DKIM verified;
- SPF MX verified;
- SPF TXT verified;
- sending enabled;
- receiving disabled;
- tracking desabilitado no momento da criacao;
- TLS enforced.

## 7.2 Historico do DNS

O DKIM inicialmente estava truncado no DNS publico. O valor foi corrigido e a verificacao posterior no Resend passou.

MX e SPF ja estavam corretos.

Conclusao atual: **nao alterar novamente os registros Resend sem nova evidencia de falha**.

## 7.3 Variaveis de ambiente usadas pela aplicacao

Nomes relevantes:

- `RESEND_API_KEY`
- `LEAD_NOTIFICATION_EMAIL`
- `LEAD_FROM_EMAIL`
- `LEAD_WEBHOOK_URL` (opcional)

Valores padrao de e-mail usados pela aplicacao:

- notificacao: `contato@auditseo.com.br`
- from: `AUDITSEO <contato@auditseo.com.br>`

**Nunca registrar o valor de `RESEND_API_KEY` neste arquivo.**

## 7.4 Validacao em Production

No deployment final, um canario de diagnostico foi enviado e confirmou:

- HTTP 200;
- `success:true`;
- log Vercel 200;
- Resend `delivered`.

## 7.5 Pendencia de paridade em Preview

Durante a reconciliacao final do PR #5, o workflow ampliado de lead canary testou `consultation`, `diagnostic` e `newsletter`.

O HTTP/SEO do Preview passou, mas os tres POSTs de lead retornaram 503 porque o runtime reportou:

`webhookConfigured:false, emailConfigured:false`

Isso aconteceu depois da mudanca de escopo das variaveis para Production e indica que os novos Previews perderam `RESEND_API_KEY`.

Nao era regressao de codigo: Production foi testada e entregou corretamente.

**Pendencia futura antes do proximo ciclo de release:** restaurar tambem o escopo Preview de `RESEND_API_KEY`, `LEAD_FROM_EMAIL` e `LEAD_NOTIFICATION_EMAIL` para manter paridade de ambiente e fazer o canary ampliado passar em Preview.

---

# 8. CI / release gates

Workflow:

`.github/workflows/preview-smoke.yml`

Branches atualmente mapeadas no workflow:

- `fix/launch-p0-search-foundation`
- `content/search-intelligence-positioning-v1`
- `content/search-intelligence-positioning-v2`
- `content/authority-to-lead-v1`

O workflow:

1. resolve o alias Vercel da branch;
2. exige o secret `VERCEL_AUTOMATION_BYPASS_SECRET`;
3. espera o status Vercel do **mesmo SHA** ficar `success`;
4. acessa o Preview protegido usando o header de automation bypass;
5. executa `scripts/smoke-launch-protected.mjs`;
6. quando a mensagem de commit contem `[lead-canary]`, executa `scripts/smoke-lead-delivery.mjs`.

`smoke-lead-delivery.mjs` cobre:

- consultation;
- diagnostic;
- newsletter.

O secret de bypass existe no GitHub Actions. **Nunca registrar seu valor.**

---

# 9. Historico da stack de PRs e integracao

A stack pre-release original foi:

`main -> PR #2 -> PR #3 -> PR #4 -> PR #5`

Ela foi integrada exatamente nessa ordem.

## PR #2 — P0 Search Foundation

Branch:

`fix/launch-p0-search-foundation`

Principais responsabilidades:

- SSR/indexabilidade;
- canonical/404/redirects;
- lead API;
- attribution;
- remocao de fake telemetry;
- smoke de release.

Merge em `main`:

`68b64bb58277c55b423a28c86e4e71e75230774c`

## PR #3 — Search Intelligence Positioning V1

Branch:

`content/search-intelligence-positioning-v1`

Conteudo principal:

- categoria Search Intelligence;
- 8 solucoes;
- frameworks proprietarios;
- primeira camada editorial e de autoridade.

Houve conflito real apos retarget para `main`.

Resolucao:

- merge commit normal da base atualizada;
- sem rebase;
- sem force-push;
- preservacao do padrao parent neutro + index route exata.

Merge final em `main`:

`1c0f437eda4a837d93e3ffe9eb1043232f60e833`

## PR #4 — Positioning V2 / Diagnostic

Branch:

`content/search-intelligence-positioning-v2`

Principais mudancas:

- homepage orientada a diagnostico;
- cadeia `Crawl -> Index -> Retrieve -> Understand -> Trust -> Cite -> Convert`;
- `/diagnostico`;
- 8 solucoes refinadas;
- Biblioteca V2;
- 28 documentos editoriais;
- grafo de entidades;
- baseline GSC do Case Study #001.

Merge em `main`:

`47272e183879d2ec7bc63ea7929f7477b534ff68`

## PR #5 — Authority -> Lead V1

Branch:

`content/authority-to-lead-v1`

Principais mudancas:

- Authority -> Lead doctrine;
- `/geo-ia` reposicionado;
- pagina de autor fortalecida;
- auditoria GEO / Search AI;
- asset sobre recomendacao no ChatGPT;
- benchmark de ofertas/precos;
- benchmark de comunicacao GEO/Search AI;
- public datasets;
- Research Hub;
- Case Study #001 publico;
- `llms.txt`;
- DataCatalog/Dataset/DataDownload structured data;
- earned distribution playbook;
- atribuicao de leads.

Merge final em `main`:

`32a76f64c9db033b724d473505eafd139c3e8210`

## Regra de integracao preservada

Durante conflitos da stack:

- nao force-push;
- nao rebase destrutivo;
- nao pular PRs;
- usar merge commit normal para reconciliar linhas;
- validar Preview antes de integrar;
- usar `expected_head_sha`/equivalente quando possivel para impedir merge sobre head movido.

---

# 10. Posicionamento comercial / 8 solucoes

As 8 solucoes definidas sao:

1. Search Foundation
2. Organic Activation
3. Search Recovery
4. Entity Authority
5. Intent Content Architecture
6. Generative Search Readiness
7. SEO Migration & Risk Control
8. Organic Evolution Cycle

A funcao delas e mapear diferentes pontos de quebra identificados pelo diagnostico, nao vender o mesmo pacote para todos.

A solucao `/solucoes/geo-ia-readiness` e a superficie bottom-funnel para auditoria GEO / auditoria de visibilidade em IA.

Entregaveis conceituais definidos para Search AI incluem:

- baseline de prompts congelado;
- medicao de mention/citation/recommendation/entity accuracy;
- mapas de competidores/fontes;
- auditoria de elegibilidade e entidade;
- protocolo de remeasurement.

---

# 11. Case Study #001

Pagina publica:

`/case-study/auditseo-search-intelligence`

Tese:

**Construindo a autoridade da AUDITSEO do zero — com o proprio site como prova.**

## Baseline oficial original

Periodo finalizado:

`2026-08-09 -> 2026-09-05`

GSC Search Performance:

- clicks: 0
- impressions: 0

Periodo anterior equivalente tambem 0/0.

**Isso nao significa zero URLs indexadas.** Significa apenas zero clicks e zero impressions na Search Performance para aquele periodo.

## Leitura GSC mais recente antes deste memory

O conector leu depois um intervalo finalizado mais recente:

`2026-08-11 -> 2026-09-07`

Resultado:

- clicks: 0
- impressions: 0

Periodo de comparacao:

`2026-07-14 -> 2026-08-10`

Tambem 0/0.

Portanto o ponto zero continua preservado.

## O que ainda NAO pode ser reivindicado

Ainda nao ha baseline publico validado de:

- visibilidade em Search AI;
- citacoes em Search AI;
- recomendacoes de fornecedor em Search AI;
- leads qualificados atribuidos a Search/Search AI;
- impacto de earned media.

Nao inventar esses resultados.

## Prompt set

Existe conjunto congelado de **40 prompts** antes da medicao, cobrindo:

- descoberta de fornecedor;
- descoberta orientada por problema;
- validacao de compra/consultoria;
- entity accuracy de marca.

A regra e nao remover resultados ruins depois que a medicao comecar.

---

# 12. Pesquisa proprietaria publicada

## Benchmark #001 — ofertas / precos publicos

Canonical:

`/blog/quanto-custa-consultoria-seo-geo-ia`

Snapshot:

`2026-09-08`

Base:

- 10 providers/products;
- 23 linhas de ofertas publicas;
- formatos de servico separados;
- software separado de consultoria humana/hibrida.

Dataset publico:

`/dados/benchmark-ofertas-seo-geo-ia-2026-09-08.csv`

Regra editorial: nao fabricar “media de mercado” misturando sessoes, auditorias, sprints, retainers e software.

## Benchmark #002 — comunicacao GEO / Search AI no Brasil

Canonical:

`/blog/como-mercado-brasileiro-vende-geo-search-ai`

Snapshot:

`2026-09-08`

Amostra exploratoria:

- 12 paginas de providers;
- 3/12 com linguagem explicita de garantia para presenca/citacao/recomendacao em IA;
- 4/12 publicam algum prazo de resultado/primeira visibilidade;
- 7/12 expoem protocolo de medicao suficientemente concreto;
- 4/12 nomeiam metodo/framework proprietario.

Dataset publico:

`/dados/benchmark-comunicacao-geo-search-ai-2026-09-08.csv`

Regra editorial: esses numeros sao **achados da amostra**, nao estimativa de todo o mercado brasileiro e nao ranking de qualidade.

---

# 13. Research Hub / machine-readable layer

Research Hub:

`/estudos-busca-ia`

Ele foi promovido para pagina indexavel e inclui Research/DataCatalog.

A camada machine-readable inclui, onde aplicavel:

- `Article`;
- `Dataset`;
- `DataDownload`;
- datas de snapshot;
- variaveis medidas;
- author/publisher;
- DataCatalog no Research Hub.

Existe `resource-lint` para impedir que recursos essenciais desaparecam silenciosamente.

---

# 14. llms.txt

URL:

`https://www.auditseo.com.br/llms.txt`

Estado:

- HTTP 200;
- referencia recursos de autor, GEO, pesquisa e Case Study.

Politica adotada:

- e um resource map conservador;
- nao substitui `robots.txt`;
- nao substitui `sitemap.xml`;
- nao e tratado como fator de ranking garantido;
- nao promete citacao/inclusao/posicao em IA.

O SEO head pode emitir `rel="describedby"` apontando para o recurso.

---

# 15. Sitemap / superficie canonica atual

Canonical host para todas as URLs abaixo:

`https://www.auditseo.com.br`

O sitemap de producao contem **50 URLs**.

## Core / hubs / case

- `/`
- `/metodo-signal`
- `/solucoes`
- `/geo-ia`
- `/diagnostico`
- `/estudos-busca-ia`
- `/case-study/auditseo-search-intelligence`

## Solucoes

- `/solucoes/projetos-comecando-do-zero`
- `/solucoes/site-sem-tracao`
- `/solucoes/recuperacao-organica`
- `/solucoes/autoridade-de-entidade`
- `/solucoes/conteudo-por-intencao`
- `/solucoes/geo-ia-readiness`
- `/solucoes/migracao-risco-seo`
- `/solucoes/evolucao-organica`

## Blog / biblioteca

- `/blog`
- `/blog/o-que-e-search-intelligence`
- `/blog/autoridade-de-entidade-o-que-e`
- `/blog/geo-o-que-e-o-que-nao-garante`
- `/blog/como-ias-encontram-e-citam-fontes`
- `/blog/seo-vs-geo-vs-aeo`
- `/blog/como-auditar-crawlers-de-ia`
- `/blog/como-medir-visibilidade-em-ia`
- `/blog/como-estruturar-entidade-empresarial`
- `/blog/como-criar-conteudo-citavel`
- `/blog/framework-crawl-index-retrieve-understand-trust-cite`
- `/blog/protocolo-benchmark-search-ai`
- `/blog/como-aparecer-no-chatgpt`
- `/blog/como-ser-recomendado-pelo-chatgpt-como-fornecedor`
- `/blog/llms-txt-funciona`
- `/blog/chatgpt-nao-cita-meu-site`
- `/blog/site-indexado-mas-ausente-em-search-ai`
- `/blog/schema-ajuda-aparecer-no-chatgpt`
- `/blog/como-medir-se-geo-esta-funcionando`
- `/blog/como-mercado-brasileiro-vende-geo-search-ai`
- `/blog/como-escolher-consultoria-seo`
- `/blog/quanto-custa-consultoria-seo-geo-ia`
- `/blog/agencia-seo-consultoria-ou-time-interno`
- `/blog/o-que-consultoria-seo-deve-entregar`
- `/blog/auditoria-seo-o-que-deve-conter`
- `/blog/site-indexado-sem-impressoes`
- `/blog/checklist-seo-antes-lancar-site`
- `/blog/queda-trafego-depois-redesign`
- `/blog/conteudo-sem-trafego-atualizar-consolidar-remover`
- `/blog/trafego-organico-estagnado-proxima-oportunidade`
- `/blog/google-meu-negocio-guia-completo`
- `/blog/core-web-vitals-guia`

## Entidade / legal

- `/autor/sidney-santos`
- `/politica-de-privacidade`
- `/termos-de-uso`

---

# 16. Redirects legados validados no release gate

O smoke atual valida redirects permanentes para preservar sinais e evitar perda de URLs historicas.

Mapeamentos importantes:

- `/consultoria` -> `/`
- `/sidney-santos` -> `/autor/sidney-santos`
- `/white-label` -> `/parceria`
- `/para-agencias` -> `/parceria`
- `/seo-para-agencias` -> `/parceria`
- `/proposta/dr-felipe-barao` -> `/propostas/dr-felipe-barao`
- `/guias` -> `/blog`
- `/guias/search-intelligence` -> `/blog/o-que-e-search-intelligence`
- `/guias/geo-readiness` -> `/blog/geo-o-que-e-o-que-nao-garante`
- `/guias/narrativa-semantica` -> `/blog/autoridade-de-entidade-o-que-e`
- `/blog/como-escolher-agencia-seo` -> `/blog/agencia-seo-consultoria-ou-time-interno`

Paginas legadas preservadas com 200 e canonical proprio:

- `/blog/google-meu-negocio-guia-completo`
- `/blog/core-web-vitals-guia`

---

# 17. Search Console / Indexing Tracker

## 17.1 Propriedade atualmente conectada

GSC Wizard atualmente lista:

`https://auditseo.com.br/`

Essa e uma propriedade URL-prefix sem `www`.

Problema operacional:

- o site canonico usa `www`;
- o host sem `www` redireciona 308 para `www`;
- portanto a medicao ideal e uma propriedade de dominio `sc-domain:auditseo.com.br`, que cobre ambos os hosts e subdominios.

## 17.2 Sitemap historico visto no GSC

O GSC retornou um sitemap cadastrado como:

`https://auditseo.com.br/sitemap.xml`

Estado observado:

- lastSubmitted: `2026-01-27T06:15:55.874Z`
- lastDownloaded: `2026-09-09T12:59:09.186Z`
- warnings: 2
- errors: 0
- submitted: 15
- indexed: 0

Isso representa o estado historico registrado no Search Console e **nao reflete a superficie de producao atual**, que agora possui 50 URLs.

## 17.3 Tracker criado

Foi criado no GSC Wizard:

- tracker ID: `7d14af72-97f8-449d-a560-471aad2debe2`
- total: 50 URLs
- pending: 50
- indexed: 0
- notIndexed: 0
- errors: 0
- warnings: 0
- capacidade restante: 1750 URLs

Esses zeros de `indexed/notIndexed` sao estado inicial do tracker antes da primeira inspeccao, nao conclusao de indexacao.

## 17.4 Bloqueio atual

URL Inspection ainda nao foi executada porque a autorizacao Google ligada ao GSC Wizard precisa ser atualizada para full access.

Acao humana pendente:

- GSC Wizard -> Account -> **Enable full access**.

Segunda acao humana pendente:

- Google Search Console -> criar propriedade de dominio `auditseo.com.br` -> `sc-domain:auditseo.com.br`.

**Esse e o ponto exato onde o trabalho parou.**

---

# 18. Earned distribution

Ja existem documentos operacionais preparados para distribuicao de evidencia, incluindo:

- `docs/research/earned-distribution-playbook-v1.md`
- `docs/research/provider-notification-tracker-2026-09-08.csv`
- `docs/research/provider-factual-notification-template.md`
- `docs/research/earned-media-targets-v1.csv`
- `docs/research/earned-media-pitch-templates.md`

Principio:

`publish useful evidence -> invite factual correction -> distribute findings -> measure mentions, links, referrals and leads`

Provider notification e para QA factual. Nao deve pedir backlink ou endorsement.

**Nao iniciar outreach agora.** Primeiro fechar indexacao/descoberta e baseline pos-release.

---

# 19. O que NAO fazer agora

Para evitar que um novo agente desvie o projeto:

1. Nao criar uma nova rodada de artigos sem dados de indexacao/queries.
2. Nao reabrir o SDR agora.
3. Nao redesenhar a arquitetura de posicionamento que acabou de ser publicada sem evidencias novas.
4. Nao alterar canonicals/hosts sem motivo objetivo.
5. Nao mexer novamente no DNS do Resend se o dominio continua verified.
6. Nao criar metricas ou badges decorativos fingindo telemetria real.
7. Nao prometer que `llms.txt`, schema ou qualquer tecnica garante citacao em IA.
8. Nao confundir 0 impressions/clicks do GSC com 0 URLs indexadas.
9. Nao fazer force-push/rebase destrutivo em stacks de release.
10. Nao registrar secrets neste arquivo.
11. Nao considerar tarefa relevante concluida sem atualizar `memory.md`.

---

# 20. Sequencia operacional recomendada a partir daqui

## Fase A — Indexacao

1. Habilitar full access no GSC Wizard.
2. Criar `sc-domain:auditseo.com.br` no Google Search Console.
3. Registrar a domain property no GSC Wizard.
4. Associar/recriar tracker das 50 URLs na propriedade correta.
5. Inspecionar primeiro as URLs prioritarias:
   - homepage;
   - `/geo-ia`;
   - `/diagnostico`;
   - `/case-study/auditseo-search-intelligence`;
   - `/estudos-busca-ia`;
   - `/autor/sidney-santos`;
   - `/solucoes/geo-ia-readiness`;
   - principais documentos de Search Intelligence/GEO.
6. Depois expandir a inspeccao para as 50 URLs.
7. Atualizar este memory com a primeira classificacao real de indexacao.

## Fase B — Descoberta

Quando Search Console comecar a retornar sinais:

- queries;
- pages;
- impressions;
- clicks;
- index coverage/inspection states;
- crawling timestamps.

Nao otimizar por “achismo” antes dos sinais.

## Fase C — Evidencia

Registrar no Case Study #001:

- tempo ate primeira descoberta;
- tempo ate primeira indexacao;
- tempo ate primeira impressao;
- tempo ate primeiro clique;
- alteracoes de entidade/citabilidade observaveis;
- eventuais citacoes/recomendacoes Search AI quando medidas com protocolo.

## Fase D — Distribuicao

Somente depois que os ativos estiverem publicados, indexados e com evidencias minimas:

- factual notification;
- earned media;
- research distribution;
- monitoramento de mentions/backlinks/referrals.

## Fase E — Novo conteudo

Novo conteudo deve nascer de gaps reais observados em:

- GSC;
- Search AI benchmark;
- perguntas de prospects;
- cobertura competitiva;
- evidencias do Case Study.

---

# 21. Decision Log

## D-001 — Search Intelligence e a categoria principal

**Status:** ativo.

AUDITSEO nao sera posicionada apenas como “agencia de SEO” nem como “agencia GEO”. Search Intelligence e a categoria guarda-chuva.

## D-002 — O proprio site e o Case Study #001

**Status:** ativo.

O site deve documentar publicamente o processo de construir autoridade e demanda do zero.

## D-003 — SDR adiado

**Status:** ativo.

Nao retomar enquanto a frente Site/Authority/Discovery nao estiver operando e gerando evidencias.

## D-004 — Diagnostico antes de prescricao

**Status:** ativo.

Mensagem central: antes de investir em mais SEO, conteudo ou IA, descobrir onde o sistema de busca quebra.

## D-005 — Dataset antes de narrativa

**Status:** ativo.

Pesquisas proprias devem partir de dados versionados/publicos e depois gerar conclusoes editoriais, nao o contrario.

## D-006 — Sem fake telemetry

**Status:** ativo.

Indicadores decorativos antigos como `94.2%`, `46 nos ativos`, `<12ms`, `Autoridade L1` foram considerados pseudo-telemetria e removidos da nova stack.

## D-007 — Sem falso sucesso de lead

**Status:** ativo.

`/api/leads` so pode retornar sucesso quando pelo menos um canal server-side confirmar entrega.

## D-008 — Parent route neutro para hierarquias TanStack

**Status:** ativo.

Evitar canonical/redirect de hub em parent route com children; usar index route exata.

## D-009 — Canonical host com www

**Status:** ativo.

`https://www.auditseo.com.br` e o canonical host. Non-www deve redirecionar.

## D-010 — Domain property para medicao GSC

**Status:** pendente de execucao humana.

Criar `sc-domain:auditseo.com.br` para evitar fragmentacao entre `www` e non-www.

## D-011 — Congelamento editorial pos-release

**Status:** ativo.

Nao produzir novos artigos ate obter sinais reais de indexacao/descoberta.

## D-012 — Memory como gate de handoff

**Status:** ativo a partir de v1.0.0.

Toda implementacao relevante deve atualizar `memory.md` e seu changelog.

---

# 22. Identificadores operacionais uteis

> Nenhum item abaixo e secret.

- Repository: `sidneysantossp/auditseo-site-oficial`
- Production branch: `main`
- Final release merge before memory: `32a76f64c9db033b724d473505eafd139c3e8210`
- Final Vercel deployment: `dpl_34LMbvm8vbWyoJi9QewnCmGoiz5N`
- Vercel project: `auditseo-site-oficial`
- Production canonical host: `https://www.auditseo.com.br`
- Resend domain ID: `d2e95cd1-21e7-4351-81a2-be8525f33472`
- Lead notification address: `contato@auditseo.com.br`
- GSC URL-prefix property currently connected: `https://auditseo.com.br/`
- Desired GSC domain property: `sc-domain:auditseo.com.br`
- GSC Wizard indexing tracker: `7d14af72-97f8-449d-a560-471aad2debe2`
- Canonical URLs in current sitemap: 50
- Production HTTP/SEO release gate: 65/65 PASS

---

# 23. Handoff rapido para o proximo humano/LLM

Se voce chegou aqui sem contexto anterior, faca o seguinte:

1. **Nao reconstrua o projeto do zero.** A release ja esta em Production.
2. Considere `main` e este arquivo como ponto de partida.
3. O release tecnico esta verde: 65/65 HTTP/SEO e lead delivery real 200/delivered.
4. Nao crie novo conteudo agora.
5. O gargalo atual e Search Console/indexacao.
6. Pergunte/verifique se o usuario ja concluiu:
   - `Enable full access` no GSC Wizard;
   - criacao de `sc-domain:auditseo.com.br` no Google Search Console.
7. Se a resposta for sim, continue diretamente com registro da property, tracker e URL Inspection.
8. Atualize este `memory.md` ao terminar.

---

# 24. Changelog da memoria

## v1.0.0 — 2026-09-10 17:27 -03:00

**Tipo:** primeira memoria formal / baseline operacional pos-release.

### Registrado

- consolidacao do posicionamento Search Intelligence;
- framework Authority -> Lead;
- status do Case Study #001;
- arquitetura tecnica e SEO;
- stack de PRs #2 -> #5 e merges;
- deployment final de Production;
- gate HTTP/SEO 65/65;
- lead delivery Production HTTP 200 + Resend delivered;
- estado Resend/DNS;
- workflow de Preview e canary;
- pendencia de paridade de env Preview;
- sitemap de 50 URLs;
- inventario canonical;
- estado GSC historico 15 URLs / 0 indexed;
- tracker GSC Wizard com 50 URLs pending;
- necessidade de full access + domain property;
- proximo passo exato;
- Decision Log inicial;
- contrato obrigatorio de manutencao deste `memory.md`.

### Onde paramos

Aguardando o usuario concluir no ambiente Google/GSC Wizard:

1. **Enable full access**;
2. criar `sc-domain:auditseo.com.br`.

Depois disso: registrar propriedade -> tracker -> primeira URL Inspection -> classificar indexacao -> atualizar Case Study #001 -> atualizar `memory.md`.
