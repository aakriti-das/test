$(document).ready(function () {
    $('.book-slider').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow:1,
                }
            }
        ]
    });


    $('.nav-trigger').click(function () {
        $('.site-content-wrapper').toggleClass('scaled');
    })
});

