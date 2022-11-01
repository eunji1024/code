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

    // .header .gnb .gnb_open를 클릭했을 때
    // 1. 자기자신한테 mobile_open 클래스를 추가하거나 해제 (닫는 버튼과 여는 버튼 두가지 역할을 모두 함)
    // 2. .header .gnb .gnb_open strong에 쓰여있는 글자를 '메뉴 열기', '메뉴 닫기'로 변경

    // 메뉴가 열려있는 상태인지 메뉴가 닫혀있는 상태인지 구분을 해야 함

    // 닫혀있으면 mobile_open 클래스를 추가해주고 '메뉴 닫기' 문구를 변경
    // 열려있으면 mobile_open 클래스를 삭제, '메뉴 열기' 문구 변경
    // mobile_open가 없으면 닫혀있는 상태 / 있으면 열린 상태

    let gnbStu //메뉴의 열림 여부를 저장 (true 열린상태 / false 닫힌상태)
    $('.header .gnb .gnb_open').on('click',function(){
        gnbStu = $('.header .gnb').hasClass('mobile_open')
        if (gnbStu == true) { //열린상태 > 닫기
            $('.header .gnb').removeClass('mobile_open')
            $('.header .gnb .gnb_open strong').text('메뉴열기')

        } else { //닫힌상태 > 열기
            $('.header .gnb').addClass('mobile_open')
            $('.header .gnb .gnb_open strong').text('메뉴닫기')
        }
        
    })

})