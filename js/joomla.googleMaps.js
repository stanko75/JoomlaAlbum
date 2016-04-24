/*global window, google, document*/
(function (ns) {
    "use strict";
    var markers = [],
        map;

    function convertDMSToDD(degrees, minutes, seconds, direction) {
        var dd = degrees + minutes / 60 + seconds / (60 * 60);

        if (direction === "S" || direction === "W") {
            dd = dd * -1;
        } // Don't do anything for N or E
        return dd;
    }

    function setMarker(gpsPositionOfPicture, url) {
        var gLat,
            gLon,
            myLatlng,
            bounds,
            i;

        function clickMarkerHandler() {
            window.open(url, "_blank");
        }

        gLat = convertDMSToDD(gpsPositionOfPicture.latDegree,
                gpsPositionOfPicture.latMinute,
                gpsPositionOfPicture.latSecond,
                gpsPositionOfPicture.latDirection
            );

        gLon = convertDMSToDD(gpsPositionOfPicture.lonDegree,
                gpsPositionOfPicture.lonMinute,
                gpsPositionOfPicture.lonSecond,
                gpsPositionOfPicture.lonDirection
            );

        myLatlng = new google.maps.LatLng(gLat, gLon);

        markers.push(new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Hello World!'
        }));

        map.setCenter(markers[markers.length - 1].getPosition());

        bounds = new google.maps.LatLngBounds();
        for (i = 0; i < markers.length; i = i + 1) {
            bounds.extend(markers[i].getPosition());
        }

        map.fitBounds(bounds);

        google.maps.event.addListener(markers[markers.length - 1], 'click', clickMarkerHandler);
    }

    function GoogleMaps() {
        var mapOptions,
            mapCanvas;

        mapOptions = {
            zoom: 15,
            center: { lat: -34.397, lng: 150.644},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        mapCanvas = document.getElementById('map-canvas');

        if (!map) {
            map = new google.maps.Map(mapCanvas, mapOptions);
        }

        //google.maps.event.addListener(map, "mousedown", ns.Global.SettingsWindow.mouseDownHandler);

        //google.maps.event.addListener(map, "mouseup", ns.Global.SettingsWindow.mouseUpHandler);

        return {
            setMarker: setMarker,
            map: map,
            markers: markers
        };
    }

    ns.GoogleMaps = GoogleMaps;

}(window.joomla));
//@ sourceURL=joomla.googleMaps.js