# Mensch ärgere Dich nicht – Online

Diese Version ist für GitHub Pages vorbereitet und enthält zusätzlich eine einfache clientseitige Zugangssperre.

## Zugang
- **Spiel-Passwort:** `1234`
- **Admin-Passwort:** `1234`
- Beide Passwörter sind getrennt und können im **Adminbereich** geändert werden.
- Der Adminbereich ist direkt auf der Passwortseite über **„Adminbereich“** erreichbar.
- Nach erfolgreicher Admin-Anmeldung können Spiel- und Admin-Passwort unabhängig voneinander geändert werden.
- Die geänderten Passwörter werden im Browser (`localStorage`) gespeichert.

## Wichtig zu GitHub Pages
GitHub Pages ist ein statischer Hostingdienst. Die Passwortsperre ist deshalb eine einfache Zugangshürde und keine serverseitige Authentifizierung. Das Passwort wird nicht an einen Server übertragen. Das geänderte Passwort gilt auf dem jeweiligen Gerät/Browser; für eine zentral für alle Spieler geltende Passwortverwaltung wäre ein Backend erforderlich.

## Enthalten
- `index.html`
- `style.css`
- `app.js`
- `board-template.svg`
- Tests für Spiel- und Passwortlogik


## Passwortzugang
- Spiel-Passwort beim ersten Start: `1234`
- Admin-Passwort beim ersten Start: `1234`
- Der Adminbereich ist direkt auf der Zugangseite erreichbar.
- Spiel- und Admin-Passwort können dort getrennt geändert werden.
- Die Zugangsdaten werden bei GitHub Pages lokal im jeweiligen Browser gespeichert; GitHub Pages selbst stellt keine serverseitige Authentifizierung bereit.
