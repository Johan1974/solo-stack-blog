# Solo Stack Blog

## Wat is dit
Tekstuele affiliate-blog in de niche "AI-tools voor solopreneurs en side-hustlers". Voortgekomen uit het MoneyMaker-project als pivot van korte-video-content (TikTok) naar volledig tekstuele content (2026-09-04) — zie `../MoneyMaker/CLAUDE.md` § Pivot 2026-09-04 voor de volledige aanleiding en onderbouwing. Reden voor de pivot in het kort: de gebruiker had geen goed gevoel bij het maken van video-clips, en Claude kan tekst wél volledig beoordelen (in tegenstelling tot video, waar alleen losse frames te bekijken zijn).

## Status
Net opgezet (2026-09-05). Nog geen artikelen, nog geen hosting geconfigureerd. Zie ROADMAP.md voor de eerste stappen.

## Bij het hervatten van werk aan dit project (vastgesteld 2026-09-05)
Wanneer de gebruiker de draad weer oppakt met dit project, geef **proactief en beknopt** een "wat moet er vandaag gebeuren"-overzicht vóórdat je aan iets anders begint — de gebruiker hoeft er niet apart om te vragen. Baseer dit op:
- `SEO-TODO.md` — openstaande technische/on-page-optimalisatiepunten (en welke een handmatige registratie/actie vereisen)
- `GROWTH-IDEAS.md` — nieuwste "Handmatige actie nodig"-items die nog niet zijn opgepakt
- `CONTENT-CALENDAR.md` — het eerstvolgende geplande artikel en eventuele PR's van de schrijver-routine die op review wachten
- `FRESHNESS-LOG.md` — of er een artikel is dat aan een check toe is
- De periodieke affiliate-herinnering (zie hieronder bij Kernkeuzes) indien van toepassing die maand

Kort houden: een paar bullets, geen lang rapport, tenzij de gebruiker om meer detail vraagt.

## Kernkeuzes (overgenomen uit MoneyMaker, ongewijzigd door de pivot)
- **Niche**: AI-tools voor solopreneurs en side-hustlers
- **Doelgroep**: freelancers/kleine ondernemers/bijverdienste-starters, 20-45 jaar, niet technisch, gebruiken al ChatGPT maar weten niet welke andere tools het waard zijn
- **Monetisatie**: recurring affiliate-commissie (Systeme.io live — 60% levenslang, Kit-aanmelding loopt, Jasper AI/Descript/Opus Clip later) → later eigen digitale gids (€9-19). Zie `../MoneyMaker/ACCOUNTS.md` voor actuele affiliate-status. Jasper AI, Kit, Descript en Opus Clip krijgen tot die tijd gewone (niet-affiliate) links naar de tool zelf in artikelen — eerlijk naar de lezer, geen valse steun-suggestie (vastgesteld 2026-09-05). **Periodiek herinneren**: de gebruiker wil regelmatig (bv. maandelijks) een reminder om deze affiliate-aanvragen opnieuw te proberen zodra de situatie verandert (eigen domein, groter publiek) — dit is een handmatige actie (inloggen bij affiliate-platforms), dus Claude kan dit niet zelf automatiseren, alleen actief herinneren wanneer de gebruiker aan dit project werkt.
- **Content-taal**: artikelen in het Engels (grotere markt), planningsdocumenten (dit bestand, ROADMAP.md) in het Nederlands
- **Disclosure verplicht**: elk artikel met een affiliate-link krijgt een duidelijke disclosure (NL/EU-reclameregels)
- **Geen KVK-registratie** zolang er geen structureel inkomen is
- **SEO is het hoofdmechanisme** van traffic voor een blog (niet een bijzaak naast een hook, zoals bij video) — titels/koppen/metadata worden expliciet op zoekwoorden van de doelgroep geschreven
- **Business e-mail**: hello.iaskedai@gmail.com (zelfde als MoneyMaker, los van privé-account)

## Auteur-persona
Niet volledig anoniem, niet volledige identiteit — een voornaam/pseudoniem met een korte bio (bv. "Johan, freelancer die AI-tools test voor andere solopreneurs"). Reden: Google's E-E-A-T-richtlijnen belonen content met een herkenbare, echte schrijver bij software-aanraders — vertrouwen is hier een sterker signaal dan bij faceless social video. Exacte invulling nog te bepalen.

## Schrijfstijl (vastgesteld 2026-09-05)
Elk artikel moet aan twee eisen tegelijk voldoen:
- **Menselijk, niet "AI-achtig"**: geen rule-of-three-lijstjes, geen "it's not just X, it's Y", geen overdreven both-sides-hedging, geen generieke transitiezinnen. Wissel zinslengte af, gebruik samentrekkingen, laat de auteursstem (Johan) een mening hebben. Reden: Google's E-E-A-T beloont herkenbare, authentieke schrijvers, en de gebruiker wil zelf achter elk artikel kunnen staan — geen gepolijste maar lege AI-tekst.
- **Geschreven met organisch zoeken (SEO) als eerste doel, niet als nabewerking**: keyword in titel/H1/meta description/eerste alinea, koppenstructuur die aansluit op hoe mensen zoeken (vergelijkingen, "is X het waard", "beste X voor Y"), FAQ-sectie die op echte zoekvragen aansluit, interne links tussen pillar- en spoke-artikelen.

