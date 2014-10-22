$(document).ready(function(){       
    // Routing
    Path.map("#index").to(function(){
        $.ajax({
            url: 'dat/desktop/main.json',
            dataType: "json",
            success: function(data) {
                $.get('./tpl/desktop/main.html', function(template) {
                    $('#main').html(Mustache.render(template, data));
                });
            }
        });
    });
    Path.map("#blog").to(function(){
        $.ajax({
            url: './dat/desktop/blog.json',
            dataType: "json",
            success: function(data) {
                $.get('./tpl/desktop/blog.html', function(template) {
                    $('#main').html(Mustache.render(template, data));
                });
            }
        });
    });
    Path.map("#about").to(function(){
        $.ajax({
            url: './dat/desktop/about.json',
            dataType: "json",
            success: function(data) {
                $.get('./tpl/desktop/about.html', function(template) {
                    $('#main').html(Mustache.render(template, data));
                });
            }
        });
    });
    Path.map("#portfolio").to(function(){
        $.ajax({
            url: './dat/desktop/portfolio.json',
            dataType: "json",
            success: function(data) {
                $.get('./tpl/desktop/portfolio.html', function(template) {
                    $('#main').html(Mustache.render(template, data));
                });
            }
        });
    });
    Path.map("#services").to(function(){
        $.ajax({
            url: './dat/desktop/services.json',
            dataType: "json",
            success: function(data) {
                $.get('./tpl/desktop/services.html', function(template) {
                    $('#main').html(Mustache.render(template, data));
                });
            }
        });
    });
    Path.map("#contact").to(function(){
        $.ajax({
            url: './dat/desktop/contact.json',
            dataType: "json",
            success: function(data) {
                $.get('./tpl/desktop/contact.html', function(template) {
                    $('#main').html(Mustache.render(template, data));
                });
            }
        });
    });

    // Listen to routing
    Path.listen();

    // If index page
    if(!Path.routes.current){
        $.ajax({
            url: './dat/desktop/main.json',
            dataType: "json",
            success: function(data) {
                $.get('./tpl/desktop/main.html', function(template) {
                    $('#main').html(Mustache.render(template, data));
                });
            }
        });
    }
});