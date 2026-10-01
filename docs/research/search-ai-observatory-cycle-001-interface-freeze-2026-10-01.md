# AUDITSEO Search AI Observatory — Cycle 001 Interface Freeze

**Cycle ID:** SAI-BR-2026-10-C01  
**Freeze date:** 2026-10-01  
**Study protocol:** Search AI Observatory v2  
**Collection state:** prepared; no result collected by this file

## Purpose

Freeze the four interfaces and collection conditions for Cycle 001 before any result is scored.

This file does not contain visibility results and must not be used to imply that collection has started or that any provider has been mentioned, cited or recommended.

## Frozen interfaces

### 1. ChatGPT Search

- Platform: ChatGPT
- Mode: Search / web search enabled
- Language: pt-BR
- Market context: Brasil
- Conversation state: fresh conversation for every observation
- Memory/personal context: do not intentionally provide brand or AUDITSEO context
- Sources: record every visible cited source/link
- Product/account state: record plan and exposed model/mode at run time
- Official product reference: https://help.openai.com/pt-br/articles/9237897-searching-the-web-with-chatgpt

### 2. Google AI Mode

- Platform: Google Search
- Mode: Modo IA
- Language: Português (Brasil)
- Market context: Brasil
- Session state: new query/session context for each independent observation where operationally possible
- Personalization: use a dedicated research account/profile with no intentional content-app connections; record any unavoidable account state
- Sources: record visible web links/sources
- Official product reference: https://support.google.com/websearch/answer/16011537

### 3. Gemini Web

- Platform: Gemini Web App
- Mode: standard web app response; record exposed model/mode
- Language: Português
- Market context: Brasil
- Conversation state: fresh chat for every observation
- Connected apps: off for the research profile unless the cycle explicitly documents otherwise
- Sources: record the Sources panel/related links when present; absence of visible sources is recorded as absence, not inferred
- Official product references:
  - https://support.google.com/gemini/answer/13575153
  - https://support.google.com/gemini/answer/14143489

### 4. Perplexity Search

- Platform: Perplexity
- Mode: standard Search for the primary cycle; do not mix Standard and Pro Search within the same reported sample
- Language: pt-BR prompt text
- Market context: Brasil
- Thread state: fresh thread for every observation
- Model selection: record the platform default/exposed model and do not switch models mid-cycle
- Sources: record all visible citations
- Product reference: https://www.perplexity.ai/help-center/en/articles/10352903-what-is-pro-search

## Repetition

Each unique prompt is executed twice per interface.

For the 40-prompt Case Study #001 authority-to-lead set:

`40 prompts × 4 interfaces × 2 repetitions = 320 raw observations`

For the full Observatory pilot:

`140 prompts × 4 interfaces × 2 repetitions = 1,120 raw observations`

The Case Study baseline and the full competitive Observatory are separate datasets even when they share interfaces.

## Session isolation

A scored observation is invalid when:

- it continues an earlier research conversation;
- a prior prompt in the same thread names AUDITSEO or another studied provider;
- the interface is intentionally given background about the study;
- a follow-up prompt is used to improve an answer before scoring;
- the result cannot be tied to the exact frozen prompt text;
- the interface state differs materially from the frozen configuration and the deviation is not logged.

## Required run metadata

Record:

- cycle_id
- study_version
- prompt_set
- prompt_id
- prompt_text
- interface
- mode
- exposed_model
- account_plan
- web_search_state
- language
- market_context
- personalization_state
- connected_apps_state
- run_number
- requested_at
- response_text or stable archive
- citations_raw
- source_domains
- brands_mentioned
- brands_recommended
- owned_domain_cited
- external_brand_source_cited
- entity_accuracy_labels when applicable
- reviewer_id
- review_status
- deviation_note

## AUDITSEO conflict-of-interest rule

AUDITSEO is both study sponsor and an observed provider.

Therefore:

- no AUDITSEO prompt may receive a different interface setting;
- no unsuccessful AUDITSEO observation may be removed;
- no source may be reclassified to improve AUDITSEO metrics;
- the first results must be frozen before interpretation is written;
- public reporting must state this conflict in the same document as results.

## Launch gate

Cycle 001 may move from `prepared` to `collecting` only after:

1. all four interfaces are manually accessible from the dedicated research environment;
2. account state and personalization controls are recorded;
3. raw-answer storage location is created;
4. the collection CSV/schema is versioned;
5. the first prompt is executed in a fresh session;
6. collection date/time is logged.

Until those conditions are met, the public status remains: **interfaces frozen; collection not yet started**.
