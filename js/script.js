function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

$('.icon__menu').click(function(event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});

$(document).ready(function(){
  $('.slider').slick({
  	arrows: false,
  	autoplay: true,
  	autoplaySpeed: 1000,
  	infinite: true,
  	dots: false,
  	fade: true,
  	centerMode: true,
  	responsive: [
  		{
  		breakpoint: 767,
  		settings: {
  			autoplaySpeed: 1000
  		}
  	}]

  });
});

$(window).on('load resize', function(){
	var height = $(window).scrollTop();
	var width = $(window).width();
	if(height > 120 && width > 767) {
		$('.header__logo').addClass('header__logo-hidden');
		$('.header__row').addClass('reduced');
	} 
	if (height < 120 && width < 767) {
		$('.header__logo').removeClass('header__logo-hidden');
		
	}
	if(height < 120 && width > 767) {
		$('.header__logo').removeClass('header__logo-hidden');
		$('.header__row').removeClass('reduced');
	}
	if(height > 120 && width < 767) {
		$('.header__logo').addClass('header__logo-hidden');
	}

	
});

$(window).scroll(function(){
	var height = $(window).scrollTop();
	var width = $(window).width();
	if(height > 120 && width > 767) {
		$('.header__logo').addClass('header__logo-hidden');
		$('.header__row').addClass('reduced');
	} 
	if (height < 120 && width < 767) {
		$('.header__logo').removeClass('header__logo-hidden');
		
	}
	if(height < 120 && width > 767) {
		$('.header__logo').removeClass('header__logo-hidden');
		$('.header__row').removeClass('reduced');
	}
	if(height > 120 && width < 767) {
		$('.header__logo').addClass('header__logo-hidden');
	}

	
});


/* $(window).scroll(function(){
	var height = $(window).scrollTop();
	var width = $(window).width();
	if(height > 120 && width > 767) {
		$('.header__logo').addClass('header__logo-hidden');
		$('.header__row').addClass('reduced');
		$('.menu__list li:nth-child(2)').css('padding', '0px 35px 0px 0px');
		$('.menu__list li:nth-child(3)').css('padding', '0px 0px 0px 35px');
	} 
	if (height < 120 && width < 767) {
		$('.header__logo').removeClass('header__logo-hidden');
		$('.menu__list li:nth-child(2)').css('padding', '0px 0px 35px 0px');
		$('.menu__list li:nth-child(3)').css('padding', '0px 0px 35px 0px');
	}
	if(height < 120 && width > 767) {
		$('.header__logo').removeClass('header__logo-hidden');
		$('.header__row').removeClass('reduced');
		$('.menu__list li:nth-child(2)').css('padding', '0px 142.5px 0px  0px');
		$('.menu__list li:nth-child(3)').css('padding', '0px  0px  0px 142.5px');
	}
	if(height > 120 && width < 767) {
		$('.header__logo').removeClass('header__logo-hidden');
		$('.menu__list li:nth-child(2)').css('padding', '0px 0px 35x  0px');
		$('.menu__list li:nth-child(3)').css('padding', '0px  0px  35x  0px');
	}

	
});

=================================

$(window).scroll(function(){
	var height = $(window).scrollTop();
	var width = $(window).width();
	if(height > 120 && width > 767) {
		$('.header__logo').addClass('header__logo-hidden');
		$('.header__row').addClass('reduced');
		$('.menu__list li:nth-child(2)').css('padding-right', '35px');
		$('.menu__list li:nth-child(3)').css('padding-left', '35px');
	} 
	if (width < 767) {
		$('.menu__list li:nth-child(2)').css('padding', '0px 0px 35px 0px');
		$('.menu__list li:nth-child(3)').css('padding', '0px 0px 35px 0px');
	}
	else {
		$('.header__logo').removeClass('header__logo-hidden');
		$('.header__row').removeClass('reduced');
		$('.menu__list li:nth-child(2)').css('padding-right', '142.5px');
		$('.menu__list li:nth-child(3)').css('padding-left', '142.5px');
	}
});

=============================

$(window).scroll(function(){
	var height = $(window).scrollTop();
	if(height > 120) {
		$('.header__row').addClass('reduced');
		$('.header__logo').addClass('header__logo-hidden');
	}
	else {
		$('.header__row').removeClass('reduced');
		$('.header__logo').removeClass('header__logo-hidden');
	}
}); 

============================
$(window).scroll(function(){
	var height = $(window).scrollTop();
	var width = $(window).width();
	if(height > 120 && width > 767) {
		$('.header__logo').addClass('header__logo-hidden');
		$('.header__row').addClass('reduced');
	} 
	if (height < 120 && width < 767) {
		$('.header__logo').removeClass('header__logo-hidden');
		
	}
	if(height < 120 && width > 767) {
		$('.header__logo').removeClass('header__logo-hidden');
		$('.header__row').removeClass('reduced');
	}
	if(height > 120 && width < 767) {
		$('.header__logo').removeClass('header__logo-hidden');
	}

	
});
 */