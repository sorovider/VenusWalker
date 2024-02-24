window.addEventListener('DOMContentLoaded', () => {
    $('.about-work__works').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        swipe: true,
        swipeToSlide: true,
        touchMove: true,
        // autoplay: true,
        // autoplaySpeed: 4000,
        prevArrow: '<img class="slide-arrow prev-arrow" src="images/about-work/left-arrow.png.webp" width="12" height="24" alt="左矢印">',
        nextArrow: '<img class="slide-arrow next-arrow" src="images/about-work/right-arrow.png.webp" width="12" height="24" alt="右矢印">',
    });

    $('.js-hamburger-btn, .js-hamburger-item').click(() => {
        $('#js-hamburger-menu').toggleClass('js-hamburger-menu-open')
        $('html').toggleClass('no-scroll')
    })
});