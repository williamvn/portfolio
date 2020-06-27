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