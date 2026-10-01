# AUDITSEO — CTR / SERP Review

**Snapshot:** 2026-10-01  
**GSC property:** `https://www.auditseo.com.br/`  
**Finalized period:** 2026-09-01 → 2026-09-28

This review exists to prevent blind rewrites on pages already earning positions. A zero CTR is not, by itself, evidence that the title or content is wrong; query alignment, impression volume and position must be considered together.

## Priority review

| URL | Impressions | Avg. position | CTR | Current SERP framing | Decision |
|---|---:|---:|---:|---|---|
| `/blog/site-indexado-sem-impressoes` | 19 | 8.95 | 0% | **Site Indexado Sem Impressões? Como Diagnosticar | AUDITSEO** | **Changed.** GSC exposes matching queries such as “site indexado”, “pagina indexada” and “páginas indexadas”. Title/description now answer the observed intent directly. |
| `/blog/quanto-custa-consultoria-seo-geo-ia` | 17 | 6.29 | 0% | **Quanto Custa Consultoria SEO e GEO no Brasil em 2026? | AUDITSEO** | **Changed.** GSC exposes “quanto custa uma consultoria de geo no brasil” at avg. position 7.67. Snippet aligned to that wording while preserving the benchmark. |
| `/estudos-busca-ia` | 12 | 5.75 | 0% | **Pesquisas, Benchmarks e Datasets de Search AI | AUDITSEO** | **Preserve.** Strong category match; returned query data is insufficient to justify a rewrite. |
| `/blog/protocolo-benchmark-search-ai` | 7 | 4.43 | 0% | **Protocolo de Benchmark Search AI | Metodologia AUDITSEO** | **Preserve.** Strong exact-topic framing; no page-level query evidence supports a safer replacement. |
| `/solucoes/evolucao-organica` | 7 | 4.29 | 0% | **Consultoria SEO Contínua e Evolução Orgânica | AUDITSEO** | **Preserve.** Already uses buyer language and is protected as a strong commercial asset. |
| `/blog/autoridade-de-entidade-o-que-e` | 6 | 8.17 | 0% | **Autoridade de Entidade: Guia Prático para Busca e IA | AUDITSEO** | **Preserve.** GSC query “entidade empresarial” is adjacent but not enough evidence to retarget the page. |
| `/blog/schema-ajuda-aparecer-no-chatgpt` | 6 | 4.17 | 0% | **Schema Ajuda a Aparecer no ChatGPT? O Papel Real | AUDITSEO** | **Preserve.** Clear intent match and strong position; avoid title churn without query evidence. |
| `/solucoes/recuperacao-organica` | 6 | 3.50 | 0% | **Recuperação de Tráfego e Queda de SEO | AUDITSEO** | **Preserve.** Commercial framing is already explicit and page is a protected asset. |
| `/blog/como-escolher-consultoria-seo` | 5 | 10.80 | 0% | **Como Escolher Consultoria SEO + IA em 2026 | AUDITSEO** | **Preserve title; improve journey.** Article now links to `/consultoria-seo` and `/auditoria-seo`, separating informational and transactional intent. |
| `/blog/como-mercado-brasileiro-vende-geo-search-ai` | 5 | 4.20 | 0% | **Como Consultorias GEO Vendem Search AI em 2026 | AUDITSEO** | **Preserve.** It is a research asset with already-specific framing. |
| `/solucoes/site-sem-tracao` | 5 | 5.20 | 0% | **Site sem Tráfego ou Tração Orgânica | AUDITSEO** | **Preserve.** Buyer-language service framing already matches the scenario. |
| `/solucoes/projetos-comecando-do-zero` | 4 | 8.00 | 0% | **Search Foundation para Novos Sites e Marcas | AUDITSEO** | **Preserve.** GSC explicitly returns “search foundation” at avg. position 8; removing the proprietary term would discard observed relevance. |

## High-impression pages outside striking distance

### `/blog/como-ias-encontram-e-citam-fontes`
- 48 impressions
- avg. position 22.40
- CTR 0%
- observed query: **“localizador de fontes de ia”** — 23 impressions, avg. position 34.39

Decision: **do not force the page into a “localizador” query yet.** The current ranking is outside the high-click zone and the query may represent a different tool-like intent. First preserve the page’s source/citation research role and monitor whether the query cluster becomes stable.

### Homepage
- 47 impressions
- 1 click
- avg. position 34.70
- branded query `auditseo`: 10 impressions, 0 clicks, avg. position 15.6

Decision: brand-first title on Home — **AUDITSEO | Consultoria SEO, GEO e Search Intelligence** — plus clearer company/about/entity signals. Generic commercial intent now has dedicated landing pages rather than forcing the Home to own everything.

## Review rule

A page is changed only when at least one of these is true:
1. GSC exposes a stable query-page relationship that the current snippet does not answer clearly;
2. the page is a commercial owner but the snippet still uses internal/proprietary language before buyer language;
3. title/description is factually outdated;
4. the current snippet creates a measurable conflict with another intended landing page.

Otherwise, preserve the page and re-check after the next finalized GSC window.
