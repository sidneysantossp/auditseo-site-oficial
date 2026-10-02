# AUDITSEO — Internal Link Equity Audit

**Audit date:** 2026-10-02  
**Scope:** production sitemap + current editorial/service graph  
**Method:** crawl of rendered production HTML plus source-level analysis of article/service relationships.

## Executive result

The internal-link foundation is already strong.

- 55 sitemap pages crawled
- 0 crawl errors
- 33 article pages
- 13 service/commercial pages
- no commercial-page orphan detected
- no article orphan detected
- every crawled page is reachable from the home in at most 2 clicks when the full internal graph is considered

The remaining work is not "add links everywhere". It is **rebalance a few commercial owners and strengthen a small set of underlinked editorial nodes**.

## Crawl depth

Full internal graph:

- depth 0: home
- depth 1: 28 pages
- depth 2: 26 pages
- unreachable: 0

Body/contextual graph after removing semantic header/footer:

- depth 0: home
- depth 1: 19 pages
- depth 2: 33 pages
- only legal pages were not reachable through body-contextual paths

This means the site does not have a deep-click problem.

## Link-volume snapshot

Rendered production crawl before the balancing changes:

- article → article links: **160**
- article → service links: **231**
- service → article links: **53**
- blog hub → article links: **41**

These are rendered link occurrences, not unique-source counts.

## Systemic links must not be confused with contextual authority

Several destinations appear from most pages because of shared site components:

- `/diagnostico`
- `/sobre`
- `/blog/framework-crawl-index-retrieve-understand-trust-cite`
- `/autor/sidney-santos` across the article family

They are useful for navigation/entity architecture, but they should be separated from page-specific editorial recommendations when evaluating contextual internal authority.

## Article → service coverage before balancing

Unique articles referencing each service:

| Service | Primary owner articles | All related articles |
|---|---:|---:|
| GEO/Search AI Readiness | 11 | 19 |
| Entity Authority | 4 | 14 |
| Intent Content Architecture | 2 | 13 |
| Search Foundation | 3 | 12 |
| Organic Evolution | 1 | 9 |
| Search Recovery | 1 | 7 |
| Consultoria SEO | 4 | 6 |
| Auditoria SEO | 2 | 5 |
| Migration & Risk | 1 | 5 |
| Continuous GEO / Search AI | 1 | 3 |
| Site sem tração | 2 | 3 |

Interpretation:

- no commercial destination was orphaned;
- GEO Readiness was carrying too much **primary-owner** responsibility for content that actually belongs to ongoing measurement/consulting;
- continuous `/geo-ia` was underrepresented as a primary next step;
- `/consultoria-seo` was slightly underrepresented for the canonical Search Intelligence definition.

## Rebalance applied

### Search Intelligence

`/blog/o-que-e-search-intelligence`

Primary bridge changed from GEO Readiness to:

`/consultoria-seo`

Reason: Search Intelligence is the operating discipline used across SEO, GEO, content, authority and measurement. It is broader than a readiness audit.

### AI visibility measurement

`/blog/como-medir-visibilidade-em-ia`

Primary bridge changed to:

`/geo-ia`

Reason: repeated multi-interface measurement belongs naturally to an ongoing Search AI operating loop.

### Provider recommendation

`/blog/como-ser-recomendado-pelo-chatgpt-como-fornecedor`

Primary bridge changed to:

`/geo-ia`

GEO Readiness was removed from this article's service set because provider consideration/recommendation is an ongoing authority + content + measurement problem, not merely a one-time readiness check.

### Search AI benchmark protocol

`/blog/protocolo-benchmark-search-ai`

Primary bridge changed to:

`/geo-ia`

GEO Readiness remains as a secondary diagnostic path.

## Primary-owner distribution after balancing

| Service | Primary owner articles |
|---|---:|
| GEO/Search AI Readiness | 8 |
| Consultoria SEO | 5 |
| Entity Authority | 4 |
| Continuous GEO / Search AI | 3 |
| Search Foundation | 3 |
| Intent Content Architecture | 2 |
| Auditoria SEO | 2 |
| Site sem tração | 2 |
| Organic Evolution | 1 |
| Search Recovery | 1 |
| Migration & Risk | 1 |

This is more semantically distributed without forcing artificial equality.

A narrow service should not receive the same number of owners as a broad service merely to make a chart look balanced.

## Underlinked editorial nodes found

The crawl showed three useful documents with low contextual inbound support:

### Core Web Vitals

`/blog/core-web-vitals-guia`

Actions:

- linked from the pre-launch checklist;
- surfaced from `/solucoes/projetos-comecando-do-zero`.

Reason: performance quality is a natural part of launch readiness and Search Foundation.

### Google Meu Negócio

`/blog/google-meu-negocio-guia-completo`

Actions:

- linked from the Entity Authority foundation article;
- surfaced from `/solucoes/autoridade-de-entidade`.

Reason: local profile/category/review consistency is a concrete entity/corroboration surface.

### Applied SEO audit

`/blog/auditoria-seo-aplicada-auditseo`

Actions:

- linked from the generic audit-method article;
- surfaced directly from `/auditoria-seo`.

Reason: the applied case is stronger proof for a commercial audit page than another generic framework link.

## Service → article reciprocity

After the changes:

- `/auditoria-seo` links to method + applied case + Search AI diagnostic;
- `/solucoes/projetos-comecando-do-zero` links to launch checklist + Core Web Vitals + entity architecture;
- `/solucoes/autoridade-de-entidade` links to entity foundation + entity architecture + Google Business Profile + schema;
- migration, recovery, content, evolution and GEO readiness already had coherent article sets.

## Anchor-text correction

The contextual CTA immediately after each article's direct answer previously used the generic label:

`Ver solução relacionada`

It now uses the destination's actual commercial label:

`Ver {nome da solução}`

This improves clarity for users and makes the relationship between document and service explicit without keyword stuffing.

## What was deliberately not done

- no sitewide insertion of exact-match anchors;
- no artificial requirement that every article link to every service;
- no URL/title/meta/canonical changes;
- no attempt to flatten all services to the same inbound-link count;
- no removal of systemic navigation links;
- no mass inline-link injection into article paragraphs.

## Why no mass inline-link insertion

The article template already provides:

1. an intent-boundary path where necessary;
2. a contextual primary-service bridge immediately after the direct answer;
3. related-document cards;
4. a primary/secondary commercial action area at the end.

The audit found strong connectivity and shallow click depth. Adding many links inside paragraphs merely to increase counts would reduce editorial clarity.

Inline links should be added only when a specific sentence genuinely depends on another canonical document.

## Review trigger

Re-run this audit when one of these occurs:

- +10 canonical articles;
- a new service family launches;
- GSC shows two URLs competing for the same query family;
- a commercial page changes its role;
- a crawl identifies a new page with fewer than 2 meaningful contextual inbound sources;
- navigation/header/footer architecture changes.
