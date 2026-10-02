# AUDITSEO — Blog Editorial Audit

**Audit date:** 2026-10-02  
**Scope:** 33 canonical editorial documents  
**Inputs:** repository content, internal-link graph, current commercial architecture and finalized GSC evidence documented on 2026-10-01.

## Decision model

Each article was reviewed on four axes:

1. **Intent ownership** — what single question/decision should this URL own?
2. **Depth** — does the document contain enough evidence, method and next-step logic for that intent?
3. **Commercial bridge** — does the article connect naturally to a service without becoming a disguised landing page?
4. **Cannibalization risk** — is another URL trying to solve essentially the same primary intent?

Word count is not a quality score. A short article is expanded only when the missing material improves the decision or diagnostic value.

## Protected GSC assets

The following articles already had finalized Search Console evidence on 2026-10-01 and are protected from title/intent churn without new query evidence:

| URL | Impressions | Avg. position | Decision |
|---|---:|---:|---|
| `/blog/site-indexado-sem-impressoes` | 19 | 8.95 | preserve current intent/title after prior CTR alignment |
| `/blog/quanto-custa-consultoria-seo-geo-ia` | 17 | 6.29 | preserve pricing-benchmark ownership |
| `/blog/protocolo-benchmark-search-ai` | 7 | 4.43 | preserve methodology ownership |
| `/blog/autoridade-de-entidade-o-que-e` | 6 | 8.17 | preserve entity-authority definition |
| `/blog/schema-ajuda-aparecer-no-chatgpt` | 6 | 4.17 | preserve schema-specific intent |
| `/blog/como-escolher-consultoria-seo` | 5 | 10.80 | preserve buyer-selection intent |
| `/blog/como-mercado-brasileiro-vende-geo-search-ai` | 5 | 4.20 | preserve research/claims benchmark |

`/blog/como-ias-encontram-e-citam-fontes` had 48 impressions at avg. position 22.40, with a large share from the adjacent query “localizador de fontes de ia”. That query is not sufficient evidence to retarget the article toward a tool/localizador intent.

## Article-by-article decisions

| Article | State | Primary intent / decision |
|---|---|---|
| `agencia-seo-consultoria-ou-time-interno` | DIFFERENTIATE | choose operating model: agency, consultancy or internal team |
| `auditoria-seo-aplicada-auditseo` | PRESERVE + BOUNDARY | real applied case; not a generic audit checklist |
| `auditoria-seo-o-que-deve-conter` | EXPANDED NOW + BOUNDARY | what a useful SEO audit must contain |
| `autoridade-de-entidade-o-que-e` | GSC PROTECTED + BOUNDARY | define entity authority and evidence |
| `chatgpt-nao-cita-meu-site` | PRESERVE + BOUNDARY | competitive gap when another company appears and yours does not |
| `checklist-seo-antes-lancar-site` | EXPANDED NOW | pre-launch Search Foundation and release gate |
| `como-aparecer-no-chatgpt` | DIFFERENTIATE | broad controllable conditions for ChatGPT visibility/eligibility |
| `como-auditar-crawlers-de-ia` | DIFFERENTIATE | technical crawler policy, robots, CDN/WAF and logs |
| `como-criar-conteudo-citavel` | PRESERVE | editorial properties that make a document useful as a source |
| `como-escolher-consultoria-seo` | GSC PROTECTED + BOUNDARY | select a specific consultancy/provider |
| `como-estruturar-entidade-empresarial` | PRESERVE | construct a coherent company/entity representation |
| `como-ias-encontram-e-citam-fontes` | PRESERVE/MONITOR + BOUNDARY | source discovery/retrieval/citation chain |
| `como-medir-se-geo-esta-funcionando` | DIFFERENTIATE | evaluate change after a GEO/Search AI intervention |
| `como-medir-visibilidade-em-ia` | DIFFERENTIATE | design a reproducible multi-interface visibility benchmark |
| `como-mercado-brasileiro-vende-geo-search-ai` | GSC PROTECTED | research benchmark of public market claims |
| `como-ser-recomendado-pelo-chatgpt-como-fornecedor` | DIFFERENTIATE | provider consideration and recommendation |
| `conteudo-sem-trafego-atualizar-consolidar-remover` | PRESERVE / P2 EXPANSION | content-governance decision: keep, update, consolidate or remove |
| `core-web-vitals-guia` | PRESERVE | CWV measurement and interpretation |
| `framework-crawl-index-retrieve-understand-trust-cite` | PRESERVE | S.I.G.N.A.L.-style dependency diagnostic framework |
| `geo-o-que-e-o-que-nao-garante` | PRESERVE | category definition and non-guarantees |
| `google-meu-negocio-guia-completo` | PRESERVE | Google Business Profile / local visibility |
| `llms-txt-funciona` | PRESERVE | evidence and limits around llms.txt |
| `migracao-site-sem-perder-seo` | NEW OWNER | planned migration: inventory, URL equivalence, redirects, staging, QA and monitoring |
| `o-que-consultoria-seo-deve-entregar` | EXPANDED NOW + BOUNDARY | expected deliverables after consultancy model is chosen |
| `o-que-e-search-intelligence` | PRESERVE | canonical definition of AUDITSEO Search Intelligence |
| `protocolo-benchmark-search-ai` | GSC PROTECTED | frozen benchmark methodology |
| `quanto-custa-consultoria-seo-geo-ia` | GSC PROTECTED | pricing-format research benchmark |
| `queda-trafego-depois-redesign` | EXPANDED NOW | diagnose redesign/migration traffic loss |
| `schema-ajuda-aparecer-no-chatgpt` | GSC PROTECTED + BOUNDARY | role and limits of structured data |
| `seo-vs-geo-vs-aeo` | PRESERVE | terminology/comparison intent |
| `site-indexado-mas-ausente-em-search-ai` | PRESERVE | Google presence vs AI retrieval gap |
| `site-indexado-sem-impressoes` | GSC PROTECTED | indexed but no Search impressions |
| `trafego-organico-estagnado-proxima-oportunidade` | PRESERVE / P2 EXPANSION | opportunity mining after organic growth stalls |

