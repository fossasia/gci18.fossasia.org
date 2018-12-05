// Place your custom code here .

$(".flip-toggle-region").click(function() {
  $(this).parent().parent().parent().toggleClass("flip-card-inner-flip");
});

$(".flip-card-back").click(function(){
  $(this).parent().toggleClass("flip-card-inner-flip");
});

$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

});
$('.code-in-nav li').hover(function(){
  $(this).css('background-color','#e12b00');
},function(){
  $(this).css('background-color','#fff');
});
// Lazy Loading
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadSections ;    // Stores the elements for lazy loading
  var lazyloadImages ;   // stores the img in the element
  var lazyloadThrottleTimeout;
  var scrollTop ;
  
  function lazyload () {
    lazyloadSections = document.querySelectorAll(".lazy-section");
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        scrollTop = window.pageYOffset;
        lazyloadSections.forEach(function(section) {
            if($(section).offset().top -500 < (window.innerHeight + scrollTop)  && $(section).height() + $(section).offset().top + 500 > scrollTop ) {
              lazyloadImages = section.querySelectorAll('img.lazy');
              lazyloadImages.forEach(function(img){
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              });
              section.classList.remove('lazy-section');
            }
        });
            //Map
         if($('.map').offset().top -500 < (window.innerHeight + scrollTop)) {
           $.getScript("js/geolocation.js",function(){
            showMapPeople();
           });
           $('.map').removeClass('hid');
         }
    }, 0);
        if(lazyloadSections.length == 0 && !$('.map').hasClass('hid')) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
   }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});
