var menuStat = "closed";
var optionNum = $('.nav-option').length;


$( window ).load(function() {
	new WOW().init();
	parallax();
	$('.loader').css('display','none');
	$('#siteContainer').css('opacity','1');
	$('#txtCon').addClass('animatedLong fadeInUp');
	$('#hashtag').addClass('animated fadeIn');
	$('#Monogram').addClass('animated fadeIn');
	$('#page1BG').addClass('animatedLong fadeIn');
});

$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  var page2 = $('#Page2').offset().top;
  $('#D1').css({transform:"translate3d(0,"+(scrolled*0.2)+'px,0)'});
  $('#D2').css({transform:"translate3d(0,"+(scrolled*0.5)+'px,0)'});
   $('#D3').css({transform:"translate3d(0,"+(scrolled*0.2)+'px,0)'});
  $('#D4').css({transform:"translate3d(0,"+(scrolled*0.2)+'px,0)'});
  $('#D5').css({transform:"translate3d(0,"+(scrolled*0.3)+'px,0)'});
};