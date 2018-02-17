/*INDEX:search these for navigation
 //preloader
 //carousel home tab
 //flexslider members page
 //bring to home on reload
 //add controllers for nav through slider in members page
 //blinking on home page
 //bring navbar when window crosses the 1st screen
 //navbar navigation controls
 //carousel bottom navbar navigatio controls
 home tab restrinct scrollvar
 */
var enablescroll = function enablescroll() {
  $('#map').removeClass('clicked');
};

$(document).ready(function () {
    $(document).scrollTop(0);
    // will first fade out the loading animation
    $("#loader")
      .delay(3000)
      .fadeOut(1000, function () {
        $("#loader-wrapper").fadeOut(500);
      });
    if ($('#waevr').hasClass('carousell')) {
      //carousel home tab
      var $homeslider = '#_homepagecarousel';
      $($homeslider + ">img:not(:nth-child(1))").hide();
      setInterval(function () {
        $($homeslider + '> img:first')
          .fadeOut(1500)
          .next()
          .fadeIn(1500)
          .end()
          .appendTo('#_homepagecarousel');
      }, 3000);

      //blinking on home page
      var $indicator = $('li.indicator-item');
      if ($indicator.first().hasClass('active')) {
        $indicator
          .addClass('glow_class');
      }
      else {
        $($indicator)
          .removeClass('glow_class');
      }

      //bring navbar when window crosses the 1st screen
      var secondaryNavTopPosition = $('li.indicator-item').offset().top - 50;
      $(window).on('scroll', function () {
        if ($(window).scrollTop() > secondaryNavTopPosition) {
          setTimeout(function () {
            $('._navbar').fadeIn();
            $('.soc-links').fadeIn(500);
          }, 50);
        }
        else {
          setTimeout(function () {
            $('._navbar, .soc-links').fadeOut(0);
          }, 50);

        }
      });


//navbar navigation controls
      $("#tabs").children('a')
        .click(function (event) {
          event.preventDefault();
          var a = $(this).html();
          $('li.indicator-item:contains(' + a + ')').trigger('click');
        }).first()
        .click(function () {
          window.scrollTo(0, 0);
          $('body').css({"overflow": "hidden"});
        });

//carousel bottom navbar navigatio controls
      $indicator.click(function () {
        var wind_height = $(window).height(),
          activeTab = $(this).html();

        $(".tab-content").hide();
        $("#_" + activeTab).fadeIn(700);
        if (activeTab === 'home') {
          $($indicator).addClass('glow_class');
          window.scrollTo(0, 0);
          $('body').css({"overflow": "hidden"});
        }
        else {
          $($indicator).removeClass('glow_class');
          $('body').css({"overflow-y": "scroll"});
          if (($(window).scrollTop() > secondaryNavTopPosition)) {
            $('html, body')
              .stop()
              .animate({
                'scrollTop': wind_height
              }, 800);
          } else {
            setTimeout(function () {
              $('html, body')
                .stop()
                .animate({
                  'scrollTop': wind_height
                }, 800);
            }, 1000);
          }
        }
      });
    }
  }
);