## Explicit non-consolidation decisions

### Measurement pair

Keep both:

- `como-medir-visibilidade-em-ia` owns **measurement design across interfaces**;
- `como-medir-se-geo-esta-funcionando` owns **post-intervention evaluation across cycles**.

They now cross-link with explicit scope boundaries.

### Source discovery vs crawler audit

Keep both:

- `como-ias-encontram-e-citam-fontes` owns the discovery/retrieval/citation chain;
- `como-auditar-crawlers-de-ia` owns robots, user-agents, CDN/WAF and logs.

### Entity authority vs schema

Keep both:

- `autoridade-de-entidade-o-que-e` owns identity, evidence and corroboration;
- `schema-ajuda-aparecer-no-chatgpt` owns the structured-data question.

GSC already gives the schema page strong topic-specific position, which increases the cost of unnecessary consolidation.

### ChatGPT visibility cluster

Keep three:

- `como-aparecer-no-chatgpt` — broad controllable conditions;
- `chatgpt-nao-cita-meu-site` — competitive-gap diagnosis;
- `como-ser-recomendado-pelo-chatgpt-como-fornecedor` — provider consideration/recommendation.

Mention, citation and recommendation are not equivalent events.

### SEO audit pair

Keep both:

- `auditoria-seo-o-que-deve-conter` — normative/general method;
- `auditoria-seo-aplicada-auditseo` — observed applied case.

### Buyer-decision cluster

Keep three:

- `agencia-seo-consultoria-ou-time-interno` — choose operating model;
- `como-escolher-consultoria-seo` — choose a provider;
- `o-que-consultoria-seo-deve-entregar` — evaluate expected deliverables.

These are sequential buyer decisions, not duplicate articles.

## Commercial coverage result

The post-audit service-link review found editorial links to every current commercial destination. Two gaps were then separated:

- `/solucoes/migracao-risco-seo` had supporting links but no article where migration risk was the **primary** commercial bridge;
- `/geo-ia` had supporting links but no article where continuous GEO/Search AI work was the **primary** bridge.

Actions taken:

- `migracao-site-sem-perder-seo` is now the primary editorial owner for migration-risk consulting;
- `como-medir-se-geo-esta-funcionando` now points primarily to `/geo-ia`, because post-intervention measurement belongs to an ongoing learning loop rather than a one-time readiness audit.

The migration guide is explicitly separated from:

- `checklist-seo-antes-lancar-site` — net-new launch readiness;
- `queda-trafego-depois-redesign` — recovery after a loss has already occurred.

## Consolidation result

**No new consolidation/redirect is justified on 2026-10-02.**

The existing intentional editorial redirect `/blog/como-escolher-agencia-seo` remains the correct type of consolidation: an obsolete/alternate intent is redirected to the canonical consultancy-selection article.

Any future merge must be supported by at least one of:

- stable GSC query-page conflict;
- two URLs consistently competing for the same query family;
- materially duplicated primary answer with no distinct journey role;
- link/referral signals that make one canonical clearly preferable.

## Expansion performed in this sprint

### `checklist-seo-antes-lancar-site`

Added:
- release gate with owner/evidence/acceptance criteria;
- post-production validation after the minute-zero smoke test.

### `queda-trafego-depois-redesign`

Added:
- evidence matrix before rollback;
- separation between time-to-fix and time-to-recovery.

### `auditoria-seo-o-que-deve-conter`

Added:
- anatomy of a defensible audit finding;
- separation of executive decisions from raw crawler evidence.

### `o-que-consultoria-seo-deve-entregar`

Added:
- minimum operating cadence;
- acceptance criteria distinguishing recommendation, implementation and validation.

## P2 expansion queue

These documents are useful and distinct but can gain additional practical depth later without urgency:

1. `conteudo-sem-trafego-atualizar-consolidar-remover` — add a compact decision matrix with example outcomes;
2. `trafego-organico-estagnado-proxima-oportunidade` — add opportunity scoring examples and query/page evidence patterns.

Do not expand them merely to increase word count.

## Review rule

Before changing a protected or overlapping article:

1. inspect the latest finalized GSC query-page relationship;
2. confirm whether the current URL already owns a distinct journey decision;
3. prefer an explicit intent boundary + internal link over consolidation when both intents are legitimate;
4. preserve historical URLs and redirects;
5. record the reason for any future merge before deployment.
