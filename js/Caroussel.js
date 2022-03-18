$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    mouseDrag: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:true,
            mouseDrag:true,
        },
        600:{
            items:3,
        },
        1200:{
            items:4,
        },
        1400:{
            items:5,
        }
    }
})