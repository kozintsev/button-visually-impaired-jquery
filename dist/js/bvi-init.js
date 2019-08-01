jQuery(document).ready(function($){
    $.bvi({
        "bvi_theme":"white",
        "bvi_font":"arial",
        "bvi_font_size":16,
        "bvi_letter_spacing":"normal",
        "bvi_line_height":"normal",
        "bvi_images":"grayscale",
        "bvi_reload":false,
        "bvi_fixed":false,
        "bvi_voice":true,
        "bvi_flash_iframe":true,
        "bvi_hide":true,
        "bvi_target_click": function(){
            console.log("bvi_target_click callback test");
        },
        "bvi_panel_close_click" : function() {
            console.log("bvi_panel_close_click callback test"); 
        }
    });
});