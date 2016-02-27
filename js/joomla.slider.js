/*global jQuery, document, setInterval*/
(function () {
    "use strict";
    jQuery.getJSON("Download/googleMaps/js/files.json", function (data) {
        data.forEach(function (file, index) {
            jQuery("#milosevImagesTrack").append('<img src="' + file + '" class="milosev">');
        });
        setInterval(function () {
            jQuery("#milosevImagesTrack").append('<img src="' + jQuery(".milosev")[0].src + '" class="milosev">');
            jQuery(".milosev").eq(0).remove();
            jQuery(".milosev").eq(2).css("border", "14px solid #333");
            jQuery(".milosev").eq(1).css("border", "");
            Visualize
        }, 500);
    });
}());