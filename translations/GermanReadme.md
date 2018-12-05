# gci18.fossasia.org
FOSSASIA Google Code-In Website 2018
https://gci18.fossasia.org

Dies ist das Repository für die Website von FOSSASIA für Google Code-In 2018, Wir von FOSSASIA beabsichtigen, es im Verlauf dieses Wettbewerbs gemeinsam zu entwickeln, indem die Schüler selbst teilnehmen . Forken Sie das Repository, bevor Sie Änderungen vornehmen, und stellen Sie sicher, dass Sie es lesen [FOSSASIA Best Practices](https://blog.fossasia.org/open-source-developer-guide-and-best-practices-at-fossasia/)

## Kommunikation

- Bitte machen Sie mit **[mailing list](https://groups.google.com/forum/#!forum/fossasia)** um Fragen zum Projekt zu besprechen.

    > https://groups.google.com/forum/#!forum/fossasia

- Unser Chatkanal ist aktiviert **[Gitter](https://gitter.im/fossasia/gci16.fossasia.org)**

    > [gitter.im/fossasia/gci16.fossasia.org](https://gitter.im/fossasia/gci16.fossasia.org)

## Dinge, die Sie wissen sollten, bevor Sie einen Beitrag leisten:
- Alle Pull-Anforderungen müssen einem Problem zugeordnet werden.
- Alle PRs müssen der Person zugewiesen werden, die daran arbeitet.
- Wenn ein Problem nicht innerhalb eines Tages abgeschlossen werden kann, sollte es in mehrere Ausgaben aufgeteilt werden.
- Machen Sie Pull-Anfragen von Ihren eigenen Gabeln (Auch wenn Sie Schreibrechte für das Repository haben, erstellen Sie keine neuen Zweige und entwickeln Sie diese auf Ihren eigenen Zweigen).
- Geben Sie die tatsächliche Änderung oder Verbesserung in der Commit-Nachricht von PRs an (sag nicht einfach “Fixes issue #123”).
- Fügen Sie die Ausgabenummer in die Beschreibung ein (Dies beschleunigt die Überprüfung, da die Rezensenten einfach klicken, um mehr Informationen in der Ausgabe selbst zu erhalten).
- Schreiben Sie klare, aussagekräftige Git-Commit-Nachrichten (Lesen Sie http://chris.beams.io/posts/git-commit/).
- Vergleichen Sie Pull-Anforderungen mit Problemen und stellen Sie sicher, dass die Beschreibung der Pull-Anfragen die speziellen Schlüsselwort-Referenzen von GitHub enthält, die das zugehörige Problem automatisch schließen, wenn die Pull-Anforderung zusammengeführt wird. (Mehr Infos unter https://github.com/blog/1506-closing-issues-via-pull-requests).
- Wenn Sie sehr kleine Änderungen an einer Pull-Anforderung von Ihnen vornehmen (B. ein fehlerhaftes Travis-Build korrigieren oder kleine Stilkorrekturen oder kleinere Änderungen, die von Reviewern angefordert wurden) Stellen Sie sicher, dass Sie Ihre Commits anschließend quetschen, so dass Sie keine absurde Anzahl an Commits für eine sehr kleine Korrektur haben (Lerne, wie man bei Squash spielt https://davidwalsh.name/squash-commits-git).
- Fügen Sie einen Screenshot hinzu, wenn Sie Änderungen an der Benutzeroberfläche eines Projekts vorgenommen haben. Wenn Sie eine Pull-Anfrage für ein Problem mit der Benutzeroberfläche senden, fügen Sie bitte einen Screenshot Ihrer Änderung oder einen Link zu einer Bereitstellung hinzu, in der Sie diese zusammen mit Ihrer Pull-Anfrage testen können. Dies macht es für die Gutachter viel einfacher und hilft, den Prozess zu beschleunigen. Sie erhalten auch schneller Bewertungen.
- Fügen Sie Ihrer Bereitstellung des Projekts einen Link hinzu, in dem Prüfer herausfinden können, was Sie geändert haben (Besonders für kleinere Änderungen ist dies sehr hilfreich, da der Prüfer das System selbst nicht einmal einrichten und testen muss. Dies beschleunigt den Überprüfungsprozess erneut erheblich).
- Stellen Sie immer sicher, dass CI und Tests erfolgreich sind.
- Hilfe zum Lösen von Zusammenführungskonflikten (Insbesondere wenn mehrere PRs gleichzeitig vorhanden sind, sind Mischkonflikte häufig. Helfen Sie den Prüfern und lösen Sie Zusammenführungskonflikte, um den Prozess zu beschleunigen.).
- Das Zusammenführen von Pull-Anfragen sollte nur dann erfolgen, wenn mindestens zwei Mitwirkende die PR überprüft und genehmigt haben.

## Wie läuft man vor Ort??
- Es ist leicht vor Ort zu laufen. Hab keine Angst! :D
- Wenn Sie Git bereits installiert haben, überspringen Sie Schritt 3. Wenn Sie Ihre Gabel bereits geklont haben, überspringen Sie die Schritte 4 und 5. 
1. Zunächst müssen Sie einige Anforderungen erfüllen. Installiere sie, wenn du keine Sachen dabei hast [this documentation](https://jekyllrb.com/docs/installation/).
2. Öffnen Sie Ihr Terminal und installieren Sie es jekyll `gem install jekyll bundler`.
3. Laden Sie git herunter und installieren Sie es auf Ihrem PC.
4. Gehe zu [gci18.fossasia.org site](https://github.com/fossasia/gci18.fossasia.org) mach ein fork wenn du noch nicht.
5. Öffnen Git Bash und klonen Sie Ihr Repository in Ihren PC. `git clone https://github.com/<_your-name-here_>/gci18.fossasia.org`.
6. Geh hinein zu deinem Klon repo, und offen Git Bash.(Wenn Sie den 5. Schritt gemacht haben, tun Sie dies `cd gci18.fossasia.org`).
7. Art `bundle install` Abhängigkeiten installieren.
8. Art `bundle exec jekyll serve`. 
9. Sie sehen ein server Adresse. Sehen gci18.fossasia.org Website, gehe zu `localhost:4000` von deinem Liebling browser.

- Nun ist die Arbeit erledigt.

## So fügen Sie Ihren Photo Nick zur Website hinzu:
- Wähle ein Foto(oder Darstellung wie ein "Nick" -Bild) und stellen Sie die Größe auf 240x240 px
- Laden Sie Ihr Foto in die hoch img/students folder, mit einem akzeptablen Namen :)
- Füge dich dem hinzu _data/students.yml Datei wie unten gezeigt
```yaml
- name: Name des Schülers
  github: Github-Benutzername des Studenten
  image: Ihr Bild (oder eine Darstellung wie ein "Nick" -Bild) - der Name muss dem Namen entsprechen, den Sie in den Ordner hochgeladen haben
```

## So fügen Sie einen Mentor zur Website hinzu:
- Wählen Sie einen aktuellen GCI-Mentor und bitten Sie ihn um Erlaubnis, bevor Sie ihn hinzufügen
- Fragen Sie nach einem Bild oder nehmen Sie es von Github und legen Sie die Größe fest to 240x240 px
- Laden Sie das Bild in die hoch img/mentors folder - mit einem passenden Namen
-  Fügen Sie den Mentor dem hinzu _data/metors.yml Datei wie unten gezeigt
```yaml
- name: Mentors Name
  github: Mentors Github-Link
  img: Mentors img 
  
```
## How to add a New Project to the website
-  Choose a FOSSASIA project

- Fragen Sie nach einem Bild oder nehmen Sie es von Github und legen Sie die Größe fest to 1366x566 px
- Laden Sie das Bild in die hoch img folder - mit einem passenden Namen
- Fügen Sie den Mentor dem hinzu _data/orgprojects.yml Datei wie unten gezeigt

```yaml
- title: Projektname
  img: Projekt-Screenshot
  desc: Projektbeschreibung
  github: Projekt-Github-Link
  try: URL wo das Projekt gehostet wird 
```
## So fügen Sie dem Vielen Dank eine Sprache hinzu:
- Wählen Sie eine Sprache (wahrscheinlich eine, mit der Sie vertraut sind)
- Wählen Sie die Worte "Danke für Ihre Beiträge" oder "Danke für Ihren Beitrag" und übersetzen Sie diese
- Fügen Sie die Übersetzung dem hinzu `var items = [];` in dem js/thankyou.js file

## Verfügbare Farbverläufe
- `gradient-pink-light` =  #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%
<img src="https://webgradients.com/public/webgradients_png/001%20Warm%20Flame.png"
     alt="Warm Flame"
     width = 100%
     height= 50px/>
- `gradient-pink` = #ff758c, #ff7eb3
<img src="https://webgradients.com/public/webgradients_png/080%20Passionate%20Bed.png"
     alt="Ripe Malinka"
     width= 100%
     height= 50px/>
- `gradient-cyan-light` = #84fab0 0%, #8fd3f4 100%
<img src="https://webgradients.com/public/webgradients_png/012%20Tempting%20Azure.png"
     alt="Tempting Azure"
     width = 100%
     height= 50px/>
- `gradient-cyan` = #43e97b 0%, #38f9d7 100%
<img src="https://webgradients.com/public/webgradients_png/020%20New%20Life.png"
     alt="New Life"
     width= 100%
     height= 50px/>
- `gradient-blue-light` = #a1c4fd 0%, #c2e9fb 100%
<img src="https://webgradients.com/public/webgradients_png/010%20Winter%20Neva.png"
     alt="Winter Neva"
     width= 100%
     height = 50px/>
- `gradient-blue` = #4facfe,#00f2fe
<img src="https://webgradients.com/public/webgradients_png/019%20Malibu%20Beach.png"
     alt="Malibu Beach"
     width= 100%
     height = 50px />
- `gradient-multi-cool` =  #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%
<img src="https://webgradients.com/public/webgradients_png/152%20Sea%20Lord.png"
     alt="Sea Lord"
     width= 100%
     height = 100px />
- `gradient-multi-hot` = #FFE29F 0%, #FFA99F 48%, #FF719A 100%
<img src="https://webgradients.com/public/webgradients_png/158%20Angel%20Care.png"
     alt="Angel Care"
     width= 100%
     height = 100px />
