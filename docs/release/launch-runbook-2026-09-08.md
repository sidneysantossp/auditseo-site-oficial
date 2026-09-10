# AUDITSEO — Runbook de Release 2026-09-08

Este documento registra a sequência de release do site AUDITSEO. Ele existe para evitar merge fora de ordem, perda de commits entre branches empilhadas e publicação sem smoke HTTP real.

## Estado das branches

A arquitetura atual é empilhada e deve ser preservada sem rebase, amend, squash ou force-push:

1. `main`
2. `fix/launch-p0-search-foundation` — PR #2
3. `content/search-intelligence-positioning-v1` — PR #3
4. `content/search-intelligence-positioning-v2` — PR #4

Estado observado em 2026-09-08 após a criação do CI de smoke no P0:

- V1 permanece 48 commits à frente do antigo merge-base P0;
- V1 está **4 commits atrás** do P0 atual porque o workflow/smoke protegido foi criado depois da ramificação editorial;
- V2 está 111 commits à frente de V1 e 0 atrás.

Esses 4 commits do P0 não devem ser propagados por rebase. Depois que PR #2 entrar em `main`, V1 deve incorporar o `main` atualizado por **merge normal**, validar o resultado e só então ser retargetado/mergeado. O mesmo princípio vale para V2 depois da integração da V1.

## Preview hosts reportados pelo Vercel bot

### PR #2 — P0 técnico

`https://auditseo-site-oficial-git-fix-launch-p0-search-6071ef-auditseo.vercel.app`

Smoke:

```bash
npm run smoke:launch -- https://auditseo-site-oficial-git-fix-launch-p0-search-6071ef-auditseo.vercel.app
```

### PR #3 — V1 editorial

`https://auditseo-site-oficial-git-content-search-intell-728331-auditseo.vercel.app`

### PR #4 — V2 narrativa/editorial final

`https://auditseo-site-oficial-git-content-search-intell-18a57a-auditseo.vercel.app`

Smoke:

```bash
npm run smoke:launch -- https://auditseo-site-oficial-git-content-search-intell-18a57a-auditseo.vercel.app
```

## Deployment Protection / Automation Bypass

O GitHub Actions conseguiu alcançar o Preview P0 por rede externa, mas todas as rotas retornaram HTTP 302 para `/sso-api`. Isso confirmou que **Vercel Deployment Protection/SSO intercepta as requisições antes da aplicação**.

O smoke P0 agora suporta o header oficial `x-vercel-protection-bypass` por meio da variável de ambiente `VERCEL_AUTOMATION_BYPASS_SECRET`. Nenhum segredo é versionado.

Workflow:

`.github/workflows/preview-smoke.yml`

Configuração necessária antes de o gate poder executar contra o app:

1. no projeto Vercel `auditseo-site-oficial`, habilitar/criar **Protection Bypass for Automation** em Deployment Protection;
2. copiar o valor gerado sem colocá-lo em arquivo/commit;
3. no repositório GitHub, criar um Actions secret chamado exatamente:

   `VERCEL_AUTOMATION_BYPASS_SECRET`

4. usar o mesmo valor gerado pela Vercel;
5. rerodar o workflow `Preview HTTP smoke` ou fazer um novo commit/push na branch P0;
6. exigir conclusão verde antes do merge.

Última execução do workflow antes dessa configuração:

- GitHub runner: alcançou o Preview;
- Preview: protegido por SSO;
- secret `VERCEL_AUTOMATION_BYPASS_SECRET`: **não configurado no GitHub Actions**;
- smoke da aplicação: ainda não executado através da proteção.

Esse é o blocker operacional atual. Não interpretar os antigos 302 como falha de SEO da aplicação.

## Baseline oficial antes do release

A propriedade Search Console `https://auditseo.com.br/` está conectada com acesso `siteOwner`.

Dados finalizados consultados em 2026-09-08:

- período: **2026-08-09 a 2026-09-05**;
- cliques: **0**;
- impressões: **0**;
- top queries: nenhuma retornada;
- top pages: nenhuma retornada;
- período anterior 2026-07-12 a 2026-08-08: também 0 cliques / 0 impressões.

Esse é o ponto zero oficial do Case Study #001. Detalhamento metodológico em `docs/seo/baseline-2026-09-08.md`.

## Gate 1 — PR #2 / P0 técnico

Não fazer merge enquanto os seguintes pontos não forem executados contra o Preview do PR #2:

- `Preview HTTP smoke` consegue atravessar Deployment Protection;
- todas as rotas de lançamento retornam o status pretendido;
- SSR contém title e canonical corretos;
- páginas indexáveis não carregam `noindex`;
- URL arbitrária retorna HTTP 404 real, `noindex,follow` e sem canonical;
- aliases retornam 301/308 para o destino correto;
- `/robots.txt` retorna 200;
- `/sitemap.xml` retorna 200;
- `/api/leads` valida payload e não produz falso sucesso;
- homepage, diagnóstico e newsletter confirmam entrega real quando o canal server-side está configurado;
- ao menos um canal real de entrega está configurado em Preview/Production: webhook e/ou Resend.

