(function(){
    var filters = ["Highlights", "Interactives", "Writing", "Data", "Video"]

    var storydata = [
    {
        "id":'open-records',
        "link":'http://projects.jsonline.com/apps/state-secrets/',
        "title":"State Secrets: Open records laws across the nation",
        "source":'The Journal Sentinel',
        "category":'design + data + code',
        "img": 'state-secrets.png',
        "desc":"Designed and developed a searchable database showing public record laws across the United States. <i>Tools: HTML/CSS, d3.js, Tarbell, Flask. </i>",
        "filterlist":"Interactives/Highlights/Data"
    },
    {
        "id":'pollution',
        "link":'http://www.hindustantimes.com/static/pollution-india-five-charts/',
        "title":"India's air pollution in five charts",
        "source":'Hindustan Times',
        "category":'design + data',
        "img": 'airpollution.jpg',
        "desc":"Analysed data from HT's air quality portal and traced how Delhi is not the only toxic city in the country. <i>Tools: HTML/CSS, d3.js, Underscore.js., node.js, R. </i>",
        "filterlist":"Interactives/Highlights/Data"
    },
    {
        "id":'crackers',
        "link":'http://www.hindustantimes.com/static/diwali-crackers-pollution/',
        "title":"How toxic are your favorite firecrackers?",
        "source":'Hindustan Times',
        "category":'code + design + data',
        "img": 'crackers.png',
        "desc":"Built a simulation with real time air pollution data to show what happens to the air around you every time you burst a cracker. <i>Tools: HTML/CSS, d3.js, Underscore.js. </i>",
        "filterlist":"Interactives/Highlights/Data"
    },
    {
        "id":'lata-viz',
        "link":'http://www.hindustantimes.com/static/lata-mangeshkar-every-hindi-film-song-one-graphic/',
        "title":"Every Hindi film song by Lata Mangeshkar, in one graphic",
        "source":'Hindustan Times',
        "category":'code + design + data',
        "img": 'lata.gif',
        "desc":"Scraped a website with a list of songs by Lata Mangeshkar - a popular Indian singer. Created a scroller interactive visualizing her entire career. <i>Tools: HTML/CSS, Underscore.js, d3.js., node.js, Open Refine.</i>",
        "filterlist":"Interactives/Highlights/Data"
    },
    {
        "id":'lata-song-generator',
        "link":'http://www.hindustantimes.com/static/let-lata-mangeshkar-sing/',
        "title":"A Lata Mangeshkar song for every mood",
        "source":'Hindustan Times',
        "category":'code + data',
        "img": 'lata.png',
        "desc":"Scraped a website with a list of songs by Lata Mangeshkar - a popular Indian singer. <a href = 'http://www.twitter.com/Harry_Stevens'>Harry Stevens</a> then built this tool based on categories in the dataset.<i>Tools: node.js, Open Refine.</i>",
        "filterlist":"Interactives/Highlights/Data"
    },
    {
        "id":'olympics-men',
        "link":'http://www.hindustantimes.com/static/olympics/every-country-fastest-man-in-one-race-100m/',
        "title":"Every country's fastest man in one race",
        "source":'Hindustan Times',
        "category":'code + design + data',
        "img": 'olympics-man.png',
        "desc":"Worked with the News Apps team at the Hindustan Times to create a data visualization simulating a race amidst the national record holder for the 100-metre race from each country. <i>Tools: HTML/CSS, Underscore.js, d3.js.</i>",
        "filterlist":"Interactives/Highlights/Data"
    },
    {
        "id":'olympics-women',
        "link":'http://www.hindustantimes.com/static/olympics/every-country-fastest-man-in-one-race-100m/',
        "title":"Every country's fastest woman in one race",
        "source":'Hindustan Times',
        "category":'code + design + data',
        "img": 'olympics-woman.png',
        "desc":"Worked with the News Apps team at the Hindustan Times to create a data visualization simulating a race amidst the national record holder for the 100-metre race from each country. <i>Tools: HTML/CSS, Underscore.js, d3.js.</i>",
        "filterlist":"Interactives/Highlights/Data"
    },
    {
        "id":'olympics-compare',
        "link":'http://www.hindustantimes.com/static/olympics/race-two-countries-100m/',
        "title":"The 100-metre sprint where you get to choose the runners",
        "source":'Hindustan Times',
        "category":'code + design + data',
        "img": 'olympics-compare.png',
        "desc":"Created a news game that lets you simulate a race between the national record holder from any two countries for the 100-metre sprint. <i>Tools: HTML/CSS, Underscore.js, d3.js.</i>",
        "filterlist":"Interactives/Data"
    },
    {
        "id":'delhi',
        "link":'http://www.hindustantimes.com/static/partition/delhi/',
        "title":"The decade that changed Delhi",
        "source":'Hindustan Times',
        "category":'code + design',
        "img": 'delhi.png',
        "desc":"Used historical maps to show the growth of Delhi because of the partition of India in 1947. <i>Tools: HTML/CSS, Illustrator, ai2html.</i>",
        "filterlist":"Highlights"
    },
    {
        "id":'disorders',
        "link":'http://www.jsonline.com/watchdog/Illness-inflation-how-everyday-conditions-become-medical-disorders-380291351.html',
        "title":"Illness Inflation: How everyday conditions become medical disorders",
        "source":'The Milwaukee Journal Sentinel',
        "category":'code + design',
        "img": 'disorders.png',
        "desc":"Designed and developed an interactive to explore different medical conditions that were unknown 10 years ago. Part of an ongoing investigation \"Illness Inflation.\" <b><em>Tools: HTML/CSS/JavaScript, Python, Tarbell, Illustrator.</b></em>",
        "filterlist":"Interactives"
    },
    {
            "id":'debtcalculator',
            "link":'http://www.jsonline.com/business/whats-the-real-cost-of-your-student-loans-379971231.html',
            "title":"What's the real cost of your student loan?",
            "source":'The Milwaukee Journal Sentinel',
            "category":'code + data + design',
            "img": 'debt-calc.jpg',
            "desc":"Designed and developed a multi-loan debt calculator. To add context to a person's debt, combined national and school level data for comparison. As users adjust their monthly payment, it generates a narrative explaining their debt repayment schedule. <b><em>Tools: HTML/CSS/SASS/JavaScript, d3.js, underscore.js.</b></em>",
            "filterlist":"Interactives/Highlights/Data"
        },
        {
        "id":'homicides',
        "link":'http://apps.mypalmbeachpost.com/homicides/',
        "title":"The Palm Beach Post Homicide Tracker",
        "source":'The Palm Beach Post',
        "category":'code + data + design',
        "img": 'homicides.png',
        "desc":"Designed and developed an interactive homicide tracker and set up a work flow that makes the updation process reporting friendly as well as seamless and quick. It uses Backbone.js for filtering and generates static pages using frozen flask for the incident pages. <b><em>Tools: HTML/CSS, Backbone.js, Python/Flask, git, Illustrator.</b></em>",
        "filterlist":"Interactives/Highlights/Data"
    },
    {
            "id":'soberhome',
            "link":'http://www.mypalmbeachpost.com/news/news/heres-a-little-known-way-cities-can-keep-tabs-on-s/nrDMs/',
            "title":'Here’s a little-known way cities can keep tabs on sober homes',
            "source":'The Palm Beach Post',
            "category":'words',
            "img": 'soberhome.jpg',
            "desc":'Palm Beach County is home to hundreds of sober homes, most of which are not regulated. While cities say that they can\'t take strong actions because of the Americans with Disabilities Act, I used public records and extensive reporting to highlight one tool that they fail to use.',
            "filterlist":"Writing"
        },
    {
            "id":'kyc',
            "link":'http://apps.mypalmbeachpost.com/kyc/',
            "title":'Know your candidates',
            "source":'The Palm Beach Post',
            "category":'code + design',
            "img": 'kyc.png',
            "desc":'Developed and designed Tarbell-based site for Palm Beach County\'s 2016 municipal elections. <em><b>Tools: Python, Flask, HTML/CSS/JavaScript.</em></b>',
            "filterlist":"Interactives/Highlights/Data"
        },
    {
            id: 'baseball',
            link: 'http://www.mypalmbeachpost.com/mark-foley-helps-save-astros-nationals-spring-training-baseball-in-west-palm-beach/',
            title: 'Spring training hardball: How a disgraced politician helped save the game',
            source: 'The Palm Beach Post',
            category: 'design',
            desc: "For a story about the behind the scenes of a spring training stadium in Palm Beach County, I made baseball cards for the characters involved.<em><b>Tools: Photoshop, JavaScript, HTML/CSS</em></b>",
            img: 'baseball.png',
            filterlist:'Interactives'
        },
        {
            "id":'sports-college',
            "link":'http://www.mypalmbeachpost.com/sports/football-recruiting',
            "title":'Recruiting Central',
            "source":'The Palm Beach Post',
            "category":'code + design',
            "desc":'Built a front-end layout integrated with Google Spreadsheets within a day to enable our Sports team to make quick and easy live updates to recruitment data for college football teams. With CSS ➡ Table on desktop / cards on mobile. <em><b>Tools: JavaScript, Underscore.js, Tabletop.js, HTML/CSS</em></b>',
            "img":'football.png',
            "filterlist":"Interactives"
        },
        {
            "id":'guardianships',
            "link":'http://www.mypalmbeachpost.com/guardianships-colin-savitt/',
            "title":'Guardianships - A Broken Trust',
            "source":'The Palm Beach Post',
            "category":'code + design',
            "desc":'Led the design and development for the investigative package within the confines of the CMS. Used <a href = "https://gurmanbh.github.io/notable/" target = "_blank">notable</a> (a custom built tool) to add hover elements for key players in the story. <em><b>Tools: JavaScript, HTML/CSS, Photoshop</em></b>',
            "img":'guardianships.jpg',
            "filterlist":"Interactives"
        },
        {
            id:'vr',
            link:'http://www.poynter.org/news/mediawire/372330/virtual-reality-news-becoming-a-reality-in-many-newsrooms/',
            title:'Virtual reality news is becoming a reality in many newsrooms',
            source: 'Poynter',
            category:'words',
            desc:'The story is a behind the scenes account of building virtual reality teams in newsrooms.',
            img:'vr.png',
            filterlist:'Writing'
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
            filterlist:'Interactives/Highlights/Data'
        },
        {
            id: 'tiktok',
            link: 'http://www.poynter.org/news/mediawire/371490/tragic-images-of-children-captured-by-photojournalists-over-time/',
            title: 'Tragic images of children captured by photojournalists over time',
            source: 'Poynter',
            category: 'code + design + images',
            desc: "Due to the sensitive nature of the visuals, I added custom functionalities to <a href='https://github.com/datanews/tik-tok' target='_blank'>WNYC's Tik-Tok</a> to blur images using CSS.",
            img: 'tiktok.png',
            filterlist:"Interactives"
        },
        {
            id: 'netneutrality',
            link: 'https://gurmanbh.github.io/netneutrality-india',
            title: 'What choices are you making when you buy mobile Internet in India?',
            source: 'Classwork - Columbia Journalism School',
            category: 'words + code + design',
            desc: "India is the second biggest mobile phone market in the world and nearly 90 percent of the 20 percent of population has access to the Internet, accesses it through mobile. In light of the Net Neutrality debate, this news app helps you compare regular Internet plans with Facebook and WhatsApp only packs that are offered by certain telecom providers.<em><b>Tools: HTML/CSS, JavaScript (d3 + jQueryUI + Underscore.)</em></b>",
            img: 'nn.png',
            filterlist:"Interactives/Highlights/Data"
        },

        {
            id: 'snapchat',
            link: 'https://gurmanbh.github.io/snapchat-web',
            title: 'The Making of Snapchat',
            source: 'Classwork - Columbia Journalism School',
            category: 'words + code + design',
            desc: "Presented in a combination of snaps and text, this story uses Snapchat's aesthetics and interface to traces the journey of the brand towards a revenue based model.<em><b>Tools: HTML/CSS, JavaScript, PhotoShop</em></b>",
            img: 'snapchat-inside.png',
            filterlist:"Interactives"
        },

        {
            id: 'bangladesh',
            link: 'http://columbiajournalist.org/now-on-the-menu-bangladeshi-pride/',
            title: 'Now on the Menu: Bangladeshi Pride',
            source: 'The Columbia Journalist',
            category: 'words + data',
            desc: "There are 29 Bangladeshi restaurants in New York City. By contrast, there are 318 Indian restaurants. This story captures the rise of the Bangladeshi pride in the city’s restaurant industry. <em><b>Tools: MS Excel</em></b>",
            img: 'neerob.png',
            filterlist:"Data/Writing"
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
            "link":'https://www.youtube.com/watch?v=H1UBUmHpytU',
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
    $('.menu .options').on('click', function(){
            if ($('.menu').hasClass('show')){
            buffer = 10;  
            $('.menu').removeClass('show');
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
        if ($('#mobilemenu').hasClass('show')){
            $('#mobilemenu').removeClass('show');    
        } else
        {$('#mobilemenu').addClass('show')};
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
