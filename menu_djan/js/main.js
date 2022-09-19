$(document).ready(function(){
    // html 요소가 모두 로딩된 이후에 jquery 실행
    
        let winW
        let pcMobile
        deviceChk() // deviceChk 함수호출
    
    
        // 브라우저가 리사이즈 될 때마다 실행
        $(window).resize(function(){
            deviceChk()
        })
    
    
        function deviceChk() {
            winW = $(window).width()
    
            if (winW > 640) {
                pcMobile = 'pc'
                console.log(pcMobile)
            } else {
                pcMobile = 'mobile'
                console.log(pcMobile)
            }
        }
    
        // 메뉴에 마우스를 오버하면 header에 menu_open 클래스 추가 (pc에서만 640px 초과만 pc)
        // 메뉴 : .header .gnb > ul > li
    
        // 이벤트는 PC와 모바일 상관없이 주지만 실행을 PC에서만 하게 만든다
        // on으로 주는 이벤트(이벤트핸들러)는 mouseenter 이벤트가 발생할 때마다 실행됨
        // 
    
        $('.header .gnb > ul > li').on('mouseenter focusin',function(){
            if (pcMobile == 'pc') {
                $('.header').addClass('menu_open')
            }
        })
        $('.header').on('mouseleave',function(){
            $('.header').removeClass('menu_open')
        })
        $('.header .gnb > ul > li:last-child > ul > li:last-child > a').on('focusout',function(){
            $('.header').removeClass('menu_open')
        })
    
    
        // .header .gnb .gnb_open을 클릭하면 menu_mobile 추가(메뉴열기)
        // .header .gnb .gnb_close를 클릭하면 menu_mobile 삭제(메뉴닫기)
        // 모바일일 때만 작동(pc버전에서는 나타나지 않는 버튼)
        // 모바일 상태에서 pc로 전환 됐을 때도 고려해야함
    
    
        $('.header .gnb .gnb_open').on('click',function(){
            $('.header').addClass('menu_mobile')
        })
        $('.header .gnb .gnb_close').on('click',function(){
            $('.header').removeClass('menu_mobile')
        })
    
    
        // sub_open
        // .header .gnb > ul > li
        // 클릭한 li에만 sub_open 추가
        // 열려있으면 닫고(sub_open 삭제) 닫혀있으면 열고(sub_open 추가)
        // 서브메뉴는 직접 닫기 전에는 닫히지 X
        // pc에서는 1차메뉴 클릭 시 첫번째 하위메뉴로 이동
        // 모바일에서는 이동 X 하위메뉴 오픈만
    
    
        $('.header .gnb > ul > li').on('click',function(e){
            if (pcMobile == 'mobile') {
                e.preventDefault()
                $(this).toggleClass('sub_open')
            }
            // li를 클릭했을 때 기본적으로 이루어지는 이벤트를 취소하는 것(link(href로 페이지 이동을 취소시킴))
        })
    
    
    })