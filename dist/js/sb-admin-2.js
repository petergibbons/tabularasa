/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

// preload all images
//$("#page-wrapper2").Prefetch();

$(function() {
  //  $('#side-menu').metisMenu();
  
  // clean up local storage values
    localStorage.removeItem('cost_1');
    localStorage.removeItem('cost_2');
    localStorage.removeItem('cost_3');
    localStorage.removeItem('option_1');
    localStorage.removeItem('option_2');
    localStorage.removeItem('option_3');
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper2").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }

    


     // Configurator

    var data = {
        "1" : { img: "../dist/img/Laminate_01.png", thumb: "../dist/img/thumbs/Laminate_01_", label: "Dove Grey Laminate", cost: 55 },
        "2" : { img: "../dist/img/Laminate_02.png", thumb: "../dist/img/thumbs/Laminate_02_", label: "Saddle Oak Laminate", cost: 65 },
        "3" : { img: "../dist/img/Laminate_03.png", thumb: "../dist/img/thumbs/Laminate_03_", label: "Asian Night Laminate", cost: 45 },
        "4" : { img: "../dist/img/Laminate_04.png", thumb: "../dist/img/thumbs/Laminate_04_", label: "Beigewood Laminate", cost: 57 },
        "5" : { img: "../dist/img/Laminate_05.png", thumb: "../dist/img/thumbs/Laminate_05_", label: "Zebrawood Laminate", cost: 43 },
        "6" : { img: "../dist/img/Laminate_06.png", thumb: "../dist/img/thumbs/Laminate_06_", label: "Vapor Strandz Laminate", cost: 85 },
        "7" : { img: "../dist/img/Laminate_07.png", thumb: "../dist/img/thumbs/Laminate_07_", label: "Grey Butcher Laminate", cost: 775 },
        "8" : { img: "../dist/img/Laminate_08.png", thumb: "../dist/img/thumbs/Laminate_08_", label: "Amber Strandz Laminate", cost: 75 },
        "9" : { img: "../dist/img/Laminate_09.png", thumb: "../dist/img/thumbs/Laminate_09_", label: "Skyline Laminate", cost: 95 },
        "10" : { img: "../dist/img/Laminate_00.png", thumb: "../dist/img/thumbs/Laminate_00_", label: "Xanadu Laminate", cost: 25 },

        "11" : { img: "../dist/img/Hardware-Color_09.png", thumb: "../dist/img/thumbs/", label: "Oh So Blue Hardware", cost: 55 },
        "12" : { img: "../dist/img/Hardware-Color_08.png", thumb: "../dist/img/thumbs/", label: "Indian Turquoise Hardware", cost: 59 },
        "13" : { img: "../dist/img/Hardware-Color_07.png", thumb: "../dist/img/thumbs/", label: "Destroyer Hardware", cost: 56 },
        "14" : { img: "../dist/img/Hardware-Color_06.png", thumb: "../dist/img/thumbs/", label: "Flag Red Hardware", cost: 52 },
        "15" : { img: "../dist/img/Hardware-Color_05.png", thumb: "../dist/img/thumbs/", label: "Graphite Metallic Hardware", cost: 65 },
        "16" : { img: "../dist/img/Hardware-Color_04.png", thumb: "../dist/img/thumbs/", label: "Sassy Pink Hardware", cost: 95 },
        "17" : { img: "../dist/img/Hardware-Color_03.png", thumb: "../dist/img/thumbs/", label: "Designer White Hardware", cost: 25 },
        "18" : { img: "../dist/img/Hardware-Color_02.png", thumb: "../dist/img/thumbs/", label: "Black Hardware", cost: 53 },
        "19" : { img: "../dist/img/Hardware-Color_01.png", thumb: "../dist/img/thumbs/", label: "Dazzling Pink Hardware", cost: 85 },
        "20" : { img: "../dist/img/Hardware-Color_00.png", thumb: "../dist/img/thumbs/", label: "Sunshine Yellow Hardware", cost: 75 },

        "21" : { img: "../dist/img/ECAColor_01.png", thumb: "../dist/img/thumbs/", label: "Silver Outlet", cost: 5 },
        "22" : { img: "../dist/img/ECAColor_02.png", thumb: "../dist/img/thumbs/", label: "Black Outlet", cost: 5 },
        "23" : { img: "../dist/img/ECAColor_03.png", thumb: "../dist/img/thumbs/", label: "White Outlet", cost: 5 },
    };

    $(".buy-wrapper").css("display", "none");
    $('.dropdown-menu a').click(function(e) {
        var value = $(this).data("uid");
        var layer = $(this).data("layer");
        var thumb = $(this).find('img').attr('src');
        var this_cost = parseInt( data[value].cost, 10);

        // enable button text for this option and next
        $('#selected_' + layer + ', #selected_' + (layer+1)).removeClass('disabled');

        // fade in price if all options done dundee

        if( layer == 3 && $(".buy-wrapper").is(":hidden")) {
            $(".buy-wrapper").fadeIn()
        }

        // change product image
        $('#prod-image-product_option' + layer).fadeOut(250, function() {
            $('#prod-image-product_option' + layer).attr('src', data[value].img).fadeIn(250);      
        });

        // change button thumbnail and label
        $('#selected_' + layer + ' img' ).attr('src', thumb);
        $('#selected_' + layer + ' .text').text(data[value].label);

        // configure price
        $('#cost_' + layer).text(this_cost);
        
        localStorage.setItem('option_'+layer, data[value].label); // save option value 
        localStorage.setItem('cost_'+layer, this_cost); // save cost

        var realcost_1 = +localStorage.getItem('cost_1');
        var realcost_2 = +localStorage.getItem('cost_2');
        var realcost_3 = +localStorage.getItem('cost_3');
        var option_1 = +localStorage.getItem('option_1');
        var option_2 = +localStorage.getItem('option_2');
        var option_3 = +localStorage.getItem('option_3'); 
        var total_cost = realcost_1 + realcost_2 + realcost_3;

        $('#total_cost').html("<sup>$</sup>" + total_cost);
        $('#option_' + layer).text(data[value].label + ' : ');

        e.preventDefault();
    });
    
   // if( $(".buy-wrapper").is(":visible")) {
        setInterval(function () { 
            document.getElementById("buy").style.background= '#'+Math.floor(Math.random()*16777215).toString(16);
            //document.body.style.background= '#'+Math.floor(Math.random()*16777215).toString(16);  
        }, 2500);
    //}


});
