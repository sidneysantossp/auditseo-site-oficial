# AUDITSEO — Runbook de Release 2026-09-08

Este documento registra a sequência de release do site AUDITSEO. Ele existe para evitar merge fora de ordem, perda de commits entre branches empilhadas e publicação sem smoke HTTP real.

## Estado das branches

A arquitetura atual é empilhada e deve ser preservada sem rebase, amend, squash ou force-push:

1. `main`
2. `fix/launch-p0-search-foundation` — PR #2
3. `content/search-intelligence-positioning-v1` — PR #3
4. `content/search-intelligence-positioning-v2` — PR #4

Comparação confirmada em 2026-09-08 antes dos últimos commits de preservação editorial:

- PR #2: 28 commits à frente de `main`, 0 atrás;
- PR #3: 48 commits à frente da branch do PR #2, 0 atrás;
- PR #4: 94 commits à frente da branch do PR #3, 0 atrás naquele checkpoint.

O PR #4 continuou recebendo commits lineares depois desse checkpoint. Antes do merge, executar nova comparação e validar `behind_by = 0` em cada camada.

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

> Observação: a conexão Vercel disponível na sessão que gerou este runbook não possuía acesso ao projeto `auditseo-site-oficial`. Build/deploy foi validado via GitHub/Vercel status, mas o smoke HTTP autenticado não foi declarado como aprovado.

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

1. retarget PR #3 de `fix/launch-p0-search-foundation` para `main`;
2. confirmar que o diff representa apenas a camada editorial V1;
3. confirmar build verde;
4. não rebasear e não reescrever histórico;
5. mergear PR #3 em `main` com merge commit normal;
6. validar produção.

## Gate 3 — PR #4 / V2 final

Depois que PR #3 estiver em `main`:

1. retarget PR #4 de `content/search-intelligence-positioning-v1` para `main`;
2. confirmar diff final;
3. confirmar `npm run build` verde;
4. o build deve executar `content:check` antes do Vite;
5. executar o smoke completo contra o Preview V2;
6. confirmar `/diagnostico?cenario=geo` com canonical limpo em `/diagnostico`;
7. validar redirects legados;
8. validar `/estudos-busca-ia` como `noindex,follow`;
9. confirmar que as **45 URLs canônicas pretendidas** estão cobertas;
10. confirmar preservação em HTTP 200 das URLs indexadas `/blog/google-meu-negocio-guia-completo` e `/blog/core-web-vitals-guia`;
11. confirmar HTTP 308 de `/blog/como-escolher-agencia-seo` para `/blog/agencia-seo-consultoria-ou-time-interno`;
12. somente então tirar PR #4 de draft e mergear em `main`.

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