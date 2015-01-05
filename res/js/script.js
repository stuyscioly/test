$(document).ready(function(){
	$('.carousel').slick({
		autoplay: true,
		dots: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		fade: true,
		arrows: false
	}); // Main page carousel function

	var str=location.href.toLowerCase();
	$(".nav ul li a").each(function() {
		if (str.indexOf(this.href.toLowerCase()) > -1) {
			$("li.navHighlight").removeClass("navHighlight");
			$(this).parent().addClass("navHighlight");
		}
	});
	$("li.navHighlight").parents().each(function(){
		if ($(this).is("li")){
			$(this).addClass("navHighlight");
		}
	}); // Nav bar highlighting function
});
