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

$('.icon__menu').click(function(event) {
	var height = $(window).scrollTop();
	console.log(height);
	if (height < 100){
		$('.header__logo').toggleClass('header__logo-hidden');
	}
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
  	pauseOnFocus: false,
  	responsive: [
  		{
  		breakpoint: 767,
  		settings: {
  			autoplaySpeed: 1000
  		}
  	}]

  });
});





$(window).scroll(function(){
    
    var height = $(window).scrollTop();
    
	if(height > 100)  {
		$('.header__logo').addClass('header__logo-hidden');
		$('.header__row').addClass('reduced');
	}

	if(height < 100) {
		$('.header__logo').removeClass('header__logo-hidden');
		$('.header__row').removeClass('reduced');
	}
	
	
});


let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling; /* Ссылка Портфолио */
			let subMenu=arrow[i].nextElementSibling; /*Выпадающее меню */
			let thisArrow=arrow[i]; /*Текущая стрелка */

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}

