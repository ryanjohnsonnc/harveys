import $ from 'jquery';
import 'what-input';


// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');
require('owl.carousel/dist/owl.carousel.min.js');


// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

Foundation.Abide.defaults.patterns['dashes_only'] = /^[0-9-]*$/;

$(document).foundation();

/* Global Variables */
var $window      = $(window),
    wh           = $window.innerHeight,
    globalHeader = $('header.global'),
    body         = $('body');


$window.on('load', function(){
  // Handles Sticky Nav
  $window.scroll(function(){
    if( $window.scrollTop() >= 300 ) {
      globalHeader.addClass('scrolled');
    } else {
      globalHeader.removeClass('scrolled');
    }
  });

  if(window.location.href.indexOf("complete=true") > -1) {
    var contactForm = $('.contact_grid');

    $('html, body').animate({
      scrollTop: contactForm.offset().top + -100
    }, 800, function(){});
    contactForm.html('<h2>Success!</h2><p>Thank you for your message. We will review it and get back to you as soon as possible.</p>'); 
  }

  // Handling smooth scroll to anchor links in nav
  
  $('.nav_link').on('click', function(e) {
    e.preventDefault;
    var section = $(this).attr('href');
    if(section) {
      $('html, body').animate({
        scrollTop: $(section).offset().top + -100
      }, 800, function(){});
    }
  });

  // Handling Parallaxy Animations
  var rellax = new Rellax('.bg-tree', {
    center: true,
    speed: .5,
  });

  // Animating the Signs 
  var infoCard1 = $('.hero_bottom .info_card');
  var infoCard2 = $('.products .info_card');
  
  window.addEventListener('scroll', function(e) {
		if( isOnScreen( infoCard1 ) ) { /* Pass element id/class you want to check */
			infoCard1.addClass('swing');
    } else {
      infoCard1.removeClass('swing');
    }	
     
    if( isOnScreen( infoCard2 ) ) { /* Pass element id/class you want to check */
			infoCard2.addClass('swing');
 		} else {
      infoCard2.removeClass('swing');
    }	
	});
});


function isOnScreen(elem) {
	// if the element doesn't exist, abort
	if( elem.length == 0 ) {
		return;
	}
	var $window = jQuery(window)
	var viewport_top = $window.scrollTop()
	var viewport_height = $window.height()
	var viewport_bottom = viewport_top + viewport_height
	var $elem = jQuery(elem)
	var top = $elem.offset().top
	var height = $elem.height()
	var bottom = top + height

	return (top >= viewport_top && top < viewport_bottom) ||
	(bottom > viewport_top && bottom <= viewport_bottom) ||
	(height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
}