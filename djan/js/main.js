$(document).ready(function(){
    //vis높이를 window의 높이와 통일시킴
    //처음 로딩했을 때, 브라우저가 리사이즈 될때마다
    console.log($(window).height())
    console.log($(document).height())

    let winH=$(window).height()
    console.log(winH)
    $('.vis').height(winH)
    
    $(window).resize(function(){
        winH=$(window).height()
        $('.vis').height(winH)
    })
})