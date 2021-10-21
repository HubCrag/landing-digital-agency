let swiper = new Swiper(".TestimonialSwiper", {
    spaceBetween: 30,
    slidesPerView: 1.5,
    slidesPerGroup: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2.5,
            slidesPerGroup: 1,
        },
    },
});

let swiper1 = new Swiper(".NewsSwiper", {
    spaceBetween: 30,
    slidesPerView: 1.5,
    slidesPerGroup: 1,
    breakpoints: {
        1200: {
            slidesPerView: 3.5,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 2.5,
            slidesPerGroup: 1,
        },
    },
});