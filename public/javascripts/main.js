jQuery(document).ready(function($){
    var cfg = {
        scrollDuration : 800, // smoothscroll duration
    };
    /* Owl Carousel
    * ------------------------------------------------------ */
    var clOwlCarousel = function(){

        $('.main-background').owlCarousel({
            loop: true,
            nav: true,
            navText: ["<img src='/images/icons/back.png' style='height: 2.4rem; width: auto'>","<img src='/images/icons/back.png' style='height: 2.4rem; width: auto; transform: rotate(180deg'>"],

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
            navText: ["<img src='/images/icons/back.png' style='height: 1.8rem; width: auto'>","<img src='/images/icons/back.png' style='height: 1.8rem; width: auto; transform: rotate(180deg'>"],
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
    var clSmoothScroll = function() {

        $('.smoothscroll').on('click', function (e) {
            var target = this.hash,
                $target    = $(target);

            e.preventDefault();
            e.stopPropagation();

            if(window.matchMedia('(max-width: 991px)').matches)
            {
                $('html, body').stop().animate({
                        'scrollTop': $target.offset().top
                    },
                    cfg.scrollDuration, 'swing').promise().done(function() {
                    if ($('body').hasClass('menu-is-open')) {
                        $('.header-menu-toggle').trigger('click');
                    }
                });
            }
            else {
                $('html, body').stop().animate({
                        'scrollTop': $target.offset().top - 60
                    },
                    cfg.scrollDuration, 'swing').promise();
            }
        });

    };

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

        var header = document.querySelector("#header");
        var main = document.querySelector("#main").offsetTop;
        var beready = document.querySelector("#beready").offsetTop;
        var teachers = document.querySelector("#teachers").offsetTop;

        function onScroll() {
            if (window.scrollY >= main) {
                $(header).addClass("top");
                $("a[href$='main']").addClass("active");
            }

            if (window.scrollY + convertRemToPixels(11) <= main) {
                $(header).removeClass("top");
            }

            if (window.scrollY < beready) {
                $("a[href$='beready']").removeClass("active");
                $("a[href$='request']").addClass("active");
            }

            if (window.scrollY + convertRemToPixels(11) >= beready) {
                $("a[href$='request']").removeClass("active");
                $("a[href$='teachers']").removeClass("active");
                $("a[href$='beready']").addClass("active");
            }

            if(window.scrollY + convertRemToPixels(11) >= teachers){
                $("a[href$='beready']").removeClass("active");
                $("a[href$='teachers']").addClass("active");
            }
        }

        function convertRemToPixels(rem) {
            return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
        }

        // function validate_int(myEvento) {
        //     return (myEvento.charCode >= 48 && myEvento.charCode <= 57) || myEvento.keyCode == 9 || myEvento.keyCode == 10 || myEvento.keyCode == 13 || myEvento.keyCode == 8 || myEvento.keyCode == 116 || myEvento.keyCode == 46 || (myEvento.keyCode <= 40 && myEvento.keyCode >= 37);
        // }
        //
        // function phone_number_mask() {
        //     var myMask = "(___) ___-____";
        //     var suffix = "+7";
        //     var myCaja = document.getElementById("phone");
        //     var myText = "";
        //     var myNumbers = [];
        //     var myOutPut = "";
        //     var theLastPos = 1;
        //     myText = myCaja.value.substring(0);
        //     //get numbers
        //     for (var i = 0; i < myText.length; i++) {
        //         if (!isNaN(myText.charAt(i)) && myText.charAt(i) != " " && i != 0) {
        //             myNumbers.push(myText.charAt(i));
        //         }
        //     }
        //     //write over mask
        //     for (var j = 0; j < myMask.length; j++) {
        //         if (myMask.charAt(j) == "_") { //replace "_" by a number
        //             if (myNumbers.length == 0){
        //                 myOutPut = myOutPut + myMask.charAt(j);
        //             }
        //             else {
        //                 myOutPut = myOutPut + myNumbers.shift();
        //                 theLastPos = j + 1; //set caret position
        //             }
        //         } else {
        //             myOutPut = myOutPut + myMask.charAt(j);
        //         }
        //     }
        //     document.getElementById("phone").value = suffix + myOutPut;
        //     document.getElementById("phone").setSelectionRange(theLastPos, theLastPos);
        // }
        //
        // document.getElementById("phone").onkeypress = validate_int;
        // document.getElementById("phone").onkeyup = phone_number_mask;


        document.addEventListener("scroll", onScroll);
    };

    (function ssInit() {
        clPreloader();
        clMenuOnScrolldown();
        clOffCanvas();
        clSmoothScroll();
        clEmailJs();
        clOwlCarousel();
        clOthers();
    })();
});