# RAITON production-domain configuration

Canonical hostname: `https://www.raitonllc.com`

- The apex domain redirects permanently to the canonical `www` hostname.
- `lib/site.ts` is the source of truth for the production URL, public email and public route paths.
- Every indexable English and Turkish page emits a canonical URL plus reciprocal `en`, `tr` and `x-default` alternates.
- `sitemap.xml` contains all indexable English and Turkish routes with absolute production URLs.
- `robots.txt` references the production sitemap.
- Open Graph and Twitter images use `public/brand/raiton-open-graph.jpg` and resolve through the production `metadataBase`.

Public email: `sadig.i@raitonllc.com`
