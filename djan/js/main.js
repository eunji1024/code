$(document).ready(function(){
    //vis높이를 window의 높이와 통일시킴
    //처음 로딩했을 때, 브라우저가 리사이즈 될때마다
    // console.log($(window).height())
    // console.log($(document).height())

    let winH=$(window).height()
    // console.log(winH)
    // $('.vis').height(winH)
    
    $(window).resize(function(){
        winH=$(window).height()
        $('.vis').height(winH)
    })


    // 모바일에서 한 화면에 무조건 두개씩 나오게 할 것
    // 브라우저의 넓이를 알아내서 각 li의 넓이를 계산
    // (콘텐츠 넓이 - 중간여백)/2 = li의 넓이
    // 모든 li는 좌우로 배치

    // 처음 로딩되었을 때
    let areaW
    let liW
    let olW
    let winW
    let idx=1 //현재 보이는 번호
    let olLeft

    console.log(idx)
    stepRisize()

    // 로딩 후 리사이즈 되었을 때
    $(window).resize(function(){
        stepRisize()
    })

    function stepRisize(){
        winW=$(window).width()
        if(winW<=640){
            areaW=$('.step .list').width()
            console.log(areaW)
            liW=(areaW-16)/2
            $('.step .list ol li').width(liW)
            olW=(liW*6)+(16*5)
            $('.step .list ol').width(olW)
        }else{
            $('.step .list ol li').width(200)
            $('.step .list ol').width('auto')
        }
    }

    $('.step .ctrl button.preview').on('click',function(){
        if(idx>1){
            idx--
            olLeft=-(liW+16)*(idx-1)
            $('.step .list ol').animate({
                left:olLeft
            },500)
        }
        console.log(idx)
    })
    $('.step .ctrl button.next').on('click',function(){
        if(idx<5){
            idx++
            olLeft=-(liW+16)*(idx-1)
            $('.step .list ol').animate({
                left:olLeft
            },500)
        }
        console.log(idx)
    })

    // .footer .family를 클릭하면 fa_open class 추가

    $('.footer .family button').on('click',function(){
        $('.footer .family').toggleClass('faopen')
    })


    let scrooling
    scrollChk()

    $(window).scroll(function(){
        scrollChk()
    })

    function scrollChk(){
        scrooling=$(window).scrollTop()
        console.log(scrooling)
        if(scrooling>0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }

})

