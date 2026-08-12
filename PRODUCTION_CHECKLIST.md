# RAITON production-domain checklist

Complete these steps after the final production hostname is confirmed:

- Set one validated HTTPS production site URL in centralized site configuration.
- Use that URL as Next.js `metadataBase`.
- Emit canonical URLs for every English and Turkish route.
- Add reciprocal `en` / `tr` hreflang alternates for equivalent routes.
- Generate `sitemap.xml` with absolute production URLs for all public routes.
- Add the absolute sitemap URL to `robots.txt`.
- Verify redirects, canonical tags, hreflang tags, sitemap responses, robots rules and Open Graph previews on the deployed hostname.

The candidate sharing image is available at `public/brand/raiton-open-graph.jpg`. Add it to Open Graph metadata after `metadataBase` is configured so crawlers receive an absolute image URL.

Client-supplied items still pending publication: a public email address and any official social-media accounts.
