$(".typed").typewriter({
    speed: 60
});

var lastScrollTop = 0;
$(document).on("scroll", function(){
    console.log("scrolling...")
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop){
        console.log("Scrolling Down");
    }
    else{
        console.log("Scrolling Up");
    }
    lastScrollTop = st <= 0 ? 0 : st;
});
var activeSection = $('.section.active');
var activeSlide = activeSection.find('.slide.active');
console.log(activeSlide);

window.addEventListener('popstate', function(e){
    sectionName = e.srcElement.$currentElement[0].baseURI.split("#")[1];
    navbar = $('#navbar');
    if(sectionName == "knowledgesLink" || sectionName == "experienceLink" || sectionName == "projectsLink"){
        console.log(sectionName);
        navbar.css("background-color", "black");
    }
    else{
        console.log("No navbar color");
        navbar.css("background", "none");
    }
});
