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



});