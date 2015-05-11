(function(){

    var storydata = [

        {
            id: 'netneutrality',
            link: 'https://gurmanbh.github.io/netneutrality-india',
            title: 'What choices are you making when you buy mobile Internet in India?',
            source: 'Classwork - Columbia Journalism School',
            category: 'words + code + design',
            desc: "India is the second biggest mobile phone market in the world, but less than 20 percent of the population has access to the Internet. Nearly 90 percent of Internet users access it through mobile. How mobile operators allow you to access the Internet matters. This project helps you compare regular Internet plans with Facebook and WhatsApp only packs that are offered by certain telecom providers.<em><b>Tools: HTML/CSS, JavaScript.</em></b>",
            img: 'nn.png'
        },

        {
            id: 'snapchat',
            link: 'https://gurmanbh.github.io/snapchat-web',
            title: 'The Making of Snapchat',
            source: 'Classwork - Columbia Journalism School',
            category: 'words + code + design',
            desc: "Done as an assignment for an Interactive Design and Storytelling class at Columbia Journalism School, this story traces the journey of Snapchat towards a revenue based model. Presented in a combination of snaps and text, it uses Snapchat's aesthetics and interface to tell the brand's story.<em><b>Tools: HTML/CSS, JavaScript, PhotoShop</em></b>",
            img: 'snapchat-inside.png'
        },

        {
            id: 'bangladesh',
            link: 'http://columbiajournalist.org/now-on-the-menu-bangladeshi-pride/',
            title: 'Now on the Menu: Bangladeshi Pride',
            source: 'The Columbia Journalist',
            category: 'words + data',
            desc: "There are 29 Bangladeshi restaurants in New York City. By contrast, there are 318 Indian restaurants. This story captures the rise of the Bangladeshi pride in the city’s restaurant industry.<em><b>Tools: MS Excel</em></b>",
            img: 'neerob.png'
        },


        {
            id: 'wifi',
            link: 'http://thebrooklynink.com/2014/12/15/54267-public-high-speed-internet-access-its-coming/',
            title: 'Public High-Speed Internet Access? It’s Coming!',
            source: 'The Brooklyn Ink',
            category: 'words + data + mapping',
            desc: "Two maps that show broadband access in New York City at present and the vision of the city's upcoming Municipal Wi-Fi project. <em><b>Tools: CartoDB, R</em></b>",
            img: 'wifi.png'
        },

        {
            id: 'citibike',
            link: 'http://thebrooklynink.com/2014/11/19/54191-city-bikes-brooklyn-wants-more/',
            title: 'City Bikes? Brooklyn Wants More',
            source: 'TThe Brooklyn Ink and Columbia Journalist',
            category: 'words + code + data',
            desc: "Before Citi Bike launched in 2013, the Department of Transportation (DOT) released a suggestion portal, where people could suggest future Citi Bike station locations. I scraped the data collected by the online portal and analyzed it to understand where these requests were coming from and whether the demand followed up with supply. <em><b>Tools: R, Python</em></b>",
            img: 'citibike.png'
        }
    ]

    var template_Html = $('#storytemplate').html();
    var template_TF = _.template(template_Html);

    storydata.forEach(function(obj){
        $('#work-para').append(template_TF(obj))
    })

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
            $('.mobile .options:first').addClass('active');
        }

    }).scroll();

    $('#hamburger').on('click', function(){
        if ($('#menu').hasClass('show')){
            $('#menu').removeClass('show');    
        } else
        {$('#menu').addClass('show')};
    });

}).call(this)
