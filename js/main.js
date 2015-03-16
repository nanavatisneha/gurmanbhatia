    var buffer = 100;

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