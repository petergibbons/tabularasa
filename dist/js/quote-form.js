jQuery('#quote-form-wrapper').append('<form id="quote" method="get" action="">\
        <input type="hidden" name="Table_Type" value="' + tableType + '" />\
    <div id="order-details" style="display:none;">\
        <div>\
            <button id="edit-config" class="btn btn-small btn-success"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit Table Configuration</button>\
        </div>\
        <h2>Get a Quote:</h2>\
        <p>Please complete the following form and a representative will contact you shortly.</p>\
        <div class="row">\
            <div class="col-lg-6">\
                <h3>Contact Name:</h3>\
                <input type="text" name="Name" placeholder="Contact Name" class="form-control" />\
            </div>\
            <div class="col-lg-6">\
                <h3>Company Name:</h3>\
                <input type="text" name="Company" placeholder="Company Name" class="form-control" />\
            </div>\
        </div>\
        <div class="row">\
            <div class="col-lg-6">\
                <h3>City &amp; State:</h3>\
                <input type="text" name="City_State" placeholder="City & State" class="form-control" />\
            </div>\
            <div class="col-lg-6">\
                <h3>Phone Number:</h3>\
                <input type="text" name="Phone" placeholder="Phone Number" class="form-control" />\
            </div>\
        </div>\
        <div class="row">\
            <div class="col-lg-6">\
                <h3>Email Address:</h3>\
                <input type="text" name="Email" placeholder="Email Address" class="form-control" />\
            </div>\
            <div class="col-lg-6">\
                <h3>Project Name:</h3>\
                <input type="text" name="Project" placeholder="Project Name" class="form-control" />\
            </div>\
        </div>\
        <div class="row">\
            <div class="col-lg-6">\
                <h3>Budget Per Table:</h3>\
                <input type="text" name="Budget" placeholder="Budget Per Table" class="form-control" />\
            </div>\
            <div class="col-lg-6" id="table-dimensions">\
                <div>\
                    <h3>Notes</h3>\
                    <textarea class="form-control" name="Notes"></textarea>\
                </div>\
            </div>\
        </div>\
         <div class="row">\
            <div id="table-dimensions" class="col-lg-6">\
                <h3>Table Dimensions</h3>\
                    <div>Table Width: <select name="Table_Width" id="table-width" class="form-control"></select></div>\
                    <div>Table Length: <select name="Table_Length" id="table-length" class="form-control"></select></div>\
                    <div>Table Height: <select name="Table_Height" id="table-height" class="form-control"></select></div>\
            </div>\
            <div id="table-quantity" class="col-lg-6">\
                <h3>Table Quantity:</h3>\
                <select name="Table Quantity" class="form-control">\
                    <option value="1">1</option>\
                    <option value="2">2</option>\
                    <option value="3">3</option>\
                    <option value="4">4</option>\
                    <option value="5">5</option>\
                    <option value="6">6</option>\
                    <option value="7">7</option>\
                    <option value="8">8</option>\
                    <option value="9+">9+</option>\
                </select>\
                <h3>Finishes:</h3>\
                    <div><span id="option_1"></span><span id="cost_1"></span></div>\
                    <div><span id="option_2"></span><span id="cost_2"></span></div>\
                    <div><span id="option_3"></span><span id="cost_3"></span></div>\
                    <div><span id="option_4"></span><span id="cost_4"></span></div>\
                    <div><span id="option_5a"></span><span id="cost_5a"></span></div>\
                    <div><span id="option_5b"></span><span id="cost_5b"></span></div>\
                    <div><span id="option_5c"></span><span id="cost_5c"></span></div>\
                    <div><span id="option_6a"></span><span id="cost_6a"></span></div>\
                    <div><span id="option_6b"></span><span id="cost_6b"></span></div>\
                    <div><span id="option_6c"></span><span id="cost_6c"></span></div>\
                    <input type="hidden" name="TableTop" id="finish_name_1" />\
                    <input type="hidden" name="Edge" id="finish_name_2" />\
                    <input type="hidden" name="Accent" id="finish_name_3" />\
                    <input type="hidden" name="Bracket" id="finish_name_4" />\
            </div>\
        </div>\
        <div class="row">\
            <div class="col-lg-6">\
                <h3>Number of Power Boxes</h3>\
                <span id="outletCount"></span>\
                <select name="Number of Outlets" id="outlet-count" class="form-control"></select>\
            </div>\
            <div class="col-lg-6">\
                <div class="power-box-options" style="display:none;">\
                    <h3>Outlets Per Power Box</h3>\
                    <select name="Outlets Per Box" class="form-control">\
                        <option value="1">1</option>\
                        <option value="2">2</option>\
                        <option value="3">3</option>\
                        <option value="4">4</option>\
                        <option value="5">5</option>\
                        <option value="6">6</option>\
                        <option value="7">7</option>\
                    </select>\
                </div>\
            </div>\
        </div>\
        <div class="row" id="power-boxes" style="display:none;">\
            <div class="col-lg-6 col-xs-6">\
                <div>\
                    <h3>Power Box Style</h3>\
                    <div><input type="radio" name="Power_Box" id="Cove" value="Cove" class="power-box-style" checked="checked" /> <label for="Cove">Cove</label></div>\
                    <div><input type="radio" name="Power_Box" id="Villa" value="Villa" class="power-box-style" /> <label for="Villa">Villa</label></div>\
                    <div><input type="radio" name="Power_Box" id="Seclusion" value="Seclusion" class="power-box-style" /> <label for="Seclusion">Seclusion</label></div>\
                    <div><input type="radio" name="Power_Box" id="Interface" value="Interface" class="power-box-style" /> <label for="Interface">Interface</label></div>\
                    <div><input type="radio" name="Power_Box" id="InterfaceII" value="InterfaceII" class="power-box-style" /> <label for="InterfaceII">Interface II</label></div>\
                    <div><input type="radio" name="Power_Box" id="Reef" value="Reef" class="power-box-style" /> <label for="Reef">Reef</label></div>\
                    <div><input type="radio" name="Power_Box" id="OasisMiniCove" value="OasisMiniCove" class="power-box-style" /> <label for="OasisMiniCove">Oasis Mini Cove</label></div>\
                </div>\
            </div>\
            <div class="col-lg-6 col-xs-6">\
                <img src="dist/img/thumbs/Hi5_PowerBoxes_Cove.jpg" id="outlet-type-image" class="img-responsive" />\
            </div>\
        </div>\
        <div class="row" id="outlet-type-options" class="power-box-options" style="display:none;">\
            <div class="col-lg-6">\
                <h3>Power Box Options</h3>\
                <p>Do you require AV/IT jacks in Power Box (VGA, HTML,Data Jacks)? </p>\
                <select name="AV/IT" class="form-control">\
                    <option value="YES">YES</option>\
                    <option value="NO">NO</option>\
                </select>\
                <small>This option will require a follow up conversation for an accurate quote.</small>\
            </div>\
            <div class="col-lg-6">\
                <h3>Outlet Color</h3>\
                <select name="Power_Box_Color" class="form-control">\
                    <option value="Black">BLACK</option>\
                    <option value="White">WHITE</option>\
                    <option value="Silver">SILVER</option>\
                </select>\
            </div>\
        </div>\
        <div id="submit-quote-wrapper">\
            <button id="submit-quote" class="btn btn-success btn-lg">Submit Quote Request</button>\
        </div>\
    </div><!-- #order-details -->\
</form>');
