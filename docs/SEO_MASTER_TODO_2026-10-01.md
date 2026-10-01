# AUDITSEO — SEO Master Remediation To-Do

**Baseline date:** 2026-10-01  
**Working branch:** `seo-audit-remediation-2026-10-01`  
**Repository:** `sidneysantossp/auditseo-site-oficial`  
**Canonical property used for performance:** `https://www.auditseo.com.br/`  
**Status:** diagnosis consolidated; remediation not yet merged to production.

## 1. Evidence consolidated before remediation

### Public audit (2026-10-01)
The external audit reviewed 50 sitemap URLs and reported:
- 50/50 URLs returned HTTP 200.
- Canonicals matched the examined URLs.
- One H1 per page.
- No duplicate titles among the 50 examined URLs.
- No `noindex` / `nosnippet` found in the examined directives.
- Main content present in initial HTML before JavaScript.
- Sitemap pages reachable within two internal-link hops from the homepage.
- Real 404 for a nonexistent test URL.
- Non-www permanently redirects to www.
- `/solucoes/` was observed using HTTP 307 to `/solucoes` and should be reviewed for permanent normalization.
- `og:image` was not found on the 50 pages examined.
- Structured data parsed syntactically, but semantic completeness still needs validation.

Main strategic diagnosis:
- technical foundation is healthier than commercial/semantic positioning;
- Search Intelligence should remain the differentiation;
- SEO should become a clearer acquisition/contracting category;
- commercial destinations for **Consultoria SEO** and **Auditoria SEO** are missing;
- proprietary solution names currently carry too much of the comprehension burden;
- execution proof and entity corroboration are weaker than methodology/content depth.

### Google Search Console — verified connection
Connected organization: **AUDITSEO**  
Connected property used: **`https://www.auditseo.com.br/`**  
Permission: **siteOwner**

> Note: the connected property list does **not** currently expose `sc-domain:auditseo.com.br` or `https://auditseo.com.br/`. This does not prove those properties do not exist in Google Search Console; it means they are not available through the current connector.

#### Current period vs previous comparable period
| Metric | 2026-09-01 → 2026-09-28 | 2026-08-04 → 2026-08-31 | Change |
|---|---:|---:|---:|
| Clicks | 2 | 2 | 0 |
| Impressions | 199 | 264 | -65 |
| CTR | 1.01% | 0.76% | +0.25 pp |
| Avg. position | 24.58 | 57.00 | +32.42 positions |

Interpretation:
- rankings improved materially on the returned query set;
- visibility breadth/impressions fell;
- clicks remain effectively flat;
- the site is beginning to surface for commercial SEO terms, but mostly at weak positions and with zero CTR.

### Commercial query evidence from GSC
| Query | Impressions | Avg. position | Current landing behavior |
|---|---:|---:|---|
| auditoria de seo | 9 | 68.67 | Home + audit article |
| auditoria seo | 7 | 46.86 | Audit article |
| serviço de auditoria de seo | 5 | 57.60 | Home |
| contratar auditoria seo | 1 | 58.00 | Home |
| audit seo | 4 | 27.50 | Home |
| agencia seo ai | 1 | 20.00 | Home |
| agencia seo ia | 1 | 23.00 | Home |
| migração de seo | 4 | 76.75 | Migration solution |
| consultor seo curitiba | 2 | 66.00 | Local vertical page |
| consultoria de seo para clínica estética | 1 | 40.00 | Local vertical page |

### Confirmed cannibalization candidate
GSC returns **`auditoria de seo`** across:
- Homepage: 7 impressions, avg. position 71.86
- `/blog/auditoria-seo-o-que-deve-conter`: 2 impressions, avg. position 57.50

Target resolution: create a dedicated commercial `/auditoria-seo` destination and make home/editorial content support it.

### Existing pages with strong positions but zero clicks
These require CTR/snippet/intention review before rewriting content:
| Page | Impressions | Avg. position | CTR |
|---|---:|---:|---:|
| `/blog/protocolo-benchmark-search-ai` | 7 | 4.43 | 0% |
| `/solucoes/evolucao-organica` | 7 | 4.29 | 0% |
| `/blog/schema-ajuda-aparecer-no-chatgpt` | 6 | 4.17 | 0% |
| `/solucoes/recuperacao-organica` | 6 | 3.50 | 0% |
| `/estudos-busca-ia` | 12 | 5.75 | 0% |
| `/blog/quanto-custa-consultoria-seo-geo-ia` | 17 | 6.29 | 0% |
| `/blog/autoridade-de-entidade-o-que-e` | 6 | 8.17 | 0% |
| `/blog/site-indexado-sem-impressoes` | 19 | 8.95 | 0% |
| `/blog/como-escolher-consultoria-seo` | 5 | 10.80 | 0% |

