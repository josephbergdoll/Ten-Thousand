$(document).ready(function(){

	$("div.desc").hide();
	$("section.cart-disp").hide();
	$("div.closebtn").hide();
	
	$("a.product").hover(function(){
		$(this).children('div.desc').fadeToggle(150);
	});
	
	$("span.cart a").click(function(){
		$("section.cart-disp").fadeToggle(200);
		$("span.cart a").toggleClass("cartclicked");
		$("span.cart figure").toggleClass("cartclicked");
		$("div.closebtn").fadeToggle(300);
	});
	



	$('.mySelectBoxClass').customSelect({customClass:'colorsize'});

	
});