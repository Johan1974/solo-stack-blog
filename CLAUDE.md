# Solo Stack Blog

## Wat is dit
Tekstuele affiliate-blog in de niche "AI-tools voor solopreneurs en side-hustlers". Voortgekomen uit het MoneyMaker-project als pivot van korte-video-content (TikTok) naar volledig tekstuele content (2026-09-04) — zie `../MoneyMaker/CLAUDE.md` § Pivot 2026-09-04 voor de volledige aanleiding en onderbouwing. Reden voor de pivot in het kort: de gebruiker had geen goed gevoel bij het maken van video-clips, en Claude kan tekst wél volledig beoordelen (in tegenstelling tot video, waar alleen losse frames te bekijken zijn).

## Status
Net opgezet (2026-09-05). Nog geen artikelen, nog geen hosting geconfigureerd. Zie ROADMAP.md voor de eerste stappen.

## Kernkeuzes (overgenomen uit MoneyMaker, ongewijzigd door de pivot)
- **Niche**: AI-tools voor solopreneurs en side-hustlers
- **Doelgroep**: freelancers/kleine ondernemers/bijverdienste-starters, 20-45 jaar, niet technisch, gebruiken al ChatGPT maar weten niet welke andere tools het waard zijn
- **Monetisatie**: recurring affiliate-commissie (Systeme.io live — 60% levenslang, Kit-aanmelding loopt, Jasper AI/Descript/Opus Clip later) → later eigen digitale gids (€9-19). Zie `../MoneyMaker/ACCOUNTS.md` voor actuele affiliate-status.
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

## Automatiseringsvoorkeur
Zelfde uitgangspunt als MoneyMaker: zoveel mogelijk automatisch, "hoe meer automatisering hoe beter". Claude kiest de technische invulling zelf, geen meerkeuze voorleggen — **behalve** bij een significante koerswijziging of een echte uitgave (bv. een eigen domeinnaam kopen), dat blijft expliciet checken.
- **Wel automatiseren**: artikelen schrijven (als concept/PR, zie hierboven), SEO-metadata, interne links, contentkalender bijhouden, research (kan de bestaande dagelijkse research-routine van MoneyMaker hergebruiken/uitbreiden)
- **Niet automatiseren**: direct publiceren van door de routine gegenereerde content naar `main` zonder review; inloggen met echte inloggegevens bij accounts van de gebruiker (affiliate-dashboards e.d.) — ongewijzigd principieel bezwaar

## Verwijzing
Zie `../MoneyMaker/` voor de volledige voorgeschiedenis: pivot-analyse, schaalstrategie, bevestigde affiliate-links en hun status, en de (gepauzeerde, dagelijks gemonitorde) TikTok-accounts.