### Current repository checks that corroborate the audit
- Home title in `src/routes/index.tsx` is currently **AUDITSEO | Search Intelligence para Diagnóstico e Autoridade**.
- Homepage Organization JSON-LD currently has no `sameAs`.
- Homepage metadata currently has no `og:image`.
- Public case component `src/components/AuditseoCaseStudyPage.tsx` states that the baseline came from `https://auditseo.com.br/` and displays 0 impressions / 0 clicks for 2026-08-09 → 2026-09-05.
- The connected GSC property now verified through the integration is `https://www.auditseo.com.br/`, so the case methodology/property must be reconciled before it remains presented as the official baseline.

## 2. Master remediation backlog

Legend: **[x] done**, **[~] in progress/ready**, **[ ] pending**, **[!] blocked/needs external verification**

### P0 — Measurement integrity and protected assets
- [x] **P0.1 Connect and validate GSC property available to this workflow**
  - Evidence: `https://www.auditseo.com.br/`, siteOwner.
  - Completion: real Sep performance and comparable prior period extracted.
- [~] **P0.2 Reconcile the public case-study baseline**
  - Files: `src/components/AuditseoCaseStudyPage.tsx`
  - Problem: case says `https://auditseo.com.br/` and 0/0 baseline; current verified property is www and now contains data.
  - Provenance check: the baseline text entered the repository in commit `c225e282a9e8625040377a7162af951a14a6ecdc` on 2026-09-08. The repository contains the published values/property wording, but no raw GSC export supporting that exact 2026-08-09 → 2026-09-05 extraction.
  - Action: confirm original extraction source and either correct the property/methodology note or preserve the original observation with an explicit methodological correction.
  - Branch action completed: case now labels the value as a historical recorded baseline, identifies that the current connected property is `https://www.auditseo.com.br/`, and states that the raw original export was not preserved in the repository. This avoids presenting the old 0/0 as directly comparable while preserving the historical record.
  - Remaining criterion: reproduce the exact original property/filters/period before marking this item complete.
- [!] **P0.3 Verify domain property / alternate URL-prefix properties**
  - Desired: `sc-domain:auditseo.com.br`, `https://auditseo.com.br/`, `https://www.auditseo.com.br/`.
  - Current limitation: only the www URL-prefix is exposed by the active connector.
  - Criterion: same-period comparison or documented absence/unavailability.
- [x] **P0.4 Build protected-page inventory before changing URLs/titles**
  - Protect pages already ranking in positions 3–11 and pages with current impressions.
  - Criterion: every proposed title/H1/URL change references baseline impressions, position and intended query.
  - Completed in this document via the protected high-position pages table, commercial query baseline and cannibalization evidence.
- [ ] **P0.5 Capture historical URL inventory beyond the current sitemap**
  - Include legacy URLs, redirects and pages with previous organic demand.
  - Criterion: redirect/retention map approved before any URL migration.

### P1 — Commercial architecture and intent ownership
- [x] **P1.1 Create `/auditoria-seo`**
  - Role: transactional landing page for audit intent.
  - Primary cluster: auditoria seo, auditoria de seo, serviço de auditoria de seo, contratar auditoria seo, audit seo.
  - Must differentiate from editorial article `/blog/auditoria-seo-o-que-deve-conter`.
  - Branch implementation: dedicated service page, Service schema/canonical, sitemap/llms entry, footer link, Home link and editorial related-service links added. Local SSR validated with HTTP 200, intended title/H1, and full production build passed.
  - Criterion: one clear transactional owner for audit queries; article links to it contextually.
- [x] **P1.2 Create `/consultoria-seo`**
  - Role: explain consulting model, responsibilities, cadence, coordination, measurement and outcomes.
  - Must differentiate from `/blog/como-escolher-consultoria-seo` and continuous solution page.
  - Branch implementation: dedicated service page, Service schema/canonical, sitemap/llms entry, footer link, Home link and buyer-guide related-service links added. Local SSR validated with HTTP 200, intended title/H1, and full production build passed.
  - Criterion: one clear commercial owner for generic consultoria SEO intent.
