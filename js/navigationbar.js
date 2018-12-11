// Navigation
    if($(window).width() > 990)    
    {      
       lightThemeNavbar();
    }
    function updateNav() {
      if (scrollY <= 0){
        lightThemeNavbar();
      }
      else{
        darkThemeNavbar();
      }
    }
    function lightThemeNavbar(){
       if($(window).width() >= 990)
      {
         $('.nav-bar .logo-dark').css('display','none');
         $('.nav-bar .logo-light').css('display','inline-block');
         $('.menu li a').css('color','#fff');
         $('.menu li a').hover(function(){
         $(this).css('border-bottom-color','#fff');
           },function(){
            $(this).css('border-bottom-color','transparent');
         });
         $('.nav-container').css('background','transparent');
         $('.nav-bar .ti-menu').css('color','#fff');
         $('.nav-bar .has-dropdown').toggleClass('changeToWhite');
      }
    }
    function darkThemeNavbar(){
        $('.nav-bar .logo-dark').css('display','inline-block');
        $('.nav-bar .logo-light').css('display','none');
        $('.menu li a').css('color','#333');
        $('.nav-container').css('background','rgba(255,255,255,.9)');
        $('.menu li a').hover(function(){
        $(this).css('border-bottom-color','#777');
           },function(){
           $(this).css('border-bottom-color','transparent');
         });
        $('.nav-bar .ti-menu').css('color','#666');
        $('.nav-bar .has-dropdown').removeClass('changeToWhite');
    }
    window.addEventListener('scroll', updateNav, false);
    //Autohide feature
    var prevScrollpos = window.pageYOffset;
    $(window).scroll(function() {
        var currentScrollPos = window.pageYOffset;
        if ( currentScrollPos < 780) {
            $('nav').css('margin-top', '0px');
        } else if(currentScrollPos - prevScrollpos > 3){
            setTimeout(function(){
                $('nav').css('margin-top', '-150px');
            },400)
        } else if(prevScrollpos - currentScrollPos > 3){
            setTimeout(function(){
                $('nav').css('margin-top', '0px');
            }, 500);
        }
        prevScrollpos = currentScrollPos ;
        $('nav').clearQueue();
    });