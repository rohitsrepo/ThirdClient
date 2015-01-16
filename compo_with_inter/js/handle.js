$(document).ready(function() {

	var c = 1;
	$('.tools').hide();
	$('.btn3').click(function() {
		c+=1;
		if(c%2==0){
			$('.image').addClass('imageclass');
			$('.content').hide();
			$('.btn3').attr('data-wipe','Interpretation');
			$('.btn3').text("Interpretation");
			$('.btn2').css('left','380px');
			$('.tools').show();
			$('.tools').css('display','inline-block');
		}
		else{
			$('.tools').hide();
			$('.content').show();
			$('.image').removeClass('imageclass');
			$('.content').css('display','inline-block');
			$('.btn3').attr('data-wipe','Explore Tools');
			$('.btn3').text("Explore Tools");
		}

	});

});