# SEO-todolijst — Solo Stack Blog

Dagelijkse, concrete actielijst voor verdere optimalisatie, bijgehouden door de `solo-stack-growth-research`-routine (TASK 3) naast de gratis-groei-ideeën in `GROWTH-IDEAS.md` en de blog-lessen in `BLOG-INSPIRATION.md`. Waar `GROWTH-IDEAS.md` gaat over *bekendheid* (verkeer van buitenaf), gaat dit bestand over *optimalisatie van de site zelf*: technische SEO-issues, on-page problemen, en performance.

Bronnen die de routine hiervoor gebruikt (allemaal gratis, geen account nodig):
- **Google PageSpeed Insights API** (`https://www.googleapis.com/pagespeedonline/v5/runPagespeed`) — performance/SEO/accessibility/best-practices-audit per pagina, roteert dagelijks over de gepubliceerde pagina's.
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
- Roteer welke pagina met PageSpeed Insights gecheckt wordt (zelfde rotatie-principe als `FRESHNESS-LOG.md`), niet elke keer alleen de homepage.
- Ranking: zet het punt met de beste verhouding impact/moeite bovenaan.
- Dit is een researchlog, geen gepubliceerde content — commit direct naar `main`, geen PR nodig. Als een punt een échte artikel-inhoudswijziging vereist (niet alleen techniek/metadata), verwijs dan naar de freshness-routine in plaats van het zelf te fixen.

---

## 2026-09-05 — eerste handmatige audit (door Claude, vóór de eerste routine-run)

- **Opgelost (2026-09-05)**: `<title>`/`og:title`/`twitter:title` van `articles/jasper-ai-review.html` weken af van de H1 ("Worth It for Solopreneurs" vs. H1's "Is It Worth It ... for Solopreneur Content") — aangepast naar "Jasper AI Review: Is It Worth It in 2026?" zodat title en H1 weer consistent zijn.
- **Open — PageSpeed Insights nog niet gedraaid**: de gedeelde sandbox-omgeving heeft 0 gratis PageSpeed-quota zonder eigen API-key (HTTP 429 "Quota exceeded"). Handmatige actie nodig: gratis Google API-key aanmaken via [Google Cloud Console](https://console.cloud.google.com/) (PageSpeed Insights API inschakelen, geen creditcard nodig voor dit quotum) zodat de dagelijkse routine hier daadwerkelijk mee kan auditen.
- **Open — geen `og:image`/`twitter:image` op enige pagina**: social-media-previews (Reddit/LinkedIn/WhatsApp — precies de kanalen waar net share-knoppen voor zijn toegevoegd) tonen nu geen afbeelding. Vereist een ontworpen afbeelding (1200×630px), geen tooling hiervoor beschikbaar in de huidige sessie — later oppakken.
- **Open — about.html/contact.html meta descriptions aan de korte kant** (88 resp. 92 tekens): niet fout, maar benutten niet de volle ~155 tekens snippet-ruimte in zoekresultaten. Lage prioriteit.
- **Gecontroleerd, geen probleem gevonden**: alle interne links resolven, elke pagina heeft precies één H1, geen afbeeldingen dus geen ontbrekende alt-teksten, titellengtes verder allemaal binnen ~60 tekens.
- Handmatig te checken zodra je tijd hebt: **Ahrefs Webmaster Tools** (Site Audit-rapport, zie hierboven) en **Bing Webmaster Tools → SEO Reports** — beide nog niet geraadpleegd.
