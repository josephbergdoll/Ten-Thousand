$(document).ready(function(){

	$("span.cart").hover(function(e){
      $(".counter").toggleClass("cart-circle-hovered");
      $(".js-cart-counter").toggleClass("cart-circle-span-hovered");
  });

$("span.cart a").click(function(){
		$("section.cart-disp-empty").fadeToggle(200);
		$("span.cart a").toggleClass("cartclicked");
		$("span.cart figure").toggleClass("cartclicked");
		$("div.closebtn").fadeToggle(300);
	});

	});

