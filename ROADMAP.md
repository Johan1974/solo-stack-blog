# Roadmap — Solo Stack Blog

Status: net gestart (2026-09-05), pivot vanuit MoneyMaker (video → blog — zie ../MoneyMaker/CLAUDE.md § Pivot 2026-09-04).

## Fase 0 — Technische opzet
- [x] Lokale map + GitHub-repo aangemaakt (Johan1974/solo-stack-blog, publiek)
- [x] Repo lokaal verbinden (git init + remote + eerste commit/push) — CLAUDE.md + ROADMAP.md staan al live op GitHub
- [x] Statische site-structuur opgezet (zie "Huidige bouwstatus" hieronder)
- [x] Auteur-persona bepalen: **voornaam "Johan"** (geen achternaam), korte bio in de stijl "freelancer/solopreneur die AI-tools test voor andere solopreneurs" — voldoende herkenbaar voor Google's E-E-A-T-vertrouwenssignaal, zonder volledige identiteit prijs te geven
- [ ] GitHub Pages inschakelen (eenmalige handmatige stap door gebruiker — repo Settings → Pages → Source: branch `main`, map `/ (root)`)

### Huidige bouwstatus (bijgewerkt tijdens de sessie van 2026-09-05)
Site staat lokaal klaar, nog niet gepusht/live (GitHub Pages moet nog aangezet worden — zie hierboven). Structuur:
- `index.html` — homepage: header/logo/tagline, intro + auteur-persona-blok, lijst van artikelen
- `style.css` — gedeelde stijl, huisstijl-kleuren hergebruikt uit `../MoneyMaker/branding/aipickedit-brand-kit.html`: `--bg-page:#12162B`, `--bg-frame:#171B33`, `--ink:#EDE9DD`, `--ink-dim:#A9AAC4`, `--accent:#E8A33D`, `--line:#2B3157`; fonts IBM Plex Sans (body), IBM Plex Mono (labels/meta), Big Shoulders Display (koppen) via Google Fonts
- `articles/` — map met losse artikel-HTML-bestanden
- Eerste 2 artikelen **af**:
  1. `articles/best-ai-tools-for-solopreneurs-2026.html` — pillar-artikel, overzicht van 5 tools (Systeme.io, Jasper AI, Kit, Descript, Opus Clip), linkt door naar de Systeme.io-review. Bevat de Systeme.io-affiliate-link + disclosure (enige tool die al goedgekeurd is, zie ../MoneyMaker/ACCOUNTS.md) — overige 4 tools zonder gemonetiseerde link tot ze goedgekeurd zijn.
  2. `articles/systeme-io-review.html` — diepgaande review, affiliate-link + disclosure, linkt terug naar het pillar-artikel.
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

## Fase 3 — Monetisatie opschalen
- [ ] Google AdSense als 2e inkomstenbron naast affiliate
- [ ] E-maillijst zodra de trigger bereikt is (>1.000 bezoekers/mnd of een artikel dat structureel goed rankt — zie CLAUDE.md)
- [ ] Eigen digitale gids (€9-19)

---
Elke nieuwe opdracht van de gebruiker wordt hier als los item onder de juiste fase toegevoegd.
