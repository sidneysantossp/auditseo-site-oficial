# AUDITSEO — São Paulo Category-Demand Sprint

**Date:** 2026-10-03

## Objective

Capture existing category demand such as:

- agência de SEO em São Paulo
- consultoria SEO São Paulo
- SEO em São Paulo
- empresa de SEO em São Paulo
- especialista SEO São Paulo

without repositioning AUDITSEO as a traditional execution agency and without creating doorway-style neighborhood pages.

## Intent ownership

### Commercial/local

`/seo-sao-paulo`

Owns the broad local-commercial category.

Primary promise:

> SEO em São Paulo para empresas que precisam descobrir primeiro onde a presença está quebrando.

The page explicitly acknowledges the buyer phrase "agência de SEO em São Paulo" while defining AUDITSEO as a Search Intelligence consultancy.

### Existing consultancy

`/consultoria-seo`

Owns continuous strategic consultancy and now makes the operating context explicit:

- base operational in São Paulo;
- national service coverage;
- diagnosis, prioritization, implementation coordination, QA and learning loops.

No separate `/consultoria-seo-sao-paulo` page is created.

### Buyer/comparison

`/blog/agencia-seo-sao-paulo-como-escolher`

Owns comparison/selection intent before purchase.

It is deliberately separate from:

- `/blog/como-escolher-consultoria-seo` — national consultancy-provider selection;
- `/blog/agencia-seo-consultoria-ou-time-interno` — operating-model decision;
- `/seo-sao-paulo` — commercial/local hiring intent.

## Internal-link architecture

`/seo-sao-paulo` links to:

- Consultoria SEO
- Auditoria SEO
- GEO & Search AI

Its public evidence section links to:

- local agency-selection buyer guide
- agency vs consultancy vs internal team
- Google Business Profile / local presence guide

`/consultoria-seo` reciprocally links to the São Paulo hub.

The new buyer guide uses `/seo-sao-paulo` as its primary commercial bridge.

## Local schema

The service schema for local-capable pages supports explicit `areaServed` entries.

For the São Paulo hub and consultancy:

- City: São Paulo
- Country: Brasil

No street address is invented.

## Discoverability

The new commercial page and buyer guide are added to:

- sitemap.xml
- llms.txt
- Blog Hub / decision journey
- service↔article relations
- article↔article relations
- article intent boundaries

## Guardrails

- no neighborhood doorway pages;
- no fake address;
- no claim that AUDITSEO is a traditional agency when its operating model is consultancy;
- no duplicate `consultoria-seo-sao-paulo` URL;
- no guarantee of rankings;
- no mass local-page generation;
- no cannibalization with existing consultancy/buyer pages.

## Success measurement

After indexing, monitor separately:

- impressions for agency/SEO/consultancy + São Paulo queries;
- ranking and CTR of `/seo-sao-paulo`;
- whether `/consultoria-seo` gains São Paulo query variants without losing national intent;
- branded demand for AUDITSEO;
- organic leads and assisted conversions;
- Google Business Profile discovery when available.

Do not infer success from immediate post-release ranking movement.
