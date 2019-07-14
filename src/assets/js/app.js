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


$(document).foundation();

/* Global Variables */
var $window      = $(window),
    wh           = $window.innerHeight,
    globalHeader = $('header#main'),
    body         = $('body');


$window.on('load', function(){
  $(".athletes_carousel").owlCarousel({
    loop:true,
    margin:16,
    nav:true,
    responsive:{
      0:{
          items:1
      },
      700:{
          items:3
      }
    }
  });
});