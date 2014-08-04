head.ready(function() {

	// Navigation
	$('.js-nav a').on('click',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 18
		}, 500, 'swing', function () {
				// window.location.hash = target;
		});
	});

	// popups
	$(".js-popup-link").on("click", function(event){
		$(".js-overlay").fadeOut(200);
		var popup = $(this).attr("href");
		$("body").addClass("has-open-popup");
		$("."+popup).parent().fadeIn(200);
		event.stopPropagation();
		return false;
	});
	$(".js-popup-close").on("click", function(){
		$(".js-overlay").fadeOut(200);
		$("body").removeClass("has-open-popup");
		return false;
	});
	$(".js-popup").on("click", function(event){
		event.stopPropagation();
	});

});