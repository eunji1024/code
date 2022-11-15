$(document).ready(function(){
	const swiper = new Swiper('.vis', {
        loop: true,
        effect: "fade",
       
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.ctrl_paging',
            clickable: true,
            type: "fraction",
        },
        navigation: {
            nextEl: '.ctrl_next',
            prevEl: '.ctrl_prev',
        },
    });

    let scrolling=$(window).scrollTop()

    $(window).scroll(function(){
        scrolling=$(window).scrollTop()

        if(scrolling>0){
            $('header').addClass('fixed')
            $('header').removeClass('end')
        }else{
            $('header').removeClass('fixed')
            $('header').addClass('end')
        }
    });

    let winW
    let pcMobile
    
    deviceChk() 
    $(window).resize(function(){
        deviceChk()
    })

    function deviceChk() {
        winW = $(window).width()

        if (winW > 1440) {
            pcMobile = 'pc'
            console.log(pcMobile)
        } else {
            pcMobile = 'mobile'
            console.log(pcMobile)
        }
    }
    $('.header .gnb .gnb_wrap > ul > li').on('mouseenter focusin',function(){
        if (pcMobile == 'pc') {
            $('.header').addClass('menu_open')
            $('.header .gnb .gnb_wrap > ul > li > ul').slideDown()
        }
    })
    $('.header').on('mouseleave',function(){
        $('.header').removeClass('menu_open')
        $('.header .gnb .gnb_wrap > ul > li > ul').slideUp()
    })
    $('.header .gnb .gnb_wrap > ul > li:last-child > ul > li:last-child > a').on('focusout',function(){
        $('.header').removeClass('menu_open')
        $('.header .gnb .gnb_wrap > ul > li > ul').slideUp()
    })
    $('.header .gnb .gnb_wrap > ul > li').on('click',function(e){
        if (pcMobile == 'mobile') {
            e.preventDefault()
            let sub_status = $(this).hasClass('sub_open')
            if(sub_status == true){ //열린상태 - 닫기기능작동
                $(this).find('ul').slideUp()
                $(this).removeClass('sub_open') 
            }else{
                $(this).find('ul').slideDown()
                $(this).addClass('sub_open') 
            }
        }
    })
    
    let gnbStu
    $('.header .gnb .gnb_open').on('click',function(){
        gnbStu = $('.header').hasClass('menu_side')
        if (gnbStu == true) {
            $('.header').removeClass('menu_side')
            $('.header .gnb .gnb_open strong').text('메뉴열기')
        } else {
            $('.header').addClass('menu_side')
            $('.header .gnb .gnb_open strong').text('메뉴닫기')
        }
        
    })
})