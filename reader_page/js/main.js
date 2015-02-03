$(document).ready(function() {
	 $(".middle a").click(function() {
        $.scrollTo($(".second-view"), { duration: 1200});
    });
	 $(".da0").click(function() {
        $.scrollTo($(".feed1"), { duration: 1000});
    });
	 $(".da1").click(function() {
        $.scrollTo($(".feed2"), { duration: 1000});
    });
	 $(".da2").click(function() {
        $.scrollTo($(".feed3"), { duration: 1000});
    });
	 $(".da3").click(function() {
        $.scrollTo($(".feed4"), { duration: 1000});
    });

     function toggleIcon(){
  $(".menuIcon").toggleClass("newMenuIcon")
  $(".span1").toggleClass("newSpan1");
  $(".span2").toggleClass("newSpan2");
  $(".span3").toggleClass("newSpan3");  
}

$(".menuIcon").click(function () {
  toggleIcon();
  if ($(".span1").hasClass("newSpan1")) {
    $(".info").animate({marginLeft:0},400)
  } else {
    $(".info").animate({marginLeft:-220},400)
  }
});
});

