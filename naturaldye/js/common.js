$(document).ready(function(){
    let scrolling
    headerFixed()//함수의 실행

    /* 스크롤 할때마다 실행 - 스크롤 안하면 실행X */
    $(window).scroll(function(){ 
        headerFixed()//함수의 실행
    })

    function headerFixed(){ //함수의 선언
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }
})