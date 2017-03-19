$(function () {
    $(".parallax").parallax();

    $("a.tooltip")
        .mouseover(function() {
            var texto = $(this).attr("data-tooltip");
            //pego elemento clicado com o this e depois procuro o filho com a classe text_tooltip e inserindo texto
            $(this).children(".text_tooltip").html(texto); 
            $(this).children(".text_tooltip").css("opacity", "1");
        });
    $("a.tooltip")
        .mouseout(function() {
            $(this).children(".text_tooltip").css("opacity", "0");
        });

    $(".text_tooltip")
        .mouseover(function(e) {
            e.stopPropagation(); // para a execução do tooltip, para o comportamento 
        });

    var page = $("body");
    $("a.tooltip")
        .click(function() {
            page.animate({// baixa a navegação com o offset().top com velocidade de 500
                    scrollTop: $($.attr(this, "href")).offset().top
                },
                500);
            return false;
        });

    $("nav")
        .mouseover(function() {
            $(".nav-itens").addClass("nav-show");
        });

    $("nav")
        .mouseout(function() {
            $(".nav-itens").removeClass("nav-show");
        });


    $(document)
    .scroll(function () {
        var topWindow = $(window).scrollTop();
        if (topWindow > 60) {
            $("header").addClass("header_fixed");
        } else {
            $("header").removeClass("header_fixed");
        }

    });

});


