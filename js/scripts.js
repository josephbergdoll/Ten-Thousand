$(document).ready(function(){

	$("div.product-index-desc").hide();
	//$("aside.shippinginfo").hide();
	
	$("a.product").hover(function(){
		$(this).children('div.product-index-desc').fadeToggle(150);
	});
	
	$("body.full span.cart a").click(function(){
		$("section.cart-disp-full").fadeToggle(200);
		$("span.cart a").toggleClass("cartclicked");
		$("span.cart figure").toggleClass("cartclicked");
		$("div.closebtn").fadeToggle(300);
	});
	
	/*$("a#addproduct").click(function(){
		$("section.cart-disp-full").fadeToggle(200);
		$("span.cart a").toggleClass("cartclicked");
		$("span.cart figure").toggleClass("cartclicked");
		$("div.closebtn").fadeToggle(300);
	});*/
	
	
	$("body.empty span.cart a").click(function(){
		$("section.cart-disp-empty").fadeToggle(200);
		$("span.cart a").toggleClass("cartclicked");
		$("span.cart figure").toggleClass("cartclicked");
		$("div.closebtn").fadeToggle(300);
	});
	
	/*$('#show-shipping').click(function () {
    $(".shippinginfo").fadeToggle(this.checked);
    $("a.right").toggleClass("centered",this.checked);
});*/


	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
	});
	
	
 $('#features').waypoint({
    handler: function(event, direction) {
        $('a.to-top').toggleClass("slideright", direction == 'down')
      }
	});
	
	$('#selectcolorsize').click(function(){
	setTimeout(function() {
  	$('#color').focus();},1250);
  		});

	
$("#addproduct").click(function() {
    doBounce($("#cartcounter"), 2, '5px', 100);   
});


function doBounce(element, times, distance, speed) {
    for(i = 0; i < times; i++) {
        element.animate({top: '-='+distance},speed)
            .animate({top: '+='+distance},speed);
    }        
}

});

