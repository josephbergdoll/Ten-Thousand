$(document).ready(function(){

	$("div.desc").hide();
	
	$("a.product").hover(function(){
		$(this).children('div.desc').fadeToggle(150);
	});
	
});