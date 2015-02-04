$(document).ready(function() {
	 $(".middle a").click(function() {
        $.scrollTo($(".second-view"), { duration: 1200});
    });

   //DEAL WITH CURTAIN HERE
    $(".curtain-content").hide();
    function toggleIcon(){
      $(".menuIcon").toggleClass("newMenuIcon")
      $(".bar-1").toggleClass("newbar-1");
      $(".bar-2").toggleClass("newbar-2");
      $(".bar-3").toggleClass("newbar-3"); 
      $(".curtain-content").toggle(); 
    }

    $(".menuIcon").click(function () {
    toggleIcon();
    if ($(".bar-1").hasClass("newbar-1")) {
        $(".curtain-content").animate({marginLeft:0},400)
    } else {
        $(".curtain-contents").animate({marginLeft:-220},400)
    }
    });

    //INK EFFECT
      var $ink, x, y, ink_diameter;
  
    $('.button-ink').on('mousedown', function (e) {
    $(this).removeClass('raised');
    
    // avoid adding multiple ink elements
    if (!$(this).find('.ink').length) { // no ink element added yet
      $(this).prepend('<span class="ink"></span>');
      $ink = $(this).find('.ink');
    } else { // ink element added
      $ink = $(this).find('.ink');
      $ink.removeClass('spill');
    }
    
    ink_diameter = Math.max($(this).outerWidth(), $(this).outerHeight());
    
    // x and y coordinates for ink element
    x = e.pageX - $(this).offset().left - (ink_diameter/2);
    y = e.pageY - $(this).offset().top - (ink_diameter/2);
    
    $ink.css({
      top      : y,
      left     : x,
      width    : ink_diameter,
      height   : ink_diameter
    }).addClass( 'spill' );
    
    $(this).addClass('raised');
    
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

  //jQuery time
var parent, ink, d, x, y;
$(".artwork-link").click(function(e){
  parent = $(this).parent();
  //create .ink element if it doesn't exist
  if(parent.find(".ink").length == 0)
    parent.prepend("<span class='ink'></span>");
    
  ink = parent.find(".ink");
  //incase of quick double clicks stop the previous animation
  ink.removeClass("animate");
  
  //set size of .ink
  if(!ink.height() && !ink.width())
  {
    //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
    d = Math.max(parent.outerWidth(), parent.outerHeight());
    ink.css({height: d, width: d});
  }
  
  //get click coordinates
  //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
  x = e.pageX - parent.offset().left - ink.width()/2;
  y = e.pageY - parent.offset().top - ink.height()/2;
  
  //set the position and add class .animate
  ink.css({top: y+'px', left: x+'px'}).addClass("animate");
})
});