- [x] **P1.3 Recalibrate Home category clarity**
  - Preserve Search Intelligence/S.I.G.N.A.L. as methodology.
  - Make SEO/GEO/Search Intelligence service category understandable above or immediately after the fold.
  - Do not discard the current visual identity or rebuild framework.
  - Branch implementation: Home eyebrow and metadata now identify Consultoria SEO, GEO and Search Intelligence; direct links to Consultoria SEO and Auditoria SEO were added in the solutions section without changing the approved Hero H1/CTA geometry.
  - Criterion: user can identify what AUDITSEO sells, for whom and next action without decoding proprietary names.
- [x] **P1.4 Rename presentation of the eight solutions (presentation layer first)**
  - Search Foundation → Planejamento SEO para novos sites
  - Organic Activation → Diagnóstico SEO para sites sem tráfego
  - Search Recovery → Recuperação de tráfego orgânico
  - Entity Authority → Consultoria de autoridade de entidade
  - Intent Content Architecture → Estratégia e arquitetura de conteúdo SEO
  - Generative Search Readiness → Auditoria GEO e de visibilidade em IA
  - SEO Migration & Risk Control → Consultoria SEO para migração de sites
  - Organic Evolution Cycle → Consultoria SEO contínua
  - Preserve proprietary names as method/product signatures.
  - Branch implementation: buyer-language names are now primary in Home cards and service-page headers; proprietary product names remain as secondary labels/codes and existing URLs are preserved.
  - Criterion: cards/H1/opening copy use buyer-language first.
- [~] **P1.5 Resolve audit-intent cannibalization**
  - Home and audit article should support `/auditoria-seo`, not compete with it.
  - Branch implementation: Home no longer targets “auditoria SEO” in its meta description, links directly to `/auditoria-seo`, and the audit editorial article links to the new commercial owner rather than acting as the sole destination.
  - Criterion: internal anchor structure + metadata + content roles are unambiguous.
- [x] **P1.6 Clarify `/geo-ia` vs `/solucoes/geo-ia-readiness`**
  - One = broader/continuous GEO/Search AI consulting.
  - One = bounded diagnostic/audit product.
  - Completed on branch: `/geo-ia` remains the broader ongoing Consultoria GEO/Search AI destination; `/solucoes/geo-ia-readiness` remains the bounded audit/diagnostic product. Cross-linking now explicitly points from the audit to the continuous consulting destination.
  - Criterion: distinct intent, scope, deliverable and CTA.

### P1 — CTR and snippet recovery
- [ ] **P1.7 Review high-position / zero-click pages before content rewrites**
  - Priority set from GSC table above.
  - Action per URL: query alignment, title, description, SERP promise, snippet eligibility, internal CTA.
  - Criterion: all changes have pre-change baseline captured.
- [ ] **P1.8 Brand query improvement**
  - Current `auditseo`: 10 impressions, avg. position 15.6, 0 clicks.
  - Previous comparable: 3 impressions, avg. position 24, 2 clicks.
  - Criterion: entity/home signals and branded SERP reviewed; no blind title churn.

### P1 — Proof, E-E-A-T/entity corroboration
- [ ] **P1.9 Publish execution proof**
  - anonymized audit with problem → evidence → decision → validation;
  - migration example with URL map;
  - recovery case with comparable periods and limitations;
  - backlog/implementation example;
  - authorized testimonials with identity/context.
- [~] **P1.10 Strengthen Organization entity**
  - Add verified `sameAs` references only.
  - Add appropriate business identity details where accurate and public.
  - Branch progress: commercial WhatsApp references were unified to the number already approved for the Hero. A company-level `sameAs` remains intentionally pending until an external company profile is verified/updated; no weak self-referential identity was added.
  - Criterion: Organization graph points to corroborated external identities, not self-created filler.
- [~] **P1.11 Strengthen founder page**
  - Add verifiable trajectory, work history, publications/cases and references.
  - Branch progress: the public LinkedIn profile matching Sidney Santos + AUDITSEO was verified externally and added to the Person schema `sameAs` plus the founder page. Broader trajectory/case corroboration remains pending.
  - Criterion: claims have supporting evidence where reasonably possible.
- [x] **P1.12 Create/strengthen a company About destination**
  - Current audit observed “Sobre” routing toward author rather than a standalone company presentation.
  - Branch implementation: new `/sobre` company page created; Header “Sobre” now points to the organization page, while the founder remains linked separately. Sitemap and llms.txt were updated. Full production build passed.
  - Criterion: company identity separate from founder identity.

### P2 — Internal linking and applied content
- [ ] **P2.1 Rewire internal journeys**
  - Pattern: problem query → evidence/explanation → relevant service → conversion.
