/*
* @package Hi5 Configurator
*/


// preload all images
//$("#page-wrapper2").Prefetch();

     // Configurator

    var data = {
        "1" : { img: "dist/img/Laminate_01.png", thumb: "dist/img/thumbs/Laminate_01_dove-grey.jpg", label: "Dove Grey", item_type: "Laminate", model_code: "DB-38" },
        "2" : { img: "dist/img/Laminate_02.png", thumb: "dist/img/thumbs/Laminate_02_saddle-oak.jpg", label: "Saddle Oak", item_type: "Laminate", model_code: "SSB-38" },
        "3" : { img: "dist/img/Laminate_03.png", thumb: "dist/img/thumbs/Laminate_03_asian-night.jpg", label: "Asian Night", item_type: "Laminate", model_code: "BVY-NU" },
        "4" : { img: "dist/img/Laminate_04.png", thumb: "dist/img/thumbs/Laminate_04_beigewood.jpg", label: "Beigewood", item_type: "Laminate", model_code: "NK-JD" },
        "5" : { img: "dist/img/Laminate_05.png", thumb: "dist/img/thumbs/Laminate_05_zebrawood.jpg", label: "Zebrawood", item_type: "Laminate", model_code: "237-KK" },
        "6" : { img: "dist/img/Laminate_06.png", thumb: "dist/img/thumbs/Laminate_06_vapor-strandz.jpg", label: "Vapor Strandz", item_type: "Laminate", model_code: "21334" },
        "7" : { img: "dist/img/Laminate_07.png", thumb: "dist/img/thumbs/Laminate_07_grey_butcher.jpg", label: "Grey Butcher", item_type: "Laminate", model_code: "333" },
        "8" : { img: "dist/img/Laminate_08.png", thumb: "dist/img/thumbs/Laminate_08_amber-strandz.jpg", label: "Amber Strandz", item_type: "Laminate", model_code: "654" },
        "9" : { img: "dist/img/Laminate_09.png", thumb: "dist/img/thumbs/Laminate_09_skyline_walnut.jpg", label: "Skyline", item_type: "Laminate", model_code: "RB622" },
        "10" : { img: "dist/img/Laminate_00.png", thumb: "dist/img/thumbs/Laminate_00_xanadu.jpg", label: "Xanadu", item_type: "Laminate", model_code: "JR53757" },

        "11" : { img: "dist/img/Hardware-Color_09.png", thumb: "dist/img/thumbs/oh-so-blue.jpg", label: "Oh So Blue", item_type: "Bracket", model_code: "OIY-0091" },
        "12" : { img: "dist/img/Hardware-Color_08.png", thumb: "dist/img/thumbs/indian-turquoise.jpg", label: "Indian Turquoise", item_type: "Bracket", model_code: "HCOE-42" },
        "13" : { img: "dist/img/Hardware-Color_07.png", thumb: "dist/img/thumbs/destroyer-blue.jpg", label: "Destroyer", item_type: "Bracket", model_code: "NEL-22" },
        "14" : { img: "dist/img/Hardware-Color_06.png", thumb: "dist/img/thumbs/flag-red.jpg", label: "Flag Red", item_type: "Bracket", model_code: "L6-0P" },
        "15" : { img: "dist/img/Hardware-Color_05.png", thumb: "dist/img/thumbs/graphite-metallic.jpg", label: "Graphite Metallic", item_type: "Bracket", model_code: "QNE-2" },
        "16" : { img: "dist/img/Hardware-Color_04.png", thumb: "dist/img/thumbs/sassy-pink.jpg", label: "Sassy Pink", item_type: "Bracket", model_code: "48-GJK" },
        "17" : { img: "dist/img/Hardware-Color_03.png", thumb: "dist/img/thumbs/designer-white.jpg", label: "Designer White", item_type: "Bracket", model_code: "09-23" },
        "18" : { img: "dist/img/Hardware-Color_02.png", thumb: "dist/img/thumbs/black.jpg", label: "Black", item_type: "Bracket", model_code: "34-765" },
        "19" : { img: "dist/img/Hardware-Color_01.png", thumb: "dist/img/thumbs/dazzling-pink.jpg", label: "Dazzling Pink", item_type: "Bracket", model_code: "33-354" },
        "20" : { img: "dist/img/Hardware-Color_00.png", thumb: "dist/img/thumbs/sunshine-yellow.jpg", label: "Sunshine Yellow", item_type: "Bracket", model_code: "LWE-11" },

        "21" : { img: "dist/img/ECAColor_01.png", thumb: "dist/img/thumbs/ECAColor_01_silver.jpg", label: "Silver", item_type: "Power Location", model_code: "PK4" },
        "22" : { img: "dist/img/ECAColor_02.png", thumb: "dist/img/thumbs/ECAColor_02_black.jpg", label: "Black", item_type: "Power Location", model_code: "PK3" },
        "23" : { img: "dist/img/ECAColor_03.png", thumb: "dist/img/thumbs/ECAColor_03_white.jpg", label: "White", item_type: "Power Location", model_code: "PK93" },

        "24" : { img: "dist/img/ECAColor_03.png", thumb: "dist/img/thumbs/ECAColor_03_white.jpg", label: "Placement A", item_type: "Power Color", model_code: "PC2" },
        "25" : { img: "dist/img/ECAColor_03.png", thumb: "dist/img/thumbs/ECAColor_03_white.jpg", label: "Placement B", item_type: "Power Color", model_code: "PC88" },
        "26" : { img: "dist/img/ECAColor_03.png", thumb: "dist/img/thumbs/ECAColor_03_white.jpg", label: "Placement C", item_type: "Power Color", model_code: "PC499" },
    };


