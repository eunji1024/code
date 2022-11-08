$(document).ready(function(){
        let winW
        let pcMobile
        deviceChk() 

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

        $('.header .gnb ul li').on('mouseenter focusin',function(){
            if (pcMobile == 'pc') {
                $('.header').addClass('menu_open')
            }
        })
        $('.header').on('mouseleave',function(){
            $('.header').removeClass('menu_open')
        })
        $('.header .gnb ul li:last-child ul li:last-child a').on('focusout',function(){
            $('.header').removeClass('menu_open')
        })
    
    
        $('.header .gnb .gnb_open').on('click',function(){
            $('.header').addClass('menu_mobile')
        })
        $('.header .gnb .gnb_close').on('click',function(){
            $('.header').removeClass('menu_mobile')
        })

        
        $('.header .gnb ul li').on('click',function(e){
            if (pcMobile == 'mobile') {
                e.preventDefault()
                $(this).toggleClass('sub_open')
            }
        })
    
    
    })