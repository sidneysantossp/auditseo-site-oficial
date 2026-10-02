# AUDITSEO — Featured Image System

**Release:** 2026-10-02  
**Scope:** 33 editorial documents

## Purpose

Give every article one canonical editorial image and reuse it consistently across discovery, reading and sharing surfaces.

## Asset contract

For every article slug:

`/public/media/blog/<slug>.webp`

Required dimensions:

- 1200 × 630
- WebP
- one asset per canonical article slug

## Reuse contract

The same canonical asset is used in:

1. Blog Hub article card
2. article hero
3. Open Graph image
4. Twitter large image
5. Schema.org `Article.image`

This avoids separate social/card/hero images drifting out of sync.

## Visual language

The first system uses a controlled AUDITSEO editorial vocabulary:

- near-black base;
- cream information panel;
- bronze/gold signal;
- typography-led composition;
- no generic stock photography;
- one diagram family per editorial journey.

Journey motifs:

- Diagnóstico e problemas → broken signal / diagnostic path
- Search AI & GEO → connected retrieval nodes
- Autoridade & entidade → entity hub and corroborating nodes
- SEO, conteúdo e crescimento → progressive bars / trajectory
- Decisão e pesquisa → evidence / decision matrix

## Build integrity

`scripts/content-lint.mjs` now fails when a canonical article does not have:

`public/media/blog/<slug>.webp`

The file must also be larger than 10 KB to catch empty/placeholder assets.

This means a new article cannot pass the normal content gate without a featured image.

## Accessibility

Rendered images use:

`<article title> — AUDITSEO Search Intelligence`

as the default alt description.

The visual itself does not carry unique factual evidence required to understand the article; article title and content remain available as HTML text.

## SEO/social contract

Article pages use:

- `og:type=article`
- article-specific `og:image`
- `og:image:width=1200`
- `og:image:height=630`
- article-specific `og:image:alt`
- `twitter:card=summary_large_image`
- article-specific `twitter:image`
- structured `Article.image` with width and height

Non-article pages keep the existing default AUDITSEO social image unless they explicitly provide another image.

## Future rule

Do not create a second image just for Open Graph or social media unless a documented platform constraint requires it.

One canonical image should remain the editorial source of truth for the article.
