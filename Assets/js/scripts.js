//Scroll Suave
let navBtn = $('.nav-item');

let bannerSection = $('#mainSlider');
let aboutSection = $('#about-area');
let techSection = $('#tech-area');
let projectSection = $('#projetos-area');
let contactSection = $('#contact-area');

let scrollTo = '';

$(navBtn).click(function() {
    let btnId = $(this).attr('id');

    console.log(btnId);

    if(btnId == 'sobre-menu') {
        scrollTo = aboutSection;
    } else if(btnId == 'tecnologias-menu') {
        scrollTo = techSection;
    } else if(btnId == 'projetos-menu') {
        scrollTo = projectSection;
    } else if(btnId == 'contato-menu') {
        scrollTo = contactSection;
    } else {
        scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500);

});