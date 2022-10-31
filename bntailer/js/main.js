$(document).ready(function(){
    const swiper = new Swiper('.vis .popup', { /* 팝업을 감싼는 요소의 class명 */

	effect: "fade", /* fade 효과 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 4000,
		disableOnInteraction: true,
	},

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.btn_paging', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
	},

	navigation: {  /* 이전, 다음 버튼 */
		nextEl: '.swiper-button-next',  /* 다음 버튼의 클래스명 */
		prevEl: '.swiper-button-prev',  
	},
    });

	// 팝업의 정지버튼 재생버튼
	// 하나의 버튼이 두가지 기능을 함

	$('.vis .popup .btn_stop').on('click',function(){
		let popStat = $(this).hasClass('play')//true일 시 재생, false일 시 일시정지
		if (popStat == true) {//버튼의 상태가 play 모양(현재 정지 상태라는 뜻)
			swiper.autoplay.start()
			$(this).removeClass('play')
			$(this).text('일시정지')
		} else {//버튼의 상태가 일시정지 모양 - 현재 재생상태 - 일시정지 기능을 실행
			swiper.autoplay.stop()
			$(this).addClass('play')
			$(this).text('재생')
		}
	})

	//페브릭의 이미지 스크롤 효과
	//이미지가 스크롤 될 때 움직이는 효과
	//움직이는 시작을 오브젝트가 화면에 나타나기 시작했을 때부터 스크롤 된 값을 계산해서 움직임 값으로 변환해야함
	//  1. 스크롤 되는 값 -> $(window).scrollTop()
	//  2. 오브젝트가 보이기 시작하는 스크롤 값
	//  3. 오브젝트를 어떻게 움직일 것인지
	// .fabric .bg img
	// 		--> offset().top - 상단 맨 위에서부터 오브젝트까지의 거리값
	// 			offset().top과 $(window).scrollTop 값이 같아지는 시기는 오브젝트가 화면 상단에 딱 붙었을 때입니다.
	// 			--> 필요한건 오브젝트가 화면 하단에서 보이기 시작할 때

	// 오브젝트가 화면 하단에서 나타나기 시작한 값은 오브젝트의 offset().top - 윈도우의 높이값만큼 스크롤 됐을 때 

	let winH
	let moveVal
	let offTop
	let scrolling

	// objMove = 실제움직일 오브젝트
	// objParent = 움직일 오브젝트의 기준이 되는 요소
	// moveDir = 스크롤방향
	// moveRate = 움직일 속도와 비율
	
	objParallax($('.fabric .bg2'), $('.fabric .bg'), 'top', 0.2)
	// objParallax($('.sns p'), $('.sns p'), 'left', 0.5)



	function objParallax(objMove, objParent, moveDir, moveRate){ //오브젝트를 움직이는 애니메이션 단 한번 셋팅
		objMove.css('transition', '1s')
		moveAni(objMove, objParent, moveDir, moveRate)
		$(window).scroll(function(){
			moveAni(objMove, objParent, moveDir, moveRate)
		})
		$(window).resize(function(){
			moveAni(objMove, objParent, moveDir, moveRate)
		})
	}

	function moveAni(objMove, objParent, moveDir, moveRate){ //오브젝트를 실제 움직이는 함수 (반복실행)
		winH = $(window).height()
		offTop = objParent.offset().top
		scrolling = $(window).scrollTop()
		moveVal = (scrolling - offTop + winH)*moveRate
		// console.log(moveVal)
		if (moveDir == 'left') {
			objMove.css('transform','translateX(-'+moveVal+'px)')
		} else {
			objMove.css('transform','translateY(-'+moveVal+'px)')
		}
	}

	/*
		.product .list .tit 고정
		-- 스크롤을 내리다가 화면에 product 콘텐츠가 보일 때는 fixed 클래스를 추가
		1908 - 3358
		.product .list 가 페이지 상단에 도달했을 때 : 콘텐츠가 보이는 시작점
		.offset().top 은 해당 콘텐츠가 브라우저 상단에 닿았을 때의 스크롤 값

		-- 처음에 tit가 나타나기 전 영역
		tit이 고정되는 영역(고정되어 옆에 콘텐츠만 스크롤 됨)
		tit이 고정 된 이후 영역 (다른 콘텐츠를 따라서 사라짐)
	*/


	let fixObj = $('.product .list .tit') //고정요소
	let fixArea = $('.product .list') //고정요소를 감싸는 요소
	let fixTop = 130
	let fixBtm = 175
	let fixStart //1983.75 - 130 fixed 시작점
	let fixEnd // fixed 종료점
	// console.log(fixStart, 'fixStart')
	// console.log(fixEnd, 'fixEnd')

	objfixed()

	$(window).scroll(function(){
		objfixed()
	})
	$(window).resize(function(){
		objfixed()
	})

	function objfixed(){
		// console.log(scrolling)
		fixStart = fixArea.offset().top - fixTop
		fixEnd = fixArea.offset().top + fixArea.height() - fixObj.height() - fixBtm - fixTop
		if(scrolling < fixStart){
			fixObj.removeClass('fixed')
			fixObj.removeClass('end')
		}else if((scrolling >= fixStart)&&(scrolling < fixEnd)){
			fixObj.addClass('fixed')
			fixObj.removeClass('end')
		}else{
			fixObj.addClass('end')
			fixObj.removeClass('fixed')
		}
	}

	// 인스타 팝업
	const swiperInsta = new Swiper('.insta .list', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
	slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		640: {    /* 640px 이상일때 적용 */
			slidesPerView: 3,
			spaceBetween: 10,
		},
		768: {    /* 640px 이상일때 적용 */
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1024: {    /* 1024px 이상일때 적용 */
			slidesPerView: 4,
			spaceBetween: 20,
		},
		1440: {    /* 1440px 이상일때 적용 */
			slidesPerView: 6,
			spaceBetween: 20,
		}
	},

});


})