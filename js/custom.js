// PLace your custom code here .


 $(".flip-toggle-region , .flip-card-back").click(function(){
     if($(".flip-card-inner").hasClass("flip-card-inner-flip")){
        $(".flip-card-inner").removeClass("flip-card-inner-flip");
     }
     else{
        $(".flip-card-inner").toggleClass("flip-card-inner-flip");
     }
});