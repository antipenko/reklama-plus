$(document).foundation();
$(document).ready(function(){
	$(".rp-scroll").on("click", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

		top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1000);
	});
	$('.menu-icon').click( function(event){
		$('.rp-scroll').toggle();
		$('body').toggleClass('rp-body');
	});

	$("#responsive-menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$('section').click( function(event){
		if ($("body").hasClass("rp-body")) {
			$("body").toggleClass("rp-body");
			$("#responsive-menu").toggle();
			event.stopPropagation();
		}
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
