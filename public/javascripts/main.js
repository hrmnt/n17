jQuery(document).ready(function($){
    var cfg = {
        scrollDuration : 800, // smoothscroll duration
    };
    /* Owl Carousel
    * ------------------------------------------------------ */
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 1000);
    });
    var clOwlCarousel = function(){

        $('.main-background').owlCarousel({
            loop: true,
            nav: true,
            navText: ["<img src='./public/images/icons/back.png' style='height: 2.4rem; width: auto'>","<img src='./public/images/icons/back.png' style='height: 2.4rem; width: auto; transform: rotate(180deg'>"],

            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            animateOut: 'fadeOut',
            touchDrag  : false,
            mouseDrag  : false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });

        $('.teacher').owlCarousel({
            loop: true,
            nav:true,
            dots: false,
            // autoplay: true,
            // autoplayTimeout: 5000,
            // autoplayHoverPause: true,
            navText: ["<img src='./public/images/icons/back.png' style='height: 1.8rem; width: auto'>","<img src='./public/images/icons/back.png' style='height: 1.8rem; width: auto; transform: rotate(180deg'>"],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
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
            }, 200);
        });
    };

    /* Smooth Scrolling
    * ------------------------------------------------------ */

    /* EmailJs
    * ------------------------------------------------------ */
    var clEmailJs = function(){
        emailjs.init("user_fEVFyKLM3zZVdqvdUhNmp");

        var myform = $("form#myform");

        myform.submit(function(event){
            event.preventDefault();
            console.log(myform);
            var service_id = "gmail";
            var template_id = "template_0jZFRUAD";

            $(".request__form-submit").prop('disabled', true);
            $(".request__form-submit").val("Отправка...");

            emailjs.sendForm(service_id,template_id,"myform").then(function(){
                $(".request__form-submit").val("Ваша заявка успешно отправлена!");
                $(".request__form-submit").prop('disabled', false);
            }, function(err) {
                $(".request__form-submit").val("Ошибка! Заявка не отправлена, повторите позже!");
            });
            return false;
        });
    };

    /* Menu on Scrolldown
    * ------------------------------------------------------ */
    var clMenuOnScrolldown = function() {

        var menuTrigger = $('.header-menu-toggle');

        $(window).on('scroll', function() {

            if ($(window).scrollTop() > 150) {
                menuTrigger.addClass('opaque');
            }
            else {
                menuTrigger.removeClass('opaque');
            }

        });
    };

    /* OffCanvas Menu
     * ------------------------------------------------------ */
    var clOffCanvas = function() {

        var menuTrigger     = $('.header-menu-toggle'),
            nav             = $('.header-nav'),
            closeButton     = nav.find('.header-nav__close'),
            siteBody        = $('body'),
            mainContents    = $('section, footer');

        // open-close menu by clicking on the menu icon
        menuTrigger.on('click', function(e){
            e.preventDefault();
            // menuTrigger.toggleClass('is-clicked');
            siteBody.toggleClass('menu-is-open');
        });

        // close menu by clicking the close button
        closeButton.on('click', function(e){
            e.preventDefault();
            menuTrigger.trigger('click');
        });

        // close menu clicking outside the menu itself
        siteBody.on('click', function(e){
            if( !$(e.target).is('.header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span') ) {
                // menuTrigger.removeClass('is-clicked');
                siteBody.removeClass('menu-is-open');
            }
        });

    };

    /* Other Functions
        * ------------------------------------------------------ */
    var clOthers = function(){
        AOS.init();
        $("#phone").inputmask({"mask": "+7 (999) 999-9999"});

        var header = document.querySelector("#header");
        var main = document.querySelector("#main").offsetTop;
        var beready = document.querySelector("#beready").offsetTop;
        var teachers = document.querySelector("#teachers").offsetTop;

        var summer = document.querySelector("#summer").offsetTop;
        var schedule = document.querySelector("#schedule").offsetTop;

        function onScroll() {
            var maxwidth;
            if(window.matchMedia('(max-width: 991px)').matches)
            {
                maxwidth = 0;
            }
            else {
                maxwidth = convertRemToPixels(11);
            }

            if (window.scrollY >= main) {
                $(header).addClass("top");
                $("a[href$='main']").addClass("active");
            }

            if (window.scrollY + maxwidth <= main) {
                $(header).removeClass("top");
            }

            if (window.scrollY < beready) {
                $("a[href$='beready']").removeClass("active");
                $("a[href$='request']").addClass("active");
            }

            if (window.scrollY + maxwidth >= beready) {
                $("a[href$='request']").removeClass("active");
                $("a[href$='teachers']").removeClass("active");
                $("a[href$='beready']").addClass("active");
            }

            if(window.scrollY + maxwidth >= teachers){
                $("a[href$='beready']").removeClass("active");
                $("a[href$='schedule']").removeClass("active");
                $("a[href$='teachers']").addClass("active");
            }

            if(window.scrollY + maxwidth >= schedule){
                $("a[href$='teachers']").removeClass("active");
                $("a[href$='summer']").removeClass("active");
                $("a[href$='schedule']").addClass("active");
            }

            if(window.scrollY + maxwidth >= summer){
                $("a[href$='schedule']").removeClass("active");
                $("a[href$='summer']").addClass("active");
            }

        }

        function convertRemToPixels(rem) {
            return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
        }


        document.addEventListener("scroll", onScroll);
    };

    (function ssInit() {
        clPreloader();
        clMenuOnScrolldown();
        clOffCanvas();
        clEmailJs();
        clOwlCarousel();
        clOthers();
    })();
});