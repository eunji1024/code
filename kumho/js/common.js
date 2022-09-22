$(document).ready(function(){

    let winW = $(window).width()
    let pcMobile; // 현재 피씨모드인지 모바일모드인지 지정하는 변수 

    if(winW > 640){
        pcMobile = 'pc'
        console.log(pcMobile)
    }else{
        pcMobile = 'mobile'
        console.log(pcMobile)
    }

    $(window).resize(function(){
        if(winW > 640){
            pcMobile = 'pc'
            console.log(pcMobile)
        }else{
            pcMobile = 'mobile'
            console.log(pcMobile)
        }
    })

    $('.header .lang .open').on('click',function(){
        $('.header .lang').addClass('lang_open')
    })
    $('.header .lang .close').on('click',function(){
        $('.header .lang').removeClass('lang_open')
    })

    // 메뉴에 마우스 오버했을때 menu_open 클래스 추가
    // 마우스 벗어나면 menu_open 클래스 삭제
    
    $('.header .gnb > ul > li > a').on('mouseenter focusin',function(){
        if(pcMobile == 'pc'){
            $('.header').addClass('menu_open')
        }
    })
    $('.header').on('mouseleave',function(){
        $('.header').removeClass('menu_open')
    })
    $('.header .gnb > ul > li:last-child > ul > li:last-child > a').on('focusout',function(){
        $('.header').removeClass('menu_open')
    })


    // sub 메뉴(.header .gnb .open)를 클릭하면 menu_mobile 클래스 추가
    // .header .gnb .close를 클릭하면 menu_mobile 클래스 삭제

    $('.header .gnb .open').on('click',function(){
        $('.header').addClass('menu_mobile')
    })
    $('.header .gnb .close').on('click',function(){
        $('.header').removeClass('menu_mobile')
    })


    // 1차메뉴를 클릭하면 li에 sub_open 클래스를 추가

    $('.header .gnb > ul >li').on('click',function(e){
        if( pcMobile == 'mobile'){
            $('.header').addClass('menu_mobile')
            e.preventDefault()
            $(this).toggleClass('sub_open')
        }
    })

    /* .footer .family .btn_open를 클릭하면 
        .footer .family에 open 클래스가 추가
        .footer .family .btn_close를 클릭하면 
        .footer .family에서 open 클래스를 삭제
    */
    $('.footer .family .btn_open').on('click', function(){
        $('.footer .family').addClass('open');
    });

    $('.footer .family .btn_close').on('click', function(){
        $('.footer .family').removeClass('open');
    });
})