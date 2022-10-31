$(document).ready(function(){

    /* 브라우저가 스크롤하면 헤더에 fixed 클래스 추가
    $(window).scrollTop() -- 브라우저 스크롤 감지
    $(window).scroll() -- 브라우저가 스크롤 될 때마다 실행
    
    1. 브라우저가 스크롤이 되면 헤더에 fixed 클래스 추가
    2. 브라우저가 다시 상단에 올라가면 fixed 클래스 삭제*/

    let scrolling
    scrollChk()

    $(window).scroll(function(){
        scrollChk()
    })

    function scrollChk(){
        scrolling = $(window).scrollTop()
        // console.log(scrolling, '스크롤될때마다')

        if (scrolling > 0) {//스크롤 중
            $('.header').addClass('fixed')       
        } else {
            $('.header').removeClass('fixed')      
        }
    }
})