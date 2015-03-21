    var buffer = 90;

//scroll to partcular section on the page
$('#menu .options').on('click', function(){
	$('#menu .options').removeClass('active');
	$(this).addClass('active');
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
                $('.options.active').removeClass('active');
                $('.options').eq(i).addClass('active');
            }
        });

    } else {
        $('.options.active').removeClass('active');
        $('.options:first').addClass('active');
    }

}).scroll();

$('#hamburger').on('click', function(){
    if ($('#menu').hasClass('show')){
        $('#menu').removeClass('show');    
    }else
    {$('#menu').addClass('show')};
});
