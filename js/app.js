$(document).foundation();
$(document).ready(function(){
	$(".rp-scroll").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1000 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
	$('.menu-icon').click( function(event){
		$('.rp-scroll').toggle();
		$('body').toggleClass('rp-body');
	});

});

// window.onscroll = function() {
// 	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
// 	document.getElementById('showScroll').innerHTML = scrolled + 'px';
// };

$(window).scroll(function(){
	$('.mov-left').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+350){
			$(this).addClass('rp-services-list_animate');
		}
	});
	$('.mov-right').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400){
			$(this).addClass('rp-portfolio-example_animate');
		}
	});
});
