$(document).ready(function() {
	 $(".middle a").click(function() {
        $.scrollTo($(".second-view"), { duration: 1200});
    });

   //DEAL WITH CURTAIN HERE
   var fl = 1;
    $(".menuIcon").click(function () {
      fl = fl + 1;
      if(fl%2==0){
        $(".curtain-content").removeClass('fadeOutLeft');
        $(".curtain-content").addClass('fadeInLeft');
        $(".curtain-content").animate({marginLeft:0},400);
        $(".curtain-features").addClass('fadeInUpBig');
        $("header, .posts").addClass("dark-overlay");
      }
    else {
        $(".curtain-features").removeClass('fadeInUpBig');
        $(".curtain-content").removeClass('fadeInLeft');
        $(".curtain-content").addClass('fadeOutLeft');
        $(".curtain-content").animate({marginLeft:-330},400);
        $("header, .posts").removeClass("dark-overlay");
    }
  });
    
    $('.posts, .banner').click(function() {
        if($(".curtain-content").hasClass("fadeInLeft")){
          $(".curtain-features").removeClass('fadeInUpBig');
          $(".curtain-content").removeClass('fadeInLeft');
          $(".curtain-content").addClass('fadeOutLeft');
          $(".curtain-contents").animate({marginLeft:-330},400);
          $("header, .posts").removeClass("dark-overlay");
          fl = fl -1 ;
        }
    });

 //DEAL WITH SIGNUP / LOGIN BOX HERE 
  $('.form-wrap').hide();
  var f=1;
  $('.sign-log').click(function() {
    f=f+1;
    if(f%2!=0){
      $('.form-wrap').removeClass('fadeInUp');
      $('.form-wrap').addClass('fadeOutDown');
      setTimeout(function() {$('.form-wrap').toggle();},300);
      $('.tdime ,.explore').addClass('fadeInRight');
      $('.tdime, .explore').show();
    }
    else{
      $('.tdime').hide();
      $('.explore').hide();
      $('.form-wrap').removeClass('fadeOutDown');
      $('.form-wrap').addClass('fadeInUp');
      $('.form-wrap').toggle();
    }
  });
  tab = $('.tabs h3 a');

  tab.on('click', function(event) {
    event.preventDefault();
    tab.removeClass('active');
    $(this).addClass('active');

    tab_content = $(this).attr('href');
    $('div[id$="tab-content"]').removeClass('active');
    $(tab_content).addClass('active');

  });


});

