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
		// console.log(winH,'window.height')
		// console.log(offTop,'offTop')
		// console.log(scrolling,'window.scrolling')
		console.log(moveVal,'moveVal')
		if (moveDir == 'left') {
			objMove.css('transform','translateX(-'+moveVal+'px)')
		} else {
			objMove.css('transform','translateY(-'+moveVal+'px)')
		}
	}

})