// ---------------------------------dropDown Hearder
var active = 0;
$(document).ready(function() {
	$(document).scroll(function(event) {
		if($(window).scrollTop() > 350 && active === 0){
			$(".header").css({'position':'fixed','display': 'none'
							, 'box-shadow':'0 1px 2px #999','z-index':'1'});
			$(".header").slideDown(300);
			active = 1;
		} else if($(window).scrollTop() < 350 && active === 1) {
			$(".header").slideUp(100,function(){
				$(".header").css({'position':'absolute','display': 'flex'
							, 'box-shadow':'none','z-index':'0'});
			});
			active = 0;
		}
	});
});
// -------------------------------------All category click
$(document).ready(function() {
	$(".wrap-content-search-filter").click(function(event) {
		$("#sub").css('display', 'block');
	});
});

// -----------------------------------choose search filter
$(document).ready(function() {
	$(".div-search .search-filter .sub-menu-item").click(function(event) {
		var text = $(this).find('p').text();
		console.log(text);
		let a = document.getElementById("search-filter-a");
		a.innerHTML = text + '<i class="fas fa-caret-down"></i>';
		$("#sub").css('display', 'none');
	});
});