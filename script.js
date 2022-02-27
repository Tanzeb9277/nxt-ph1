$(window).on("scroll touchmove", function() 
{
    if ($(document).scrollTop() >=  0  ) 
    {
        $('body').css('background-image', 'url(imgs/0042.png)')
    };
    if ($(document).scrollTop() >=  100 )
    {
        $('body').css('background-image', 'url(imgs/0043.png)')
    };
   if ($(document).scrollTop() >=   200 ) 
   {
        $('body').css('background-image', 'url(imgs/0044.png)')
   };
   if ($(document).scrollTop() >= 300 ) 
   {
        $('body').css('background-image', 'url(imgs/0045.png)')
   };

});