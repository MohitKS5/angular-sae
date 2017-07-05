$(window).load(function(){
    $('img').not('.logo>img,img.nope').each(function(){
        $(this).attr('src', $(this).attr('lsrc')); });
});