Geen fictieve first-person testclaims verzinnen ("ik heb dit 3 maanden gebruikt") als dat niet is gebeurd — dat staat haaks op "erachter kunnen staan". Schrijf vanuit onderzoek/kennis van de tool, niet vanuit verzonnen persoonlijke anekdotes.

## Mobielvriendelijkheid (vastgesteld 2026-09-05 na feedback)
De site moet op elk apparaat goed leesbaar zijn, niet alleen op desktop. Aanleiding: de gebruiker merkte op dat de site op mobiel slecht leesbaar was (gedrongen header, een vergelijkingstabel die alleen via horizontaal scrollen te lezen was). Concreet betekent dit voor elke huidige en nieuwe pagina:
- Geen content die alleen via horizontaal scrollen leesbaar is (bv. brede tabellen) — op smalle schermen een gestapelde/kaart-weergave gebruiken in plaats van alleen op `overflow-x:auto` te vertrouwen.
- Kleine hoofdletter-labels (kickers, nav, tagline) niet kleiner dan comfortabel leesbaar op een telefoon.
- Header/navigatie moet op smalle schermen kunnen stapelen in plaats van gedrongen op één regel te blijven staan.
- Dit geldt ook voor de geautomatiseerde schrijver-routine: nieuwe HTML-elementen (tabellen, brede content) volgen dezelfde responsive-patronen als in `style.css` al aanwezig zijn, niet een eigen vaste breedte.
- Bij twijfel: testen op meerdere breedtes (bv. 360px, 400px, 768px, desktop), niet alleen op desktop-breedte.

