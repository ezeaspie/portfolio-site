
$(document).on('click', '.pageup', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0,
    }, 500);
});

$(document).on('mouseover', '.pageup', function (event) {
    event.preventDefault();
    $(this).addClass("animate");
});

$(document).on('mouseleave', '.pageup', function (event) {
    event.preventDefault();
    $(this).removeClass("animate");
    console.log(this);
});

//Scroll animations

var $animation_elements = $('.animation-element');
var $window = $(window);

$window.trigger('scroll');

$window.on('scroll', check_if_in_view);
$window.on('scroll resize', check_if_in_view);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        }
    });
}

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

//Project Carousel

const projectList = [];

const projectFactory = (name,desc,imageUrl,url,toolsArray) => {
    return {name, desc, imageUrl, url, toolsArray};
}

const generateProjectSection = (config, id) => {
    let html = `
            <div class="project-main" id="project${id}" style="background: url('${config.imageUrl}'); background-size:120% 100%; background-position: 10% 0;">
                <div class="project-overlay"></div>
                <a href="${config.url}">
                    <h3 class="projectTitle">${config.name}</h3>
                    <h4 class="projectDesc">${config.desc}</h4>
                </a>
            </div>
    `

    return html;
}

projectList.push(projectFactory("BattleShip", "2 player turn-based battleship game built using Vanilla JavaScript", "./media/battleship.jpg", "https://ezeaspie.github.io/battleship-game/", ["HTML","JavaScript", "CSS"]));
projectList.push(projectFactory("Budget Manager", "A small app that tracks and stores income, expense, and surplus finance data.", "./media/budget.jpg", "https://ezeaspie.github.io/budget-app/", ["HTML", "JavaScript", "CSS", "LocalStorage"]));
projectList.push(projectFactory("To-Do List", "Manage collections of tasks. Add, delete, and give priority to tasks in a neat organized module.", "./media/todo.jpg","https://ezeaspie.github.io/todo-app/", ["HTML", "JavaScript", "CSS"]));
projectList.push(projectFactory("Aquarium Hub", "A fully responsive homepage mockup for a site centered around aquarium keeping.", "./media/aquarium.png", "https://ezeaspie.github.io/aquarium-site/", ["HTML", "JS", "Responsive Design", "CSS"]));


let carouselHTML = '';

let baseHTML = `<div class="carousel">`
for (let i = 0; i < projectList.length; i++) {
    baseHTML += generateProjectSection(projectList[i], i);
}

baseHTML += "</div>";

$("#projects").append(baseHTML);
