# AUDITSEO — Search AI Source-Domain Opportunity Map

**Snapshot:** 2026-10-02  
**Cycle:** SAI-BR-2026-10-C01  
**Scope:** Case Study #001, Modules A+B, completed three-interface subset  
**Purpose:** identify recoverable source environments that repeatedly appear in observed Search AI answers and turn them into editorial/competitive intelligence.

## Critical measurement caveat

This is **not** a cross-platform Source Share ranking.

The current collector exposed recoverable external hrefs unevenly:

| Interface | Valid observations | Observations with recoverable external href | Coverage |
|---|---:|---:|---:|
| ChatGPT Search | 40 | 4 | 10.0% |
| Gemini Web | 40 | 0 | 0.0% |
| Perplexity Search | 40 | 34 | 85.0% |
| **Total** | **120** | — | — |

Gemini frequently displayed source labels in rendered answers without exposing stable source hrefs through the collector. ChatGPT Search also exposed few useful citation hrefs in the DOM; several recoverable links belonged to map/interface infrastructure rather than answer evidence.

Therefore:

- do not compare raw domain frequency between ChatGPT, Gemini and Perplexity;
- do not call this dataset “Source Share”;
- treat it as a **recoverable-link opportunity map**, strongly weighted toward Perplexity;
- source labels that cannot be tied to a recoverable URL remain unverified source labels, not resolved domains.

## Most recurrent recoverable domains

The table below counts valid A+B observations in which each domain had at least one recoverable link.

| Domain | Observations | Working classification | Operational use |
|---|---:|---|---|
| br.hedgehogdigital.co.uk | 8 | provider-owned | competitive intelligence |
| alexandrecaramaschi.com | 8 | provider-owned | competitive intelligence |
| rankmaster.com.br | 6 | provider-owned | competitive intelligence |
| lucasferrazseo.com | 6 | provider-owned | competitive intelligence |
| flowup.agency | 6 | provider-owned | competitive intelligence |
| organic301.com | 5 | provider-owned | competitive intelligence |
| agenciamestre.com | 5 | provider-owned | competitive intelligence |
| icoda.io | 5 | provider/editorial hybrid | monitor listicles; do not treat as independent validation |
| voh.com.br | 4 | provider-owned | competitive intelligence |
| wyse.com.br | 3 | provider-owned | competitive intelligence |
| criamente.com | 3 | provider/editorial hybrid | monitor category narratives; self-including list |
| jornaldebrasilia.com.br | 3 | news/editorial surface | earned-distribution candidate; verify editorial route before outreach |
| ardmarketing.com.br | 3 | provider-owned | competitive intelligence |
| narre.com.br | 3 | provider-owned / verify | competitive intelligence pending provenance check |
| geostack.com.br | 3 | provider-owned | competitive intelligence |
| quaerion.com.br | 3 | provider-owned | competitive intelligence |
| aeobr.com.br | 2 | provider-owned | competitive intelligence |
| conversion.com.br | 2 | provider-owned | competitive intelligence |
| guairanews.com | 2+ | news/editorial surface | high-priority research-distribution candidate |
| broadcast.com.br | 2 | release/distribution surface | distribution option; not automatically independent editorial proof |

Counts describe this frozen observation subset only. They are not popularity, quality or authority scores.

## What the provider-owned sources tell us

A large share of recoverable Perplexity sources are the providers' own service and educational pages.

Examples observed repeatedly include:

- GEO/service pages from Hedgehog Digital;
- Brasil GEO / Alexandre Caramaschi pages;
- RankMaster;
- Lucas Ferraz SEO;
- Flowup;
- Organic301;
- Agência Mestre.

This matters because it weakens a simplistic thesis that only third-party mentions can become visible sources. In this observed Perplexity subset, strong first-party pages were repeatedly recoverable.

### Intervention implication

AUDITSEO should keep investing in a small number of unambiguous canonical first-party documents rather than multiplying near-duplicate URLs.

That is the rationale behind the Problem-Led Authority Sprint published on 2026-10-02:

1. competitor appears in ChatGPT and the company does not;
2. site appears in Google but not in AI answers;
3. measuring visibility in ChatGPT, Gemini and Perplexity without isolated screenshots;
4. structuring a company to be understood by Google and generative AI.

The four canonicals should be allowed to accumulate discovery, links, mentions and external corroboration instead of being split across new variants.

## Provider/editorial hybrids

### Criamente

