$(window).load(function(){
    $('img').not('img.nope').each(function(){
        $(this).attr('src', 'https://res.cloudinary.com/notnowbitches/image/upload/v1498843998'+$(this).attr('alt')); });
});
