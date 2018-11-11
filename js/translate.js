var translations = {
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
  },
}

String.prototype.hashCode = function() {
    var hash = 0
    if (this.length == 0) return hash
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i)
        hash = ((hash<<5)-hash)+char
        hash = hash & hash
    }
    return hash
}


function getTextNodes() {
  var strings = []
  var all = document.getElementsByTagName("*")
  for(var i=0; i < all.length; i++) {
     if(all[i].children.length == 0 && all[i].innerHTML != "") {
       let text = all[i].getAttribute('tljs_original') || all[i].innerHTML
       all[i].setAttribute('tljs_hash', text.hashCode())
       strings.push(all[i])
     }
  }
  return strings
}

function translatable() {
  var textNodes = getTextNodes()
  for (var i=0; i<textNodes.length; i++) {
    let text = textNodes[i].getAttribute('tljs_original') || textNodes[i].innerHTML
    let hash = text.hashCode()
    console.log(text, hash)
  }
}

function translate(lang) {
  console.log("[translate.js] translating to "+lang)
  var textNodes = getTextNodes()
  for (var i=0; i<textNodes.length; i++) {
    if(textNodes[i].getAttribute('tljs_original') == null) {
      textNodes[i].setAttribute('tljs_original', textNodes[i].innerHTML)
    }
    let original = textNodes[i].getAttribute('tljs_original')
    let hash = original.hashCode()
    if (translations.hasOwnProperty(hash)) {
      if (translations[hash].hasOwnProperty(lang)) {
        textNodes[i].innerHTML = translations[hash][lang]
      } else {
        console.log("oops")
        textNodes[i].innerHTML = original
      }
    }
  }
}

window.onload = function () {
  var userLang = navigator.language || navigator.userLanguage
  translate(userLang)
}
