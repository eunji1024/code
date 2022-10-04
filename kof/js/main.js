$(document).ready(function(){
    // 공지사항 보도자료 탭 교체
    // 탭 제목을 클릭하면 해당 탭이 보여야함
    // 보이는 탭의 li에만 active 클래스가 추가되어야함
    // 클릭의 대상 : .notice ul li
    // 실행 : 클릭한 li애 active 클래스 추가 $(this)

    $('.notice ul li').on('click',function(){
        $('.notice ul li').removeClass('active')
        $(this).addClass('active')
    })


    // 스크롤 애니메이션 라이브러리
    AOS.init(); 
   
})