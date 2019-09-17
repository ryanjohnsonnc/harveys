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
});
