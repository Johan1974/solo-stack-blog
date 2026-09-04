# Kwaliteitscheck — vóór elke merge naar main

Checklist voor de kwaliteitscontroleur-routine (en voor Claude tijdens handmatige review). Elk punt hieronder is een reden om een PR terug te sturen ("changes requested") in plaats van klaar te zetten voor de gebruiker om te mergen.

## 1. Klinkt het menselijk?
- [ ] Geen rule-of-three-lijstjes ("X, Y, en Z") als stijlmiddel door de hele tekst heen
- [ ] Geen "it's not just X, it's Y"-constructies
- [ ] Geen overdreven both-sides-hedging op elk punt
- [ ] Geen generieke transitiezinnen ("In today's world...", "When it comes to...")
- [ ] Afwisselende zinslengte, samentrekkingen, een herkenbare mening/stem (Johan), geen neutrale samenvatter-toon
- [ ] Geen verzonnen first-person testclaims ("I used this for 3 months...") die niet zijn gebeurd

## 2. Klopt het feitelijk en juridisch?
- [ ] Affiliate-link (met disclosure) alleen gebruikt voor tools die goedgekeurd zijn (zie `../MoneyMaker/ACCOUNTS.md`) — voor overige tools een gewone, niet-gemonetiseerde link naar de officiële site (geen affiliate-claim, maar ook niet ongelinkt laten)
- [ ] Disclosure-tekst is eerlijk over welke links wél en welke niet gemonetiseerd zijn (geen suggestie van steun/commissie bij een gewone link)
- [ ] Disclosure aanwezig, duidelijk, bovenaan het artikel, vóór de content — bij elk artikel met een affiliate-link
- [ ] Geen concrete prijzen/cijfers genoemd die niet geverifieerd zijn — bij twijfel hedgen ("check current pricing") in plaats van een getal verzinnen
- [ ] Geen URL's verzonnen — alleen URL's gebruiken die al bevestigd zijn in `../MoneyMaker/ACCOUNTS.md` of dit repo

## 3. SEO-fundamenten aanwezig?
- [ ] Doelzoekwoord (uit `CONTENT-CALENDAR.md`) zit in: `<title>`, `<meta description>`, H1, en de eerste alinea
- [ ] Koppenstructuur sluit aan op zoekintentie (vergelijking / review / how-to — niet willekeurige koppen)
- [ ] FAQ-sectie aanwezig die op echte zoekvragen lijkt
- [ ] Minimaal één interne link naar een gerelateerd artikel (pillar ↔ spoke)
- [ ] Meta description is uniek per artikel en niet gekopieerd van een ander artikel
- [ ] `<link rel="canonical">` naar de eigen `https://johan1974.github.io/solo-stack-blog/...`-URL
- [ ] Open Graph + Twitter-meta aanwezig (`og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`, `twitter:card`, `twitter:title`, `twitter:description`) met dezelfde titel/description als de `<title>`/meta description
- [ ] JSON-LD structured data aanwezig: `Article` (headline/author/publisher/datePublished/mainEntityOfPage) én `FAQPage` (met dezelfde vragen als de zichtbare FAQ-sectie)
- [ ] `<link rel="icon">` naar `../assets/favicon.svg` aanwezig
- [ ] `<title>` is max. ~60 tekens (Google knipt af rond die lengte) — geen overbodige `| Solo Stack`-toevoeging op artikelpagina's, het doelzoekwoord staat vooraan
- [ ] `<meta name="robots" content="index, follow">` expliciet aanwezig
- [ ] Google Fonts geladen via `<link rel="preconnect">` + `<link rel="stylesheet">` in de `<head>`, **niet** via `@import` in `style.css` (dat blokkeert de eerste render en is slecht voor Core Web Vitals)
- [ ] GoatCounter-scriptje aanwezig vlak voor `</body>` (zie CLAUDE.md § Gratis technische SEO-basis)

## 4. Technisch
- [ ] Pagina laadt zonder gebroken links (interne links, stylesheet-pad `../style.css`)
- [ ] Consistent met de bestaande huisstijl (`style.css`, geen losse inline styling die afwijkt)
- [ ] `CONTENT-CALENDAR.md` is bijgewerkt: status van het item naar `concept, klaar voor review`
- [ ] Nieuw artikel is toegevoegd aan `sitemap.xml` (root) met de juiste `<loc>` en een `<lastmod>` op de publicatiedatum
- [ ] Nieuw artikel is toegevoegd als `<item>` bovenaan `feed.xml` (root) — title/link/guid/description/pubDate
- [ ] Na merge naar `main`: de nieuwe URL (en gewijzigde `sitemap.xml`) laten oppikken door IndexNow — zie CLAUDE.md § Gratis technische SEO-basis voor de sleutel en het aanroepen van de API. Dit hoeft de schrijver/reviewer-routine zelf niet te doen (die werken op een branch/PR, niet op `main`); Claude doet dit bij het mergen.
- [ ] Nieuw artikel is toegevoegd aan `articles.json` (root) met `title`, `path`, `category` (één van: Guides, Reviews, Comparisons, How-To, Opinion — zie `CONTENT-CALENDAR.md`-kolom "Type"), `excerpt`, `date` — dit vult automatisch de "Browse by category"-sidebar op de homepage
- [ ] Nieuw artikel is toegevoegd aan `FRESHNESS-LOG.md` met status "nog niet gecheckt"

## Uitkomst
- **Alles akkoord** → PR blijft open, klaar voor de gebruiker om te lezen en te mergen.
- **Eén of meer punten falen** → reviewer laat een PR-comment achter met de concrete punten, past waar mogelijk zelf de tekst aan, en laat de PR pas op "klaar" zetten als alles akkoord is. Nooit zelf mergen naar `main`.
