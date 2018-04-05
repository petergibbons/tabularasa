/*
* @package Hi5 Configurator
*/


// preload all images
//$("#page-wrapper2").Prefetch();


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

    var tableWidths = [ "18", "24", "30", "36", "42", "48", "60" ];
    var tableLengths = [ "42", "48", "60", "72", "84", "96", "120", "144", "168" ];
    var tableHeights = [ "18", "24", "29", "36", "42" ];



$(function() {

    // normalize boostrap select styles
        // remove .pull-left from bootstrap select
        $(".filter-option").removeClass('pull-left');

    // table model chooser
    $(".table-chooser-menu li a").click(function(){
        $("#table-chooser").text($(this).text());
        $("#table-chooser").val($(this).text());
    });

    // main product options
    $('.option-dropdown a').click(function(e) {
        
        var value = $(this).data("uid");
        var item_type = data[value].item_type;
        var model_code = data[value].model_code;
        var layer = $(this).data("layer");
        var thumb = $(this).find('img').attr('src');

            // enable button text for the next option
            // @@@ unsure we need this...  May just confound user
            //      
            // possibly user for requiring user to have selected a tabletop and hardware before adding an outlet type
            // $('#selected_' + layer + ', #selected_' + (layer+1)).removeClass('disabled');

        // change product image
        $('#prod-image-product_option'+layer).fadeOut(150, function() {
            $('#prod-image-product_option'+layer).attr('src', data[value].img).fadeIn(250);      
        });

        // change button thumbnail and label
        $('#selected_' + layer +' img').attr('src', thumb);
        $('#selected_' + layer +' .text').text(data[value].label);

        // update model info
        $("#option_" + layer).html( item_type + ": " + data[value].label);

        // update model info
        $(".model-code-" + layer).html( "[" + data[value].model_code + "]");
        // create global function to accept both power and table options
        $("#model-code").fadeIn();

        e.preventDefault();
    });

    // build table size selects
    for ( i = 0; i < tableWidths.length; i++) {
        $("#table-width").append('<option value="' + tableWidths[i] + '">' + tableWidths[i] +'"</option>');
    }

    for ( i = 0; i < tableLengths.length; i++) {
        $("#table-length").append('<option value="' + tableLengths[i] + '">' + tableLengths[i] +'"</option>');
    }

    for ( i = 0; i < tableHeights.length; i++) {
        $("#table-height").append('<option value="' + tableHeights[i] + '">' + tableHeights[i] +'"</option>');
    }

    for ( i = 0; i < 4; i++) {
        $("#outlet-count").append('<option value="' + i + '">' + i +'</option>');
    }



    // 'get a quote' button
    $('#buy').click(function(e) {
        // alert('It puts the quote in the bucket');
        $('.options').fadeOut('fast', function() {
            // Animation complete.
            $('#order-details').fadeIn();
            $(".options :button").attr("disabled", true);
            $("#prod-image-product_option_bg").fadeTo("slow", .443);
        });
        e.preventDefault();
    });

    // allow user to go back and edit table config
    $('#edit-config').click(function(e) {
        $('#order-details').fadeOut('fast', function() {
            $('.options').fadeIn();
            $(".options :button").attr("disabled", false); 
            $("#prod-image-product_option_bg").fadeTo("slow", 1);
        }); 
        e.preventDefault();
    });

 /* // moved to callback of select-box  
    $('#submit-quote').click(function(e) {
        alert('submit quote');
        // send email to client - all order information
        // send email to end user - info received x hours to contact
        // BAM!!!!

        $('#order-details').fadeOut(); 
        $('#order-details-thanks').fadeIn();
        e.preventDefault();

    });
*/
    
    // render a pdf for download
    $('#download-spec').click(function(e) {
        //alert('PDF');
        // copy all pertintent data to pdf div
        


        $( ".prod-wrapper" ).clone().appendTo( "#order-details-pdf" );
        $( "#order-details" ).clone().appendTo( "#order-details-pdf" );







                // helper code:
                         var doc = new jsPDF();
                         //var form = $( "#quote" );
                         //doc.addImage(imgData, 'JPEG',0,0,210,297);
                         
                        var name = "Name: " + $('[name="Name"]').val();
                        var company = "Company: " + $('[name="Company"]').val();
                        var citystate = "City/State: " + $('[name="City_State"]').val();
                        var phone = "Phone: " + $('[name="Phone"]').val();

                      //  var pdfText = "Name: " + name + "Company: " + company + "City/State: " + citystate + "Phone: " + Phone;
                        
                        doc.setFontSize(26);
                        doc.setTextColor(92, 76, 76);

                        doc.text(23, 81, name);
                        doc.text(23, 122, company);
                        doc.text(23, 162, citystate);
                        doc.text(23, 202, phone);

                       // doc.text(23, 81, pdfText);
                        
                         doc.save('test.pdf');






       /* var doc = new jsPDF();
        var specialElementHandlers = {
            '#editor': function (element, renderer) {
                return true;
            }
        };
        doc.fromHTML($('#order-details-pdf').html(), 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });
        doc.save('Hi5_Spec_Sheet.pdf');
        */
        e.preventDefault();








    });

    // show power box options    
    $("#outlet-count").change(function () {
        if ($(this).val() >= 1) {
            $("#power-boxes").show();
        } else {
            $("#power-boxes").hide();
        }
    });

    // get number of power boxes selected
    function getOutletCount(){
        var topCount = $('.added').length;
        var sideCount = $('.added').length;
        var totalCount = topCount + sideCount;
        return totalCount;
    }

    // Quote form validation
        $("#quote").validate({
            // Specify validation rules
            rules: {
                // The key name on the left side is the name attribute
                // of an input field. Validation rules are defined
                // on the right side
                Name: {
                    required: true,
                    minlength: 2
                },
                City_State: "required",
                Phone: {
                    required: true,
                    phoneUS: true
                },
                Email: {
                    required: true,
                    email: true
                },
                Table_Width: "required",
                Table_Height: "required",
                Table_Width: "required",
                Project: "required"
            },
            messages: {

                Phone: {
                   // required: "Required",
                    Phone: "Please enter a valid Phone Number"
                    
                }
            },
            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function(form) {
              //form.submit();
                alert('submit quote');
                // send email to client - all order information
                // send email to end user - info received x hours to contact
                // BAM!!!!

                $('#order-details').fadeOut(); 
                $('#order-details-thanks').fadeIn();
            }
        });


        // TOP POWER OPTIONS
            $('#top-outlet-type').on('changed.bs.select', function (e,clickedIndex,newValue,oldValue) {
                // do something...
                //alert("clicked: " + clickedIndex + " was: " + oldValue + " isnow: " + newValue);
                //printObject(event)
                //alert($('#top-outlet-type').val() + " : " + newValue);
                //alert("clicked: " + clickedIndex + " : " + newValue);

                
                if( clickedIndex == '0' ){
                    var layer = '5a'; // hardcode layer number
                    // show top left
                    if( newValue == false ){
                        var imageURL = "";
                        //alert('remove image');
                    }else {
                        var imageURL = "../dist/img/outlet-top-l.png";
                        //alert('add image ' + imageURL)
                    }
                    
                    
                    // update model info
                    var item_type = 'Power Top';
                    var model_code = '[PbL]';

                } else if ( clickedIndex == '1' ){
                    var layer = '5b'; // hardcode layer number
                    // show top middle
                    if( newValue == false ){
                        var imageURL = "";
                        //alert('remove image');
                    }else {
                        var imageURL = "../dist/img/outlet-top-m.png";
                        //alert('add image ' + imageURL)
                    }
                    var item_type = 'Power Top';
                    var model_code = '[PaL]';

                } else if ( clickedIndex == '2' ){
                    var layer = '5c'; // hardcode layer number
                    // show top right
                    if( newValue == false ){
                        var imageURL = "";
                        //alert('remove image');
                    }else {
                        var imageURL = "../dist/img/outlet-top-r.png";
                        //alert('add image ' + imageURL)
                    }
                    var item_type = 'Power Top';
                    var model_code = '[PfL]';
                }


               // UPDATE SCREEN

                // change product image
                $('#prod-image-product_option'+layer).fadeOut(150, function() {
                    $('#prod-image-product_option'+layer).attr('src', imageURL).fadeIn(250);      
                });

                // update model code
                $("#option_" + layer).html( item_type + " " + model_code);

            });

             // SIDE POWER OPTIONS
            $('#base-outlet-type').on('changed.bs.select', function (e,clickedIndex,newValue,oldValue) {

                var item_type = 'Power Side';
                if( clickedIndex == '0' ){
                    var layer = '6a'; // hardcode layer number
                    
                    // show top left
                    if( newValue == false ){  // clear selections
                        var imageURL = "";
                        var model_code = "";
                        var item_type = "";
                        //alert('remove image');
                    }else {
                        var imageURL = "../dist/img/outlet-side-l.png";
                        var model_code = "[PbL]";
                        //alert('add image ' + imageURL)
                    }
                    
                    

                } else if ( clickedIndex == '1' ){
                    var layer = '6b'; // hardcode layer number
                    // show top middle
                    if( newValue == false ){
                        var imageURL = "";
                        var model_code = "";
                        var item_type = "";
                        //alert('remove image');
                    }else {
                        var imageURL = "../dist/img/outlet-side-m.png";
                        var model_code = '[PaL]';
                        //alert('add image ' + imageURL)
                    }
                    
                    

                } else if ( clickedIndex == '2' ){
                    var layer = '6c'; // hardcode layer number
                    // show top right
                    if( newValue == false ){
                        var imageURL = "";
                        var item_type = "";
                        //alert('remove image');
                    } else {
                        var imageURL = "../dist/img/outlet-side-r.png";
                        var model_code = '[PfL]';
                        //alert('add image ' + imageURL)
                    }

                }

                
               // UPDATE SCREEN

                // change product image
                $('#prod-image-product_option'+layer).fadeOut(150, function() {
                    $('#prod-image-product_option'+layer).attr('src', imageURL).fadeIn(250);      
                });

                // update model code
                if( model_code ){
                    $("#model_code_" + layer).html( item_type + " " + model_code );
                }

            });


        // dev mode
        $(':button').removeClass('disabled');

        function printObject(o) {
            var out = '';
            for (var p in o) {
                out += '\n' + ':: ' + p + '(' + typeof(o[p]) + ') ::' + '\n' + o[p] + '\n';
            }
            console.log(out);
        }
    


    // traverse $data and output .options
    // aim to list out all option dropdowns
    // without having to hardcode all options

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

