(function(){

    var storydata = [

        {
            id: 'census',
            link: 'http://www.poynter.org/news/mediawire/361641/interactive-find-out-how-diverse-the-newspaper-industry-is/',
            title: 'Find out how diverse the newspaper industry is',
            source: 'Poynter',
            category: 'code + design',
            desc: "After the ASNE released their annual newsroom census on 27th July, I used the data released to create this interactive that highlights the lack of minorities in the industry. The idea is to make an engaging space where people could pick and choose the statistic they wanted to see. <em><b>Tools: JavaScript, Illustrator, HTML/CSS</em></b>",
            img: 'census.png'
        },

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
        }

    ]

    var playdata = [

         {
            id: 'notable',
            link: 'https://gurmanbh.github.io/notable/',
            title: 'Notable',
            source: 'Personal project',
            category: 'tool',
            desc: "Notable is a prototype for inline annotation powered by Google Spreadsheets. As an example, I <a href='http://gurmanbhatia.com/notable/notable-resume.html' target = '_blank'>annotated my CV using Notable.</a> The project is still under development and the code can be found on <a href = 'http://github.com/gurmanbh/notable' target='_blank'>Github.</a>",
            img: 'notable.png'
        }


    ]

    var template_Html = $('#storytemplate').html();
    var template_TF = _.template(template_Html);

    storydata.forEach(function(obj){
        $('#work-para').append(template_TF(obj))
    })

    playdata.forEach(function(obj){
        $('#play-para').append(template_TF(obj))
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
