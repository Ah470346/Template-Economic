
$(function(){
	var startClientX = 0, pos2 = 0 , sliding = 0 , startPixelOffset = 0,
		pixelOffset = 0, currentSlide = 0;
		slideCount = $('.contain-slide').length;
	var status = false;
	var label = document.getElementsByClassName("slide-label");
	//trượt slide khi click label
	$('.slide-label').click(function(event) {
		for(var i = 0 ; i < label.length ; i++){
			if($(this).attr('for') == $(label[i]).attr('for')){
				$(label[i]).addClass('bar');
				$('.wrap-contain-slide').css('transform', 'translateX('+ i * -33.33 +'%)');
			} else {
				$(label[i]).removeClass('bar');
			}
		}
	});
	//kéo để trượt
	$(".wrap-contain-slide").on('mousedown touchstart',slideStart);
	$(".wrap-contain-slide").on('mousemove touchmove',slide);
	$(".wrap-contain-slide").on('mouseup touchend',slideEnd);

	//khi người dùng nhấn và giữ chuột
	function slideStart(event){
		//khi kéo lên slide ngăn chặn các sự kiện con xảy ra
		event.preventDefault();
		// Nếu đó là thiết bị di động, hãy xác định lại sự kiện cho điểm tiếp xúc đầu tiên
    	if (event.originalEvent.touches){
      		event = event.originalEvent.touches[0]; 
    	}
    	// lấy về tọa độ x khi nhấn chuột
    	if(sliding == 0){
    		sliding = 1; //Status 1 = slide started.
    		startClientX = event.clientX;
    	}
    	status = true;
	}

	//khi người dùng di chuyển con chuột
	function slide(event){
		// Nếu đó là thiết bị di động, hãy xác định lại sự kiện cho điểm tiếp xúc đầu tiên
		if (event.originalEvent.touches){
      		event = event.originalEvent.touches[0];
      	}
      	// Khoảng cách của đường trượt.
      	var IntanceSlide = event.clientX - startClientX;
      	// Nếu trượt lần đầu và có một khảng cách.
      	if (sliding == 1 && IntanceSlide != 0) {
	      	sliding = 2; // Set status to 'actually moving'
	      	startPixelOffset = pixelOffset; // Lưu trữ bù đắp hiện tại
    	}
    	 //  When user move image
    	if(status == true){
	    	if (sliding == 2) {
	      		// Có nghĩa là người dùng trượt 1 pixel cho mỗi 1 pixel di chuyển của chuột.
	      		var touchPixelRatio = 1;
	      		// Kiểm tra người dùng không trượt ra khỏi ranh giới
	      		// khi trượt ra khỏi giới hạn thì trượt sẽ khó hơn
	      		if ((currentSlide == 0 && event.clientX > startClientX) ||
	         	(currentSlide == slideCount - 1 && event.clientX < startClientX)) {
	        		//Đặt tỷ lệ thành 7 có nghĩa là hình ảnh sẽ di chuyển 7 pixel mỗi khi người dùng di chuyển con trỏ của nó 1 pixel. (Hiệu ứng dây cao su)
	        		touchPixelRatio = 7;
	      		}
	      		// Tính quãng đường di chuyển.
	      		pixelOffset = startPixelOffset + IntanceSlide / touchPixelRatio;
	      		// Áp dụng di chuyển và loại bỏ animation
	      		$('.wrap-contain-slide').css('transform', 'translateX(' + pixelOffset + 'px)');
	    	}
	    	$('.wrap-contain-slide').mouseleave(function(event) {
	    		slideEnd();
	    	});	
	    }
	}

	/**Khi người dùng thả con trỏ kết thúc di chuyển.
  	*/
	function slideEnd(event){
		if (sliding == 2){
      		// Reset sliding.
      		sliding = 0;
      		// Tính toán slide nào cần được xem.
     		currentSlide = pixelOffset < startPixelOffset ? currentSlide + 1 : currentSlide -1;
      		// Đảm bảo rằng các slide không tồn tại đã không được chọn.
      		currentSlide = Math.min(Math.max(currentSlide, 0), slideCount - 1);
      		// Since in this example slide is đầy đủ độ lệch chiều rộng khung nhìn có thể được tính toán theo nó.
      		pixelOffset = currentSlide * - $('.contain-slide').width();
      		// console.log($('.slide').width());
      		// Remove style from DOM (look below)
      		$('#temp').remove();
      		// Add a translate rule dynamically and asign id to it
      		// if((currentSlide*-25) != -75 ){
      		$('<style id="temp">.wrap-contain-slide.animate{transform:translateX(' + pixelOffset + 'px)}</style>').appendTo('head');
      		// }
      		// Thêm lớp hoạt ảnh vào thanh trượt và đặt lại phần hỗ trợ chuyển đổi của lớp này.
      		$('.wrap-contain-slide').addClass('animate').css('transform', '');
    	}
    	status = false;
    	console.log(currentSlide);
    	for(var i = 0 ; i < label.length ; i++){
    		if(i == currentSlide){ 
    			$(label[i]).addClass('bar');
    		} else {
    			$(label[i]).removeClass('bar');
    		}

    	}
	}
	
})