- [ ] **P2.2 Publish applied content rather than more definitions**
  - audit example;
  - canonical/indexing fix case;
  - migration map;
  - service/content architecture case;
  - consulting-cycle example;
  - entity before/after;
  - repeated AI benchmark including non-improvement.
- [ ] **P2.3 Review overlapping AI/GEO editorial clusters using GSC before consolidation**
  - Do not consolidate solely because titles are similar.
  - Criterion: decisions use query/page evidence.

### P2 — Technical/UX verification
- [~] **P2.4 Fix or validate S.I.G.N.A.L. duplicate crawl/render output**
  - Confirmed in `SignalMethod.tsx`: each step had a desktop/tablet card plus a separate `md:hidden` fallback containing the same text. Branch refactor now renders one semantic card per step and uses layout classes only for positioning. Pending preview/SSR verification before [x].
- [~] **P2.5 Validate forms and conversion instrumentation**
  - Contact, diagnostic, WhatsApp CTA, success/failure states, analytics events.
  - Branch findings/fixes: Home contact form and diagnostic form previously had submit buttons but no submit handler. Both now POST to `/api/leads`, preserve source/referrer/UTM attribution, show success/error states, and use the API WhatsApp fallback when delivery is unavailable. Footer and API fallback were unified to the approved commercial WhatsApp `+55 11 99638-4376`.
  - Remaining before [x]: validate an actual successful delivery in Preview/production and confirm analytics event coverage.
- [ ] **P2.6 Validate mobile and Core Web Vitals**
  - Audit did not cover CWV/hydration/form delivery.
- [!] **P2.7 Validate crawler access at infrastructure/log level**
  - OAI-SearchBot and PerplexityBot separately from training bots.
  - User-agent spoofing alone is not sufficient evidence.
  - Attempted Vercel production runtime-log queries for `OAI-SearchBot` and `PerplexityBot` on 2026-10-01; the logs API returned 403 “project does not exist or you do not have access”. Treat this as an observability-permission block, not evidence that the crawlers did not visit.

### P3 — Metadata and normalization
- [~] **P3.1 Add OG images**
  - Audit found no `og:image` on the 50 examined pages.
  - Include Twitter image metadata where appropriate.
  - Branch implementation: default `og:image`, `og:image:alt` and `twitter:image` added through `createSeoHead`, with equivalent metadata on the custom Home head. Uses the existing AUDITSEO logo as a safe fallback; a dedicated 1200×630 creative can replace it later without changing metadata architecture.
- [~] **P3.2 Review trailing-slash redirect**
  - `/solucoes/` → `/solucoes` observed as 307; use permanent normalization if this behavior is intended.
  - Branch implementation: server entry now intercepts all non-root trailing-slash paths and returns 308 while preserving query parameters. Pending Preview HTTP verification before [x].
- [ ] **P3.3 Simplify HTTP → canonical redirect chain**
  - Review `http://auditseo.com.br/` double-hop when infrastructure allows.

## 3. Execution safeguards

1. **No broad URL migrations before P0.4/P0.5 are complete.**
2. **No mass title/H1 rewrite without page/query baseline.**
3. Work on isolated branch and validate build/preview before merge.
4. One intent owner per commercial query cluster.
5. Preserve Search Intelligence as differentiation; use familiar SEO/GEO language for acquisition.
6. Every SEO change must have:
   - evidence;
   - target URL/query;
   - expected effect;
   - rollback path;
   - post-change validation window.
7. GSC data has approximately a 3-day finalization delay; do not judge next-day results.

## 4. Immediate execution order

1. **P0.2** reconcile/correct the public case baseline.
2. **P0.4** freeze protected URL/query inventory from current GSC data.
3. **P1.1** design/build `/auditoria-seo`.
4. **P1.2** design/build `/consultoria-seo`.
5. **P1.3/P1.4** adjust Home and solution naming without changing established URLs unnecessarily.
6. **P1.5/P1.7** resolve audit cannibalization and CTR opportunities.
7. **P1.9–P1.12** proof + entity corroboration.
8. **P2/P3** internal links, applied content, technical UX, OG/redirect cleanup.

## 5. Measurement checkpoints

After each production batch:
- wait for crawl/indexing and GSC finalization;
- compare page/query metrics against captured baseline;
- record impressions, clicks, CTR, avg. position;
- distinguish branded, generic SEO, GEO/Search AI and local/service intent;
- log implementation date and affected URLs;
- do not attribute ranking changes to one change without enough observation.

