$(document).ready(function(){
	let isName = false;

	$('.carousel__inner').slick({
		speed: 1200,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
		autoplay: true,
		autoplaySpeed: 1500,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: false
				}	
			}
		]
	});

	(function($) {
		$(function() {
		  
			$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
				$(this)
				.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
				.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
			});
			
		});
	})(jQuery);

	$('.catalog-item__switchLink').each(function(i) {
		$(this).on('click', (e) => {
			e.preventDefault();
			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');

			// Changes link name from 'MORE' to 'BACK'
			if (isName) {
				$('.catalog-item__switchLink').eq(i).text('ПОДРОБНЕЕ');
				isName = false;
			} else {
				$('.catalog-item__switchLink').eq(i).text('НАЗАД');
				isName = true;
			}

		});
	});

	// console.log('hello');

	const tabs = document.querySelectorAll('.catalog__tab');
	tabs.forEach(tab => {
		tab.addEventListener('click', () => {
			document.documentElement.scrollTop = 2700;
		});
	});
});



