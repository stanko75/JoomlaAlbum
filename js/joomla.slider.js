/*global jQuery, document, setInterval*/
(function (ns) {
    "use strict";
    jQuery.getJSON("js/files.json", function (data) {
        data.forEach(function (file, index) {
            jQuery("#milosevImagesTrack").append('<img src="' + file + '" class="milosev">');
        });
        setInterval(function () {
            jQuery("#milosevImagesTrack").append('<img src="' + jQuery(".milosev")[0].src + '" class="milosev">');
            jQuery(".milosev").eq(0).remove();
            jQuery(".milosev").eq(2).css("border", "14px solid #333");
            jQuery(".milosev").eq(1).css("border", "");
            ns.Visualize
        }, 500);
    });
}(window.joomla));