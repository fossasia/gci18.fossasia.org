var items = [
'Thank you for your contributions!',
'Merci pour vos contributions!',
'आपके योगदानों के लिए धन्यवाद',
'Danke für Ihre Beiträge!'
'谢谢你的贡献'
'Grazie per aver contribuito'
];

var app = document.getElementById('app');
var count = 0;
var index = 0;
var typingEffect = function typingEffect() {
 var text = items[index];
 if (count < text.length) {
   setTimeout(function () {
     app.innerHTML += text[count];
     count++;
     typingEffect();
   }, Math.floor(Math.random(10) * 100));
 } else {
   count = 0;
   index = index + 1 < items.length ? index + 1 : 0;
   setTimeout(function () {
     app.innerHTML = '';
     typingEffect();
   }, 1500);
 }
};

typingEffect();
