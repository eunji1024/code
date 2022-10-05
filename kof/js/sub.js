$(document).ready(function(){

    /* lnb에 메뉴를 클릭하면 하위메뉴 열었다가 닫음 */

    // btn을 클릭 했을 때 현재 열려있는 상태인지 닫혀있는 상태인지 파악
    // .lnb .menu .depth .btn에 open 클래스가 있으면 열린상태

    /* title변경 방법 */

    let lnbSt
    $('.lnb .menu .depth .btn').on('click',function(){
        lnbSt = $(this).parents('.depth').hasClass('open')
        if(lnbSt == true){ //열린상태
            $(this).parents('.depth').removeClass('open')
            $(this).attr('title','메뉴열기')
            $(this).next().slideUp()
        }else{
            $(this).parents('.depth').addClass('open')
            $(this).attr('title','메뉴닫기')
            $(this).next().slideDown()
        }
    })

})