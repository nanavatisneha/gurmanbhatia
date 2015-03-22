    var buffer = 90;

//scroll to partcular section on the page
$('#menu .options').on('click', function(){
        if ($('#menu').hasClass('show')){
        buffer = 10;  
        $('#menu').removeClass('show');
        }
	var space = $(this).attr('data-which');
    var l= '#'+space;
    var pos = $(l).offset();
    pos.top = pos.top - buffer;
    $('html, body').animate({scrollTop:(pos.top)}, 600);
});

$('.story-title h3').on('mouseover',function(){
    var thing =  '#'+$(this).attr('data-which');
    $(thing).addClass('image-active');
});

$('.story-title h3').on('mouseout',function(){
    var thing =  '#'+$(this).attr('data-which');
    $(thing).removeClass('image-active');
});
/*
$('#click-more').on('click',function(){
    $('.story-more').addClass('visible');
});
*/


$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('#content .segment').each(function(i) {
            if ($(this).position().top <= windscroll + buffer	) {
                $('.desktop .options.active').removeClass('active');
                $('.desktop .options').eq(i).addClass('active');
                $('.mobile .options.active').removeClass('active');
                $('.mobile .options').eq(i).addClass('active');
            }
        });

    } else {
        $('.desktop .options.active').removeClass('active');
        $('.desktop .options:first').addClass('active');
        $('.mobile .options.active').removeClass('active');
        $('.mobile .options').eq(i).addClass('active');
    }

}).scroll();

$('#hamburger').on('click', function(){
    if ($('#menu').hasClass('show')){
        $('#menu').removeClass('show');    
    } else
    {$('#menu').addClass('show')};
});


