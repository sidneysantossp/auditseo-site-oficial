# Case Study #001 — Search AI Cycle 001 Partial Checkpoint

**Checkpoint date:** 2026-10-01  
**Cycle ID:** `SAI-BR-2026-10-C01`  
**Status:** internal partial checkpoint; **not** the final public Observatory report.

## Integrity boundary

This checkpoint records only observations that were actually collected under the frozen prompt set. It does not fill missing interfaces with proxy search results and does not treat blocked or failed runs as negative brand outcomes.

The final Cycle 001 report remains blocked until the declared interface scope is completed or formally versioned before publication.

## Interface status

| Interface | Module A | Module B | Later modules | Current state |
|---|---:|---:|---|---|
| ChatGPT Search | 20/20 valid | 20/20 valid | not continued in this execution | A/B collected with web search active and fresh conversations |
| Gemini Web | 20/20 valid | 20/20 valid | C01: 2 valid; E01: 1 valid | accessible |
| Perplexity Search | 20/20 valid | 20/20 valid after one documented retry | C01: 2 valid | accessible |
| Google AI Mode | 0 | 0 | 0 | blocked by Google's unusual-traffic / CAPTCHA response for the research IP |

The original invalid Perplexity B08/r1 attempt is preserved. A replacement observation for the same frozen prompt was collected successfully and is stored separately.

## Module A — Provider Discovery

Completed subset: **60 valid observations** across ChatGPT Search, Gemini Web and Perplexity Search.

Deterministic AUDITSEO mention count:

- ChatGPT Search: **5 / 20**
- Gemini Web: **1 / 20**
- Perplexity Search: **1 / 20**
- Combined three-interface subset: **7 / 60 = 11.67%**

AUDITSEO appeared in:

- A06 · run 2 · ChatGPT Search
- A08 · run 1 · ChatGPT Search
- A08 · run 1 · Perplexity Search
- A08 · run 2 · ChatGPT Search
- A08 · run 2 · Gemini Web
- A10 · run 1 · ChatGPT Search
- A10 · run 2 · ChatGPT Search

The 7 positive observations are **candidates for human review** of Provider Consideration and Recommendation. Those two metrics are intentionally not finalized by this checkpoint because the protocol requires human review.

A directly recoverable AUDITSEO-owned link was observed in **1 / 60** Module A responses, on A08 · run 1 · Perplexity Search. Source-chip labels without a recoverable URL are not upgraded to Owned Citation.

## Module B — Problem-Led Discovery

Completed subset after the documented B08 retry: **60 valid observations** across the same three interfaces.

Observed AUDITSEO outcomes:

- brand mentions: **0 / 60**
- recoverable AUDITSEO-owned citations: **0 / 60**
- three-interface partial Problem-Led Owned Citation Rate: **0%**

This is a negative result and remains part of the historical record.

## Module C — Category & Authority Discovery

Only C01 has been collected in the current continuation:

**C01 — “O que é Search Intelligence?”**

- Gemini Web: 2 / 2 valid
- Perplexity Search: 2 / 2 valid
- AUDITSEO mentions: **0 / 4**
- AUDITSEO-owned citations: **0 / 4**

Perplexity instead surfaced sources such as `search-intelligence.ai`, Cision and SearchIntel. Gemini returned generic/category definitions. No full Module C metric is reported from one prompt.

## Module E — Branded Entity Accuracy

One valid observation exists so far:

**E01 · Gemini Web · run 1 — “O que é a AUDITSEO e qual é sua especialidade?”**

The response described AUDITSEO as focused on Search Intelligence, entity authority, diagnosis, SEO, GEO/Search AI and content/intent architecture, and visibly referenced the AUDITSEO domain in the answer.

Pre-review interpretation: **appears materially aligned with the current canonical entity**.

Final Entity Accuracy classification remains pending human review, as required by the protocol. An unrelated liveSEO video surfaced as a lateral recommendation and is not treated as evidence about AUDITSEO.

## Collection blockers

### Google AI Mode

Google returned an unusual-traffic / CAPTCHA page before the research query could be executed. No Google AI Mode observation is scored from that state.

### Remaining ChatGPT modules

A/B raw observations were already collected successfully with web search active. During the later continuation, the current execution environment imposed a collector security boundary before new branded/category runs could be sent. The boundary is recorded as a collection limitation; it is not converted into a zero.

## Raw archive

Raw responses were copied from the temporary collector directory into the authorized workstation's persistent AUDITSEO SearchAI Cycle001 archive before this checkpoint was written.

Frozen SHA-256 hashes:

- `a01-chatgpt-run1.json` — `8F67592354AE479362AEB2E308E0CD01777E7341EF396A2A6AD490C3F12E5DCD`
- `a01-gemini.json` — `5E55710A54B94D604906274796BCFAD4BB056D151429920B0408DFCAA3B8096B`
- `a01-perplexity.json` — `BD6ECC56F9285AF5C31997209ABB0FFB387779C886FAB9B9B53B3B169313E702`
- `b08-perplexity_search-r1.json` — `C8E02BCA2D2729A1193CEA35E269028FB5D42DC2D56769B7F8037202AAEC6A5A`
- `c01-gemini_web-r1.json` — `5DB472ADD4936D898A4E7C634A60DB9BC15D829C80BD86BDCA5BDB3761FAD1EA`
- `c01-gemini_web-r2.json` — `57AE5A77797495C8A1E2BB8AFE293DC5B17A0A3AB89134D687CE5237EB777016`
- `c01-perplexity_search-r1.json` — `B4F9B3ABC525B471AF26DDD705BC451C26C985B4F97841B143607AFD43013020`
- `c01-perplexity_search-r2.json` — `975C79FE47ECEBFCCD11CCE47A570DEF81AC09DB1EC0C03CED93E35D830477BD`
- `e01-gemini_web-r1.json` — `D86F3F36F48AA2E7E30B9A10320AF0FE5757FE2ACA58269E07152E91EE43AFA5`
- `module-a-results.jsonl` — `B454F98C8506C68D9CC7BD773EDA12F6DB54E9114E0E9C0C18F54056E6156EB1`
- `module-b-results.jsonl` — `2247CE8999A05BC3B0FC05007DFBCD20452BE5A54CCFB44A0B0276167BD6A861`

## What may be claimed now

Allowed internally:

- Module A has 7 AUDITSEO mentions in 60 valid observations across the completed three-interface subset.
- Module B has zero AUDITSEO mentions and zero recoverable owned citations in 60 valid observations across that same subset.
- C01 currently has zero AUDITSEO association in four valid Gemini/Perplexity observations.
- The first E01 Gemini observation represents the entity in a materially aligned way, pending required human classification.

Not allowed:

- presenting these numbers as the final four-interface Cycle 001 baseline;
- treating missing Google AI Mode observations as zeros;
- claiming a Recommendation Rate before human review;
- claiming full Authority Association Rate from C01 alone;
- publishing a final Entity Accuracy score from one E01 observation.

## Next state change

1. Human-review the 7 Module A AUDITSEO-positive observations for Provider Consideration and Recommendation.
2. Complete C02–C08, D01–D08 and E01–E04 in accessible interfaces.
3. Resume ChatGPT later modules through an allowed clean-session collector.
4. Resume Google AI Mode after the unusual-traffic gate is cleared, without changing prompt wording.
5. Perform the protocol-required second review sample before any public Observatory percentage is released.
