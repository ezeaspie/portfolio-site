
$(document).on('click', '.pageup', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0,
    }, 500);
});

$(document).on('mouseover', '.pageup', function (event) {
    event.preventDefault();
    $(this).addClass("animate");
    console.log(this);
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