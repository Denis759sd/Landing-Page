$(document).ready(function() {
	$('.photo__burger, .mobile-menu__link').click (function(event) {
		$('.photo__burger, .mobile-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});