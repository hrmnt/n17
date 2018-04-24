(function($) {
    var cfg = {
            scrollDuration : 800, // smoothscroll duration
        };

    /* Owl Carousel
    * ------------------------------------------------------ */
    var clOwlCarousel = function(){
        $('.owl-carousel').owlCarousel({
            loop:true,
            // margin:10,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });
    };

    /* Preloader
    * ------------------------------------------------------ */
    var clPreloader = function() {

        $(window).on('load', function() {

            $("#loader").fadeOut("slow", function() {
                $("#preloader").delay(200).fadeOut("slow");
            });

            setTimeout(function(){
                $(this).scrollTop(0);
                $('html, body')
                    .css({
                        'overflow': 'auto'
                    })
            }, 200);
        });
    };

    /* Smooth Scrolling
    * ------------------------------------------------------ */
    var clSmoothScroll = function() {

        $('.smoothscroll').on('click', function (e) {
            var target = this.hash,
                $target    = $(target);

            e.preventDefault();
            e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            },
                cfg.scrollDuration, 'swing').promise();
        });

    };

    /* EmailJs
    * ------------------------------------------------------ */
    var clEmailJs = function(){
        // emailjs.init("user_SgFluNR0Eudhc9IV1r9yI");

        var myform = $("form#myform");

        myform.submit(function(event){
            event.preventDefault();
            console.log(myform);
            var service_id = "gmail";
            var template_id = "template_lCZF3ADj";

            $(".message__form-button").prop('disabled', true);
            $(".message__form-button").val("Отправка...");

            // emailjs.sendForm(service_id,template_id,"myform").then(function(){
            //     $(".message__form-button").val("Ваша заявка успешно отправлена...");
            // }, function(err) {
            //     $(".message__form-button").val("Ошибка! Заявка не отправлена, повторите позже!");
            // });
            return false;
        });
    };

    /* Back to Top
    * ------------------------------------------------------ */
    var clBackToTop = function() {

        var pxShow  = 500,         // height on which the button will show
            fadeInTime  = 400,         // how slow/fast you want the button to show
            fadeOutTime = 400,         // how slow/fast you want the button to hide
            scrollSpeed = 300,         // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
            goTopButton = $(".go-top");

        // Show or hide the sticky footer button
        $(window).on('scroll', function() {
            if ($(window).scrollTop() >= pxShow) {
                goTopButton.fadeIn(fadeInTime);
            } else {
                goTopButton.fadeOut(fadeOutTime);
            }
        });
    };


    /* Other Functions
    * ------------------------------------------------------ */
    var clOthers = function(){

    };

    (function ssInit() {
        // clOthers();
        // clPreloader();
        // clSmoothScroll();
        // clEmailJs();
        // clOwlCarousel();
        // clBackToTop();
    })();
})(jQuery);