Somente depois disso:

1. tirar PR #2 de draft;
2. revisar head esperado;
3. mergear PR #2 em `main` usando merge commit normal;
4. validar deployment de produção;
5. executar smoke em produção.

## Gate 2 — PR #3 / V1 editorial

Depois que PR #2 estiver em `main`:

1. fazer merge normal de `main` na branch `content/search-intelligence-positioning-v1` para incorporar os commits P0 posteriores ao antigo merge-base;
2. resolver qualquer conflito preservando o smoke com suporte a Automation Bypass e a camada editorial V1;
3. confirmar `behind_by = 0` contra `main`;
4. retarget PR #3 para `main`;
5. confirmar que o diff representa a camada editorial esperada;
6. confirmar build verde;
7. não rebasear e não reescrever histórico;
8. mergear PR #3 em `main` com merge commit normal;
9. validar produção.

## Gate 3 — PR #4 / V2 final

Depois que PR #3 estiver em `main`:

1. fazer merge normal do `main` atualizado na branch `content/search-intelligence-positioning-v2` se houver commits de base ainda ausentes;
2. confirmar `behind_by = 0`;
3. retarget PR #4 para `main`;
4. confirmar diff final;
5. confirmar `npm run build` verde;
6. o build deve executar `content:check` antes do Vite;
7. executar o smoke completo contra o Preview V2;
8. confirmar `/diagnostico?cenario=geo` com canonical limpo em `/diagnostico`;
9. validar redirects legados;
10. validar `/estudos-busca-ia` como `noindex,follow`;
11. confirmar que as **45 URLs canônicas pretendidas** estão cobertas;
12. confirmar preservação em HTTP 200 das URLs indexadas `/blog/google-meu-negocio-guia-completo` e `/blog/core-web-vitals-guia`;
13. confirmar HTTP 308 de `/blog/como-escolher-agencia-seo` para `/blog/agencia-seo-consultoria-ou-time-interno`;
14. somente então tirar PR #4 de draft e mergear em `main`.

## Preservação de URLs legadas já descobertas em busca

A ativação do 404 real muda o comportamento de URLs que antes podiam cair no soft-routing legado. Por isso, páginas antigas encontradas externamente precisam de decisão explícita.

Decisões já implementadas:

- `/blog/google-meu-negocio-guia-completo` → preservar URL, reescrever conteúdo com fontes oficiais;
- `/blog/core-web-vitals-guia` → preservar URL, reescrever conteúdo com fontes oficiais;
- `/blog/como-escolher-agencia-seo` → 308 para `/blog/agencia-seo-consultoria-ou-time-interno`.

Não adicionar ao redirect map uma URL por suposição. Registrar apenas URLs realmente encontradas ou conhecidas no histórico.

## Gate editorial automatizado

O build da V2 deve falhar quando detectar problemas objetivos como:

- slug de artigo duplicado;
- `metaTitle` duplicado;
- description duplicada;
- artigo canônico fora do sitemap;
- URL de artigo órfã no sitemap;
- artigo sem rota SSR explícita;
- link `/blog/*` quebrado no grafo editorial;
- artigo sem trilha em `articleRelations`;
- solução comercial sem Base pública em `serviceArticleRelations`.

Avisos de comprimento de title/description não bloqueiam o build.

## Validação pós-produção

Após o merge final:

1. rodar smoke em `https://www.auditseo.com.br`;
2. validar homepage, `/solucoes`, `/diagnostico`, `/blog`, 8 soluções e amostra dos documentos no HTML SSR;
3. confirmar redirects históricos, incluindo a URL legada de agência;
4. confirmar 404 real;
5. confirmar `robots.txt` e sitemap publicados;
6. confirmar no Search Console que `https://auditseo.com.br/` continua acessível como propriedade correta;
7. enviar/reenviar `https://www.auditseo.com.br/sitemap.xml`;
8. solicitar indexação manual apenas das páginas centrais prioritárias e das URLs preservadas relevantes, não das 45 URLs indiscriminadamente;
9. comparar o primeiro período pós-release ao baseline oficial de **0 impressões / 0 cliques**;
10. registrar primeiras queries/páginas assim que aparecerem;
11. separar branded vs non-branded somente quando existir amostra;
12. registrar baseline comercial: diagnóstico iniciado, formulário enviado, entrega confirmada e origem/cenário;
13. executar a fila de correção de entidade externa somente depois que a nova narrativa estiver publicada;
14. somente depois escolher o próximo ciclo editorial com base em demanda real.

## Artefatos de baseline

- `docs/seo/baseline-2026-09-08.md` — Search Console oficial + snapshot externo pré-lançamento, com as fontes explicitamente separadas;
- `docs/seo/entity-citation-cleanup-2026-09-08.md` — fila de inconsistências externas verificadas.

## Regra de segurança

Nenhum status `Vercel SUCCESS` substitui o smoke HTTP real. Build verde prova compilação/deploy, não prova comportamento runtime de status, canonical, redirects, 404, robots ou formulários.

Nenhum dado proprietário do Search AI Observatory deve ser publicado antes de coleta, revisão humana e metodologia versionada.