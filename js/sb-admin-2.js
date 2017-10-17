
// preload all images
//$("#page-wrapper2").Prefetch();

$(function() {
    $('#side-menu').metisMenu();
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

    // preload images manually for now
        var imageList = [
            "../dist/img/bg.png",
            "../dist/img/Laminate_01.png",
            "../dist/img/Laminate_02.png",
            "../dist/img/Laminate_03.png",
            "../dist/img/Laminate_04.png",
            "../dist/img/Laminate_05.png",
            "../dist/img/Laminate_06.png",
            "../dist/img/Laminate_07.png",
            "../dist/img/Laminate_08.png",
            "../dist/img/Laminate_09.png",
            "../dist/img/Laminate_00.png",
            "../dist/img/Hardware-Color_09.png",
            "../dist/img/Hardware-Color_08.png",
            "../dist/img/Hardware-Color_07.png",
            "../dist/img/Hardware-Color_06.png",
            "../dist/img/Hardware-Color_05.png",
            "../dist/img/Hardware-Color_04.png",
            "../dist/img/Hardware-Color_03.png",
            "../dist/img/Hardware-Color_02.png",
            "../dist/img/Hardware-Color_01.png",
            "../dist/img/Hardware-Color_00.png",
            "../dist/img/ECAColor_01.png",
            "../dist/img/ECAColor_02.png",
            "../dist/img/ECAColor_03.png",
        ];


    for( var i = 0; i < imageList.length; i++ ) {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }





     // Configurator

    var data = {
        "1" : { img: "../dist/img/Laminate_01.png", thumb: "../dist/img/thumbs/Laminate_01_", label: "Dove Grey Laminate" },
        "2" : { img: "../dist/img/Laminate_02.png", thumb: "../dist/img/thumbs/Laminate_02_", label: "Saddle Oak Laminate" },
        "3" : { img: "../dist/img/Laminate_03.png", thumb: "../dist/img/thumbs/Laminate_03_", label: "Asian Night Laminate" },
        "4" : { img: "../dist/img/Laminate_04.png", thumb: "../dist/img/thumbs/Laminate_04_", label: "Beigewood Laminate" },
        "5" : { img: "../dist/img/Laminate_05.png", thumb: "../dist/img/thumbs/Laminate_05_", label: "Zebrawood Laminate" },
        "6" : { img: "../dist/img/Laminate_06.png", thumb: "../dist/img/thumbs/Laminate_06_", label: "Vapor Strandz Laminate" },
        "7" : { img: "../dist/img/Laminate_07.png", thumb: "../dist/img/thumbs/Laminate_07_", label: "Grey Butcher Laminate" },
        "8" : { img: "../dist/img/Laminate_08.png", thumb: "../dist/img/thumbs/Laminate_08_", label: "Amber Strandz Laminate" },
        "9" : { img: "../dist/img/Laminate_09.png", thumb: "../dist/img/thumbs/Laminate_09_", label: "Skyline Laminate" },
        "10" : { img: "../dist/img/Laminate_00.png", thumb: "../dist/img/thumbs/Laminate_00_", label: "Xanadu Laminate" },

        "11" : { img: "../dist/img/Hardware-Color_09.png", thumb: "../dist/img/thumbs/", label: "Oh So Blue Hardware" },
        "12" : { img: "../dist/img/Hardware-Color_08.png", thumb: "../dist/img/thumbs/", label: "Indian Turquois Hardware" },
        "13" : { img: "../dist/img/Hardware-Color_07.png", thumb: "../dist/img/thumbs/", label: "Destroyer Hardware" },
        "14" : { img: "../dist/img/Hardware-Color_06.png", thumb: "../dist/img/thumbs/", label: "Flag Red Hardware" },
        "15" : { img: "../dist/img/Hardware-Color_05.png", thumb: "../dist/img/thumbs/", label: "Graphite Metallic Hardware" },
        "16" : { img: "../dist/img/Hardware-Color_04.png", thumb: "../dist/img/thumbs/", label: "Sassy Pink Hardware" },
        "17" : { img: "../dist/img/Hardware-Color_03.png", thumb: "../dist/img/thumbs/", label: "Designer White Hardware" },
        "18" : { img: "../dist/img/Hardware-Color_02.png", thumb: "../dist/img/thumbs/", label: "Black Hardware" },
        "19" : { img: "../dist/img/Hardware-Color_01.png", thumb: "../dist/img/thumbs/", label: "Dazzling Pink Hardware" },
        "20" : { img: "../dist/img/Hardware-Color_00.png", thumb: "../dist/img/thumbs/", label: "Sunshine Yellow Hardware" },

        "21" : { img: "../dist/img/ECAColor_01.png", thumb: "../dist/img/thumbs/", label: "Silver Outlet" },
        "22" : { img: "../dist/img/ECAColor_02.png", thumb: "../dist/img/thumbs/", label: "Black Outlet" },
        "23" : { img: "../dist/img/ECAColor_03.png", thumb: "../dist/img/thumbs/", label: "White Outlet" },
    };

    
    $('.dropdown-menu a').click(function(e) {
        var value = $(this).data("uid");
        var layer = $(this).data("layer");
        var thumb = $(this).find('img').attr('src');

        // enable button text for this option and next
        //$('#selected_' + layer + ' span, #selected_' + (layer+1) + ' span').removeClass('disabled');
        $('#selected_' + layer + ', #selected_' + (layer+1)).removeClass('disabled');

        // change product image
        $('#prod-image-product_option'+layer).fadeOut(250, function() {
            $('#prod-image-product_option'+layer).attr('src', data[value].img).fadeIn(250);      
        });

        // change button thumbnail and label
        $('#selected_' + layer +' img' ).attr('src', thumb);
        $('#selected_' + layer +' .text').text(data[value].label);

        e.preventDefault();
    });


});






