window.addEventListener('DOMContentLoaded', () => {
    // const dateSelections = document.getElementsByClassName("date-selection");
    // for ( const dateSelection of dateSelections ) {
    //     dateSelection.addEventListener("change",function(){
    //         const dateText = dateSelection.parentNode.querySelector('.label-for-tab');
    //         dateText.style.display = "none";
    //     });
    // }

    // const bottomBanner = document.getElementById('sp-banner')
    // const formHeader = document.getElementById('contact')
    // const bannerShowOrHide = () => {
    //     const formTop = formHeader.getBoundingClientRect().top - (window.innerHeight * 0.7)
    //     const cl = bottomBanner.classList
    //     const hasClass = cl.contains('hidden')
    //     if (formTop < 0 && !hasClass) {
    //         cl.add('hidden')
    //     }
    //     else if (formTop > 0 && hasClass){
    //         cl.remove('hidden')
    //     }
    // }

    // bannerShowOrHide()
    // window.addEventListener('scroll', bannerShowOrHide)

    // $(".date-selection").datepicker();


    // $('#form').submit(() => {
    //     if($("#date-selection").val() === '') {
    //         alert('体験希望日を入力してください')
    //         return false
    //     }
    // })

    
    console.log("ok");
    // ハンバーガーメニューの動き
    // const nav = document.querySelector('#tab-nav-btn');
    // const ham = document.querySelector('#hamburger-menu .hamburger-menu');
    // const close = document.querySelector('#close-btn');

    // nav.addEventListener('click', function () { 
    //     console.log("click");
    //     ham.classList.add('active'); 
    // });
    // close.addEventListener('click', function () { 
    //     ham.classList.remove('active'); 
    // });

    // window.addEventListener('scroll', function(){
    //     ham.classList.remove('active'); 
    // });

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