$(function() {
  
    $('.option-dropdown a').click(function(e) {
        
        var value = $(this).data("uid");
        var item_type = data[value].item_type;
        var model_code = data[value].model_code;
        var layer = $(this).data("layer");
        var thumb = $(this).find('img').attr('src');

        
        // enable button text for the next option
        $('#selected_' + layer + ', #selected_' + (layer+1)).removeClass('disabled');

        // change product image
        $('#prod-image-product_option'+layer).fadeOut(150, function() {
            $('#prod-image-product_option'+layer).attr('src', data[value].img).fadeIn(250);      
        });

        // change button thumbnail and label
        $('#selected_' + layer +' img' ).attr('src', thumb);
        $('#selected_' + layer +' .text').text(data[value].label);

        // update model info
        $("#option_" + layer).html( item_type + ": " + data[value].label);

        // update model info
        $("#model-code").append( "[" + data[value].model_code + "]");

        e.preventDefault();
    });

    $('#buy').click(function(e) {

        // alert('It puts the quote in the bucket');
        $('.options').fadeOut();
            
        $('#order_details').fadeIn();
            
        $(".options :button").attr("disabled", true);

        $("#prod-image-product_option_bg").fadeTo("slow", .443);        

        // Save image to new div???
        //     html2canvas($("#prod"), {
        //     onrendered: function(canvas) {
        //         theCanvas = canvas;

        //         canvas.toBlob(function(blob) {
        //             saveAs(blob, "Dashboard.png"); 
        //         });
        //     }
        
       // });

        e.preventDefault();

    });


    $('#edit-config').click(function(e) {
        $('.options').fadeIn();
        $(".options :button").attr("disabled", false); 
        $('#order_details').fadeOut();  
        $("#prod-image-product_option_bg").fadeTo("slow", 1);
        e.preventDefault();
    });

    $('#submit-quote').click(function(e) {
        alert('submit quote');
        // send email to client - all order information
        // send email to end user - info received x hours to contact
        // BAM!!!!

        $('#order_details').html("<h3>Thank for your submission.  All quotes are emailed within 24-48 hours.  To contact customer service, please call 816-774-4050. <a href='index.html'>Configure another table</a></h3>");
    });




    // traverse $data and output

    var result = "";

    function buildProductDropdowns(key,value) { 
       
        result = key + " : " +
            value.label + " [ thumb: " +
            value.thumb + " ] [ img: " + 
            value.img + " ]<br>"
        ;
        // $("#debug").append( result );

    }

    Object.entries(data).forEach(
        ([key, value]) => buildProductDropdowns(key,value)
    );


   
});






