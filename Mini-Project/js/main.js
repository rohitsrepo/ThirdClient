$(document).ready(function ($) {
    $('li.content').hide();
    $('ul.toggle-menu').delegate('li.toggle', 'click', function () {
        $(this).next().toggle('fast').siblings('.content').hide('fast');
    });
    var flag=0;
    $('#zoom').click(function() {
    		$('#img1').off();
            flag=flag+1;
            if(flag%2 == 0)
            	$('#img1').off();
            else
            	$('#img1').imageLens({ lensSize: 150 });
    });

    $('#full').click(function() {
    	$('#img1').fullScreen(true);
    });

    var flag1=0;
    $('#view').click(function() {
    	$('#img1').off();
    	flag1=flag1+1;
    	if(flag1%2 == 0){
    		$('#img1').off();
            $('#img1').css('width','100%');
            $('#img1').css('height','87%');
        }
    	else{
            $('#img1').css('width','50%');
            $('#img1').css('height','40%');
    		CloudZoom.quickStart();
    	}
    });

    var flag2=0;
    $('#split').click(function() {
    	flag2=flag2+1;
    	if(flag2%2==0){  
    		$('#content').text("");
            $('#img1').css('width','100%');
            $('#img1').css('height','87%');
    	}
		else{
			$('#content').text("IMAGE TEXT HERE !");
            $('#img1').css('width','55%');
            $('#img1').css('height','70%');
    	}
	  });
});