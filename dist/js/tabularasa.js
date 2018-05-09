/*
* @package Hi5 Configurator
*/


// preload all images
//$("#page-wrapper2").Prefetch();
    

    // 1-36 BRACKETS
    // 2-?? TABLETOP

function getFileName() {
    //this gets the full url
    var url = document.location.href;
    //this removes the anchor at the end, if there is one
    url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
    //this removes the query after the file name, if there is one
    url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
    //this removes everything before the last slash in the path
    url = url.substring(url.lastIndexOf("/") + 1, url.length);
    //return
    return url;
}

if( getFileName() == "coby-hybrid.html") {

    // SCENE 02 DATA
    var data = {
        "1" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Black[BK].png", thumb: "dist/img/thumbs/", label: "Black", item_type: "Bracket", model_code: "BK" },
        "2" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Brown[BR].png", thumb: "dist/img/thumbs/", label: "Brown", item_type: "Bracket", model_code: "BR" },
        "3" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Chrome_Powder_Coat[CHP].png", thumb: "dist/img/thumbs/", label: "Chrome Powder Coat", item_type: "Bracket", model_code: "CHP" },
        "4" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Cocoon_Green[CGR].png", thumb: "dist/img/thumbs/", label: "Cocoon Green", item_type: "Bracket", model_code: "CGR" },
        "5" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Dark_Bronze[DBZ].png", thumb: "dist/img/thumbs/", label: "Dark Bronze", item_type: "Bracket", model_code: "DBZ" },
        "6" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Dazzling_Pink[DPK].png", thumb: "dist/img/thumbs/", label: "Dazzling Pink", item_type: "Bracket", model_code: "DPK" },
        "7" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_DesingerWhite[DW].png", thumb: "dist/img/thumbs/", label: "Designer White", item_type: "Bracket", model_code: "DW" },
        "8" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Destroyer_Blue_[DBL].png", thumb: "dist/img/thumbs/", label: "Destroyer Blue", item_type: "Bracket", model_code: "DBL" },
        "9" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Flag_Orange[FOR].png", thumb: "dist/img/thumbs/", label: "Flag Orange", item_type: "Bracket", model_code: "FOR" },
        "10" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Flag_Red[FRD].png", thumb: "dist/img/thumbs/", label: "Flag Red", item_type: "Bracket", model_code: "FRD" },
        "11" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Flat_Brown[FBR].png", thumb: "dist/img/thumbs/", label: "Flat Brown", item_type: "Bracket", model_code: "FBR" },
        "12" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Grape_Ape[GPA].png", thumb: "dist/img/thumbs/", label: "Grape Ape", item_type: "Bracket", model_code: "GPA" },
        "13" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Graphite_Metallic[GTM].png", thumb: "dist/img/thumbs/", label: "Graphite Metallic", item_type: "Bracket", model_code: "GTM" },
        "14" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Indian_Turquoise[ITQ].png", thumb: "dist/img/thumbs/", label: "Indian Turquoise", item_type: "Bracket", model_code: "ITQ" },
        "15" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_International_Orange[IOR].png", thumb: "dist/img/thumbs/", label: "International Orange", item_type: "Bracket", model_code: "IOR" },
        "16" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Kiwi_Green[KGR].png", thumb: "dist/img/thumbs/", label: "Kiwi Green", item_type: "Bracket", model_code: "KGR" },
        "17" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Light_Cherry_Red[CRD].png", thumb: "dist/img/thumbs/", label: "Light Cherry Red", item_type: "Bracket", model_code: "CRD" },
        "18" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Lolly_Pop_Red[LRD].png", thumb: "dist/img/thumbs/", label: "Lolly Pop Red", item_type: "Bracket", model_code: "LRD" },
        "19" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Medium_Bronze[MBZ].png", thumb: "dist/img/thumbs/", label: "Medium Bronze", item_type: "Bracket", model_code: "MBZ" },
        "20" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Medium_Tone[MDT].png", thumb: "dist/img/thumbs/", label: "Medium Tone", item_type: "Bracket", model_code: "MDT" },
        "21" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_NotePadYellow[NYW].png", thumb: "dist/img/thumbs/", label: "Notepad Yellow", item_type: "Bracket", model_code: "NYW" },
        "22" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Oh_So_Blue[OBL].png", thumb: "dist/img/thumbs/", label: "Oh So Blue", item_type: "Bracket", model_code: "OBL" },
        "23" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Pink_Lipstick[PKL].png", thumb: "dist/img/thumbs/", label: "Pink Lipstick", item_type: "Bracket", model_code: "PKL" },
        "24" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_RawSheetMetalwithClearCoat[RWS].png", thumb: "dist/img/thumbs/", label: "Raw Sheet Metal Clearcoat", item_type: "Bracket", model_code: "RWS" },
        "25" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Ridge_Blue[RBL].png", thumb: "dist/img/thumbs/", label: "Ridge Blue", item_type: "Bracket", model_code: "RBL" },
        "26" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Sassy_Pink[SPK].png", thumb: "dist/img/thumbs/", label: "Sassy Pink", item_type: "Bracket", model_code: "SPK" },
        "27" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_School_Bus_Yellow[BYW].png", thumb: "dist/img/thumbs/", label: "School Bus Yellow", item_type: "Bracket", model_code: "BYW" },
        "28" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Shaded_Beige[SBG].png", thumb: "dist/img/thumbs/", label: "Shaded Beige", item_type: "Bracket", model_code: "SBG" },
        "29" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Shadow_Metallic[SHM].png", thumb: "dist/img/thumbs/", label: "Shadow Metallic", item_type: "Bracket", model_code: "SHM" },
        "30" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Sienna_Brown[SBR].png", thumb: "dist/img/thumbs/", label: "Sienna Brown", item_type: "Bracket", model_code: "SBR" },
        "31" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Silver[SL].png", thumb: "dist/img/thumbs/", label: "Silver", item_type: "Bracket", model_code: "SL" },
        "32" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Sinbad_Purple[SPR].png", thumb: "dist/img/thumbs/", label: "Sinbad Purple", item_type: "Bracket", model_code: "SPR" },
        "33" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Sultan_Blue_[SBL].png", thumb: "dist/img/thumbs/", label: "Sultan Blue", item_type: "Bracket", model_code: "SBL" },
        "34" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_SunshineYellow[SYW].png", thumb: "dist/img/thumbs/", label: "Sunshine Yellow", item_type: "Bracket", model_code: "SYW" },
        "35" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Sweet_Plum[SPM].png", thumb: "dist/img/thumbs/", label: "Sweet Plum", item_type: "Bracket", model_code: "SPM" },
        "36" : { img: "dist/img/Scene02_CobyHybrid/BRACKET/Scene02CobyHybrid_Bracket_Vintage_Teal[VTL].png", thumb: "dist/img/thumbs/", label: "Vintage Teal", item_type: "Bracket", model_code: "VTL" },

        "37" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_5th_Ave_Elm_7966K_12.png", thumb: "dist/img/thumbs/", label: "5th Ave Elm", item_type: "Laminate", model_code: "7966K-12" },
        "38" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Amarena_6907.png", thumb: "dist/img/thumbs/", label: "Amarena", item_type: "Laminate", model_code: "6907" },
        "39" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Amber_Alona_Y0289.png", thumb: "dist/img/thumbs/", label: "Amber Alona", item_type: "Laminate", model_code: "7919-78" },
        "40" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Amber_Cherry_7919K-78.png", thumb: "dist/img/thumbs/", label: "Amber Cherry", item_type: "Laminate", model_code: "7919K-78" },
        "41" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Antique_Barrel_Y0468.png", thumb: "dist/img/thumbs/", label: "Antique Barrel", item_type: "Laminate", model_code: "Y0468" },
        "42" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Antique_Cognac_Pine_Y0306K.png", thumb: "dist/img/thumbs/", label: "Cognac Pine", item_type: "Laminate", model_code: "Y0306K" },
        "43" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Antique_Tobacco_Pine_Y0305K.png", thumb: "dist/img/thumbs/", label: "Tobacco Pine", item_type: "Laminate", model_code: "Y0305K" },
        "44" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Antiqued_Lime_Pine_Y0469.png", thumb: "dist/img/thumbs/", label: "Lime Pine", item_type: "Laminate", model_code: "Y0469" },
        "45" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_AsianNight_7949K-18.png", thumb: "dist/img/thumbs/", label: "Asian Night", item_type: "Laminate", model_code: "7949K-18" },
        "46" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_AstroStrandz_4940K-18.png", thumb: "dist/img/thumbs/", label: "Astro Strandz", item_type: "Laminate", model_code: "4940K-18" },
        "47" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Atlantis_D25.png", thumb: "dist/img/thumbs/", label: "Atlantiz", item_type: "Laminate", model_code: "D25" },
        "48" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Beigewood_7850-60.png", thumb: "dist/img/thumbs/", label: "Beigewood", item_type: "Laminate", model_code: "7850-60" },
        "49" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Black_1595-60.png", thumb: "dist/img/thumbs/", label: "Black", item_type: "Laminate", model_code: "1595-60" },
        "50" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Black_Fusion_6320-46.png", thumb: "dist/img/thumbs/", label: "Black Fusion", item_type: "Laminate", model_code: "6320-46" },
        "51" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Blue_Curacao_Y0353-56.png", thumb: "dist/img/thumbs/", label: "Blue Curacao", item_type: "Laminate", model_code: "Y0353-56" },
        "52" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Brittany_Blue_D321.png", thumb: "dist/img/thumbs/", label: "Brittany Blue", item_type: "Laminate", model_code: "D321" },
        "53" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Bronzed_Steel_8919.png", thumb: "dist/img/thumbs/", label: "Bronzed Steel", item_type: "Laminate", model_code: "8919" },
        "54" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Chrome_Yellow_1485.png", thumb: "dist/img/thumbs/", label: "Chrome Yellow", item_type: "Laminate", model_code: "1485" },
        "55" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Clementine_2962.png", thumb: "dist/img/thumbs/", label: "Clementine", item_type: "Laminate", model_code: "2962" },
        "56" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Cosmic_Strandz_4941K-18.png", thumb: "dist/img/thumbs/", label: "Cosmic Strandz", item_type: "Laminate", model_code: "4941K-18" },
        "57" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Designer_White_D354-60.png", thumb: "dist/img/thumbs/", label: "Designer White", item_type: "Laminate", model_code: "D354-60" },
        "58" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Detroit_Concrete_Y0461.png", thumb: "dist/img/thumbs/", label: "Detroit Concrete", item_type: "Laminate", model_code: "Y0461" },
        "59" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_DolceVita_3420.png", thumb: "dist/img/thumbs/", label: "Dolce Vita", item_type: "Laminate", model_code: "3420" },
        "60" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Dove_Grey_D92-60.png", thumb: "dist/img/thumbs/", label: "Dove Grey", item_type: "Laminate", model_code: "D92-60" },
        "61" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Eggplant_1517.png", thumb: "dist/img/thumbs/", label: "Eggplant", item_type: "Laminate", model_code: "1517" },
        "62" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Factory_Antique_Wood_Y0257K.png", thumb: "dist/img/thumbs/", label: "Factory Antique Wood", item_type: "Laminate", model_code: "Y0257K" },
        "63" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Flamingo_D497.png", thumb: "dist/img/thumbs/", label: "Flamingo", item_type: "Laminate", model_code: "D497" },
        "64" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Green_Slate_8793.png", thumb: "dist/img/thumbs/", label: "Green Slate", item_type: "Laminate", model_code: "8793" },
        "65" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Grenadine_6902.png", thumb: "dist/img/thumbs/", label: "Greenadine", item_type: "Laminate", model_code: "6902" },
        "66" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Grey_Glace_4142-60.png", thumb: "dist/img/thumbs/", label: "Grey Glace", item_type: "Laminate", model_code: "4142-60" },
        "67" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Highline_7970K-18.png", thumb: "dist/img/thumbs/", label: "Highline", item_type: "Laminate", model_code: "7970K-18" },
        "68" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_HollyBerry_D307.png", thumb: "dist/img/thumbs/", label: "Holly Berry", item_type: "Laminate", model_code: "D307" },
        "69" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_HunterGreen_967.png", thumb: "dist/img/thumbs/", label: "Hunter Green", item_type: "Laminate", model_code: "967" },
        "70" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Indigo_D379.png", thumb: "dist/img/thumbs/", label: "Indigo", item_type: "Laminate", model_code: "D379" },
        "71" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Infinity_1520.png", thumb: "dist/img/thumbs/", label: "Infinity", item_type: "Laminate", model_code: "1520" },
        "72" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Island_D498.png", thumb: "dist/img/thumbs/", label: "Island", item_type: "Laminate", model_code: "D498" },
        "73" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_JustBlue_8821.png", thumb: "dist/img/thumbs/", label: "Just Blue", item_type: "Laminate", model_code: "8821" },
        "74" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_JustRose_8858.png", thumb: "dist/img/thumbs/", label: "Just Rose", item_type: "Laminate", model_code: "8858" },
        "75" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Lace_Gesso_Wood_Y0295K.png", thumb: "dist/img/thumbs/", label: "Lace Gesso Wood", item_type: "Laminate", model_code: "Y0295K" },
        "76" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_LapisBlue_D417.png", thumb: "dist/img/thumbs/", label: "Lapis Blue", item_type: "Laminate", model_code: "D417" },
        "77" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Leaf_Green_8820.png", thumb: "dist/img/thumbs/", label: "Leaf Green", item_type: "Laminate", model_code: "8820" },
        "78" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Lost_Pine_Y0473.png", thumb: "dist/img/thumbs/", label: "Lost Pine", item_type: "Laminate", model_code: "Y0473" },
        "79" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Marine_Blue_914.png", thumb: "dist/img/thumbs/", label: "Marine Blue", item_type: "Laminate", model_code: "914" },
        "80" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Matrix_Blue_8795.png", thumb: "dist/img/thumbs/", label: "Matrix Blue", item_type: "Laminate", model_code: "8795" },
        "81" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Milk_Paint_Y0054K.png", thumb: "dist/img/thumbs/", label: "Milk Paint", item_type: "Laminate", model_code: "Y0054K" },
        "82" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Mill_Antique_Wood_0258K.png", thumb: "dist/img/thumbs/", label: "Mill Antique Wood", item_type: "Laminate", model_code: "0258K" },
        "83" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Misty_Crown_Y0546.png", thumb: "dist/img/thumbs/", label: "Misty Crown", item_type: "Laminate", model_code: "Y0546" },
        "84" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_New_Burgundy_914.png", thumb: "dist/img/thumbs/", label: "New Burgundy", item_type: "Laminate", model_code: "1966" },
        "85" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Ocean_D502.png", thumb: "dist/img/thumbs/", label: "Ocean", item_type: "Laminate", model_code: "D502" },
        "86" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Orange_Grove_D501.png", thumb: "dist/img/thumbs/", label: "Orange Grove", item_type: "Laminate", model_code: "D501" },
        "87" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Oxidized_Silver_Y0393.png", thumb: "dist/img/thumbs/", label: "Oxidized Silver", item_type: "Laminate", model_code: "Y0393" },
        "88" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_PaintScrape_Sky_8995.png", thumb: "dist/img/thumbs/", label: "Paint Scrape Sky", item_type: "Laminate", model_code: "8995" },
        "89" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_PaintScrape_Steel_8994.png", thumb: "dist/img/thumbs/", label: "Paint Scrape Steel", item_type: "Laminate", model_code: "8994" },
        "90" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Petrified_Wood_3474.png", thumb: "dist/img/thumbs/", label: "Petrified Wood", item_type: "Laminate", model_code: "3474" },
        "91" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Phantom_Cocoa_8213K-12.png", thumb: "dist/img/thumbs/", label: "Phantom Cocoa", item_type: "Laminate", model_code: "8213K-12" },
        "92" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Port_D14.png", thumb: "dist/img/thumbs/", label: "Port", item_type: "Laminate", model_code: "D14" },
        "93" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Reclaimed_Oak_Planked_Y0302K.png", thumb: "dist/img/thumbs/", label: "Reclaimed Oak Planked", item_type: "Laminate", model_code: "Y0302K" },
        "94" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Regimental_Red_D12.png", thumb: "dist/img/thumbs/", label: "Regimental Red", item_type: "Laminate", model_code: "D12" },
        "95" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Repurposed_Oak_Plank_Y0364.png", thumb: "dist/img/thumbs/", label: "Oak Plank", item_type: "Laminate", model_code: "Y0364" },
        "96" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Repurposed_Oak_Y0365.png", thumb: "dist/img/thumbs/", label: "Repurposed Oak", item_type: "Laminate", model_code: "Y0365" },
        "97" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Revived_Oak_Y0301K.png", thumb: "dist/img/thumbs/", label: "Revived Oak", item_type: "Laminate", model_code: "Y0301K" },
        "98" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Saddle_Oak_8206K-16.png", thumb: "dist/img/thumbs/", label: "Saddle Oak", item_type: "Laminate", model_code: "8206K-16" },
        "99" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Salvage_Planked_Elm_9480.png", thumb: "dist/img/thumbs/", label: "Salvaged Plank Elm", item_type: "Laminate", model_code: "9480" },
        "100" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Satin_Stainless_4830K-18.png", thumb: "dist/img/thumbs/", label: "Satin Stainless", item_type: "Laminate", model_code: "4830K-18" },
        "101" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Scorched_Chestnut_Y0487.png", thumb: "dist/img/thumbs/", label: "Scorched Chestnut", item_type: "Laminate", model_code: "Y0487" },
        "102" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Seasoned_Planked_Elm_6477.png", thumb: "dist/img/thumbs/", label: "Seasoned Planked Elm", item_type: "Laminate", model_code: "6477" },
        "103" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Shadow_D96-60.png", thumb: "dist/img/thumbs/", label: "Shadow", item_type: "Laminate", model_code: "D96-60" },
        "104" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Silver_Oak_Herringbone_9311.png", thumb: "dist/img/thumbs/", label: "Silver Oak Herringbone", item_type: "Laminate", model_code: "9311" },
        "105" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Silver_Quartzite_9497-34.png", thumb: "dist/img/thumbs/", label: "Silver Quartzite", item_type: "Laminate", model_code: "9497-34" },
        "106" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_SilverAlchemy_4860K-07.png", thumb: "dist/img/thumbs/", label: "Silver Alchemy", item_type: "Laminate", model_code: "4860K-07" },
        "107" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Skyline_Walnut_7964K-12.png", thumb: "dist/img/thumbs/", label: "Skyline Walnut", item_type: "Laminate", model_code: "7964K-12" },
        "108" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Slate_Grey_D91-60.png", thumb: "dist/img/thumbs/", label: "Slate Grey", item_type: "Laminate", model_code: "D91-60" },
        "109" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Spectrum_Blue_851.png", thumb: "dist/img/thumbs/", label: "Spectrum Blue", item_type: "Laminate", model_code: "851" },
        "110" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Spectrum_Green_7897.png", thumb: "dist/img/thumbs/", label: "Spectrum Green", item_type: "Laminate", model_code: "7897" },
        "111" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Spectrum_Red_845.png", thumb: "dist/img/thumbs/", label: "Spectrum Red", item_type: "Laminate", model_code: "854" },
        "112" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Steel_Mesh_4879-38.png", thumb: "dist/img/thumbs/", label: "Steel Mesh", item_type: "Laminate", model_code: "4879-38" },
        "113" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Stop_Red_839.png", thumb: "dist/img/thumbs/", label: "Stop Red", item_type: "Laminate", model_code: "839" },
        "114" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Sun_Bleached_Olive_Y0573.png", thumb: "dist/img/thumbs/", label: "Sun Bleached Olive", item_type: "Laminate", model_code: "Y0573" },
        "115" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Tinted_Paper_Terrazzo_8812.png", thumb: "dist/img/thumbs/", label: "Tinted Paper Terazzo", item_type: "Laminate", model_code: "8812" },
        "116" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Tonal_Paper_Terrazzo_8813.png", thumb: "dist/img/thumbs/", label: "Tonal Paper Terazzo", item_type: "Laminate", model_code: "8813" },
        "117" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_VaporStrandz_4939K-18.png", thumb: "dist/img/thumbs/", label: "Vapor Strandz", item_type: "Laminate", model_code: "4939K-18" },
        "118" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Vibrant_Green_6901.png", thumb: "dist/img/thumbs/", label: "Vibrant Green", item_type: "Laminate", model_code: "6901" },
        "119" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Walnut_Heights_7965K-12.png", thumb: "dist/img/thumbs/", label: "Walnut Heights", item_type: "Laminate", model_code: "7965K-12" },
        "120" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Western_Suede_4871-60.png", thumb: "dist/img/thumbs/", label: "Western Suede", item_type: "Laminate", model_code: "4871-60" },
        "121" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Wide_Planked_Walnut_9479.png", thumb: "dist/img/thumbs/", label: "Planked Walnut", item_type: "Laminate", model_code: "9479" },
        "122" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Xanadu_7945K-18.png", thumb: "dist/img/thumbs/", label: "Xanadu", item_type: "Laminate", model_code: "7945K-18" },
        "123" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Zanzibar_7957K-78.png", thumb: "dist/img/thumbs/", label: "Zanzibar", item_type: "Laminate", model_code: "7957K-78" },
        "124" : { img: "dist/img/Scene02_CobyHybrid/LAMINATE/Scene02CobyHybrid_Laminate_Zebrawood_7980K-18.png", thumb: "dist/img/thumbs/", label: "Zebrawood", item_type: "Laminate", model_code: "7980K-18" },


        "125" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_5th_Ave_Elm_7966K_12.png", thumb: "dist/img/thumbs/", label: "5th Ave Elm", item_type: "Edge Laminate", model_code: "7966K-12" },
        "126" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Amarena_6907.png", thumb: "dist/img/thumbs/", label: "Amarena", item_type: "Edge Laminate", model_code: "6907" },
        "127" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Amber_Alona_Y0289.png", thumb: "dist/img/thumbs/", label: "Amber Alona", item_type: "Edge Laminate", model_code: "7919-78" },
        "128" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Amber_Cherry_7919K-78.png", thumb: "dist/img/thumbs/", label: "Amber Cherry", item_type: "Edge Laminate", model_code: "7919K-78" },
        "129" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Antique_Barrel_Y0468.png", thumb: "dist/img/thumbs/", label: "Antique Barrel", item_type: "Edge Laminate", model_code: "Y0468" },
        "130" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Antique_Cognac_Pine_Y0306K.png", thumb: "dist/img/thumbs/", label: "Cognac Pine", item_type: "Edge Laminate", model_code: "Y0306K" },
        "131" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Antique_Tobacco_Pine_Y0305K.png", thumb: "dist/img/thumbs/", label: "Tobacco Pine", item_type: "Edge Laminate", model_code: "Y0305K" },
        "132" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Antiqued_Lime_Pine_Y0469.png", thumb: "dist/img/thumbs/", label: "Lime Pine", item_type: "Edge Laminate", model_code: "Y0469" },
        "133" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_AsianNight_7949K-18.png", thumb: "dist/img/thumbs/", label: "Asian Night", item_type: "Edge Laminate", model_code: "7949K-18" },
        "134" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_AstroStrandz_4940K-18.png", thumb: "dist/img/thumbs/", label: "Astro Strandz", item_type: "Edge Laminate", model_code: "4940K-18" },
        "135" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Atlantis_D25.png", thumb: "dist/img/thumbs/", label: "Atlantiz", item_type: "Edge Laminate", model_code: "D25" },
        "136" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Beigewood_7850-60.png", thumb: "dist/img/thumbs/", label: "Beigewood", item_type: "Edge Laminate", model_code: "7850-60" },
        "137" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Black_1595-60.png", thumb: "dist/img/thumbs/", label: "Black", item_type: "Edge Laminate", model_code: "1595-60" },
        "138" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Black_Fusion_6320-46.png", thumb: "dist/img/thumbs/", label: "Black Fusion", item_type: "Edge Laminate", model_code: "6320-46" },
        "139" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Blue_Curacao_Y0353-56.png", thumb: "dist/img/thumbs/", label: "Blue Curacao", item_type: "Edge Laminate", model_code: "Y0353-56" },
        "140" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Brittany_Blue_D321.png", thumb: "dist/img/thumbs/", label: "Brittany Blue", item_type: "Edge Laminate", model_code: "D321" },
        "141" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Bronzed_Steel_8919.png", thumb: "dist/img/thumbs/", label: "Bronzed Steel", item_type: "Edge Laminate", model_code: "8919" },
        "142" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Chrome_Yellow_1485.png", thumb: "dist/img/thumbs/", label: "Chrome Yellow", item_type: "Edge Laminate", model_code: "1485" },
        "143" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Clementine_2962.png", thumb: "dist/img/thumbs/", label: "Clementine", item_type: "Edge Laminate", model_code: "2962" },
        "144" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Cosmic_Strandz_4941K-18.png", thumb: "dist/img/thumbs/", label: "Cosmic Strandz", item_type: "Edge Laminate", model_code: "4941K-18" },
        "145" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Designer_White_D354-60.png", thumb: "dist/img/thumbs/", label: "Designer White", item_type: "Edge Laminate", model_code: "D354-60" },
        "146" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Detroit_Concrete_Y0461.png", thumb: "dist/img/thumbs/", label: "Detroit Concrete", item_type: "Edge Laminate", model_code: "Y0461" },
        "147" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_DolceVita_3420.png", thumb: "dist/img/thumbs/", label: "Dolce Vita", item_type: "Edge Laminate", model_code: "3420" },
        "148" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Dove_Grey_D92-60.png", thumb: "dist/img/thumbs/", label: "Dove Grey", item_type: "Edge Laminate", model_code: "D92-60" },
        "149" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Eggplant_1517.png", thumb: "dist/img/thumbs/", label: "Eggplant", item_type: "Edge Laminate", model_code: "1517" },
        "150" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Factory_Antique_Wood_Y0257K.png", thumb: "dist/img/thumbs/", label: "Factory Antique Wood", item_type: "Edge Laminate", model_code: "Y0257K" },
        "151" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Flamingo_D497.png", thumb: "dist/img/thumbs/", label: "Flamingo", item_type: "Edge Laminate", model_code: "D497" },
        "152" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Green_Slate_8793.png", thumb: "dist/img/thumbs/", label: "Green Slate", item_type: "Edge Laminate", model_code: "8793" },
        "153" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Grenadine_6902.png", thumb: "dist/img/thumbs/", label: "Greenadine", item_type: "Edge Laminate", model_code: "6902" },
        "154" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Grey_Glace_4142-60.png", thumb: "dist/img/thumbs/", label: "Grey Glace", item_type: "Edge Laminate", model_code: "4142-60" },
        "155" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Highline_7970K-18.png", thumb: "dist/img/thumbs/", label: "Highline", item_type: "Edge Laminate", model_code: "7970K-18" },
        "156" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_HollyBerry_D307.png", thumb: "dist/img/thumbs/", label: "Holly Berry", item_type: "Edge Laminate", model_code: "D307" },
        "157" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_HunterGreen_967.png", thumb: "dist/img/thumbs/", label: "Hunter Green", item_type: "Edge Laminate", model_code: "967" },
        "158" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Indigo_D379.png", thumb: "dist/img/thumbs/", label: "Indigo", item_type: "Edge Laminate", model_code: "D379" },
        "159" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Infinity_1520.png", thumb: "dist/img/thumbs/", label: "Infinity", item_type: "Edge Laminate", model_code: "1520" },
        "160" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Island_D498.png", thumb: "dist/img/thumbs/", label: "Island", item_type: "Edge Laminate", model_code: "D498" },
        "161" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_JustBlue_8821.png", thumb: "dist/img/thumbs/", label: "Just Blue", item_type: "Edge Laminate", model_code: "8821" },
        "162" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_JustRose_8858.png", thumb: "dist/img/thumbs/", label: "Just Rose", item_type: "Edge Laminate", model_code: "8858" },
        "163" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Lace_Gesso_Wood_Y0295K.png", thumb: "dist/img/thumbs/", label: "Lace Gesso Wood", item_type: "Edge Laminate", model_code: "Y0295K" },
        "164" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_LapisBlue_D417.png", thumb: "dist/img/thumbs/", label: "Lapis Blue", item_type: "Edge Laminate", model_code: "D417" },
        "165" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Leaf_Green_8820.png", thumb: "dist/img/thumbs/", label: "Leaf Green", item_type: "Edge Laminate", model_code: "8820" },
        "166" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Lost_Pine_Y0473.png", thumb: "dist/img/thumbs/", label: "Lost Pine", item_type: "Edge Laminate", model_code: "Y0473" },
        "167" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Marine_Blue_914.png", thumb: "dist/img/thumbs/", label: "Marine Blue", item_type: "Edge Laminate", model_code: "914" },
        "168" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Matrix_Blue_8795.png", thumb: "dist/img/thumbs/", label: "Matrix Blue", item_type: "Edge Laminate", model_code: "8795" },
        "169" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Milk_Paint_Y0054K.png", thumb: "dist/img/thumbs/", label: "Milk Paint", item_type: "Edge Laminate", model_code: "Y0054K" },
        "170" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Mill_Antique_Wood_0258K.png", thumb: "dist/img/thumbs/", label: "Mill Antique Wood", item_type: "Edge Laminate", model_code: "0258K" },
        "171" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Misty_Crown_Y0546.png", thumb: "dist/img/thumbs/", label: "Misty Crown", item_type: "Edge Laminate", model_code: "Y0546" },
        "172" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_New_Burgundy_914.png", thumb: "dist/img/thumbs/", label: "New Burgundy", item_type: "Edge Laminate", model_code: "1966" },
        "173" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Ocean_D502.png", thumb: "dist/img/thumbs/", label: "Ocean", item_type: "Edge Laminate", model_code: "D502" },
        "174" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Orange_Grove_D501.png", thumb: "dist/img/thumbs/", label: "Orange Grove", item_type: "Edge Laminate", model_code: "D501" },
        "175" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Oxidized_Silver_Y0393.png", thumb: "dist/img/thumbs/", label: "Oxidized Silver", item_type: "Edge Laminate", model_code: "Y0393" },
        "176" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_PaintScrape_Sky_8995.png", thumb: "dist/img/thumbs/", label: "Paint Scrape Sky", item_type: "Edge Laminate", model_code: "8995" },
        "177" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_PaintScrape_Steel_8994.png", thumb: "dist/img/thumbs/", label: "Paint Scrape Steel", item_type: "Edge Laminate", model_code: "8994" },
        "178" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Petrified_Wood_3474.png", thumb: "dist/img/thumbs/", label: "Petrified Wood", item_type: "Edge Laminate", model_code: "3474" },
        "179" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Phantom_Cocoa_8213K-12.png", thumb: "dist/img/thumbs/", label: "Phantom Cocoa", item_type: "Edge Laminate", model_code: "8213K-12" },
        "180" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Port_D14.png", thumb: "dist/img/thumbs/", label: "Port", item_type: "Edge Laminate", model_code: "D14" },
        "181" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Reclaimed_Oak_Planked_Y0302K.png", thumb: "dist/img/thumbs/", label: "Reclaimed Oak Planked", item_type: "Edge Laminate", model_code: "Y0302K" },
        "182" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Regimental_Red_D12.png", thumb: "dist/img/thumbs/", label: "Regimental Red", item_type: "Edge Laminate", model_code: "D12" },
        "183" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Repurposed_Oak_Plank_Y0364.png", thumb: "dist/img/thumbs/", label: "Oak Plank", item_type: "Edge Laminate", model_code: "Y0364" },
        "184" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Repurposed_Oak_Y0365.png", thumb: "dist/img/thumbs/", label: "Repurposed Oak", item_type: "Edge Laminate", model_code: "Y0365" },
        "185" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Revived_Oak_Y0301K.png", thumb: "dist/img/thumbs/", label: "Revived Oak", item_type: "Edge Laminate", model_code: "Y0301K" },
        "186" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Saddle_Oak_8206K-16.png", thumb: "dist/img/thumbs/", label: "Saddle Oak", item_type: "Edge Laminate", model_code: "8206K-16" },
        "187" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Salvage_Planked_Elm_9480.png", thumb: "dist/img/thumbs/", label: "Salvaged Plank Elm", item_type: "Edge Laminate", model_code: "9480" },
        "188" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Satin_Stainless_4830K-18.png", thumb: "dist/img/thumbs/", label: "Satin Stainless", item_type: "Edge Laminate", model_code: "4830K-18" },
        "189" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Scorched_Chestnut_Y0487.png", thumb: "dist/img/thumbs/", label: "Scorched Chestnut", item_type: "Edge Laminate", model_code: "Y0487" },
        "190" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Seasoned_Planked_Elm_6477.png", thumb: "dist/img/thumbs/", label: "Seasoned Planked Elm", item_type: "Edge Laminate", model_code: "6477" },
        "191" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Shadow_D96-60.png", thumb: "dist/img/thumbs/", label: "Shadow", item_type: "Edge Laminate", model_code: "D96-60" },
        "192" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Silver_Oak_Herringbone_9311.png", thumb: "dist/img/thumbs/", label: "Silver Oak Herringbone", item_type: "Edge Laminate", model_code: "9311" },
        "193" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Silver_Quartzite_9497-34.png", thumb: "dist/img/thumbs/", label: "Silver Quartzite", item_type: "Edge Laminate", model_code: "9497-34" },
        "194" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_SilverAlchemy_4860K-07.png", thumb: "dist/img/thumbs/", label: "Silver Alchemy", item_type: "Edge Laminate", model_code: "4860K-07" },
        "195" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Skyline_Walnut_7964K-12.png", thumb: "dist/img/thumbs/", label: "Skyline Walnut", item_type: "Edge Laminate", model_code: "7964K-12" },
        "196" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Slate_Grey_D91-60.png", thumb: "dist/img/thumbs/", label: "Slate Grey", item_type: "Edge Laminate", model_code: "D91-60" },
        "197" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Spectrum_Blue_851.png", thumb: "dist/img/thumbs/", label: "Spectrum Blue", item_type: "Edge Laminate", model_code: "851" },
        "198" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Spectrum_Green_7897.png", thumb: "dist/img/thumbs/", label: "Spectrum Green", item_type: "Edge Laminate", model_code: "7897" },
        "199" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Spectrum_Red_845.png", thumb: "dist/img/thumbs/", label: "Spectrum Red", item_type: "Edge Laminate", model_code: "854" },
        "200" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Steel_Mesh_4879-38.png", thumb: "dist/img/thumbs/", label: "Steel Mesh", item_type: "Edge Laminate", model_code: "4879-38" },
        "201" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Stop_Red_839.png", thumb: "dist/img/thumbs/", label: "Stop Red", item_type: "Edge Laminate", model_code: "839" },
        "202" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Sun_Bleached_Olive_Y0573.png", thumb: "dist/img/thumbs/", label: "Sun Bleached Olive", item_type: "Edge Laminate", model_code: "Y0573" },
        "203" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Tinted_Paper_Terrazzo_8812.png", thumb: "dist/img/thumbs/", label: "Tinted Paper Terazzo", item_type: "Edge Laminate", model_code: "8812" },
        "204" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Tonal_Paper_Terrazzo_8813.png", thumb: "dist/img/thumbs/", label: "Tonal Paper Terazzo", item_type: "Edge Laminate", model_code: "8813" },
        "205" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_VaporStrandz_4939K-18.png", thumb: "dist/img/thumbs/", label: "Vapor Strandz", item_type: "Edge Laminate", model_code: "4939K-18" },
        "206" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Vibrant_Green_6901.png", thumb: "dist/img/thumbs/", label: "Vibrant Green", item_type: "Edge Laminate", model_code: "6901" },
        "207" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Walnut_Heights_7965K-12.png", thumb: "dist/img/thumbs/", label: "Walnut Heights", item_type: "Edge Laminate", model_code: "7965K-12" },
        "208" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Western_Suede_4871-60.png", thumb: "dist/img/thumbs/", label: "Western Suede", item_type: "Edge Laminate", model_code: "4871-60" },
        "209" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Wide_Planked_Walnut_9479.png", thumb: "dist/img/thumbs/", label: "Planked Walnut", item_type: "Edge Laminate", model_code: "9479" },
        "210" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Xanadu_7945K-18.png", thumb: "dist/img/thumbs/", label: "Xanadu", item_type: "Edge Laminate", model_code: "7945K-18" },
        "211" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Zanzibar_7957K-78.png", thumb: "dist/img/thumbs/", label: "Zanzibar", item_type: "Edge Laminate", model_code: "7957K-78" },
        "212" : { img: "dist/img/Scene02_CobyHybrid/EDGE/Scene02CobyHybrid_Edge_Zebrawood_7980K-18.png", thumb: "dist/img/thumbs/", label: "Zebrawood", item_type: "Edge Laminate", model_code: "7980K-18" },


        "213" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_5th_Ave_Elm_7966K_12.png", thumb: "dist/img/thumbs/", label: "5th Ave Elm", item_type: "Accent Laminate", model_code: "7966K-12" },
        "214" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Amarena_6907.png", thumb: "dist/img/thumbs/", label: "Amarena", item_type: "Accent Laminate", model_code: "6907" },
        "215" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Amber_Alona_Y0289.png", thumb: "dist/img/thumbs/", label: "Amber Alona", item_type: "Accent Laminate", model_code: "7919-78" },
        "216" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Amber_Cherry_7919K-78.png", thumb: "dist/img/thumbs/", label: "Amber Cherry", item_type: "Accent Laminate", model_code: "7919K-78" },
        "217" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Antique_Barrel_Y0468.png", thumb: "dist/img/thumbs/", label: "Antique Barrel", item_type: "Accent Laminate", model_code: "Y0468" },
        "218" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Antique_Cognac_Pine_Y0306K.png", thumb: "dist/img/thumbs/", label: "Cognac Pine", item_type: "Accent Laminate", model_code: "Y0306K" },
        "219" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Antique_Tobacco_Pine_Y0305K.png", thumb: "dist/img/thumbs/", label: "Tobacco Pine", item_type: "Accent Laminate", model_code: "Y0305K" },
        "220" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Antiqued_Lime_Pine_Y0469.png", thumb: "dist/img/thumbs/", label: "Lime Pine", item_type: "Accent Laminate", model_code: "Y0469" },
        "221" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_AsianNight_7949K-18.png", thumb: "dist/img/thumbs/", label: "Asian Night", item_type: "Accent Laminate", model_code: "7949K-18" },
        "222" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_AstroStrandz_4940K-18.png", thumb: "dist/img/thumbs/", label: "Astro Strandz", item_type: "Accent Laminate", model_code: "4940K-18" },
        "223" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Atlantis_D25.png", thumb: "dist/img/thumbs/", label: "Atlantis", item_type: "Accent Laminate", model_code: "D25" },
        "224" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Beigewood_7850-60.png", thumb: "dist/img/thumbs/", label: "Beigewood", item_type: "Accent Laminate", model_code: "7850-60" },
        "225" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Black_1595-60.png", thumb: "dist/img/thumbs/", label: "Black", item_type: "Accent Laminate", model_code: "1595-60" },
        "226" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Black_Fusion_6320-46.png", thumb: "dist/img/thumbs/", label: "Black Fusion", item_type: "Accent Laminate", model_code: "6320-46" },
        "227" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Blue_Curacao_Y0353-56.png", thumb: "dist/img/thumbs/", label: "Blue Curacao", item_type: "Accent Laminate", model_code: "Y0353-56" },
        "228" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Brittany_Blue_D321.png", thumb: "dist/img/thumbs/", label: "Brittany Blue", item_type: "Accent Laminate", model_code: "D321" },
        "229" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Bronzed_Steel_8919.png", thumb: "dist/img/thumbs/", label: "Bronzed Steel", item_type: "Accent Laminate", model_code: "8919" },
        "230" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Chrome_Yellow_1485.png", thumb: "dist/img/thumbs/", label: "Chrome Yellow", item_type: "Accent Laminate", model_code: "1485" },
        "231" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Clementine_2962.png", thumb: "dist/img/thumbs/", label: "Clementine", item_type: "Accent Laminate", model_code: "2962" },
        "232" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Cosmic_Strandz_4941K-18.png", thumb: "dist/img/thumbs/", label: "Cosmic Strandz", item_type: "Accent Laminate", model_code: "4941K-18" },
        "233" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Designer_White_D354-60.png", thumb: "dist/img/thumbs/", label: "Designer White", item_type: "Accent Laminate", model_code: "D354-60" },
        "234" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Detroit_Concrete_Y0461.png", thumb: "dist/img/thumbs/", label: "Detroit Concrete", item_type: "Accent Laminate", model_code: "Y0461" },
        "235" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_DolceVita_3420.png", thumb: "dist/img/thumbs/", label: "Dolce Vita", item_type: "Accent Laminate", model_code: "3420" },
        "236" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Dove_Grey_D92-60.png", thumb: "dist/img/thumbs/", label: "Dove Grey", item_type: "Accent Laminate", model_code: "D92-60" },
        "237" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Eggplant_1517.png", thumb: "dist/img/thumbs/", label: "Eggplant", item_type: "Accent Laminate", model_code: "1517" },
        "238" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Factory_Antique_Wood_Y0257K.png", thumb: "dist/img/thumbs/", label: "Factory Antique Wood", item_type: "Accent Laminate", model_code: "Y0257K" },
        "239" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Flamingo_D497.png", thumb: "dist/img/thumbs/", label: "Flamingo", item_type: "Accent Laminate", model_code: "D497" },
        "240" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Green_Slate_8793.png", thumb: "dist/img/thumbs/", label: "Green Slate", item_type: "Accent Laminate", model_code: "8793" },
        "241" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Grenadine_6902.png", thumb: "dist/img/thumbs/", label: "Greenadine", item_type: "Accent Laminate", model_code: "6902" },
        "242" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Grey_Glace_4142-60.png", thumb: "dist/img/thumbs/", label: "Grey Glace", item_type: "Accent Laminate", model_code: "4142-60" },
        "243" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Highline_7970K-18.png", thumb: "dist/img/thumbs/", label: "Highline", item_type: "Accent Laminate", model_code: "7970K-18" },
        "244" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_HollyBerry_D307.png", thumb: "dist/img/thumbs/", label: "Holly Berry", item_type: "Accent Laminate", model_code: "D307" },
        "245" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_HunterGreen_967.png", thumb: "dist/img/thumbs/", label: "Hunter Green", item_type: "Accent Laminate", model_code: "967" },
        "246" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Indigo_D379.png", thumb: "dist/img/thumbs/", label: "Indigo", item_type: "Accent Laminate", model_code: "D379" },
        "247" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Infinity_1520.png", thumb: "dist/img/thumbs/", label: "Infinity", item_type: "Accent Laminate", model_code: "1520" },
        "248" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Island_D498.png", thumb: "dist/img/thumbs/", label: "Island", item_type: "Accent Laminate", model_code: "D498" },
        "249" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_JustBlue_8821.png", thumb: "dist/img/thumbs/", label: "Just Blue", item_type: "Accent Laminate", model_code: "8821" },
        "250" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_JustRose_8858.png", thumb: "dist/img/thumbs/", label: "Just Rose", item_type: "Accent Laminate", model_code: "8858" },
        "251" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Lace_Gesso_Wood_Y0295K.png", thumb: "dist/img/thumbs/", label: "Lace Gesso Wood", item_type: "Accent Laminate", model_code: "Y0295K" },
        "252" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_LapisBlue_D417.png", thumb: "dist/img/thumbs/", label: "Lapis Blue", item_type: "Accent Laminate", model_code: "D417" },
        "253" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Leaf_Green_8820.png", thumb: "dist/img/thumbs/", label: "Leaf Green", item_type: "Accent Laminate", model_code: "8820" },
        "254" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Lost_Pine_Y0473.png", thumb: "dist/img/thumbs/", label: "Lost Pine", item_type: "Accent Laminate", model_code: "Y0473" },
        "255" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Marine_Blue_914.png", thumb: "dist/img/thumbs/", label: "Marine Blue", item_type: "Accent Laminate", model_code: "914" },
        "256" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Matrix_Blue_8795.png", thumb: "dist/img/thumbs/", label: "Matrix Blue", item_type: "Accent Laminate", model_code: "8795" },
        "257" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Milk_Paint_Y0054K.png", thumb: "dist/img/thumbs/", label: "Milk Paint", item_type: "Accent Laminate", model_code: "Y0054K" },
        "258" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Mill_Antique_Wood_0258K.png", thumb: "dist/img/thumbs/", label: "Mill Antique Wood", item_type: "Accent Laminate", model_code: "0258K" },
        "259" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Misty_Crown_Y0546.png", thumb: "dist/img/thumbs/", label: "Misty Crown", item_type: "Accent Laminate", model_code: "Y0546" },
        "260" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_New_Burgundy_914.png", thumb: "dist/img/thumbs/", label: "New Burgundy", item_type: "Accent Laminate", model_code: "1966" },
        "261" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Ocean_D502.png", thumb: "dist/img/thumbs/", label: "Ocean", item_type: "Accent Laminate", model_code: "D502" },
        "262" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Orange_Grove_D501.png", thumb: "dist/img/thumbs/", label: "Orange Grove", item_type: "Accent Laminate", model_code: "D501" },
        "263" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Oxidized_Silver_Y0393.png", thumb: "dist/img/thumbs/", label: "Oxidized Silver", item_type: "Accent Laminate", model_code: "Y0393" },
        "264" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_PaintScrape_Sky_8995.png", thumb: "dist/img/thumbs/", label: "Paint Scrape Sky", item_type: "Accent Laminate", model_code: "8995" },
        "265" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_PaintScrape_Steel_8994.png", thumb: "dist/img/thumbs/", label: "Paint Scrape Steel", item_type: "Accent Laminate", model_code: "8994" },
        "266" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Petrified_Wood_3474.png", thumb: "dist/img/thumbs/", label: "Petrified Wood", item_type: "Accent Laminate", model_code: "3474" },
        "267" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Phantom_Cocoa_8213K-12.png", thumb: "dist/img/thumbs/", label: "Phantom Cocoa", item_type: "Accent Laminate", model_code: "8213K-12" },
        "268" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Port_D14.png", thumb: "dist/img/thumbs/", label: "Port", item_type: "Accent Laminate", model_code: "D14" },
        "269" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Reclaimed_Oak_Planked_Y0302K.png", thumb: "dist/img/thumbs/", label: "Reclaimed Oak Planked", item_type: "Accent Laminate", model_code: "Y0302K" },
        "270" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Regimental_Red_D12.png", thumb: "dist/img/thumbs/", label: "Regimental Red", item_type: "Accent Laminate", model_code: "D12" },
        "271" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Repurposed_Oak_Plank_Y0364.png", thumb: "dist/img/thumbs/", label: "Oak Plank", item_type: "Accent Laminate", model_code: "Y0364" },
        "272" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Repurposed_Oak_Y0365.png", thumb: "dist/img/thumbs/", label: "Repurposed Oak", item_type: "Accent Laminate", model_code: "Y0365" },
        "273" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Revived_Oak_Y0301K.png", thumb: "dist/img/thumbs/", label: "Revived Oak", item_type: "Accent Laminate", model_code: "Y0301K" },
        "274" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Saddle_Oak_8206K-16.png", thumb: "dist/img/thumbs/", label: "Saddle Oak", item_type: "Accent Laminate", model_code: "8206K-16" },
        "275" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Salvage_Planked_Elm_9480.png", thumb: "dist/img/thumbs/", label: "Salvaged Plank Elm", item_type: "Accent Laminate", model_code: "9480" },
        "276" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Satin_Stainless_4830K-18.png", thumb: "dist/img/thumbs/", label: "Satin Stainless", item_type: "Accent Laminate", model_code: "4830K-18" },
        "277" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Scorched_Chestnut_Y0487.png", thumb: "dist/img/thumbs/", label: "Scorched Chestnut", item_type: "Accent Laminate", model_code: "Y0487" },
        "278" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Seasoned_Planked_Elm_6477.png", thumb: "dist/img/thumbs/", label: "Seasoned Planked Elm", item_type: "Accent Laminate", model_code: "6477" },
        "279" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Shadow_D96-60.png", thumb: "dist/img/thumbs/", label: "Shadow", item_type: "Accent Laminate", model_code: "D96-60" },
        "280" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Silver_Oak_Herringbone_9311.png", thumb: "dist/img/thumbs/", label: "Silver Oak Herringbone", item_type: "Accent Laminate", model_code: "9311" },
        "281" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Silver_Quartzite_9497-34.png", thumb: "dist/img/thumbs/", label: "Silver Quartzite", item_type: "Accent Laminate", model_code: "9497-34" },
        "282" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_SilverAlchemy_4860K-07.png", thumb: "dist/img/thumbs/", label: "Silver Alchemy", item_type: "Accent Laminate", model_code: "4860K-07" },
        "283" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Skyline_Walnut_7964K-12.png", thumb: "dist/img/thumbs/", label: "Skyline Walnut", item_type: "Accent Laminate", model_code: "7964K-12" },
        "284" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Slate_Grey_D91-60.png", thumb: "dist/img/thumbs/", label: "Slate Grey", item_type: "Accent Laminate", model_code: "D91-60" },
        "285" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Spectrum_Blue_851.png", thumb: "dist/img/thumbs/", label: "Spectrum Blue", item_type: "Accent Laminate", model_code: "851" },
        "286" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Spectrum_Green_7897.png", thumb: "dist/img/thumbs/", label: "Spectrum Green", item_type: "Accent Laminate", model_code: "7897" },
        "287" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Spectrum_Red_845.png", thumb: "dist/img/thumbs/", label: "Spectrum Red", item_type: "Accent Laminate", model_code: "854" },
        "288" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Steel_Mesh_4879-38.png", thumb: "dist/img/thumbs/", label: "Steel Mesh", item_type: "Accent Laminate", model_code: "4879-38" },
        "289" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Stop_Red_839.png", thumb: "dist/img/thumbs/", label: "Stop Red", item_type: "Accent Laminate", model_code: "839" },
        "290" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Sun_Bleached_Olive_Y0573.png", thumb: "dist/img/thumbs/", label: "Sun Bleached Olive", item_type: "Accent Laminate", model_code: "Y0573" },
        "291" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Tinted_Paper_Terrazzo_8812.png", thumb: "dist/img/thumbs/", label: "Tinted Paper Terazzo", item_type: "Accent Laminate", model_code: "8812" },
        "292" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Tonal_Paper_Terrazzo_8813.png", thumb: "dist/img/thumbs/", label: "Tonal Paper Terazzo", item_type: "Accent Laminate", model_code: "8813" },
        "293" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_VaporStrandz_4939K-18.png", thumb: "dist/img/thumbs/", label: "Vapor Strandz", item_type: "Accent Laminate", model_code: "4939K-18" },
        "294" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Vibrant_Green_6901.png", thumb: "dist/img/thumbs/", label: "Vibrant Green", item_type: "Accent Laminate", model_code: "6901" },
        "295" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Walnut_Heights_7965K-12.png", thumb: "dist/img/thumbs/", label: "Walnut Heights", item_type: "Accent Laminate", model_code: "7965K-12" },
        "296" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Western_Suede_4871-60.png", thumb: "dist/img/thumbs/", label: "Western Suede", item_type: "Accent Laminate", model_code: "4871-60" },
        "297" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Wide_Planked_Walnut_9479.png", thumb: "dist/img/thumbs/", label: "Planked Walnut", item_type: "Accent Laminate", model_code: "9479" },
        "298" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Xanadu_7945K-18.png", thumb: "dist/img/thumbs/", label: "Xanadu", item_type: "Accent Laminate", model_code: "7945K-18" },
        "299" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Zanzibar_7957K-78.png", thumb: "dist/img/thumbs/", label: "Zanzibar", item_type: "Accent Laminate", model_code: "7957K-78" },
        "300" : { img: "dist/img/Scene02_CobyHybrid/ACCENT/Scene02CobyHybrid_Accent_Zebrawood_7980K-18.png", thumb: "dist/img/thumbs/", label: "Zebrawood", item_type: "Accent Laminate", model_code: "7980K-18" },
        
    };
    var tableType = "Coby Hybrid";


}else{

    alert("using default data set");
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

        var tableType = "Union 2.0";

} //end if filename check

    

    var tableWidths = [ "18", "24", "30", "36", "42", "48", "60" ];
    var tableLengths = [ "42", "48", "60", "72", "84", "96", "120", "144", "168" ];
    var tableHeights = [ "18", "24", "29", "36", "42" ];

    


