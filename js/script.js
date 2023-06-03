$(document).ready(function(){

    $(".menu-icon").click(function(){

        $(".mobile-nav").css("display","block");

        $(".mobile-nav").css("opacity","1");

    });



    $(".close-button").click(function(){

        $(".mobile-nav").css("display","none");

    });


            
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500){
            $('.button').fadeIn();
        }
        else{
            $('.button').fadeOut();
        }
    });

    $('.button').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});