# Interview-Fragen für SaaS Developer (QA Mindset)

## 🎯 Warum diese Fragen funktionieren

**✔ Nicht auswendig lernbar**
- Keine Buzzwords
- Viele Follow-ups möglich
- Echtes Denken erforderlich

**✔ AI-sicher (ohne Misstrauen)**
- AI-Nutzung ist erlaubt
- Reflexion ist Pflicht
- „Warum?" schlägt „Was?"

**✔ Flexibel einsetzbar**
- Fragen überspringen oder vertiefen
- An Kandidat anpassen
- Natürliches Gespräch

---

## 📋 Empfohlene Zeitaufteilung (30 Min)

| Block | Zeit |
|-------|------|
| Code & Refactoring | 10 min |
| Tests & QA | 8 min |
| SaaS & Production | 7 min |
| AI & Experience | 5 min |

---

## 1️⃣ CODE & REFACTORING (~10 Min)

### Frage: Code Review
**Setup:** Zeige `src/userService.js` aus diesem Repo

> „Du siehst diesen Code in einem Pull Request. Was fällt dir auf? Was würdest du ändern und warum?"

**Follow-ups:**
- „Wie würdest du das konkret umbauen?"
- „Was könnte in Production schiefgehen?"
- „Würdest du das überhaupt mergen? Wenn ja, mit welchen Bedingungen?"

