/*global jQuery, document, setInterval, window, clearInterval*/
(function (ns) {
    "use strict";
    var readEXIFdataCallback,
        googleMapsCallback,
        intervalHandler,
        milosevImagesTrackSelector = jQuery("#milosevImagesTrack");

    readEXIFdataCallback = new ns.ReadEXIFdata();

    googleMapsCallback = new ns.GoogleMaps();

    function animateImagesTrack() {
        var clsMilosev = jQuery(".milosev");
        milosevImagesTrackSelector.append('<img src="' + clsMilosev[0].src + '" class="milosev">');
        clsMilosev.eq(0).remove();
        clsMilosev.eq(2).css("border", "14px solid #333");
        clsMilosev.eq(1).css("border", "");
        ns.Visualize(clsMilosev.eq(2)[0].src, readEXIFdataCallback.readImage, googleMapsCallback.setMarker);
    }

    function intervalManager(startInterval) {
        if (startInterval) {
            intervalHandler = setInterval(animateImagesTrack, 500);
        } else {
            clearInterval(intervalHandler);
        }
    }

    jQuery.getJSON("js/files.json", function (data) {
        data.forEach(function (file) {
            jQuery("#milosevImagesTrack").append('<img src="' + file + '" class="milosev">');
        });
        intervalManager(true);
    });

    milosevImagesTrackSelector.mouseenter(function () {
        intervalManager(false);
    });

    milosevImagesTrackSelector.mouseleave(function () {
        intervalManager(true);
    });

}(window.joomla));
//@ sourceURL=joomla.slider.js