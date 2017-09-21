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
    sr.reveal('.about-left', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
  });

  sr.reveal('.about-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
    })
  
  
  
  //Video
    sr.reveal('.video', {
    duration: 2000,
    origin: 'bottom'
  });



  //Download
    sr.reveal('.download-left', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
  });

  sr.reveal('.download-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
    })
  
  
  
  //Contact
  sr.reveal('.contact', {
    duration: 2000,
    origin: 'bottom'
  });



  //Footer
    sr.reveal('footer', {
    duration: 2000,
    origin: 'bottom'
  });

};

$(document).ready(main);
