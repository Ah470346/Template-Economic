
$(document).ready(function(){
	$(".next").hover(function() {
		$(".element-private").css('overflow', 'visible');
	}, function() {
		$(".sub").hover(function() {
		}, function() {
			$(".element-private").css('overflow', 'hidden');
		});
		$(".element-private").css('overflow', 'hidden');
	});
})

$(document).ready(function() {
	$(".menu-items").hover(function() {
		$(".header").css('overflow', 'visible');
	}, function() {
		$(".header").css('overflow', 'hidden');
	});
});