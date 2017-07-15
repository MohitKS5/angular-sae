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
var funL = function funL($this) {
  $($this).parent().find('a.flex-prev').trigger('click');
};
var funR = function funR($this) {
  $($this).parent().find('a.flex-next').trigger('click');
};

$(document).ready(function () {
  $(document).scrollTop(0);
  // will first fade out the loading animation
  $("#loader")
    .delay(3000)
    .fadeOut(1000, function () {
      $("#loader-wrapper").fadeOut(500);
    });

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

//flexslider members page
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: true,
    itemWidth: 210,
    itemMargin: 5,
    pausePlay: true,
    start: function () {
      $('body').removeClass('loading');
    }
  });

  //add controllers for nav through slider in members page
  var navelement2 = "<span onclick='funL(this)' class='navarrow L'></span>",
    navelement = "<span onclick='funR(this)' class='navarrow R'></span>";
  $('.slider')
    .prepend(navelement)
    .prepend(navelement2);

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
  var secondaryNavTopPosition = $('ul.indicators').offset().top-100;
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

  //clear previous and after arrows
  $('a.flex-prev , a.flex-next, a.flex-pause').html(" ").hide();


});
