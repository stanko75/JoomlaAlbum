/*global google, document*/
(function (){
    "use strict";

    var mapOptions,
        mapCanvas,
        map;

    mapOptions = {
        zoom: 6,
        center: { lat: -34.397, lng: 150.644},
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    mapCanvas = document.getElementById('map-canvas');

    if (!map) {
        map = new google.maps.Map(mapCanvas, mapOptions);
    }

}());