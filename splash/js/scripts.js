$(document).ready(function(){

   $(".bg").delay(800).queue(function(){$(this).addClass('loaded');});

  $(".hero-text").delay(1000).queue(function(){$(this).addClass('hero-reveal');});
  
  $(".submitform").delay(1700).queue(function(){$(this).addClass('loaded');});
  
  });