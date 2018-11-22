// PLace your custom code here .


 $(".flip-toggle-region").click(function(){
        $(this).parent().parent().parent().toggleClass("flip-card-inner-flip");
});
  $(".flip-card-back").click(function(){
        $(this).parent().toggleClass("flip-card-inner-flip");
});