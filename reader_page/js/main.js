$(document).ready(function() {
	 $(".middle a").click(function() {
        $.scrollTo($(".second-view"), { duration: 1200});
    });
    $(".info").hide();
    function toggleIcon(){
      $(".info").toggle();
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

