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
        $(".curtain-feature1").addClass('fadeInUpBig');
        setTimeout(function(){$(".curtain-feature2").addClass('fadeInUpBig')},50);
        setTimeout(function(){$(".curtain-feature3").addClass('fadeInUpBig')},100);
        setTimeout(function(){$(".curtain-feature4").addClass('fadeInUpBig')},150);
        setTimeout(function(){$(".curtain-feature5").addClass('fadeInUpBig')},200);
        setTimeout(function(){$(".curtain-feature6").addClass('fadeInUpBig')},250);
        setTimeout(function(){$(".overlayclass").addClass("overlay")},300);
      }
    else {
        $(".curtain-feature1").removeClass('fadeInUpBig');
        $(".curtain-feature2").removeClass('fadeInUpBig');
        $(".curtain-feature3").removeClass('fadeInUpBig');
        $(".curtain-feature4").removeClass('fadeInUpBig');
        $(".curtain-feature5").removeClass('fadeInUpBig');
        $(".curtain-feature6").removeClass('fadeInUpBig');
        $(".curtain-content").removeClass('fadeInLeft');
        $(".curtain-content").addClass('fadeOutLeft');
        $(".curtain-content").animate({marginLeft:-330},400);
        $(".overlayclass").removeClass("overlay");
    }
  });
    
    $('.posts, .banner').click(function() {
        if($(".curtain-content").hasClass("fadeInLeft")){
          $(".curtain-feature1").removeClass('fadeInUpBig');
          $(".curtain-feature2").removeClass('fadeInUpBig');
          $(".curtain-feature3").removeClass('fadeInUpBig');
          $(".curtain-feature4").removeClass('fadeInUpBig');
          $(".curtain-feature5").removeClass('fadeInUpBig');
          $(".curtain-feature6").removeClass('fadeInUpBig');
          $(".curtain-content").removeClass('fadeInLeft');
          $(".curtain-content").addClass('fadeOutLeft');
          $(".curtain-contents").animate({marginLeft:-330},400);
          $(".overlayclass").removeClass("overlay");
          fl = fl -1 ;
        }
    });


});