function ativaScrollSuave(selector) {

    $(selector).click(function(event) {
        
        event.preventDefault();
        var target = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500)
    });
}

ativaScrollSuave('a[href*=panel-about]');
ativaScrollSuave('a[href*=panel-projects]'); 
ativaScrollSuave('a[href*=panel-sitemap]');
ativaScrollSuave('a[href*=panel-wireframe]');
ativaScrollSuave('a[href*=panel-style]');
ativaScrollSuave('a[href*=panel-visual]');
ativaScrollSuave('a[href*=panel-proto]');