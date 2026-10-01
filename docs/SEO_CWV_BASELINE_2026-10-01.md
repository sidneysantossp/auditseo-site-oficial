# AUDITSEO — Mobile Performance / Lighthouse Baseline

**Captured:** 2026-10-01  
**URL:** https://www.auditseo.com.br/  
**Mode:** Lighthouse mobile lab test against current production before the remediation branch is merged.

## Baseline scores
- Performance: **85**
- Accessibility: **94**
- Best Practices: **100**
- SEO: **100**

## Core lab metrics
- First Contentful Paint: **2.6 s**
- Largest Contentful Paint: **3.6 s**
- Speed Index: **2.6 s**
- Total Blocking Time: **60 ms**
- Cumulative Layout Shift: **0.062**
- Time to Interactive: **3.6 s**

## LCP finding
The LCP element is the Home H1:
> Antes de investir em mais SEO ou IA

Lighthouse breakdown:
- TTFB: ~275 ms
- element render delay: ~641 ms

This indicates the main remaining LCP cost is not server latency. The remediation branch already uses a lightweight CSS-only Hero background, an optimized WebP UI logo, `font-display: swap`, and now preloads the two local brand WOFF2 fonts used above the fold.

## JavaScript finding
Lighthouse estimated about **53 KiB** of unused JavaScript from the main application bundle on the production baseline. TBT is only 60 ms, so this is not currently a severe interaction-blocking problem. Do not introduce risky framework surgery solely to chase this lab warning.

## Accessibility baseline issues found in current production
Current production scored 94 because of:
1. insufficient contrast on gold/white and gold/light-background combinations;
2. non-sequential heading levels in the older S.I.G.N.A.L. markup.

The remediation branch was tested separately with Lighthouse against the local branch:
- Accessibility: **100**
- SEO: **100**
- color-contrast: pass
- heading-order: pass

## Remediation already present in branch
- darker accessible gold for primary CTA backgrounds;
- darker brown labels on light/beige surfaces;
- S.I.G.N.A.L. semantic headings corrected;
- duplicate mobile/desktop S.I.G.N.A.L. content tree removed;
- UI logo uses `auditseo-logo-ui-v3.webp` instead of the 191 KB PNG;
- local Space Grotesk + Manrope fonts are preloaded from the root head;
- build and editorial gates pass.

## Validation rule
After production merge:
1. rerun Lighthouse mobile on the canonical production URL;
2. compare LCP/FCP/CLS/TBT to this baseline;
3. use field Core Web Vitals from Search Console/CrUX when available;
4. do not claim a CWV pass from Lighthouse alone, because CWV status is field data.
