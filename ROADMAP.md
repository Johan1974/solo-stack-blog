# Roadmap — Solo Stack Blog

Status: net gestart (2026-09-05), pivot vanuit MoneyMaker (video → blog — zie ../MoneyMaker/CLAUDE.md § Pivot 2026-09-04).

## Fase 0 — Technische opzet
- [x] Lokale map + GitHub-repo aangemaakt (Johan1974/solo-stack-blog, publiek)
- [x] Repo lokaal verbinden (git init + remote + eerste commit/push) — CLAUDE.md + ROADMAP.md staan al live op GitHub
- [x] Statische site-structuur opgezet (zie "Huidige bouwstatus" hieronder)
- [x] Auteur-persona bepalen: **voornaam "Johan"** (geen achternaam), korte bio in de stijl "freelancer/solopreneur die AI-tools test voor andere solopreneurs" — voldoende herkenbaar voor Google's E-E-A-T-vertrouwenssignaal, zonder volledige identiteit prijs te geven
- [x] GitHub Pages inschakelen — live op https://johan1974.github.io/solo-stack-blog/ (geverifieerd 2026-09-05)

### Huidige bouwstatus (bijgewerkt tijdens de sessie van 2026-09-05)
Site staat live. Structuur:
- `index.html` — homepage: header/logo/tagline, intro + auteur-persona-blok, lijst van artikelen
- `style.css` — gedeelde stijl. **Bijgewerkt 2026-09-05**: bewust losgekomen van de donkere AIPickedIt/TikTok-huisstijl (`../MoneyMaker/branding/aipickedit-brand-kit.html`) na feedback dat die te rommelig/donker/hard aanvoelde voor een leesblog. Nu een lichte, warme, minder "boxy" opzet: `--bg-page:#FAF8F3`, `--bg-frame:#F3F0E7`, `--ink:#22242E`, `--ink-dim:#6B6E7A`, `--accent:#A85D1D`, `--accent-soft:#E8A33D`, `--line:#E6E1D3`; fonts IBM Plex Sans (body), IBM Plex Mono (labels/meta), **IBM Plex Serif** (koppen, i.p.v. het zware Big Shoulders Display) via Google Fonts. Minder losse kaders: auteursregel en artikellijst zijn nu randloos/lijst-stijl in plaats van elk in een eigen bordered box.
- `articles/` — map met losse artikel-HTML-bestanden
- Artikelen **gepubliceerd**:
  1. `articles/best-ai-tools-for-solopreneurs-2026.html` — pillar-artikel, overzicht van 5 tools (Systeme.io, Jasper AI, Kit, Descript, Opus Clip), linkt door naar de Systeme.io- en Jasper AI-reviews. Bevat de Systeme.io-affiliate-link + disclosure (enige tool die al goedgekeurd is, zie ../MoneyMaker/ACCOUNTS.md) — overige tools zonder gemonetiseerde link tot ze goedgekeurd zijn.
  2. `articles/systeme-io-review.html` — diepgaande review, affiliate-link + disclosure, linkt terug naar het pillar-artikel.
  3. `articles/jasper-ai-review.html` — diepgaande review, géén affiliate-link (nog niet goedgekeurd), linkt terug naar het pillar-artikel.
- Bewuste **SEO-topic-cluster-opzet**: 1 breed pillar-artikel + losse spoke-artikelen die onderling naar elkaar linken.
- Schrijfstijl-eis vastgesteld tijdens deze sessie: artikelen moeten menselijk/persoonlijk klinken (geen "AI-achtige" patronen) én expliciet met organisch-zoeken-SEO in het achterhoofd geschreven worden — vastgelegd in Claude's geheugen als staande regel voor alle toekomstige content.

## Fase 1 — Eerste content
- [x] Eerste 2 artikelen geschreven (zie "Huidige bouwstatus" hierboven) — nog publiceren via commit + push
- [ ] Contentkalender met vaste artikel-types (tool-reviews, vergelijkingen, how-to-gidsen) — pillar+spoke-structuur aanhouden voor elk nieuw onderwerp
- [x] Disclosure-tekst-conventie bepaald: duidelijke regel bovenaan elk artikel met een affiliate-link (zie CLAUDE.md)
- [x] SEO-metadata (titel/meta description/koppen) per artikel, zoekwoord-gedreven — meegenomen bij het schrijven van beide artikelen

## Fase 2 — Groei
- [ ] Interne links tussen artikelen
- [ ] Consistente publicatie, contentvolume opbouwen
- [ ] Eigen domeinnaam overwegen zodra er traction is — **echte uitgave, eerst expliciet bevestigen**, niet zomaar aanschaffen
- [ ] Jasper AI/Descript/Opus Clip-affiliate opnieuw proberen zodra er een eigen domein is (loste eerder het "business website"-blokkade-probleem niet op, zie ../MoneyMaker/ACCOUNTS.md)
- [ ] Google Analytics (GA4) toevoegen — bewust uitgesteld (2026-09-05): vereist tracking-cookies en dus vermoedelijk een cookie-consent-banner (EU), wat nu meer complexiteit toevoegt dan het waard is bij een site van één dag oud. GoatCounter dekt de basis al cookie-vrij. Oppakken zodra er meetbaar verkeer is en de rijkere data (demografie, acquisitiekanalen, conversie-funnels) er echt toe doet — gebruiker gaf aan dat dit "later wel belangrijk wordt".

## Fase 3 — Monetisatie opschalen
- [ ] Google AdSense als 2e inkomstenbron naast affiliate
- [x] E-maillijst — vervroegd t.o.v. de oorspronkelijke trigger (>1.000 bezoekers/mnd): op verzoek van de gebruiker (2026-09-05) al een passieve inschrijfbox gebouwd (dagelijks/wekelijks te kiezen) via Kit, zodat er stilletjes een lijst opgebouwd wordt vóórdat de trigger bereikt is. Zie `assets/subscribe-widget.js` — gebruikt Kit's eigen, exacte formulier-embed (twee eerdere zelfgebouwde varianten faalden stil). Werkend geverifieerd 2026-09-05.
- [ ] Eigen digitale gids (€9-19)

---
Elke nieuwe opdracht van de gebruiker wordt hier als los item onder de juiste fase toegevoegd.
