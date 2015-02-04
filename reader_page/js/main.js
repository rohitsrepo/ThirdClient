$(document).ready(function() {
	 $(".middle a").click(function() {
        $.scrollTo($(".second-view"), { duration: 1200});
    });
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
    $('.form-wrap').toggle();
    f=f+1;
    if(f%2!=0){
      $('.form-wrap').removeClass('fadeInUp');
      $('.form-wrap').addClass('fadeOutDown');
      $('.tdime').show();
      $('.explore').show();
    }
    else{
      $('section img').hide();
      $('section .explore').hide();
      $('.form-wrap').removeClass('fadeOutDown');
      $('.form-wrap').addClass('fadeInUp');
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

