$(document).ready(function(){
    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
        },
        loop: true
    })
    $('.notice ul li').on('click',function(){
        $('.notice ul li').removeClass('active')
        $(this).addClass('active')
    })
    AOS.init(); 
})