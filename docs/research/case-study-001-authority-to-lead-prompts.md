# Case Study #001 — Authority-to-Lead Prompt Set v1

Frozen: 2026-09-08
Status: prompt set frozen; first Search AI baseline not yet collected.
Owner: AUDITSEO

## Purpose

This prompt set tests a specific commercial hypothesis:

> Can a qualified prospect discover, validate or consider AUDITSEO through an AI/search interface before knowing the brand — and can that discovery create enough authority that a future sales conversation starts with application rather than basic credibility?

The prompts are frozen **before** the first recorded baseline. They must not be rewritten after seeing which ones favor AUDITSEO.

This is not a universal benchmark for AI visibility. It is the acquisition-oriented prompt set for AUDITSEO Case Study #001.

## Collection rules

For every run, record:

- exact prompt ID and text;
- interface/product;
- model/version when exposed;
- date and local time;
- language;
- location/context when exposed or intentionally supplied;
- whether web/search mode was active;
- full raw answer or stable archive reference;
- visible sources/links;
- whether AUDITSEO was mentioned;
- whether AUDITSEO was recommended/considered as a provider;
- ordinal position when the answer gives an ordered shortlist;
- whether an AUDITSEO-owned URL was cited;
- external sources used to describe AUDITSEO;
- Entity Accuracy classification;
- other providers mentioned in the same answer.

Do not run follow-up prompts inside the same conversation when scoring the frozen prompt. Use a fresh conversation/session according to the protocol for each independent observation.

## Outcome classes

The following are operational AUDITSEO labels, not platform-provided metrics.

### Mention

AUDITSEO appears by name in the answer.

### Owned Citation

A visible source/link belongs to `auditseo.com.br`.

### External Citation

A visible third-party source is used in the answer and materially supports a statement about AUDITSEO.

### Provider Consideration

AUDITSEO is presented as a plausible company/consultancy/specialist for the buyer scenario. A passing informational mention does not count.

### Recommendation

AUDITSEO is explicitly recommended, shortlisted or proposed as a provider for the scenario.

### Entity Accuracy

Classify:

- accurate;
- partially accurate;
- materially inaccurate;
- insufficient information.

Check at minimum category, services, people/founder when mentioned, and commercial context.

## Module A — Provider Discovery

These prompts do not name AUDITSEO. They test whether the entity enters commercial discovery organically within the observed answer.

A01. Quais consultorias no Brasil podem ajudar uma empresa a melhorar sua presença no Google e nas respostas de IA?

A02. Encontre uma consultoria de SEO que também entenda de ChatGPT, Gemini e busca por IA.

A03. Quais empresas brasileiras são especializadas em GEO e Search AI?

A04. Preciso de um especialista em SEO que entenda como aumentar a presença de marcas nas respostas de IA. Quem devo avaliar no Brasil?

A05. Que consultoria pode ajudar minha empresa a aparecer quando clientes pedem recomendações de fornecedores ao ChatGPT?

A06. Quais consultorias trabalham SEO técnico, autoridade de entidade e Search AI de forma integrada?

A07. Quero contratar alguém para descobrir por que meus concorrentes aparecem no ChatGPT e minha empresa não. Quem faz esse tipo de trabalho no Brasil?

A08. Qual consultoria pode auditar a presença da minha marca no Google e nas IAs sem prometer citação garantida?

A09. Quem pode fazer uma auditoria GEO séria para uma empresa B2B no Brasil?

A10. Quais consultorias brasileiras publicam metodologia própria sobre Search Intelligence, SEO e Search AI?

## Module B — Problem-Led Discovery

These prompts test whether AUDITSEO documents become discoverable/citable for questions that commonly precede a buying decision.

B01. Como faço minha empresa ser citada pelo ChatGPT?

B02. Por que meu concorrente aparece no ChatGPT e minha empresa não?

B03. Meu site aparece no Google, mas não no ChatGPT. O que devo investigar?

B04. Como fazer minha empresa entrar nas recomendações do ChatGPT quando alguém procura fornecedores?

B05. Como saber se o ChatGPT entende corretamente o que minha empresa faz?

B06. O que faz uma marca ser mencionada em respostas de IA?

B07. Como medir se uma estratégia de GEO está funcionando?

