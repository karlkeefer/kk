$(function(){

   //cover background image until it's fully loaded
   $('<img/>').attr('src', './img/moon.jpg').load(function() {
     $(this).remove();
     $(".bgcover").fadeOut({duration: 3000, easing:"easeInOutCubic"});
   });

   var bgcolors = ["#ECFFFF","#9ECE00","#0099E9","#F8F301","#D30069","#ac33f2"];

   $("a").hover(function(){
   	 
   	 i = $("a").index($(this));

   	 $(".noise").css({display:"block"}).addClass("over");
   	 $(".bgcover2").css({backgroundColor: bgcolors[i]}).addClass("over");

   },function(){
   	 $(".noise, .bgcover2").removeClass("over");
   });

});
