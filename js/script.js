$(".typed").typewriter({
    speed: 60
});

$('#courses').click(function(e) {
    e.preventDefault();
    window.open('https://angular.io/start');
    window.open('https://www.pluralsight.com/courses/aspnetcore-mvc-efcore-bootstrap-angular-web');
    window.open('https://courses.edx.org/courses/course-v1:Microsoft+DEV315x+1T2019a/course/');
});

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

function GoBack(){
    window.history.back();
}