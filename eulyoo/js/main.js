// 언제:스크롤을 내렸을 때
// 누구를:header를 = $('header')
// 어떻게:fixed 클래스를 추가 addClass() = 클래스를 추가하는 명령
// console.log('안녕')

// 다시 위로 올라갔을 때 fixed를 삭제해야함

// $(window).scrollingTop() = 얼만큼 스트롤 되었는지 계산해 주는 값
// 스크롤값을 계산해서 100보다 많이 하면 fixed를 추가하고 100이하면 삭제

let scrolling=$(window).scrollTop()

$(window).scroll(function(){
    scrolling=$(window).scrollTop()
    // console.log(scrolling)

    if(scrolling>0){
        $('header').addClass('fixed')
    }else{
        $('header').removeClass('fixed')
    }
});
