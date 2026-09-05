# SEO-todolijst — Solo Stack Blog

Dagelijkse, concrete actielijst voor verdere optimalisatie, bijgehouden door de `solo-stack-growth-research`-routine (TASK 3) naast de gratis-groei-ideeën in `GROWTH-IDEAS.md` en de blog-lessen in `BLOG-INSPIRATION.md`. Waar `GROWTH-IDEAS.md` gaat over *bekendheid* (verkeer van buitenaf), gaat dit bestand over *optimalisatie van de site zelf*: technische SEO-issues, on-page problemen, en performance.

Bronnen die de routine hiervoor gebruikt (allemaal gratis, geen account nodig):
- **`PAGESPEED-RESULTS.md`** — dagelijkse Google PageSpeed Insights-resultaten (performance/seo/accessibility/best-practices, roteert automatisch over de pagina's), aangeleverd door `.github/workflows/pagespeed.yml`. Die GitHub Action heeft de API-key (als GitHub Actions-secret `GOOGLE_PAGESPEED_KEY`, nooit in de repo-inhoud zelf); de growth-research-routine roept de PageSpeed API dus niet zelf aan, maar leest alleen het resultatenbestand.
- **Audit van de repo zelf** — interne links die nergens naartoe wijzen, ontbrekende/te lange meta descriptions, titels boven ~60 tekens, FAQ-schema dat niet overeenkomt met de zichtbare FAQ, afbeeldingen zonder alt-tekst, en de mobielvriendelijkheid-eisen uit `CLAUDE.md`.
- **Websearch** naar actuele on-page/technische SEO-aanbevelingen voor deze niche.

Tools die **wel** waardevol zijn maar een (gratis) account vereisen en dus niet door de routine zelf geraadpleegd kunnen worden — periodiek handmatig checken en hier de bevindingen loggen:
- **Ahrefs Webmaster Tools** (gratis voor het eigen geverifieerde domein) — Site Audit-rapport voor technische issues, backlink-overzicht.
- **Bing Webmaster Tools → SEO Reports** (al gekoppeld) — ingebouwde scan met aanbevelingen.
- **Google Search Console** (al gekoppeld) — welke zoekwoorden al verkeer opleveren maar laag scoren (kansen om een bestaand artikel te verbeteren).

## Status-waarden
`open` → `opgelost (datum + wat er is aangepast)`. Items die na verloop van tijd niet meer relevant zijn (bv. een pagina die niet meer bestaat) worden verwijderd i.p.v. als opgelost gemarkeerd.

## Regels voor de routine
- Voeg per run maximaal een handvol nieuwe, concrete punten toe — geen vage algemeenheden.
- Check eerst of een punt al genoemd staat (open of opgelost) voordat je het toevoegt.
- De paginarotatie voor PageSpeed Insights gebeurt al automatisch in `.github/workflows/pagespeed.yml` — de routine hoeft hier zelf niets voor te doen, alleen het nieuwste (bovenste) resultaat in `PAGESPEED-RESULTS.md` te lezen. Nooit zelf `PAGESPEED-RESULTS.md` bewerken — dat bestand wordt alleen door de GitHub Action geschreven.
- Ranking: zet het punt met de beste verhouding impact/moeite bovenaan.
- Dit is een researchlog, geen gepubliceerde content — commit direct naar `main`, geen PR nodig. Als een punt een échte artikel-inhoudswijziging vereist (niet alleen techniek/metadata), verwijs dan naar de freshness-routine in plaats van het zelf te fixen.

---

## 2026-09-05 — eerste handmatige audit (door Claude, vóór de eerste routine-run)

- **Opgelost (2026-09-05)**: `<title>`/`og:title`/`twitter:title` van `articles/jasper-ai-review.html` weken af van de H1 ("Worth It for Solopreneurs" vs. H1's "Is It Worth It ... for Solopreneur Content") — aangepast naar "Jasper AI Review: Is It Worth It in 2026?" zodat title en H1 weer consistent zijn.
- **Opgelost (2026-09-05)**: PageSpeed Insights-quota — gebruiker heeft een eigen gratis Google API-key aangemaakt (beperkt tot PageSpeed Insights API). De key kon niet als environment variable op de Claude-routine zelf gezet worden (bleek niet ondersteund door die API); opgelost door de PageSpeed-check te verplaatsen naar een aparte GitHub Action (`.github/workflows/pagespeed.yml`) die de key als GitHub Actions-secret (`GOOGLE_PAGESPEED_KEY`) gebruikt en resultaten wegschrijft naar `PAGESPEED-RESULTS.md`, wat de growth-research-routine vervolgens leest.
- **Opgelost (2026-09-05)**: eerste homepage-audit gedraaid — score was performance 91, accessibility 95, best-practices 100, seo 100. Twee accessibility-issues gefixt: ontbrekend `<main>`-landmark (nu op elke pagina) en een overgeslagen kopniveau in de sidebar (h4 → h3 na de h2 "Browse by category").
- **Opgelost (2026-09-05)**: Google Fonts laadde 8 font-bestanden (Serif 500/600/700, Mono 500/600, Sans 400/600/700) terwijl een CSS-audit liet zien dat maar 6 gewichten daadwerkelijk gebruikt worden (Serif 600/700, Mono 400/600, Sans 400/700) — Serif 500 en Sans 600 werden nooit gebruikt, en Mono 400 ontbrak juist terwijl dat wél het standaardgewicht is voor meerdere mono-elementen (kickers, tagline, nav). Op alle 6 pagina's de Google Fonts-URL aangepast naar de daadwerkelijk gebruikte gewichten — 2 minder bestanden om te laden, en een latent font-mismatch-risico (mono-tekst die stilzwijgend een ongeladen gewicht kreeg) meteen gefixt.
- **Opgelost (2026-09-05)**: about.html/contact.html meta descriptions verlengd naar 147 resp. 153 tekens (waren 88 en 92) om de volledige ~155 tekens snippet-ruimte in zoekresultaten te benutten.
- **Open — Cumulative Layout Shift 0,488 op de homepage (score 0,17 — "poor")**: ontdekt bij het verifiëren van de font-fix hierboven. Oorzaak: `article-list` en `category-index` tonen eerst "Loading…" en worden pas na de `articles.json`-fetch met JS gevuld met de echte artikelkaarten/categorieën, wat een layout-sprong geeft zodra die content binnenkomt. Kleine mitigatie: een `min-height` op die containers. Structurelere oplossing: de artikellijst statisch in de HTML laten meeschrijven door de schrijver/reviewer-routine i.p.v. client-side te renderen — grotere wijziging, niet zomaar even doen. Dit verklaart ook waarom de performance-score fluctueert tussen 70-91 op verschillende runs (CLS-timing varieert per meting).
- **Open — geen `og:image`/`twitter:image` op enige pagina**: social-media-previews (Reddit/LinkedIn/WhatsApp — precies de kanalen waar net share-knoppen voor zijn toegevoegd) tonen nu geen afbeelding. Vereist een ontworpen afbeelding (1200×630px), geen tooling hiervoor beschikbaar in de huidige sessie — later oppakken.
- **Gecontroleerd, geen probleem gevonden**: alle interne links resolven, elke pagina heeft precies één H1, geen afbeeldingen dus geen ontbrekende alt-teksten, titellengtes verder allemaal binnen ~60 tekens.
- Handmatig te checken zodra je tijd hebt: **Ahrefs Webmaster Tools** (Site Audit-rapport, zie hierboven) en **Bing Webmaster Tools → SEO Reports** — beide nog niet geraadpleegd.
