$(document).ready(function() {
	 $(".middle a").click(function() {
        $.scrollTo($(".second-view"), { duration: 1200});
    });

  //DEAL WITH CURTAIN HERE
  function addCurtain() {
    $(".curtain-content").removeClass('fadeOutLeft');
    $(".curtain-content").addClass('fadeInLeft');
    $(".curtain-content").animate({marginLeft:0},400);
    $(".curtain-feature1").addClass('fadeInUpBig');
    setTimeout(function(){$(".curtain-feature2").addClass('fadeInUpBig')},50);
    setTimeout(function(){$(".curtain-feature3").addClass('fadeInUpBig')},100);
    setTimeout(function(){$(".curtain-feature4").addClass('fadeInUpBig')},150);
    setTimeout(function(){$(".curtain-feature5").addClass('fadeInUpBig')},200);
    setTimeout(function(){$(".curtain-feature6").addClass('fadeInUpBig')},250);
    setTimeout(function(){$(".curtain-overlay-placeholder").addClass("curtain-overlay")},300);
  };

   function removeCurtain() {
    $(".curtain-feature1").removeClass('fadeInUpBig');
    $(".curtain-feature2").removeClass('fadeInUpBig');
    $(".curtain-feature3").removeClass('fadeInUpBig');
    $(".curtain-feature4").removeClass('fadeInUpBig');
    $(".curtain-feature5").removeClass('fadeInUpBig');
    $(".curtain-feature6").removeClass('fadeInUpBig');
    $(".curtain-content").removeClass('fadeInLeft');
    $(".curtain-content").addClass('fadeOutLeft');
    $(".curtain-content").animate({marginLeft:-500},400);
    $(".curtain-overlay-placeholder").removeClass("curtain-overlay");
   };

   function isCurtainActive() {
    if($(".curtain-content").hasClass("fadeInLeft")){
      return true;
    }
    return false;
   }

    $(".logo").click(function () {
      if(!isCurtainActive()){
        addCurtain();
      }
    else {
        removeCurtain();
    }
  });
    
    $('.posts, .banner').click(function() {
        if(isCurtainActive()){
          removeCurtain();
        }
    });

});