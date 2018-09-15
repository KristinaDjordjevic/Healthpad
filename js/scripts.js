$('.navigation-element').click(function (e) {

    $(".navigation-element").removeClass( "navigation-element-active" );
    $(e.target).addClass( "navigation-element-active" );

    var page_title = $.trim($(e.target).text());
    var img_src;
    var video_src;
    var main_title;
    var main_subtitle;
    var main_text;
    var list = [];

    switch(page_title){
        case 'Heart health':
                img_src = "img/heart-1.jpg";
                video_src = "videos/test.mp4";
                main_title = "Health Facts";
                main_subtitle ="3 mins";
                main_text = "Watch our educational videos about health topics, conditions and treatments related to heart health.";
                list.push({img_src: "img/heart-2.jpg", title: "News & Updates", description: "2 mins"});
                list.push({img_src: "img/heart-3.jpg", title: "Busting Myths", description: "3 mins"});
                list.push({img_src: "img/heart-4.jpg", title: "Dos", description: "2 mins"});
                list.push({img_src: "img/heart-5.jpg", title: "Your Stories", description: "3 mins"});
            break;
        case 'Diabetes care':
                img_src = "img/diabetes/diabetes-1.jpg";
                video_src = "videos/test2.mp4";
                main_title = "Health Facts";
                main_subtitle ="3 mins";
                main_text = "Watch our educational videos about healthtopics, conditions and treatments related to Diabetes.";
                list.push({img_src: "img/diabetes/diabetes-2.jpg", title: "News & Updates", description: "2 mins"});
                list.push({img_src: "img/diabetes/diabetes-3.jpg", title: "Busting Myths", description: "3 mins"});
                list.push({img_src: "img/diabetes/diabetes-4.jpg", title: "Dos", description: "2 mins"});
                list.push({img_src: "img/diabetes/diabetes-5.jpg", title: "Your Stories", description: "3 mins"});
            break;
        case 'Rheumatoid Arthritis':
                img_src = "img/RA/ra-1.jpg";
                video_src = "videos/test.mp4";
                main_title = "Health Facts";
                main_subtitle ="3 mins";
                main_text = "Watch our educational videos about health topics, conditions and treatments related to Rheumatoid Arthritis.";
                list.push({img_src: "img/RA/ra-2.jpg", title: "News & Updates", description: "2 mins"});
                list.push({img_src: "img/RA/ra-3.jpg", title: "Busting Myths", description: "3 mins"});
                list.push({img_src: "img/RA/ra-4.jpg", title: "Dos", description: "2 mins"});
                list.push({img_src: "img/RA/ra-5.jpg", title: "Your Stories", description: "3 mins"});
            break;
        case 'Eczema':
                img_src = "img/eczema/eczema-1.jpg";
                video_src = "videos/test2.mp4";
                main_title = "Health Facts";
                main_subtitle ="3 mins";
                main_text = "Watch our educational videos about health topics, conditions and treatments related to Eczema.";
                list.push({img_src: "img/eczema/eczema-2.jpg", title: "News & Updates", description: "2 mins"});
                list.push({img_src: "img/eczema/eczema-3.jpg", title: "Busting Myths", description: "3 mins"});
                list.push({img_src: "img/eczema/eczema-4.jpg", title: "Dos", description: "2 mins"});
                list.push({img_src: "img/eczema/eczema-5.jpg", title: "Your Stories", description: "3 mins"});
            break;
        case 'Women’s Health':
                img_src = "img/WH/women-1.jpg";
                video_src = "videos/test.mp4";
                main_title = "Health Facts";
                main_subtitle ="3 mins";
                main_text = "Watch our educational videos about health topics, conditions and treatments related to women’s health.";
                list.push({img_src: "img/WH/women-2.jpg", title: "News & Updates", description: "2 mins"});
                list.push({img_src: "img/WH/women-3.jpg", title: "Busting Myths", description: "3 mins"});
                list.push({img_src: "img/WH/women-4.jpg", title: "Dos", description: "2 mins"});
                list.push({img_src: "img/WH/women-5.jpg", title: "Your Stories", description: "3 mins"});
            break;
        case 'Flu Shot':
                img_src = "img/flu/flu-1.jpg";
                video_src = "videos/test2.mp4";
                main_title = "Health Facts";
                main_subtitle ="3 mins";
                main_text = "Watch our educational videos about health topics, conditions and treatments related to flu shots.";
                list.push({img_src: "img/flu/flu-2.jpg", title: "News & Updates", description: "2 mins"});
                list.push({img_src: "img/flu/flu-3.jpg", title: "Busting Myths", description: "3 mins"});
                list.push({img_src: "img/flu/flu-4.jpg", title: "Dos", description: "2 mins"});
                list.push({img_src: "img/flu/flu-5.jpg", title: "Your Stories", description: "3 mins"});
            break;
        default:
                img_src = "";
                video_src = "";
                main_title = "";
                main_subtitle ="";
                main_text = "";
                list.push({img_src: "", title: "", description: ""});
                list.push({img_src: "", title: "", description: ""});
                list.push({img_src: "", title: "", description: ""});
                list.push({img_src: "", title: "", description: ""});
            break;
    }

    $("#page-title").text(page_title);
    $('#main-image').attr("src", img_src);
    $('#main_title').text(main_title);
    $('#main_subtitle').text(main_subtitle);
    $('#main_text').text(main_text);

    $('#main-video source').attr('src', video_src);
    $('#main-video')[0].load();

    $('#list-1 img').attr("src", list[0].img_src);
    $("#list-1 p").text(list[0].title);
    $("#list-1 span").text(list[0].description);

    $('#list-2 img').attr("src", list[1].img_src);
    $("#list-2 p").text(list[1].title);
    $("#list-2 span").text(list[1].description);

    $('#list-3 img').attr("src", list[2].img_src);
    $("#list-3 p").text(list[2].title);
    $("#list-3 span").text(list[2].description);

    $('#list-4 img').attr("src", list[3].img_src);
    $("#list-4 p").text(list[3].title);
    $("#list-4 span").text(list[3].description);

});

$("#main-image").click(function() {
    $('#main-video').get(0).play();
    var elem = $('#main-video').get(0);
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
});