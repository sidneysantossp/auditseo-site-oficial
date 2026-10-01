# AUDITSEO — External Entity Corroboration Tracker

**Snapshot:** 2026-10-01  
**Primary entity:** AUDITSEO  
**Canonical domain:** https://www.auditseo.com.br/  
**Positioning:** Search Intelligence; SEO, GEO/Search AI, entity authority and measurement as coordinated disciplines.  
**Operating context:** São Paulo, SP, with service coverage across Brazil.

## Objective

Reduce external entity ambiguity without manufacturing citations, reviews, addresses or local landing pages. Every correction must be factual, traceable and independent from backlink requests.

## Current public corroborators

| Source | Observed public signal | Alignment | Priority | Action |
|---|---|---|---|---|
| LinkedIn — founder profile | Sidney Santos is associated with AUDITSEO and São Paulo, Brasil. | aligned | protect | Keep linked to the Person entity; do not use the personal profile as Organization `sameAs`. |
| LinkedIn — AUDITSEO company presence | Public AUDITSEO posts are indexed and identify a corporate presence. | partially aligned | high | Verify the canonical company-profile URL from the authenticated company account before adding Organization `sameAs`. |
| Tray partner directory | Listing title still describes AUDITSEO as an agency specialized in digital marketing. | stale / conflicting | high | Request factual update to current company description and canonical www URL. Do not request a backlink. |
| BuiltWith | Historical technology profile for auditseo.com.br. | neutral | low | No correction unless factual domain ownership/history is wrong. Treat as technical corroboration only. |
| BabyLoveGrowth | Third-party article attributes a “Search Intelligence AI Suite”, pricing from R$ 3.000/month and offer language not controlled by AUDITSEO. | potentially inaccurate | high | Request factual review of product naming, pricing and any guarantee-like wording. Preserve the publisher's editorial independence. |

## Correction doctrine

1. Correct objectively inaccurate entity facts first: company type, canonical URL, location context, service description, pricing and product names.
2. Never ask for a backlink, ranking change, endorsement, review or favorable wording as a condition of correction.
3. Never supply an unverified street address merely to strengthen local signals.
4. Never create a new third-party profile only to multiply citations.
5. Record the before-state, outreach date, response and final state.
6. If a third party declines a correction, keep the disagreement documented and do not misrepresent their page as controlled by AUDITSEO.

## Target canonical entity description

Use this as a factual reference, adapting length to each platform:

> AUDITSEO é uma consultoria de Search Intelligence com atuação a partir de São Paulo e atendimento a empresas em todo o Brasil. O trabalho conecta SEO, GEO/Search AI, autoridade de entidade, conteúdo e mensuração para diagnosticar onde a presença de busca quebra antes de priorizar a execução.

Short form:

> AUDITSEO — consultoria de Search Intelligence, SEO e GEO/Search AI em São Paulo, com atendimento nacional.

## Organization `sameAs` release gate

Do not add a corporate social URL to Organization schema until all items below are true:

- the profile is controlled by AUDITSEO;
- the canonical public profile URL is verified from the authenticated account or a stable public profile page;
- the profile name clearly resolves to AUDITSEO;
- the profile description does not materially conflict with the current entity;
- the URL is expected to remain stable.

Founder LinkedIn remains on the Person entity independently of this gate.

## Local entity release gate

Current implementation intentionally declares city-level location only:

- `São Paulo, SP, Brasil`;
- service area: São Paulo + Brasil;
- no street address;
- no fabricated LocalBusiness storefront.

A street-level PostalAddress should be published only when a real public business address is explicitly approved for public use.

## Next actions

1. Verify canonical LinkedIn company URL from the authenticated AUDITSEO company account.
2. Submit Tray correction.
3. Submit BabyLoveGrowth factual correction request.
4. Re-check the historical Opendi listing documented in the repository and correct it if it still presents AUDITSEO as an agency.
5. Connect Google Business Profile and reconcile name/category/site/phone/service area with the canonical entity.
6. Add only verified Organization `sameAs` URLs after the release gate passes.
7. Record every external correction as an intervention in Case Study #001.
