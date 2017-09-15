var main = function(){

$(function() {
      // Smooth Scrolling
      $('a[href*="#"]:not([href="#"]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

  //Scroll Animations
  window.sr = ScrollReveal();



  //Navbar
  sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
  });



  //Home
  sr.reveal('.home', {
    duration: 2000,
    origin: 'bottom'
  });



  //About
  sr.reveal('.about', {
    duration: 2000,
    origin: 'bottom'
  });



  //Work
  sr.reveal('.download', {
    duration: 2000,
    origin: 'bottom'
  });



  //Contact
  sr.reveal('.contact h4', {
    duration: 2000,
    origin: 'bottom'
  });

  sr.reveal('.contact-left', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
  });

  sr.reveal('.contact-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
    })



  //Footer
    sr.reveal('footer', {
    duration: 2000,
    origin: 'bottom'
  });

};

$(document).ready(main);
