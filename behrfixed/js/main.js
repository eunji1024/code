$(document).ready(function(){
    let winW = $(window).width()
    let docW = $(document).width()
    console.log(winW)
    console.log(docW)

    // $('header').addClass('fixed')
    // $('header').removeClass('fixed')

    //TOP버튼을 클릭했을때 상단으로 스크롤
    $('aside button').on('click', function(){
        console.log('눌렀어')
        // $(window).scrollTop(100)
        $('html,body').animate({
            scrollTop : 0
        },500)
    })

    /*
        header에
        조건 1 - 스크롤 값이 0보다 크면 header에 fixed 클래스 추가
        조건 2 - 스크롤 값이 0이면 header에 fixed 클래스를 삭제
    */
    /* 로딩했을때 맨 처음에만 실행을 단 한번 */
    let scrolling
    headerFixed()//함수의 실행

    /* 스크롤 할때마다 실행 - 스크롤 안하면 실행X */
    $(window).scroll(function(){ 
        headerFixed()//함수의 실행
    })

    function headerFixed(){ //함수의 선언
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }

    /*
        header nav에 마우스를 올리면
        header에 open 클래스를 추가함
    */
    $('header nav > ul').on('mouseenter focusin', function(){
        $('header').addClass('open')
    })
    $('header').on('mouseleave', function(){
        $('header').removeClass('open')
    })
    $('header nav > ul > li:last-child > ul > li:last-child').on('focusout', function(){
        $('header').removeClass('open')
    })




    // 글씨 고정하는 js
    // css 본체에 position:absolute;
    // .fixed {position: fixed; top: 상단여백;} .end {position: absolute; top: auto; bottom: 하단 여백;}
    // 모바일은 다시 position:relative;

    let fixObj = $('.product h2') //고정요소
	let fixArea = $('.product') //고정요소를 감싸는 요소
	let fixTop = 120
	let fixBtm = 120
	let fixStart //시작점
	let fixEnd // fixed 종료점
	let fixScroll = $(window).scrollTop()

	objfixed()

	$(window).scroll(function(){
        fixScroll = $(window).scrollTop()
		objfixed()
	})
	$(window).resize(function(){
		objfixed()
	})

	function objfixed(){
		// console.log(scrolling)
		fixStart = fixArea.offset().top - fixTop
		fixEnd = fixArea.offset().top + fixArea.height() - fixObj.height() - fixBtm - fixTop
		if(fixScroll < fixStart){
			fixObj.removeClass('fixed')
			fixObj.removeClass('end')
		}else if((fixScroll >= fixStart)&&(fixScroll < fixEnd)){
			fixObj.addClass('fixed')
			fixObj.removeClass('end')
		}else{
			fixObj.addClass('end')
			fixObj.removeClass('fixed')
		}
	}
})