$(function() {


    
    // table model chooser dropdown
    $(".table-chooser-menu a").click(function(){

        alert('table choosen');
        $("#table-chooser").text($(this).text());
        $("#table-chooser").val($(this).text());
        //return false;
    });

    // add table types to table chooser dropdown
    //<div class="media"><div class="media-left"><a href="#"><img class="media-object" src="..." alt="..."></a></div><div class="media-body"><h4 class="media-heading">Media heading</h4></div></div>
        $(".table-chooser-menu").append('<li><a href="#">Casters</a></li>');
        $(".table-chooser-menu").append('<li><a href="#">Coby Hybrid</a></li>');
        $(".table-chooser-menu").append('<li><a href="#">Cubby</a></li>');
        $(".table-chooser-menu").append('<li><a href="#">Foot Rails</a></li>');
        $(".table-chooser-menu").append('<li><a href="#">Full Modesty</a></li>');
        $(".table-chooser-menu").append('<li><a href="#">Half Modesty</a></li>');
        $(".table-chooser-menu").append('<li><a href="#">Multi Heights</a></li>');
        $(".table-chooser-menu").append('<li><a href="#">No Hardware</a></li>');
        $("#table-chooser").css('text-transform','none');

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

        // update option count for quote button
        $("#option-count").append('i');

        if( $("#option-count").html() == "iiii" ){
            // poor mans validation
            // enable get quote button
            $("#buy").attr("disabled", false); 
        }

        e.preventDefault();
    });

            // normalize boostrap select styles on 'loaded' event

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

                $('#quote input:not(:radio), #quote textarea, #quote input[name=Power_Box]:checked,#quote select').each(function(index) {
                    //console.log($(this).attr('name') + " = " + $(this).val();
                    var name = $(this).attr('name');
                    name = name.trim();
                    var val = $(this).val();
                    val = val.trim();
                    var tableDetails = "";


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

