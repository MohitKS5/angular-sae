/*$('.waves-effect').on('click',function (event) {
 var b=$(this).attr('name');
 event.preventDefault();
 $('li.indicator-item:nth-child('+b+')').trigger('click');
 });*/

$('#_homepre').on('click', function () {
    $('#_homepre').fadeOut(1000);
});


$(document).ready(function () {
    //preloader
    $(document).scrollTop(0);
    $("#loader").delay(1500).fadeOut("slow", function () {// will first fade out the loading animation
        $("#loader-wrapper").fadeOut("slow");// will fade out the whole DIV that covers the website.
        //hide tabs except the first one
        $('.carouseld-item').not(':nth-child(1)').hide();
        // body...
    });
    $.mobile.orientationChangeEnabled = false;
});
//carousel bottom navbar navigatio controls
$("a.waves-effect").not('#NO').click(function (event) {

    $(".carouseld-item").hide();
    var activeTab = $(this).text();
    console.log(activeTab);
    $("#_" + activeTab).fadeIn(700);
    var SNT = $('body').offset().top;

    //changing absolute body backgrounds
    //$('body').attr('class', '_b'+a);
    $('html, body').stop().animate({
        'scrollTop': SNT
    }, 800);
});


$(window).on("orientationchange", function (event) {
    // if(event.orientation === "landscape")
});