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

	let scrolling
	let moveTop
	let objName = $('.fabric .bg2 img')
	fabScroll()
	$(window).scroll(function(){
		fabScroll()
	})

	function fabScroll(){
		//스크롤값을 요소의 위치값으로 변경해서 스타일을 적용
		scrolling = $(window).scrollTop()
		console.log(scrolling, 'scroll')
		console.log(objName.offset().top)
		moveTop = scrolling*0.1
		//objName.css('transform','translate(0 , -'+moveTop+'px)')
	}
})