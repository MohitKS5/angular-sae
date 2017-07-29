$(window).load(function(){
    $('img').not('img.nope, .logo>img').each(function(){
        $(this).attr('src', 'https://res.cloudinary.com/imagelibraryfsae/image/upload/v1498843998'+$(this).attr('alt')); });
});