## Contentkalender
Bijgehouden in `CONTENT-CALENDAR.md` in dit repo: de wachtrij van geplande artikelen (pillar + spokes + vergelijkingen + how-to's), status per item (gepland/concept-klaar-voor-review/gepubliceerd), en het doelzoekwoord per artikel. Dit is de bron van waarheid voor "wat is het volgende artikel" — ook voor de geautomatiseerde dagelijkse routine hieronder.

## Publiceren
Statische site (HTML/markdown), gehost via GitHub Pages (of Cloudflare Pages) gekoppeld aan dit repo. Eén eenmalige handmatige stap blijft nodig: GitHub Pages zelf inschakelen in de repo-instellingen (kan niet via git alleen).

Twee publicatiepaden, bewust verschillend:
- **Werk direct in een sessie met de gebruiker** (zoals dit artikel-paar): Claude heeft de tekst zelf gelezen en staat erachter → direct commit + push naar `main`, geen tussenstap.
- **Werk van de geautomatiseerde dagelijkse contentroutine** (zie hieronder): **niet** direct naar `main` pushen. De routine committet naar een eigen branch en opent een PR. De gebruiker (of Claude samen met de gebruiker) beoordeelt en merget pas dan. Reden: bij ongereviewde bulk-generatie op schaal is het risico op generieke/AI-achtige content te groot, en dat ondermijnt zowel de "erachter kunnen staan"-eis als de SEO-strategie (Google's Helpful Content-systeem straft bulk-AI-content af).

## Automatisering — dagelijkse contentroutine (opgezet 2026-09-05)
Bewuste eerste stap richting schalen, **beperkt tot dit ene repo/blog** totdat het ritme en de kwaliteit bewezen zijn — pas daarna overwegen om hetzelfde model naar aparte repo's per niche te kopiëren (dat is een nieuwe significante koerswijziging, apart te bespreken wanneer het zover is).

Twee stappen, bewust gescheiden (een schrijver reviewt zichzelf niet):
1. **Schrijver-routine** (dagelijks, cron): pakt het eerstvolgende "gepland"-item uit `CONTENT-CALENDAR.md`, schrijft het artikel volgens de schrijfstijl-eisen hierboven en de bestaande site-structuur/huisstijl, zet SEO-metadata, werkt interne links bij, committet naar een nieuwe branch en opent een PR. Zet de status van het item op "concept, klaar voor review".
2. **Kwaliteitscontroleur-routine** (getriggerd zodra er een nieuwe PR van de schrijver-routine is): toetst de PR aan `QUALITY-CHECKLIST.md`, laat bevindingen achter als PR-comment, en past zelf aan waar nodig. Mergt **nooit** zelf naar `main` — dat blijft aan de gebruiker (of Claude samen met de gebruiker).

Publiceren blijft dus altijd een expliciete menselijke stap voor routine-gegenereerde content, ook als de kwaliteitscontroleur akkoord geeft.

## Gratis technische SEO-basis (vastgesteld 2026-09-05)
Op verzoek van de gebruiker: alles wat gratis en zonder account kan om groei/vindbaarheid voor te bereiden, meteen gebouwd in plaats van te wachten:
- **RSS-feed** (`feed.xml`): elk nieuw artikel krijgt een `<item>` bovenaan, gelinkt via `<link rel="alternate">` in elke pagina-`<head>`.
- **IndexNow**: sleutelbestand `c7181b6dcc1a48a2a8858dfaff0cbbcd.txt` in de repo-root (inhoud = de sleutel zelf, `c7181b6dcc1a48a2a8858dfaff0cbbcd`) — vereist geen account. Na elke merge naar `main` die een nieuwe of gewijzigde pagina publiceert: `curl -s -X POST https://api.indexnow.org/indexnow -H "Content-Type: application/json" -d '{"host":"johan1974.github.io","key":"c7181b6dcc1a48a2a8858dfaff0cbbcd","keyLocation":"https://johan1974.github.io/solo-stack-blog/c7181b6dcc1a48a2a8858dfaff0cbbcd.txt","urlList":["<volledige URL(s) die net gewijzigd zijn>"]}'` — pingt Bing/Yandex direct dat er iets nieuws staat, i.p.v. te wachten tot ze het zelf ontdekken.
- **`about.html`**: aparte auteurspagina voor het E-E-A-T-vertrouwenssignaal (wie schrijft dit, hoe worden tools gekozen, hoe verdient de site geld) — gelinkt vanuit de header-nav op elke pagina.
- **GoatCounter** (bezoekersstatistieken, ingesteld 2026-09-05): elke pagina bevat vlak voor `</body>` dit scriptje — nieuwe pagina's (ook door de schrijver-routine) moeten dit meenemen:
  `<script data-goatcounter="https://solo-stack-blog.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>`
- Dingen die **wel** een (gratis) account van de gebruiker vereisen en dus niet door Claude zelf gezet kunnen worden — zie `GROWTH-IDEAS.md`: Google Search Console, Bing Webmaster Tools.

## Artikelen actueel houden (vastgesteld 2026-09-05)
Gepubliceerde artikelen zijn nooit "af" — tool-pricing, features en affiliate-voorwaarden veranderen. **Solo-stack-freshness-routine** (wekelijks, cron): pakt om de beurt één al gepubliceerd artikel, zoekt online naar de huidige staat van de besproken tool(s), en opent een PR met updates als iets is veranderd (prijs, features, een dode link, een tool die niet meer bestaat). Bijgehouden in `FRESHNESS-LOG.md` (welk artikel wanneer voor het laatst gecheckt is, zodat de routine ze roteert in plaats van steeds hetzelfde artikel te pakken). Zelfde publicatieregel als de schrijver-routine: PR, nooit direct naar `main`.

## Gratis groei/promotie-research (vastgesteld 2026-09-05)
Nadrukkelijke wens van de gebruiker: dagelijks online blijven zoeken naar **gratis** (geen advertentiebudget) manieren om de site betrouwbaar en snel bekend te maken. **Solo-stack-growth-research-routine** (dagelijks, cron) doet twee dingen in dezelfde run:
1. Zoekt online naar actuele gratis groeitactieken voor een kleine content-/affiliate-site in deze niche, en voegt concrete, uitvoerbare ideeën met datum toe aan `GROWTH-IDEAS.md` — geen ideeën die inloggen bij accounts van de gebruiker vereisen (zie automatiseringsvoorkeur hieronder); die worden wel gelogd maar gemarkeerd als "handmatige actie nodig".
2. Bestudeert dagelijks één populaire/succesvolle blog (in deze niche of een vergelijkbare content-/affiliate-niche) en legt overdraagbare lessen vast in `BLOG-INSPIRATION.md` — niet wat die blog inhoudelijk behandelt, maar wat wij van hun aanpak (koppen, structuur, interne links, contentformats) kunnen overnemen. Vastgesteld 2026-09-05, nadrukkelijke wens van de gebruiker.

Beide zijn researchlogs, geen gepubliceerde content — committet direct naar `main`, geen PR nodig.

## Automatiseringsvoorkeur
Zelfde uitgangspunt als MoneyMaker: zoveel mogelijk automatisch, "hoe meer automatisering hoe beter". Claude kiest de technische invulling zelf, geen meerkeuze voorleggen — **behalve** bij een significante koerswijziging of een echte uitgave (bv. een eigen domeinnaam kopen), dat blijft expliciet checken.
- **Wel automatiseren**: artikelen schrijven (als concept/PR, zie hierboven), SEO-metadata, interne links, contentkalender bijhouden, artikelen actueel houden (freshness-routine, zie hierboven), gratis groei-research (growth-research-routine, zie hierboven; kan de bestaande dagelijkse research-routine van MoneyMaker hergebruiken/uitbreiden)
- **Niet automatiseren**: direct publiceren van door de routine gegenereerde content naar `main` zonder review; inloggen met echte inloggegevens bij accounts van de gebruiker (affiliate-dashboards e.d.) — ongewijzigd principieel bezwaar

## Verwijzing
Zie `../MoneyMaker/` voor de volledige voorgeschiedenis: pivot-analyse, schaalstrategie, bevestigde affiliate-links en hun status, en de (gepauzeerde, dagelijks gemonitorde) TikTok-accounts.
