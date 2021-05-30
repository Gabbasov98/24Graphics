function sliderYoutube() {
    var swiper = new Swiper('.youtube .swiper-container', {
        speed: 800,
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.youtube .swiper-button-next',
            prevEl: '.youtube .swiper-button-prev',
        },

        breakpoints: {
            320: {
                slidesPerView: "auto",
                spaceBetween: 20,
            },


            992: {
                slidesPerView: 2,
                spaceBetween: 20,
            },


        }
    })
}




$(document).ready(function() {
    $('.header__city select').niceSelect()
    $('.cart__item-amount select').niceSelect()

    sliderYoutube()


    // Галлерея в странице товара
    $(".catalog-detail__gallery-tab").click(function() {
        let path = $(this).attr("data-tabs-path");
        $(".catalog-detail__gallery-tab").removeClass("catalog-detail__gallery-tab--active");
        $(`.catalog-detail__gallery-tab[data-tabs-path=${path}]`).addClass("catalog-detail__gallery-tab--active");
        $(".catalog-detail__gallery-content").removeClass("catalog-detail__gallery-content--active");
        $(`.catalog-detail__gallery-content[data-tabs-target=${path}]`).addClass("catalog-detail__gallery-content--active");

    })
    $(".catalog-detail__gallery-next").click(function() {

        let activePath = Number($(".catalog-detail__gallery-tab--active").attr("data-tabs-path"));
        if (activePath < $(".catalog-detail__gallery-tab").length) {
            $(".catalog-detail__gallery-tab").removeClass("catalog-detail__gallery-tab--active");
            $(`.catalog-detail__gallery-tab[data-tabs-path=${activePath + 1}]`).addClass("catalog-detail__gallery-tab--active");
            $(".catalog-detail__gallery-content").removeClass("catalog-detail__gallery-content--active");
            $(`.catalog-detail__gallery-content[data-tabs-target=${activePath + 1}]`).addClass("catalog-detail__gallery-content--active");
        }

    })
    $(".catalog-detail__gallery-prev").click(function() {

        let activePath = Number($(".catalog-detail__gallery-tab--active").attr("data-tabs-path"));
        if (activePath > 1) {
            $(".catalog-detail__gallery-tab").removeClass("catalog-detail__gallery-tab--active");
            $(`.catalog-detail__gallery-tab[data-tabs-path=${activePath - 1}]`).addClass("catalog-detail__gallery-tab--active");
            $(".catalog-detail__gallery-content").removeClass("catalog-detail__gallery-content--active");
            $(`.catalog-detail__gallery-content[data-tabs-target=${activePath - 1}]`).addClass("catalog-detail__gallery-content--active");
        }
    })

    // Выбор цвета
    let checkedColor = $("input[name='color']:checked").attr("data-color-path");
    $(".catalog-detail__color-title span").text(checkedColor)
    $("input[name='color']").click(function() {
        let checkedColor = $("input[name='color']:checked").attr("data-color-path");
        $(".catalog-detail__color-title span").text(checkedColor)
    })

    // Бургер меню
    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active");
        $(".header__nav").slideToggle();
    })

    // Способы доставки
    $(".order__delivery-tab").click(function() {
        let ordeTabPath = $(this).attr("data-tabs-path");
        $(".order__delivery-tab").removeClass("order__delivery-tab--active")
        $(`.order__delivery-tab[data-tabs-path="${ordeTabPath}"]`).addClass("order__delivery-tab--active")
        $(".order__delivery-content").removeClass("order__delivery-content--active")
        $(`.order__delivery-content[data-tabs-target="${ordeTabPath}"]`).addClass("order__delivery-content--active")
    })


});