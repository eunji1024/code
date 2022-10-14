$(Document).ready(function(){
    const swiper = new Swiper('.vis1', {
        loop: true,
        effect: "fade",
       
        autoplay: {
            delay: 8000, //하나의 팝업에 머무는 시간
            disableOnInteraction: false,
        },
        
        // If we need pagination
        pagination: {
            el: '.ctrl_paging',
            clickable: true,
            type: "fraction",
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.ctrl_next',
            prevEl: '.ctrl_prev',
        },
    });
    $('.vis1 .ctrl_stop').on('click',function(){
        swiper.autoplay.stop();
    })
    $('.vis1 .ctrl_play').on('click',function(){
        swiper.autoplay.start();
    })
})