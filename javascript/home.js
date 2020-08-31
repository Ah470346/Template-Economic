var active = 0;
$(document).ready(function() {
	$(document).scroll(function(event) {
		if($(window).scrollTop() > 350 && active === 0){
			$(".header").css({'position':'fixed','display': 'none'
							, 'box-shadow':'0 1px 2px #999'});
			$(".header").slideDown(300);
			active = 1;
		} else if($(window).scrollTop() < 350 && active === 1) {
			$(".header").slideUp(100,function(){
				$(".header").css({'position':'static','display': 'flex'
							, 'box-shadow':'none'});
			});
			active = 0;
		}
	});
});
