var items = [
'Thank you for your contributions!',
'Merci pour vos contributions!',
'Kea le leboha ka menehelo ea hau!',
'आपके योगदानों के लिए धन्यवाद',
'Dziękujemy za Twój wkład!',
'Danke für Ihre Beiträge!',
'Gracias por sus aportaciones!', 
'Bedankt voor uw bijdragen!',
'तपाइको योगदानको लागि धन्यवाद',
'شكرا للمساهمة',
'공헌 해 주셔서 감사합니다',
'ඔබගේ දායකත්වයට ස්තූතියි!',
'感谢您的贡献。',
'आपल्या योगदानाबद्दल धन्यवाद!',
'Շնորհակալություն, նպաստելու համար',
'благодарю вас за вклад',
'உங்கள் பங்களிப்பிற்கு நன்றி'
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
   }, 1000);
 }
};

typingEffect();