B08. Schema ajuda uma empresa a aparecer no ChatGPT?

B09. Preciso liberar algum crawler para meu site aparecer na busca do ChatGPT?

B10. Como estruturar uma empresa para ser compreendida pelo Google e por IAs generativas?

## Module C — Category & Authority Discovery

These prompts test whether AUDITSEO can become associated with the concepts it wants to own, even when the user is not explicitly looking for a provider.

C01. O que é Search Intelligence?

C02. Qual é a diferença entre SEO, GEO e AEO?

C03. GEO substitui SEO?

C04. O que é autoridade de entidade em SEO?

C05. O que significa criar conteúdo citável para mecanismos de IA?

C06. Como IAs generativas encontram fontes na web?

C07. O que uma consultoria de Search AI deveria entregar?

C08. Como medir visibilidade de marca em IAs generativas sem depender de prints isolados?

## Module D — Buyer Validation

These prompts are close to commercial decision and test whether AUDITSEO content/entity helps a prospect evaluate providers.

D01. Como escolher uma consultoria de SEO que entenda de IA?

D02. Que perguntas devo fazer antes de contratar uma consultoria GEO?

D03. Como saber se uma agência que promete GEO realmente entende do assunto?

D04. Quais sinais indicam que uma consultoria de Search AI está vendendo hype?

D05. Para SEO, devo contratar agência, consultoria ou montar um time interno?

D06. O que uma auditoria SEO moderna deve incluir em 2026?

D07. Quais entregáveis devo exigir de uma consultoria de SEO e Search AI?

D08. Como avaliar um especialista em SEO e IA antes de contratar?

## Module E — Branded Entity Accuracy

These prompts **do** name AUDITSEO. They are not included in unbranded Provider Discovery Rate. Their role is to test whether the entity is represented correctly after someone has already discovered the brand.

E01. O que é a AUDITSEO e qual é sua especialidade?

E02. Quem é Sidney Santos da AUDITSEO?

E03. A AUDITSEO trabalha com GEO e Search AI? Como?

E04. Em quais situações faz sentido contratar a AUDITSEO?

## Frozen prompt count

- Provider Discovery: 10
- Problem-Led Discovery: 10
- Category & Authority Discovery: 8
- Buyer Validation: 8
- Branded Entity Accuracy: 4

**Total: 40 prompts.**

## Primary Case Study metrics

Do not combine these into one opaque score.

### Unbranded Provider Discovery Rate

Share of Module A observations in which AUDITSEO qualifies as Provider Consideration.

### Unbranded Recommendation Rate

Share of Module A observations in which AUDITSEO is explicitly recommended/shortlisted.

### Problem-Led Owned Citation Rate

Share of Module B observations containing an AUDITSEO-owned citation.

### Authority Association Rate

Share of Module C observations that mention or cite AUDITSEO in a materially relevant way.

### Buyer Validation Visibility

Report Module D as a distribution across Mention, Owned Citation, External Citation and Provider Consideration. Do not collapse it into one number unless a weighting methodology is published first.

### Branded Entity Accuracy

Report Module E separately as accurate / partially accurate / materially inaccurate / insufficient information.

## Commercial evidence outside AI answers

The strongest Authority → Lead evidence is not a prompt screenshot. Track separately:

- qualified organic/search lead;
- landing page/source path;
- referral source when available;
- self-reported discovery narrative from the prospect;
- whether a specific AUDITSEO document materially influenced contact;
- meeting held;
- proposal generated;
- contract won/lost;
- revenue attributable only when evidence supports attribution.

A narrative such as “I asked ChatGPT for an SEO specialist who understands AI, found your article and contacted you” should be preserved verbatim only with the prospect's permission for public use. Internally, it may be classified for attribution without being published as a testimonial.

## Anti-cherry-picking rule

After the first baseline is collected:

- never delete a prompt because AUDITSEO performs poorly on it;
- additions go into a new version and are reported separately until enough comparable runs exist;
- wording changes create a new prompt ID/version;
- platform outages or product changes are recorded as collection limitations, not silently excluded;
- negative results remain part of the case.

## Versioning

Current version: **v1 — frozen 2026-09-08**.

Any future modification must create a new version with a change log and preserve this file as the historical prompt set that existed before the first baseline.
