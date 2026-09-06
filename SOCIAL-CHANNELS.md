# Social-mediakanalen — Solo Stack Blog

Overzicht van welke kanalen gebruikt worden om artikelen te verspreiden, hun status, en hoe het geautomatiseerd is (of niet). Bijgewerkt door Claude wanneer een kanaal wordt toegevoegd, gewijzigd, of stopgezet.

| Kanaal | Status | Automatisering | Notities |
|---|---|---|---|
| LinkedIn (persoonlijk profiel, "Johan Lijffijt" — vertegenwoordigt Solo Stack) | Wordt opgezet (2026-09-05) | GitHub Action + LinkedIn API direct (IFTTT bleek deze combinatie achter de Pro-laag ($3,49/mnd) te hebben gezet, dus overgestapt op de gratis eigen route) | Same-day te koppelen, geen goedkeuringstraject (persoonlijk profiel, geen Company Page). Toont bewust de volledige echte naam van de gebruiker — zie CLAUDE.md § Auteur-persona voor de afweging. Vereist eenmalige OAuth-autorisatie door de gebruiker; Claude bouwt en beheert de GitHub Action daarna. |
| X (Twitter) | Bewust nog niet opgezet | — | Sinds 2026 geen gratis laag meer: $0,015/post, $0,20/post met link (onze shares bevatten altijd een link). Gebruiker koos "voorlopig alleen gratis diensten" (2026-09-05) — later alsnog overwegen als het de moeite waard blijkt. |
| Bluesky (@solostack74.bsky.social) | Live en geverifieerd werkend (2026-09-06) — eerste automatische post (Kit-review) succesvol geplaatst | GitHub Action + Bluesky API direct (`.github/workflows/social-crosspost.yml`) — zelfde eigen-route-keuze als LinkedIn, i.p.v. IFTTT: geen 2-applet-limiet, geen risico dat het achter een betaalmuur verdwijnt. | `solostack` (zonder cijfers) was al bezet. Post automatisch het nieuwste artikel uit `feed.xml` zodra het verschijnt (of handmatig via workflow_dispatch). Statusbestand `.github/social-last-posted.txt` voorkomt dubbele posts. |
| Mastodon (@solostack@mastodon.social) | Account + secrets klaar (2026-09-06), automatisering nog niet getest | GitHub Action + Mastodon API direct (zelfde workflow als Bluesky hierboven) | Applicatie aangemaakt met alleen scope `write:statuses` (minimale rechten). Post automatisch het nieuwste artikel uit `feed.xml` zodra het verschijnt (of handmatig via workflow_dispatch) — nog te verifiëren dat de eerste post daadwerkelijk lukt. |
| @aipickedit (TikTok/YouTube/Instagram) | Gepauzeerd (uit MoneyMaker-periode) | Losstaand, dagelijks gemonitord door de `aipickedit daily TikTok automation research`-routine | Andere niche-insteek (korte video) — leent zich niet goed voor het delen van tekstartikelen. Zie `../MoneyMaker/ACCOUNTS.md` voor volledige status. |
| Beacons (link-in-bio) | Live — Solo Stack-link toegevoegd (2026-09-06) | Handmatig gedaan door de gebruiker | Link staat bovenaan de Beacons-pagina (beacons.ai/aipickedit), actief en zichtbaar in de preview naast de bestaande Systeme.io-link. |

## Regels
- Nieuw kanaal toevoegen aan deze tabel zodra het wordt opgezet of overwogen, ook als het (nog) niet doorgaat — inclusief de reden.
- Bij een kanaal met terugkerende kosten (zoals X): kosten en het besluit hier expliciet vastleggen, niet alleen in het gespreksverloop.
- Dit bestand is een researchlog/overzicht, geen gepubliceerde content — wijzigingen gaan direct naar `main`.
