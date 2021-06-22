$( document ).ready(function() {
    var swiper = new Swiper('.banner_swiper', {
        slidesPerView: '1',
        navigation:{
            nextEl: '.next_arrow',
            prevEl: '.prev_arrow',
        },
    });
    var swiper1 = new Swiper('.review_swiper', {
        slidesPerView: '1',
        navigation:{
            nextEl: '.next_review',
            prevEl: '.prev_review',
        },
    });
    swiper.on('slideChange', () => SetBackground());
    var x = $('.swiper-slide-active').next().find('.banner_pic').attr('src');
    var z = $('.swiper-slide-active').prev().find('.banner_pic').attr('src');
    $('.hover_arrow2').on("click", () => SetBackground())
    $('.hover_arrow1').on("click", () => SetBackground())

    function SetBackground(){
        $('.hover_arrow2').css({
        backgroundImage: `url(${$('.swiper-slide-active').next().find('.banner_pic').attr('src')})`
        });
        $('.hover_arrow1').css({
        backgroundImage: `url(${$('.swiper-slide-active').prev().find('.banner_pic').attr('src')})`
        });
    }

    $('.hover_arrow2').css({"background-image":"url(../"+x+")"});
    $('.hover_arrow1').css({"background-image":"url(../"+z+")"});
    

    $('.search').on("click", function(){
        $('.search_window').show();
        $('.header_controls').hide();
        $('.header_links').hide();
    })
    $('.search_close').on("click", function(){
        $('.search_window').hide();
        $('.header_controls').show();
        $('.header_links').show();
    })
    let count = 1;
    $('.catalog_item').on("click", function(){
        if (count == 1){
            $('.catalog_item').removeClass("opened");
            $(this).addClass("opened");
            count*=-1;
        } else {
            $('.catalog_item').removeClass("opened");
            count*=-1;
        }
    })

    $('.burger').on("click", function(){
        $(this).hide();
        $('.xclose').show();
        $('.burger_window').show();
    })
    $('.xclose').on("click", function(){
        $(this).hide();
        $('.burger').show();
        $('.burger_window').hide();
    })
});