/*global jQuery, document, setInterval, window*/
(function (ns) {
    "use strict";
    jQuery.getJSON("js/files.json", function (data) {
        data.forEach(function (file) {
            jQuery("#milosevImagesTrack").append('<img src="' + file + '" class="milosev">');
        });
        setInterval(function () {
            var clsMilosev = jQuery(".milosev");
            jQuery("#milosevImagesTrack").append('<img src="' + clsMilosev[0].src + '" class="milosev">');
            clsMilosev.eq(0).remove();
            clsMilosev.eq(2).css("border", "14px solid #333");
            clsMilosev.eq(1).css("border", "");
            ns.Visualize(clsMilosev.eq(2), readEXIFdataCallback.readImage, googleMapsCallback.setMarker);
        }, 500);
    });
}(window.joomla));