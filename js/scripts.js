$(document).ready(function(){

	$("div.desc").hide();
	$("section.cart-disp-full").hide();
	$("section.cart-disp-empty").hide();
	$("div.closebtn").hide();
	
	$("a.product").hover(function(){
		$(this).children('div.desc').fadeToggle(150);
	});
	
	$("body.full span.cart a").click(function(){
		$("section.cart-disp-full").fadeToggle(200);
		$("span.cart a").toggleClass("cartclicked");
		$("span.cart figure").toggleClass("cartclicked");
		$("div.closebtn").fadeToggle(300);
	});
	
	$("body.empty span.cart a").click(function(){
		$("section.cart-disp-empty").fadeToggle(200);
		$("span.cart a").toggleClass("cartclicked");
		$("span.cart figure").toggleClass("cartclicked");
		$("div.closebtn").fadeToggle(300);
	});

	
});