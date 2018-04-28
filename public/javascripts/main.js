jQuery(document).ready(function($){
    var header = document.querySelector("#header"), origOffsetY = header.offsetTop, headerIsFixed = !1;
    var main = document.querySelector("#main").offsetTop;

    AOS.init();
    var cfg = {
            scrollDuration : 800, // smoothscroll duration
        };

    function onScroll() {
        if (window.scrollY >= main) {
            $(header).addClass("top");
        }
        if (window.scrollY <= main) {
            $(header).removeClass("top");
        }
    }

    // $("#menumenu li a").click(function() {
    //     $("#menumenu li").removeClass('selected');
    //     $(this).parent().addClass('selected');
    // });


    /* Owl Carousel
    * ------------------------------------------------------ */
    var clOwlCarousel = function(){
        $('.main-background').owlCarousel({
            loop: true,
            nav:true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
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
                'scrollTop': $target.offset().top - 80
            },
                cfg.scrollDuration, 'swing').promise();
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
                $(".request__form-submit").val("Ваша заявка успешно отправлена...");
            }, function(err) {
                $(".request__form-submit").val("Ошибка! Заявка не отправлена, повторите позже!");
            });
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


    var clOthers = function(){
        // var div = document.getElementById("main");
        // console.log(div.offsetTop);

        document.addEventListener("scroll", onScroll);
    };
    /* Other Functions
    * ------------------------------------------------------ */

    (function ssInit() {
        // clPreloader();
        clSmoothScroll();
        clEmailJs();
        clOwlCarousel();
        // clBackToTop();
        clOthers();

    })();
});