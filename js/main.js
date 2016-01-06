(function(){
    var filters = ["Highlights", "Interactives", "Writing", "Data", "Tools", "Video"]

    var storydata = [
    {
            id: 'baseball',
            link: 'http://www.mypalmbeachpost.com/mark-foley-helps-save-astros-nationals-spring-training-baseball-in-west-palm-beach/',
            title: 'Spring training hardball: How a disgraced politician helped save the game',
            "source": 'The Palm Beach Post',
            "category": 'design',
            "desc": "For a story about the behind the scenes of a spring training stadium in Palm Beach County, I made baseball cards for the characters involved.<em><b>Tools: Photoshop, JavaScript, HTML/CSS</em></b>",
            "img": 'baseball.png',
            "filterlist":'Interactives/Highlights'
        },
        {
            id:'vr',
            link:'http://www.poynter.org/news/mediawire/372330/virtual-reality-news-becoming-a-reality-in-many-newsrooms/',
            title:'Virtual reality news is becoming a reality in many newsrooms',
            source: 'Poynter',
            category:'words',
            desc:'The story is a behind the scenes account of building virtual reality teams in newsrooms.',
            img:'vr.png',
            filterlist:'Writing/Highlights'
        },
        {
            id:'structuredjournalism',
            link:'http://www.poynter.org/news/mediawire/361585/how-newsrooms-are-using-machine-learning-to-make-journalists-lives-easier/',
            title:'How newsrooms are using machine learning to make journalists’ lives easier',
            source:'Poynter',
            category:'words',
            desc:'The story takes you to the research labs at the BBC and the New York Times and talks about innovation within the sphere of machine learning and structured journalism to help the reporting process.',
            img:'machine.png',
            filterlist:'Writing'
        },
        {
            id: 'census',
            link: 'http://www.poynter.org/news/mediawire/361641/interactive-find-out-how-diverse-the-newspaper-industry-is/',
            title: 'Find out how diverse the newspaper industry is',
            source: 'Poynter',
            category: 'code + design',
            desc: "After the ASNE released their annual newsroom census on 27th July, I used the data released to create this interactive that highlights the lack of minorities in the industry.<em><b>Tools: JavaScript, Illustrator, HTML/CSS</em></b>",
            img: 'census.png',
            "filterlist":'Interactives/Highlights'
        },
        {
            id: 'notable',
            link: 'https://gurmanbh.github.io/notable/',
            title: 'Notable',
            source: 'Personal project',
            category: 'tool',
            desc: "Notable is a prototype for inline annotation powered by Google Spreadsheets. As an example, I <a href='http://gurmanbhatia.com/notable/notable-resume.html' target = '_blank'>annotated my CV using Notable.</a> The project is still under development and the code can be found on <a href = 'http://github.com/gurmanbh/notable' target='_blank'>Github.</a>",
            img: 'notable.png',
            "filterlist":"Highlights/Tools"
        },
        {
            id: 'tiktok',
            link: 'http://www.poynter.org/news/mediawire/371490/tragic-images-of-children-captured-by-photojournalists-over-time/',
            title: 'Tragic images of children captured by photojournalists over time',
            source: 'Poynter',
            category: 'code + design + images',
            desc: "A modified version of WNYC's Tik-Tok with custom functions to blur images using CSS.",
            img: 'tiktok.png',
            "filterlist":"Interactives"
        },

        {
            id: 'netneutrality',
            link: 'https://gurmanbh.github.io/netneutrality-india',
            title: 'What choices are you making when you buy mobile Internet in India?',
            source: 'Classwork - Columbia Journalism School',
            category: 'words + code + design',
            desc: "India is the second biggest mobile phone market in the world and nearly 90 percent of the 20 percent of population has access to the Internet, accesses it through mobile. In light of the Net Neutrality debate, this news app helps you compare regular Internet plans with Facebook and WhatsApp only packs that are offered by certain telecom providers.<em><b>Tools: HTML/CSS, JavaScript (d3 + jQueryUI + Underscore.)</em></b>",
            img: 'nn.png',
            "filterlist":"Interactives/Highlights/Data"
        },

        {
            id: 'snapchat',
            link: 'https://gurmanbh.github.io/snapchat-web',
            title: 'The Making of Snapchat',
            source: 'Classwork - Columbia Journalism School',
            category: 'words + code + design',
            desc: "Presented in a combination of snaps and text, this story uses Snapchat's aesthetics and interface to traces the journey of the brand towards a revenue based model.<em><b>Tools: HTML/CSS, JavaScript, PhotoShop</em></b>",
            img: 'snapchat-inside.png',
            "filterlist":"Interactives/Highlights"
        },

        {
            id: 'bangladesh',
            link: 'http://columbiajournalist.org/now-on-the-menu-bangladeshi-pride/',
            title: 'Now on the Menu: Bangladeshi Pride',
            source: 'The Columbia Journalist',
            category: 'words + data',
            desc: "There are 29 Bangladeshi restaurants in New York City. By contrast, there are 318 Indian restaurants. This story captures the rise of the Bangladeshi pride in the city’s restaurant industry.<em><b>Tools: MS Excel</em></b>",
            img: 'neerob.png',
            "filterlist":"Data/Highlights/Writing"
        },
        {
            id: 'wifi',
            link: 'http://thebrooklynink.com/2014/12/15/54267-public-high-speed-internet-access-its-coming/',
            title: 'Public High-Speed Internet Access? It’s Coming!',
            source: 'The Brooklyn Ink',
            category: 'words + data + mapping',
            desc: "Two maps that show broadband access in New York City at present and the vision of the city's upcoming Municipal Wi-Fi project. <em><b>Tools: CartoDB, R</em></b>",
            img: 'wifi.png',
            "filterlist":"Data/Writing"
        },

        {
            "id":'interviewing',
            "link":'https://www.facebook.com/Poynter/videos/vb.5752246165/10153446685391166/?type=2&theater',
            "title":'5 basics of interviewing and note-taking',
            "source":'Poynter',
            "category":'animation',
            "desc":'During my fellowship at Poynter, I made a quick video in After Effects for a Roy Peter Clark piece on the basics of interviewing and note-taking.',
            "img":'interviewing.png',
            "filterlist":"Video"
        },
        {
            "id":'kathputli',
            "link":'http://lsrcollegejournalism.org/documentary-production/',
            "title":'Lost in Transition: Mapping the displacement in Kathputli Colony',
            "source":'Documentary Project: Lady Shri Ram College for Women',
            "category":'video',
            "desc":'In the heart of the city of New Delhi, India lies an artists’ colony inhabited by puppeteers, singers, percussion artists and sculptors. This short video documentary sketches the story of the residents of Kathputli colony as they grapple with the proposed demolition of their 44 year-old settlement.',
            "img":'kathputli.png',
            "filterlist":"Video"
        }

    ]

   

    var template_Html = $('#storytemplate').html();
    var template_TF = _.template(template_Html);

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

    storydata.forEach(function(e){
        if (!e.filterlist){
            e.filterlist = ["Other"]
        } else {
            e.filterlist = e.filterlist.split("/");
        }
    })

    $('#filterset').append('<li data-which="'+'All'+'" class ="category">'+'All'+'</li>')

    filters.forEach(function(e){
        $('#filterset').append('<li data-which="'+e+'" class ="category">'+e+'</li>')
    })

    $('li').on('click',function(){
        $('#work-para').html('')
        $('li').removeClass('active');
        $(this).addClass('active');
        var check = $(this).attr('data-which')
        bake(check)
    })

    function bake(check){
        if (check=='All'){
            storydata.forEach(function(e){
                $('#work-para').append(template_TF(e))
            })
        } else {
            storydata.forEach(function(e){
                if (_.contains(e.filterlist,check)){
                    $('#work-para').append(template_TF(e))
                }
            });
        }

        hovercode()
    }

    bake('Highlights');
    $('li[data-which="Highlights"]').addClass('active');
    hovercode()

    // hover stuff
function hovercode(){

    $('.story-title h3').on('mouseover',function(){
        var thing =  '#'+$(this).attr('data-which');
        $(thing).addClass('image-active');
    });

    $('.story-title h3').on('mouseout',function(){
        var thing =  '#'+$(this).attr('data-which');
        $(thing).removeClass('image-active');
    });

    $('.story-image-block').on('mouseover',function(){
        var thing =  '.story-title h3[data-which="'+$(this).attr('id')+'"]';
        $(thing).addClass('title-active');
    });

    $('.story-image-block').on('mouseout',function(){
        var thing =  '.story-title h3[data-which="'+$(this).attr('id')+'"]';
        $(thing).removeClass('title-active');
    });

}
     

}).call(this)
