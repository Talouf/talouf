
var monMarker;

var marker;

function initMap() {

    var coordonnees = [
        { lat: 50.8554356, lng: 3.3391595 },
    ];

    var endroit = new google.maps.LatLng(50.8547967, 4.3414032);

    var optionMap = { zoom: 10, center: endroit };

    var map = new google.maps.Map(document.getElementById('map'), optionMap);
    var size = new google.maps.Size(35, 35);
    var monIcon = {
        url: ('image.jpg'),
        scaledSize: size
    }
    var infoWindow = new google.maps.InfoWindow();
    coordonnees.forEach(function (coords) {
        var markerOption = {
            position: coords,
            map: map,
            icon: monIcon
        }
        var marker = new google.maps.Marker(markerOption);
        marker.addListener('click', function () {
            let lat = this.position.lat();
            let lng = this.position.lng();
            let mark = this;
        });
        monMarker = marker;
    });

}
