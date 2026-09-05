# Social-mediakanalen — Solo Stack Blog

Overzicht van welke kanalen gebruikt worden om artikelen te verspreiden, hun status, en hoe het geautomatiseerd is (of niet). Bijgewerkt door Claude wanneer een kanaal wordt toegevoegd, gewijzigd, of stopgezet.

| Kanaal | Status | Automatisering | Notities |
|---|---|---|---|
| LinkedIn (persoonlijk profiel, "Johan Lijffijt" — vertegenwoordigt Solo Stack) | Wordt opgezet (2026-09-05) | GitHub Action + LinkedIn API direct (IFTTT bleek deze combinatie achter de Pro-laag ($3,49/mnd) te hebben gezet, dus overgestapt op de gratis eigen route) | Same-day te koppelen, geen goedkeuringstraject (persoonlijk profiel, geen Company Page). Toont bewust de volledige echte naam van de gebruiker — zie CLAUDE.md § Auteur-persona voor de afweging. Vereist eenmalige OAuth-autorisatie door de gebruiker; Claude bouwt en beheert de GitHub Action daarna. |
| X (Twitter) | Bewust nog niet opgezet | — | Sinds 2026 geen gratis laag meer: $0,015/post, $0,20/post met link (onze shares bevatten altijd een link). Gebruiker koos "voorlopig alleen gratis diensten" (2026-09-05) — later alsnog overwegen als het de moeite waard blijkt. |
| Bluesky | Nog niet opgezet | — | Genoemd als gratis optie (2026-09-05), geen goedkeuringsproces. Kan met een tweede IFTTT-applet (gratis laag staat 2 actieve applets toe, LinkedIn gebruikt er 1). |
| Mastodon | Nog niet opgezet | — | Zelfde status als Bluesky — gratis, open API, geen goedkeuring nodig. |
| @aipickedit (TikTok/YouTube/Instagram) | Gepauzeerd (uit MoneyMaker-periode) | Losstaand, dagelijks gemonitord door de `aipickedit daily TikTok automation research`-routine | Andere niche-insteek (korte video) — leent zich niet goed voor het delen van tekstartikelen. Zie `../MoneyMaker/ACCOUNTS.md` voor volledige status. |
| Beacons (link-in-bio) | Bestaat, nog niet bijgewerkt met Solo Stack-link | Handmatige actie nodig | Genoemd in `GROWTH-IDEAS.md` (2026-09-05) als quick win: één link naar de blog toevoegen aan de bestaande Beacons-pagina. |

## Regels
- Nieuw kanaal toevoegen aan deze tabel zodra het wordt opgezet of overwogen, ook als het (nog) niet doorgaat — inclusief de reden.
- Bij een kanaal met terugkerende kosten (zoals X): kosten en het besluit hier expliciet vastleggen, niet alleen in het gespreksverloop.
- Dit bestand is een researchlog/overzicht, geen gepubliceerde content — wijzigingen gaan direct naar `main`.
