# SEO-todolijst — Solo Stack Blog

Openstaande technische/on-page-optimalisatiepunten voor de site zelf. Regels, bronnen en werkwijze staan in `CLAUDE.md` § Technische SEO-optimalisatie van de site zelf.

---

- **Review-schema inconsistent toegepast** — `Review`-structured data (met een eigen `reviewRating` als editorial score, bewust zonder `aggregateRating` — die vereist een geloofwaardig aantal onderliggende beoordelingen dat Solo Stack niet heeft) staat sinds 2026-09-08 op de Systeme.io- en Jasper AI-review, maar nog niet op de Descript-, Kit- en Opus Clip-review (opgevallen tijdens de audit van 2026-09-15). Uitbreiden naar die drie vereist per tool een eigen `ratingValue` bepalen op basis van de conclusie van dat artikel — een redactionele keuze, geen technische auto-fix, dus hier laten staan voor een bewuste vervolgstap door de gebruiker (of Claude samen met de gebruiker).
