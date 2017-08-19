$(document).ready(function () {
	$(document).on('click', '.menu-btn', function(e) {
		e.preventDefault();
		openMenu();
	});
	$(document).on('click', '.close-right', function(e) {
		e.preventDefault();
		closeMenu();
	});

	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			closeMenu();
		}
	});

	$(document).on('click touchstart', '.menu-btn, .right-menu', function(e){
		e.stopPropagation();
	});
	$(document).on('click touchstart', function(e){
		closeMenu();
	});
});
function openMenu() {
	$('.menu-btn').addClass('active');
	$('.right-menu').addClass('active');
}
function closeMenu() {
	$('.menu-btn').removeClass('active');
	$('.right-menu').removeClass('active');
}
