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
}) // html 로딩 이후에 jquary를 실행