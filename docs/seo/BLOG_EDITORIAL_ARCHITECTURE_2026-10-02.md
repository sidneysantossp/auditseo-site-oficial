# AUDITSEO — Blog Editorial Architecture

**Release:** 2026-10-02  
**Scope:** Sprint 1 + Sprint 2  
**Status:** implementation candidate

## Objective

Turn the blog from a technical document library into a customer-journey system that connects:

`problem → diagnosis → evidence → related service → next action`

No article URL is changed by this sprint.

## Inventory

- 32 unique editorial documents
- 5 primary journeys
- 4 problem-first entry points
- every article assigned to exactly one primary journey
- every article already carries at least one `relatedServices` relationship
- V2 article variants replace their older display versions in the Blog Hub without changing the public slug

## Primary journeys

1. **Diagnóstico e problemas**
   - indexado sem impressões
   - queda pós-redesign
   - concorrente aparece em Search AI
   - Google funciona, AI Search não

2. **Search AI & GEO**
   - GEO, ChatGPT, Gemini, Perplexity
   - crawlers
   - schema
   - llms.txt
   - measurement
   - provider consideration/recommendation
   - benchmark protocol

3. **Autoridade & entidade**
   - Search Intelligence
   - Entity Authority
   - entity architecture
   - citability
   - Google Business Profile
   - S.I.G.N.A.L. dependency framework

4. **SEO, conteúdo e crescimento**
   - Core Web Vitals
   - pre-launch SEO
   - audit scope
   - content consolidation
   - organic opportunity mining

5. **Decisão e pesquisa**
   - choosing a consultancy
   - agency vs consultancy vs in-house
   - expected deliverables
   - applied audit
   - GEO market benchmark
   - pricing benchmark

## Problem-first entry points

The Blog Hub begins with customer language instead of internal taxonomy:

- Meu site não cresce
- Meu tráfego caiu
- Meus concorrentes aparecem nas IAs e eu não
- Preciso estruturar autoridade da minha empresa

Each entry has two explicit paths:

- read the canonical diagnostic document;
- inspect the commercial solution connected to the problem.

## Article-to-service rule

The first item in `article.relatedServices` is treated as the **primary commercial bridge**.

It is surfaced twice:

1. immediately after the direct answer / summary block;
2. in the final "Da leitura para a ação" section.

The remaining service relationships become secondary paths.

A permanent `/diagnostico` option remains available for readers who recognize the symptom but do not yet know which service family applies.

## Naming rule

Legacy English service labels in article source objects are normalized at render time through the centralized `servicePresentation` map.

This avoids editing 32 articles merely to rename commercial cards and keeps service naming consistent across the library.

## What this sprint deliberately does not do

- no new article URLs;
- no slug migrations;
- no mass content rewrite;
- no new featured-image system yet;
- no change to article OG images yet;
- no removal/consolidation decision yet.

Featured images, OG/Twitter images and Article.image schema belong to the next visual-content sprint.

## QA gates

Before release:

- all 32 known article slugs must appear exactly once in the five journeys;
- no unknown or duplicated journey slugs;
- every article must retain at least one service relationship;
- content lint / resource lint / case-study lint must pass;
- Vercel Preview must pass.

## Next sprint

**Featured Image System**

One canonical image per article, reused in:

1. Blog Hub card
2. article hero
3. Open Graph
4. Twitter card
5. Article schema `image`

The visual system should use AUDITSEO black / gold / cream brand language and avoid generic stock-photo SEO imagery.
