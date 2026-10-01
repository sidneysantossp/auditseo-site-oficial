# AUDITSEO — Historical URL & Redirect Inventory

**Snapshot:** 2026-10-01  
**Repository:** `sidneysantossp/auditseo-site-oficial`  
**Working branch:** `seo-audit-remediation-2026-10-01`

This inventory was created before any broad URL migration. It combines historical sitemap versions in Git history with current redirect-only routes.

## Historical sitemap comparison

### 2026-08-02 — initial public sitemap
14 URLs were present, including:
- `/`
- `/metodo-signal`
- `/solucoes`
- `/geo-ia`
- `/diagnostico`
- `/blog`
- `/autor/sidney-santos`
- `/guias`
- `/estudos-busca-ia`
- `/guias/geo-readiness`
- `/guias/narrativa-semantica`
- `/guias/search-intelligence`
- legal pages

### 2026-09-08 — expanded sitemap
50 URLs were present, including the current solution architecture, editorial library, research hub and Case Study #001.

### 2026-10-01 — remediation branch
53 URLs are present. New indexable destinations:
- `/sobre`
- `/consultoria-seo`
- `/auditoria-seo`

No existing indexable URL has been removed by this remediation branch.

## Legacy sitemap URLs now intentionally redirected

| Legacy URL | Current destination | Status in source |
|---|---|---|
| `/guias` | `/blog` | 308 permanent redirect |
| `/guias/geo-readiness` | `/blog/geo-o-que-e-o-que-nao-garante` | 308 permanent redirect |
| `/guias/narrativa-semantica` | `/blog/autoridade-de-entidade-o-que-e` | 308 permanent redirect |
| `/guias/search-intelligence` | `/blog/o-que-e-search-intelligence` | 308 permanent redirect |

These historical URLs were preserved as redirect routes instead of being allowed to become 404s.

## Additional compatibility redirects currently present

| Legacy/alias URL | Current destination | Status |
|---|---|---|
| `/blog/como-escolher-agencia-seo` | `/blog/agencia-seo-consultoria-ou-time-interno` | 308 |
| `/consultoria` | `/` | 308 |
| `/para-agencias` | `/parceria` | 308 |
| `/seo-para-agencias` | `/parceria` | 308 |
| `/white-label` | `/parceria` | 308 |
| `/sidney-santos` | `/autor/sidney-santos` | 308 |
| `/proposta/dr-felipe-barao` | `/propostas/dr-felipe-barao` | 308 |

## Protection decision

1. Keep all historical redirect routes until GSC/log evidence shows they no longer receive meaningful traffic or links.
2. Do not redirect current editorial/commercial pages merely to simplify architecture.
3. New commercial owners `/consultoria-seo` and `/auditoria-seo` are additions, not replacements for existing articles.
4. Any future slug migration must be added to this inventory before release.
5. The existing `/consultoria` → `/` alias should not be repointed blindly to `/consultoria-seo` until historical intent/backlinks are checked; preserving the current permanent target is safer than retroactive assumptions.

## Canonical host normalization observed on 2026-10-01

Current public chain:
- `http://auditseo.com.br/` → **308** `https://auditseo.com.br/`
- `https://auditseo.com.br/` → **308** `https://www.auditseo.com.br/`
- `https://www.auditseo.com.br/` → **200**

This is functionally correct but uses two hops from HTTP apex. Simplifying it requires domain-level redirect configuration rather than an application URL migration.
