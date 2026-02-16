// prallax
$(window).scroll(function () {
	var wScroll = $(this).scrcollTop();

	$('.jumbotron img ').css({
		trnasform: 'translate(0px, ' + wScroll / 4 + '%)',
	});
});
