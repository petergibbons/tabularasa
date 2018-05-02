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

    var tableType = "Union 2.0";


$(function() {

    
    // table model chooser dropdown
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
        $("#finish_name_" + layer).val( $(this).text() ); // hidden form fields

        // update model info on pdf
        $("#pdf_option_" + layer).html( item_type + ": " + data[value].label);

        // update model info
        $(".model-code-" + layer).html( "[" + data[value].model_code + "]");
        // create global function to accept both power and table options
        $("#model-code").fadeIn();

        e.preventDefault();
    });

            // normalize boostrap select styles on loaded event
          

            $('#top-outlet-type').on('loaded.bs.select', function () {
                    // remove .pull-left from bootstrap select
                    $(".filter-option").removeClass('pull-left');

                    // replace caret with cool kids one
                    $(".bs-caret").html('<span class="glyphicon glyphicon-chevron-down"></span>');

                    //$(".caret").addClass("glyphicon glyphicon-chevron-down faux-chevron");
                    //$(".bs-caret .caret").removeClass("caret");
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
                        var model_code = "";
                        //alert('remove image');
                    }else {
                        var imageURL = "dist/img/outlet-top-l.png";
                        var model_code = '[PbL]';
                        //alert('add image ' + imageURL)
                    }
                    
                    
                    // update model info
                    var item_type = 'Power Top';
                    


                } else if ( clickedIndex == '1' ){
                    var layer = '5b'; // hardcode layer number
                    // show top middle
                    if( newValue == false ){
                        var imageURL = "";
                        var model_code = "";
                        //alert('remove image');
                    }else {
                        var imageURL = "dist/img/outlet-top-m.png";
                        var model_code = '[PaL]';
                        //alert('add image ' + imageURL)
                    }
                    var item_type = 'Power Top';
                    

                } else if ( clickedIndex == '2' ){
                    var layer = '5c'; // hardcode layer number
                    // show top right
                    if( newValue == false ){
                        var imageURL = "";
                        var model_code = "";
                        //alert('remove image');
                    }else {
                        var imageURL = "dist/img/outlet-top-r.png";
                        var model_code = '[PfL]';
                        //alert('add image ' + imageURL)
                    }
                    var item_type = 'Power Top';
                    
                }


               // UPDATE SCREEN

                // change product image
                $('#prod-image-product_option'+layer).fadeOut(150, function() {
                    $('#prod-image-product_option'+layer).attr('src', imageURL).fadeIn(250);      
                });

                // update model code
                $(".model-code-" + layer).html( model_code );
                $("#model-code").fadeIn();

                //$(".model-code-" + layer).html( item_type + " " + model_code);

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
                        var imageURL = "dist/img/outlet-side-l.png";
                        var model_code = "[PxH]";
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
                        var imageURL = "dist/img/outlet-side-m.png";
                        var model_code = '[PyH]';
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
                        var imageURL = "dist/img/outlet-side-r.png";
                        var model_code = '[PzH]';
                        //alert('add image ' + imageURL)
                    }

                }

                
               // UPDATE SCREEN

                // change product image
                $('#prod-image-product_option'+layer).fadeOut(150, function() {
                    $('#prod-image-product_option'+layer).attr('src', imageURL).fadeIn(250);      
                });

                // update model code
                
                $(".model-code-" + layer).html( model_code );

            });






    // build table size selects
    // change options above
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

    function getModelCode() {
        var m1 = $(".model-code-1").text();
        var m2 = $(".model-code-2").text();
        var m3 = $(".model-code-3").text();
        var m4 = $(".model-code-4").text();
        var m5a = $(".model-code-5a").text();
        var m5b = $(".model-code-5b").text();
        var m5c = $(".model-code-5c").text();
        var m6a = $(".model-code-6a").text();
        var m6b = $(".model-code-6b").text();
        var m6c = $(".model-code-6c").text();
        var modelCode = m1 + m2 + m3 + m4 + m5a + m5b + m5c + m6a + m6b + m6c; 
        return modelCode;
        
    }
    
    // render a pdf for download
    $('#download-spec').click(function(e) {
        

        // jsPDF:
        var doc = new jsPDF('p', 'pt','a4',true);

        var imgDataLogo = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkyMTlGRTY4Q0Y3MzExRTFCQTZGOTUzRDhFQUI5MzhBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkyMTlGRTY5Q0Y3MzExRTFCQTZGOTUzRDhFQUI5MzhBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTIxOUZFNjZDRjczMTFFMUJBNkY5NTNEOEVBQjkzOEEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTIxOUZFNjdDRjczMTFFMUJBNkY5NTNEOEVBQjkzOEEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEB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"
         
        var name = "Name: " + $('[name="Name"]').val();
        var email = "Email: " + $('[name="Email"]').val();
        var company = "Company: " + $('[name="Company"]').val();
        var citystate = "City/State: " + $('[name="City_State"]').val();
        var phone = "Phone: " + $('[name="Phone"]').val();
        var project_name = "Project Name: " + $('[name="Project"]').val();
        var model_code = "Model Code: " + $('#model-code').text();

        var tabletop_laminate = "Tabletop Laminate: " + $("#finish_name_1").attr("value");
        var edge_laminate = "Edge Laminate: " + $("#finish_name_2").attr("value");
        var accent_laminate = "Accent Laminate: " + $("#finish_name_3").attr("value");
        var bracket = "Bracket Color: " + $("#finish_name_4").attr("value");

        var divider = "- - - - - - - - - - - - - - - - - - - - - - - - - - -";

        var pdfText = [
            divider,
            tabletop_laminate,
            edge_laminate,
            accent_laminate,
            bracket,
            model_code
        ];

        // remove whitespace from pdf text
        cleanPdfText = $.map(pdfText, function(value){
            return value.trim().replace(/\s+/g, ' '); 
        });
        
        doc.setFontSize(16);
        doc.setTextColor(80, 77, 78);

        //add product image
        html2canvas($("#prod"), {
            allowTaint: true,
            background: '#fff',
            onrendered: function(canvas) {
                var imgData = canvas.toDataURL('image/jpeg');
                doc.addImage(imgDataLogo, 'JPEG', 15, 0, 98, 89); // logo
                doc.addImage(imgData, 'JPEG', 15, 115, 555, 330, undefined,'FAST');    
                doc.text(cleanPdfText, 15, 510);
                doc.save('Hi5_Spec_Sheet.pdf');
            }

        });
 
        e.preventDefault();

    });

    // show power box options 
    // if chosen in configurator   
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
        $("#quote").submit(function(e){
            e.preventDefault();
        }).validate({
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
                
                // gather details to email to user and admin
                var adminEmail = "bristond@gmail.com";
                var clientEmail = $('[name="Email"]').val()
                var clientName = $('[name="Name"]').val();
                var clientEmailText = "Thanks for your interest in Hi5.  All quotes are emailed within 24-48 hours.  To contact customer service, please call (816) 774-4050.<br>";
                var adminEmailText = "The following was submitted for quote from the Hi5 Table Configurator.<br>";

                $('#quote input:not(:radio), #quote textarea, #quote input[name=Power_Box]:checked').each(function(index) {
                    //console.log($(this).attr('name') + " = " + $(this).val();
                    var name = $(this).attr('name');
                    name = name.trim();
                    var val = $(this).val();
                    val = val.trim();

                    if(name){
                        adminEmailText += name + ": " + val + "<br>";
                    }
                    
                });
                    adminEmailText += "Model Code: " + getModelCode();
                    
                    /*
                     * Uses smtp.js and sendInBlue transaction email service
                     * logs all email sent https://app-smtp.sendinblue.com/log
                     */

                    // send email to admin
                    Email.send(
                        "no-reply@hi5furniture.com",
                        adminEmail,
                        "New Hi5 Table Quote Request - " + clientName,
                        adminEmailText,
                        {
                            token: "295d3962-a448-43cb-a9eb-189c54c8079a",
                            callback: function done(message) { }
                        }
                    );

                    // send email to user
                    Email.send(
                        "no-reply@hi5furniture.com",
                        clientEmail,
                        "Your Hi5 Table Quote Request",
                        clientEmailText,
                        {
                            token: "295d3962-a448-43cb-a9eb-189c54c8079a",
                            callback: function done(message) { }
                        }
                    );
                
                $('#order-details').fadeOut(); // fade out form
                $('#order-details-thanks').fadeIn(); // fade in thank you message
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
/* maybe v3
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
 */
   
});

