$(document).ready(function(){
    // 비주얼의 높이를 브라우저의 높이와 동일하게 설정
    // 브라우저가 리사이즈 될 때마다 높이를 다시 실행
    let winH = $(window).height()
    $('.vis .cnt_h').height(winH)

    console.log('window높이 ' + winH)

    $(window).resize(function(){// 브라우저가 리사이즈 될 때마다 실행
        let winH = $(window).height()
        $('.vis .cnt_h').height(winH)

        console.log('window높이 ' + winH)
    })



    // .header .lang를 클릭하면
    // 1. ul이 나타나야함
    // open 숨김 close 나타남 --> .header .lang에 lang_open 클래스를 삭제


    $('.header .lang .open').on('click',function(){
        $('.header .lang').addClass('lang_open')
    })
    $('.header .lang .close').on('click',function(){
        $('.header .lang').removeClass('lang_open')
    })

    // 메뉴에 마우스 오버했을때 menu_open 클래스 추가
    // 마우스 벗어나면 menu_open 클래스 삭제
    
    $('.header .gnb > ul > li > a').on('mouseenter focusin',function(){
        $('.header').addClass('menu_open')
    })
    $('.header').on('mouseleave',function(){
        $('.header').removeClass('menu_open')
    })
    $('.header .gnb > ul > li:last-child > ul > li:last-child > a').on('focusout',function(){
        $('.header').removeClass('menu_open')
    })


    // sub 메뉴(.header .gnb .open)를 클릭하면 menu_mobile 클래스 추가
    // .header .gnb .close를 클릭하면 menu_mobile 클래스 삭제


    // .biz .list ul li 에 마우스 오버하면
    // .biz .list ul 에 over 클래스 추가
    // 마우스 오버한 li에만 active 클래스 추가

    // 아웃 : 반대로 실행

    $('.biz .list ul li').on('mouseenter' , function(){
        $('.biz .list ul').addClass('over')
        $(this).addClass('active')
    })
    $('.biz .list ul li').on('mouseleave' , function(){
        $('.biz .list ul').removeClass('over')
        $(this).removeClass('active')
    })


}) // html 로딩 이후에 jquary를 실행