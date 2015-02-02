$(document).ready(function() {
    $('.sorting-labels').hide();
    $('.posts').mouseenter(function() {
        $('.sorting-labels').show();
    });
    $('.posts').mouseleave(function() {
        $('.sorting-labels').hide();
    });
     $(".explore").click(function() {
        $.scrollTo($(".posts"), { duration: 1200});
    });

});