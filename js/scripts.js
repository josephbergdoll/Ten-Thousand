$(document).ready(function(){

	$("div.desc").hide();
	$("section.cart-disp").hide();
	
	$("a.product").hover(function(){
		$(this).children('div.desc').fadeToggle(150);
	});
	
	$("span.cart a").click(function(){
		$("section.cart-disp").fadeToggle(200);
		$("span.cart a").toggleClass("cartclicked");
		$("span.cart figure").toggleClass("cartclicked")
	});
	
	$("a.closebtn").click(function() {
		$(this).closest("section.cart-disp").fadeOut(350);
		$("span.cart a").removeClass("cartclicked");
		$("span.cart figure").removeClass("cartclicked");
	});


	$('.mySelectBoxClass').customSelect({customClass:'colorsize'});

	
});