The public article “Melhores Agências de GEO do Brasil em 2026” states that the list was created by Criamente, a company that itself operates in GEO, and explicitly includes Criamente in the list.

Operational classification: **provider/editorial hybrid**.

Use:
- monitor which category language and proof criteria surface in Search AI;
- compare public positioning and information architecture;
- do not use inclusion in this list as independent evidence of AUDITSEO quality;
- do not request “ranking inclusion” as an authority tactic.

### ICODA

ICODA publishes AI-SEO agency listicles, including Brazil-focused pages, while also selling AI SEO services.

Operational classification: **provider/editorial hybrid**.

Use:
- competitive/category intelligence;
- observe how listicle structure, entity descriptions and evidence are assembled;
- do not treat inclusion as independent earned validation by default.

## Editorial / distribution opportunity surfaces

### Guaíra News — priority 1

Why it matters:
- Guaíra News publishes current technology/business coverage on GEO and generative search;
- its GEO ranking surfaced in the recoverable Perplexity source set;
- it has also published data-led stories about differences between AI platforms and an article about eight authority-building fronts for AI search;
- the latter explicitly discusses press, specialist media, company sites, proprietary research, experts, communities and independent sources as parts of an authority ecosystem.

Best AUDITSEO angle:
- **data, not a request to enter a ranking**;
- offer the frozen Brazilian benchmark on GEO commercial claims;
- offer the pricing-format benchmark;
- later offer Observatory results only after the protocol closes and review is complete.

### Jornal de Brasília — priority 1

Why it matters:
- its public GEO guide surfaced repeatedly in Perplexity observations;
- the article is directly about ChatGPT, Gemini, Google AI and providers in the Brazilian market.

Best AUDITSEO angle:
- a factual research note on how Brazilian providers communicate guarantees, deadlines and measurement;
- a second angle on why session, audit, sprint, retainer and software prices cannot be averaged as if they were equivalent products;
- do not ask to add AUDITSEO to the article/ranking.

Editorial provenance should be checked before counting any resulting mention as independent earned media.

### Broadcast — priority 2 / distribution

Observed pages live in a releases area.

Use:
- possible press-release / distribution surface;
- useful for making dated research findings publicly discoverable;
- do not classify a syndicated/release placement as independent editorial endorsement.

## Outreach doctrine

Every pitch must preserve the separation between **research distribution** and **entity correction**.

Do:
- lead with a verifiable finding;
- give snapshot date, sample and limitations;
- provide methodology and CSV;
- disclose that AUDITSEO is a market participant when relevant;
- make the journalist/editor free to use, ignore or challenge the finding;
- record any resulting link or mention as earned only when the third party chose it editorially.

Do not:
- ask to be added to a “best agencies” list;
- exchange correction for a backlink;
- ask for favorable ranking language;
- call a press release an independent endorsement;
- send incomplete Cycle 001 numbers as a finished Observatory result;
- imply that a recurring source domain is a causal ranking factor.

## Wave 1 — recommended distribution package

### Asset A — market communication benchmark

Canonical:
`/blog/como-mercado-brasileiro-vende-geo-search-ai`

Pitch thesis:
> Em uma amostra congelada de páginas públicas brasileiras, garantia, prazo, método, mensuração e evidência aparecem como dimensões diferentes — e tratá-las como uma única promessa comercial dificulta a comparação entre fornecedores.

Include:
- snapshot date;
- sample size;
- explicit limitations;
- CSV;
- no provider ranking.

### Asset B — pricing / procurement benchmark

Canonical:
`/blog/quanto-custa-consultoria-seo-geo-ia`

Pitch thesis:
> O mercado chama ofertas economicamente diferentes pelo mesmo nome “GEO”: sessão, auditoria, sprint, operação mensal e software. Uma média única de preço perde o significado quando a unidade comprada muda.

Include:
- 23 observed public offers;
- 10 suppliers/products in the frozen dataset;
- category split;
- CSV;
- no “market average” where the units are not comparable.

### Asset C — Search AI Observatory

Status:
**collection in progress — not pitch-ready as results.**

Allowed now:
- methodology/protocol as a research-method story.

Not allowed now:
- final percentages;
- platform winners;
- provider rankings;
- conclusions from incomplete four-interface coverage.

## Next measurement

After earned distribution and a plausible recrawl/update window:

1. preserve the current Cycle 001 raws;
2. complete the frozen baseline where technically possible;
3. repeat the same problem-led/category prompts in a future versioned cycle;
4. compare presence and source composition without changing the historical denominator;
5. separate observed change from causal attribution.