**Worauf du achtest:**
- ✅ Sieht strukturelle Probleme (nicht nur Syntax)
- ✅ Denkt an Edge Cases
- ✅ Argumentiert pragmatisch („depends on context")
- ❌ Nur theoretisch („best practice wäre...")

**Probleme in der Datei:**
- SQL Injection in getUserData (String-Konkatenation)
- Keine Error-Handling
- validateEmail zu simpel
- Math.random() als ID
- Keine Input-Validierung
- console.log in Production
- Fehlende Content-Type Header

---

### Frage: Refactoring-Strategie
> „Stell dir vor, diese userService.js wird in 5 verschiedenen Modulen verwendet. Jetzt muss sich die Logik ändern. Wie gehst du vor?"

**Follow-ups:**
- „Was machst du, wenn du nicht alle Nutzungsstellen kennst?"
- „Wie stellst du sicher, dass nichts kaputt geht?"
- „Was machst du mit alten Tests?"

**Worauf du achtest:**
- ✅ Denkt an Tests als Sicherheitsnetz
- ✅ Plant schrittweise Änderungen
- ✅ Erwähnt Kommunikation mit Team
- ❌ Will alles sofort umschreiben

---

## 2️⃣ TESTS & QA (~8 Min)

### Frage: Test-Strategie
**Setup:** Zeige `tests/userService.test.js`

> „Diese Tests existieren. Reicht das? Was würdest du noch testen und warum?"

**Follow-ups:**
- „Wo ist die Grenze? Was testest du NICHT?"
- „Wie entscheidest du, ob ein Test es wert ist?"
- „Was machst du, wenn Tests flaky sind?"

**Worauf du achtest:**
- ✅ Denkt über Test-Wert nach (nicht „100% coverage")
- ✅ Unterscheidet Unit/Integration/E2E
- ✅ Pragmatisch bei Prioritäten
- ❌ „Wir brauchen alle Tests"

---

### Frage: Bug in Production
> „Ein User meldet: ‚Manchmal funktioniert Login nicht.' Was machst du?"

**Follow-ups:**
- „Du hast keinen Stacktrace. Wie gehst du vor?"
- „Wie reproduzierst du das?"
- „Wie verhinderst du, dass das nochmal passiert?"

**Worauf du achtest:**
- ✅ Systematischer Ansatz (Logs, Reproduktion, Fix, Prevention)
- ✅ Fragt nach Kontext (Browser, Daten, Häufigkeit)
- ✅ Denkt an Monitoring
- ❌ Rät direkt eine Lösung

---

## 3️⃣ SAAS & PRODUCTION (~7 Min)

### Frage: Deployment-Risk
> „Du hast einen Fix für einen kritischen Bug. Aber es ist Freitagabend. Deployen oder warten?"

**Follow-ups:**
- „Welche Infos brauchst du, um zu entscheiden?"
- „Wie minimierst du das Risiko?"
- „Was machst du, wenn es schiefgeht?"

**Worauf du achtest:**
- ✅ Wägt Risiko vs. Impact ab
- ✅ Denkt an Rollback-Strategie
- ✅ Fragt nach Monitoring/Alerting
- ❌ Kategorische Antwort („nie" / „immer")

---

### Frage: User-Daten
> „Ein Kunde fragt: ‚Könnt ihr mir meine gelöschten Daten wiederherstellen?' Was antwortest du?"

**Follow-ups:**
- „Wer entscheidet das?"
- „Was, wenn es ein zahlender Enterprise-Kunde ist?"
- „Wie würdest du das technisch lösen?"

**Worauf du achtest:**
- ✅ Denkt an DSGVO/Policies
- ✅ Unterscheidet technisch möglich vs. erlaubt
- ✅ Involviert Team/Legal
- ❌ Entscheidet alleine

---

## 4️⃣ AI & EXPERIENCE (~5 Min)

### Frage: AI im Alltag
> „Nutzt du AI-Tools beim Coden? Wie genau?"

**Follow-ups:**
- „Was funktioniert gut, was nicht?"
- „Wann vertraust du AI, wann nicht?"
- „Wie prüfst du AI-generierten Code?"

**Worauf du achtest:**
- ✅ Reflektiert über AI-Nutzung
- ✅ Prüft Output kritisch
- ✅ Kennt Grenzen (z.B. Security)
- ❌ „AI macht alles" oder „AI ist nutzlos"

---

### Frage: Letzte Lernkurve
> „Was hast du zuletzt gelernt, das deinen Code besser gemacht hat?"

**Follow-ups:**
- „Warum war das wichtig?"
- „Wie hast du es gelernt?"
- „Was würdest du anders machen, wenn du es nochmal lernen müsstest?"

**Worauf du achtest:**
- ✅ Konkretes Beispiel (nicht „Clean Code")
- ✅ Reflektiert über Lernprozess
- ✅ Zeigt Neugier
- ❌ Vage oder theoretisch

---

## 🎯 Bewertungskriterien

### ⭐ Starker Kandidat
- Denkt laut und strukturiert
- Stellt Rückfragen, um Kontext zu verstehen
- Argumentiert pragmatisch („depends on...")
- Reflektiert über Fehler/Lernprozesse
- Unterscheidet ideal vs. praktisch möglich

### ⚠️ Schwacher Kandidat
- Gibt Standard-Antworten („best practice ist...")
- Keine Rückfragen, antwortet zu schnell
- Alles ist „einfach" oder „kompliziert"
- Keine Reflexion über eigene Arbeit
- Theoretisch statt praktisch

---

## 🧠 Wie du QUESTIONS.md im Interview nutzt

**❌ Nicht:**
„Jetzt Frage 1, Frage 2, Frage 3 …"

**✅ Stattdessen:**
- 2–3 Fragen auswählen
- Bei guten Antworten tiefer gehen
- Bei schwachen Antworten Thema wechseln

---

## 🔚 Abschluss

> „Hast du Fragen an mich über das Team, die Rolle oder wie wir arbeiten?"

**Worauf du achtest:**
- ✅ Stellt durchdachte Fragen
- ✅ Interessiert sich für Team-Kultur
- ✅ Fragt nach Herausforderungen
- ❌ Keine Fragen oder nur Gehalt/Benefits

---

## 📌 Mit dieser QUESTIONS.md brauchst du:

- ✅ Keinen Spickzettel mehr
- ✅ Vergleichbare Interviews
- ✅ Erkennst echte SaaS-Developer

### Optional verfügbar:
- 🔹 Junior-only QUESTIONS.md
- 🔹 Senior Deep-Dive Fragen
- 🔹 Bewertungsbogen passend zu QUESTIONS.md
- 🔹 Interview-Feedback Template für Kandidaten
