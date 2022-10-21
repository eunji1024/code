$(document).ready(function(){

    const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

		navigation: true, /* 오른쪽에 각 페이지의 paging */
		navigationPosition: 'right', /* 위치 */
		navigationTooltips: ['메인', '보건통계', '사업소개', '현장소식', '지원사업'], /* 툴팁 */
		showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */

		// scrollOverflow: false,

		autoScrolling:true, /* 한페이지씩 스크롤 */
		// scrollHorizontally: true,

		verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */

		afterLoad: function(origin, destination, direction, trigger){
			console.log(destination.index)
			if ((destination.index == 1)||(destination.index == 3)||(destination.index == 4)||(destination.index == 5)) {
				$('header').addClass('black')
			} else {
				$('header').removeClass('black')
			}
			if (destination.index == 1) { //보건통계 슬라이드가 나타났을 때
				funCount() //함수이름이 funCount인것을 실행한다
			}
			},
		responsiveWidth: 640 /* fullpage를 적용시키지 않을 모바일 사이즈 */
	});

	// 보건통계 숫자 카운팅 효과
	function funCount(){
		console.log('counting')
		$('.count .rate .num strong').counterUp();
		 /* 숫자 요소의 클래스명을 써준다. */

	}
	
	// news의 최근소식에 swiper 효과
	const swiper = new Swiper('.news .list', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			500: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			900: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
		},
		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.btn_paging', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		},
	});

	

})