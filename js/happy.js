$(function () {
    setTimeout(function () {
        $('.name').animate({
            opacity:"1",
            top:"25%"
        },2000);

    },2000);
  
    setTimeout(function () {
        $('.button-style1').animate({
            opacity:"1",
            top:"58%"
        },1500);
        $('.button-style2').animate({
            opacity:"1",
            top:"73%"
        },2000);
    },5000);
	// $(window).click(function(){
	// 	$('audio')[0].play();
	// });
	// window.audio=$('audio')[0].play();
})