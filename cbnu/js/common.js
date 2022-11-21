$(document).ready(function(){
    let scrolling
    headerFixed()
    $(window).scroll(function(){ 
        headerFixed()
    })
    function headerFixed(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }
})