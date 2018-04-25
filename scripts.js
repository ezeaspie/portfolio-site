
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