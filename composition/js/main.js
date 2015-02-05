$(document).ready(function() {

  $("#pageHr,#pageHrBorder,.middle").click(function() {
        $.scrollTo($(".pagetop"), { duration: 1500});
    });

  $("#painting").click(function() {
        $.scrollTo($(".interpret"), { duration: 1500});
    });

  $(".about_art").sticky({topSpacing:50});
  $(".icon-bar, .ham-button").sticky({topSpacing:20});
});