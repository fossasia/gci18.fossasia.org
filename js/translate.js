var languagedata = {}

// prototype hash function
String.prototype.hashCode = function() {
    var hash = 0
    if (this.length == 0) return hash
    for (var i = 0; i < this.length; i++) {
        let char = this.charCodeAt(i)
        hash = ((hash<<5)-hash)+char
        hash = hash & hash
    }
    return hash
}

// text level algorithms
// -1 -> no innerHTML
// 0  -> text (with formatting)
// >0 -> nodes with children
function textLevel(node) {
  var children = node.children
  var level = children.length
  if(node.innerHTML == "") return -1
  for(var i=0; i<children.length; i++) {
    let child = node.children[i]
    if(child.nodeName == "BR") level--
  }
  return level
}

// select all nodes containing nearly just text (textnodes)
function getTextNodes() {
  var textNodes = []
  var all = document.getElementsByTagName("*")
  for(var i=0; i<all.length; i++) { // iterate all document nodes
    let node = all[i]
    if(textLevel(node) == 0) { // only nodes containing text
      if(node.getAttribute('tljs_original') == null) node.setAttribute('tljs_original', node.innerHTML)
      if(node.getAttribute('tljs_hash') == null) node.setAttribute('tljs_hash', node.getAttribute('tljs_original').hashCode())
      textNodes.push(node)
    }
  }
  return textNodes
}

// log all textnodes
function translatable() {
  var textNodes = getTextNodes()
  for (var i=0; i<textNodes.length; i++) {
    let node = textNodes[i]
    let text = node.getAttribute('tljs_original')
    let hash = node.getAttribute('tljs_hash')
    console.log(text, hash)
  }
}

// switch innerHTML of textNodes to a given language
function translate(lang) {
  console.log("[translate.js] translating to "+lang)
  var textNodes = getTextNodes()
  for (var i=0; i<textNodes.length; i++) {
    let node = textNodes[i]
    let hash = node.getAttribute('tljs_hash')
    if (languagedata.hasOwnProperty(hash)) {
      if (languagedata[hash].hasOwnProperty(lang)) node.innerHTML = languagedata[hash][lang]
      else node.innerHTML = node.getAttribute('tljs_original')
    }
  }
}

// automatic translation
window.onload = function () {
  var userLang = navigator.language || navigator.userLanguage
  translate(userLang)
}

// languagedata for the menu
var ld_menu = {
  "-1397214398": {
    "de": "Wilkommen"
  },
  "-1679962958": {
    "de": "Mentoren"
  },
  "1940662712": {
    "de": "Schüler"
  },
  "1540296472": {
    "de": "Beitragende"
  },
  "-934052710": {
    "de": "Projekte"
  },
  "-1678962486": {
    "de": "Verbinden"
  },
  "77116": {
    "de": "Karte"
  },
  "-1548945544": {
    "de": "Sprache"
  },
  "60895824": {
    "de": "Englisch"
  },
  "2129449382": {
    "de": "Deutsch"
  }
}

//languagedata for the slideshow
var ld_slideshow = {
  "-510034974": {
    "de": "Letztes Jaht haben wir die Google-GCI Rekorde gebrochen"
  },
  "-541513382": {
    "de": "Google Code-In mit FOSSASIA"
  },
  "-472988241": {
    "de": "FOSSASIA baut tolle Projekte"
  },
  "-1473882478": {
    "de": "Alles opensource"
  },
  "631455697": {
    "de": "Wir sind <br>FOSSASIA"
  },
  "-1275394076": {
    "de": "Verbindung von Open Tech Communities in ganz Asien mit Entwicklern und Entwicklern <br>im FOSSASIA Netzwerk."
  },
  "1677252695": {
    "de": "Programmierung, Dokumentation, Öffentlichkeitsarbeit, Design, Qualitätskontrolle <br>und viel mehr!"
  },
  "517154035": {
    "de": "Mit über 900 Schülern und 90 Mentoren"
  },
  "-1220127440": {
    "de": "Entwicklung kollaborativer Open-Source-Technologien."
  },
  "-1968233564": {
    "de": "Mit einer Reihe von spannenden Aufgaben, die Folgendes umfassen"
  },
  "-1261724366": {
    "de": "Auch du kannst beitragen"
  },
  "-746001390": {
    "de": "Erkundung beginnen"
  },
  "-1322067033": {
    "de": "Entdecke Projekte"
  },
  "-768301989": {
    "de": "Mehr erfahren"
  },
  "-1859676226": {
    "de": "teilnehmen"
  },
  "-1343672231": {
    "de": " FOSSASIA hatte über 1500 abgeschlossene Aufgaben... atemberaubend, nicht wahr?!<br>"
  }
}

