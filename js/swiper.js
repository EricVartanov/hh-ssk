const swiper = new Swiper(".idc-swiper", {
    // Default parameters
    loop: true,
    direction: "horizontal",
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination-vertical",
        clickable: true,
        renderBullet: function (index, className) {
            return (
                '<span class="' +
                className +
                '"> <span>' +
                0 +
                (index + 1) +
                "</span> </span>"
            );
        },
    },
});

const swiper2 = new Swiper(".idc-swiper-2", {
    // Default parameters
    slidesPerView: "auto",
    spaceBetween: 10,
    grabCursor: true,
    loop: false,
    direction: "horizontal",
    // Responsive breakpoints
    breakpoints: {
        1280: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    },

    pagination: {
        el: ".idc-swiper-pagination",
        clickable: true,
        type: "bullets",
    },

    navigation: {
        nextEl: ".idc-swiper-button-next",
        prevEl: ".idc-swiper-button-prev",
    },
});
