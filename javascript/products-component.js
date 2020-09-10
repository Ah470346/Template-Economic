//khi hover vào products item
$(function(){
	$('.products-item').hover(function() {
		$(this).find('.products-item-image').css('transition', 'all 0.3s ease-out');
		$(this).find('.products-item-image').css('height', '290px');
		$(this).find('.products-item-name').css('transition', 'all 0.3s ease-out 0.1s');
		$(this).find('.products-item-name').css('bottom', '100px');
		$(this).find('.products-item-price').css('transition', 'all 0.3s ease-out 0.2s');
		$(this).find('.products-item-price').css('bottom', '70px');
		$(this).find('.products-item-add-cart').css('transition', 'all 0.4s ease-out 0.3s');
		$(this).find('.products-item-add-cart').css({'bottom': '10px','opacity':'1'});
		$(this).find('.previous').css('transition', 'all 0.3s ease-out');
		$(this).find('.previous').css({'top': '122.75px','opacity':'1','visibility':'visible'});
		$(this).find('.next').css('transition', 'all 0.3s ease-out');
		$(this).find('.next').css({'top': '122.75px','opacity':'1','visibility':'visible'});
	}, function() {
		$(this).find('.products-item-image').css('transition', 'all 0.3s ease-out');
		$(this).find('.products-item-image').css('height', '360px');
		$(this).find('.products-item-name').css('transition', 'all 0.4s ease-out');
		$(this).find('.products-item-name').css('bottom', '30px');
		$(this).find('.products-item-price').css('transition', 'all 0.4s ease-out');
		$(this).find('.products-item-price').css('bottom', '0px');
		$(this).find('.products-item-add-cart').css('transition', 'all 0.4s ease-out');
		$(this).find('.products-item-add-cart').css({'bottom': '-60px','opacity':'0'});
		$(this).find('.previous').css('transition', 'all 0.3s ease-out');
		$(this).find('.previous').css({'top': '162.75px','opacity':'0','visibility':'hidden'});
		$(this).find('.next').css('transition', 'all 0.3s ease-out');
		$(this).find('.next').css({'top': '162.75px','opacity':'0','visibility':'hidden'});
	});

	var cellCount = 8;
	var selectedIndex = 0;
	var carousel = document.querySelector('.wrap-slide-image');

	//tính độ xoay mỗi lần tăng selectedIndex
	function rotateCarousel() {
	  	var angle = selectedIndex / cellCount * -360;
	  	carousel.style.transform = 'translateZ(-151.25px) rotateY(' + angle + 'deg)';
	}

	$(".previous").click(function(event) {
		selectedIndex--;
  		rotateCarousel();
	});
	$(".products-item .next").click(function(event) {
		selectedIndex++;
  		rotateCarousel();
	});
})

