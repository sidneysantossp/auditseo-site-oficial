# Post-launch earned distribution checklist

Execute only after the Authority → Lead surface is live in production and canonical/runtime QA is complete.

## Gate 0 — production verification

- [ ] `/estudos-busca-ia` returns 200 with canonical and indexable robots.
- [ ] Benchmark #001 returns 200.
- [ ] Benchmark #002 returns 200.
- [ ] Both public CSV URLs return 200.
- [ ] `/llms.txt` returns 200.
- [ ] `rel=describedby` is present on canonical HTML pages.
- [ ] Dataset / DataCatalog JSON-LD is present in rendered SSR HTML.
- [ ] Case Study #001 is public and still shows the frozen point-zero baseline.

## Gate 1 — factual provider notification

Use:

- `provider-notification-tracker-2026-09-08.csv`
- `provider-factual-notification-template.md`

Rules:

- [ ] Personalize each message with only that provider's row/classification.
- [ ] Do not request backlink/share/endorsement.
- [ ] Log sent timestamp.
- [ ] Log response.
- [ ] Log objective correction requests.
- [ ] Preserve original snapshot even if a current page has changed.
- [ ] Publish correction/changelog where materially necessary.

## Gate 2 — P1 earned media

Initial verified candidates:

- [ ] Meio & Mensagem — editorial suggestion channel verified.
- [ ] Mundo do Marketing — pauta channel verified.
- [ ] Baguete — contact channel verified.
- [ ] IT Forum — contact form verified.
- [ ] Propmark — editorial email verified.

Use `earned-media-pitch-templates.md` and adapt every message to the outlet's recent coverage.

Do not send the same generic pitch to all outlets.

## Gate 3 — founder-led distribution

- [ ] Finding-led post: one decision-useful result.
- [ ] Method-led post: dataset frozen before narrative.
- [ ] Buyer-led post: how to compare proposals / promises.
- [ ] Every controlled external link uses the agreed UTM taxonomy.
- [ ] Canonical article remains the primary source; do not republish full text elsewhere.

## Gate 4 — community review

- [ ] Share methodology in relevant SEO/Search AI communities where critique is welcome.
- [ ] Ask for methodological feedback, not links.
- [ ] Record substantive objections/corrections.
- [ ] Do not mass-post identical copy across communities.

## Gate 5 — measurement

Record separately:

### Earned authority

- [ ] referring domains;
- [ ] linked mentions;
- [ ] unlinked AUDITSEO mentions;
- [ ] direct dataset/study citations;
- [ ] branded-search growth.

### Search / Search AI

- [ ] GSC impressions;
- [ ] GSC clicks;
- [ ] queries/pages discovered;
- [ ] frozen prompt-set visibility;
- [ ] citations/recommendations in monitored interfaces;
- [ ] ChatGPT referrals where observable.

### Commercial

- [ ] research referral sessions;
- [ ] diagnostic starts from research URLs;
- [ ] qualified leads;
- [ ] meetings;
- [ ] declared discovery source from prospect;
- [ ] revenue attribution when available.

## Gate 6 — Case Study #001 checkpoint

Update the public case only with observed evidence.

A useful checkpoint answers:

1. What was published?
2. What was distributed?
3. Who referenced it?
4. What did Google discover?
5. What did Search AI surface/cite/recommend?
6. Did a qualified prospect arrive because of this system?

Do not convert lack of result into an invented success narrative.
