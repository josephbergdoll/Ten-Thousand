$(document).ready(function(){
$("body.empty span.cart a").click(function(){
		$("section.cart-disp-empty").fadeToggle(200);
		$("span.cart a").toggleClass("cartclicked");
		$("span.cart figure").toggleClass("cartclicked");
		$("div.closebtn").fadeToggle(300);
	});

	});

