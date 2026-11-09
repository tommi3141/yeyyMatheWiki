---
foto: <Dateiname des Fotos im selben Ordner>
eingang: <% tp.file.creation_date("YYYY-MM-DD") %>
status: analysiert
anweisung: <Freitext des Nutzers aus der Upload-App>
thema: <erkanntes Thema>
stufe: <Mittelstufe | Oberstufe | Uni>
themenbereich: <Algebra | Analysis | Geometrie | Vektorgeometrie | Stochastik>
notiztyp: <Erklärung | Formelsammlung | Aufgaben | Checkliste | Übersicht>
entscheidung: <neu | ergänzen>
ziel: <Pfad der neuen oder ergänzten Notiz>
draft: true
---

%%
Vorlage: Analyse-Sidecar zu einem Foto. Liegt in Extra/Eingang/<datum>-<id>/ neben dem Foto.
Werte nur aus der Tag-Taxonomie (siehe Extra/Kontext/Konventionen für die Pipeline.md).
%%

## Transkription

<Inhalt des Fotos, Formeln in KaTeX. Unleserliches als [unleserlich] markieren, nichts raten.>

## Einordnung

- **Thema und Stufe:** <Begründung>
- **Vorgeschlagene Tags:** <Stufe, Themenbereich, Notiztyp, optional Medium>
- **Ordner:** <Basiswissen | Mittelstufe | Oberstufe | Uni>

## Dedupe

| Vorhandene Notiz | Überschneidung | Entscheidung |
|---|---|---|
| [[<Notiz>]] | <was steht dort schon> | <verweisen / ergänzen / ignorieren> |

## Unsicherheiten und Rückfragen

- <Mathematisch oder inhaltlich Unklares, das der Nutzer im PR prüfen soll>