// other translationdata
var ld_other = {
  "-1244922456": {
    "de": "Was ist OpenSource?"
  },
  "1347933083": {
    "de": "Im Allgemeinen bezieht sich Open Source auf jedes Programm, dessen Quellcode ist. \
          zur Nutzung oder Modifikation als Benutzer oder andere Entwickler zur Verfügung gestellt werden. \
          passen. Open-Source-Software wird in der Regel als öffentliche Software entwickelt. \
          Zusammenarbeit und frei verfügbar gemacht."
  },
  "654096818": {
    "de": "Was ist FOSSASIA?"
  },
  "1220069720": {
    "de": "FOSSASIA entwickelt Soft- und Hardware und arbeitet Projekte mit Open Tech zusammen. \
          Bitte besuchen Sie unsere Github und FOSSASIA Labs."
  },
  "1589977619": {
    "de": "FOSSASIA entdecken 🌏"
  },
  "2602621": {
    "de": "Das Team"
  },
  "-513106295": {
    "de": "Mit Fossasia in Verbindung treten in den sozialen Medien"
  },
  "2135158137": {
    "de": "Folgen Sie uns auf jeden Fall in allen sozialen Medien!"
  },
  "27121662": {
    "de": "Tweets von FOSSASIA"
  },
  "167965758": {
    "de": "FOSSASIA auf Instagram"
  },
  "1093719854": {
    "de": "zum Profil"
  },
  "-1870020286": {
    "de": "FOSSASIA Fotogallerie"
  },
  "-872179382": {
    "de": "Fossasia zieht Schüler an"
  },
  "-905867314": {
    "de": "Das Video wurde von einem unserer Schüler während des Wettbewerbs gemacht."
  },
  "-517618648": {
    "de": "Unser Youtube Kanal"
  },
  "1931091147": {
    "de": "FOSSASIA | Projekte"
  },
  "-502861880": {
    "de": "Susi ist ein System der künstlichen Intelligenz, das Mustervergleiche, \
          Internetdaten, Datenfluss und Prinzipien der Inferenzmaschine kombiniert. Indem es \
          einige Fähigkeiten zu reflektieren vermag, kann es sich an die Benutzereingaben erinnern, um bessere Ergebnisse zu prozuzieren. \
          Zum Beispiel Abzüge und personalisiertes Feedback. Sein Zweck ist es, die Möglichkeiten der \
          eines künstlichen Begleiters und die Beantwortung der unbeantwortete Fragen. ⁠⁠⁠\
          Der SUSI.AI Webchat ist ein von uns entwickeltes Frontend \
          für den Web-Zugang von SUSI."
  },
  "-1669903731": {
    "de": "Beitragen"
  },
  "84379": {
    "de": "Ausprobieren"
  },
  "2042295472": {
    "de": " Meilix ist ein anpassbares Linux-Build für den sofortigen Einsatz. \
          Sie können den Meilix Generator (Web \
          App) verwenden um ein Linux für Ihre eigene Marke/Event zu erstellen, fügen Sie auch Apps hinzu und \
          Funktionen, die Sie vorinstallieren können. Es wird ein ein ISO-Image von Ihrem \
          Linux, das Sie als Live-Boot verwenden oder auf PCs installieren können, erstellt."
  },
  "-694565600": {
    "de": "Loklak ist eine Serveranwendung, die in der Lage ist, Nachrichten zu sammeln von \
          verschiedene Quellen, einschließlich Twitter. Der Server enthält einen Suchindex \
          und eine Peer-to-Peer-Index-Sharing-Schnittstelle. Alle Nachrichten werden in \
          einen elastischen Suchindex gespeichert."
  },
  "-461413729": {
    "de": " Susper ist eine dezentrale Suchmaschine, die Peer-to-Peer Technologie verwendet. \
          Es verwendet Yacy und Apache Solr, um die Suchergebnisse zu durchsuchen und zu indizieren."
  },
  "-1732810888": {
    "de": "Videos"
  },
  "916501438": {
    "de": "Unsere Mentoren"
  },
  "-1520418150": {
    "de": "Karte unserer Schüler und Mentoren"
  },
  "-350701718": {
    "de": "Repository"
  },
  "-1108126166": {
    "de": "Aktivität anzeigen"
  },
  "-1504596595": {
    "de": "Details über unsere Beitragenden"
  },
  "-1586069699": {
    "de": "Wie kann ich teilnehmen?"
  },
  "47368654": {
    "de": "Neueste Beiträge"
  },
  "-442762959": {
    "de": "Letzte Updates"
  }
}

// assemble language data
Object.keys(ld_menu).forEach(hash => languagedata[hash] = ld_menu[hash])
Object.keys(ld_slideshow).forEach(hash => languagedata[hash] = ld_slideshow[hash])
Object.keys(ld_other).forEach(hash => languagedata[hash] = ld_other[hash])
