var monMarker;
// On déclare la variable monMarker
// On défini une function initMap
function initMap() {
    // On déclare les coordonnées avec les latitudes et longitudes des emplacement
    var coordonnees = [
        { lat: 50.8554356, lng: 3.3391595 },
        { lat: 50.8607915, lng: 4.3162878 },
        { lat: 50.4507615, lng: 2.9382878 },
        { lat: 50.7668915, lng: 5.3366878 },
        { lat: 50.3607915, lng: 8.3362878 },
        { lat: 50.5407915, lng: 4.6362878 },
        { lat: 51.6606515, lng: 4.2367854 },
        { lat: 50.8657915, lng: 5.3562878 },
        { lat: 51.8627915, lng: 7.3462878 },
        { lat: 50.9604915, lng: 2.3262878 }
    ];
    // On défini une variable endroit et on lui assigne une attitude et longitude
    var endroit = new google.maps.LatLng(50.8547967, 4.3414032);
    // On defini une variable optionMap qui va définir les attribut de l'objet
    var optionMap = { zoom: 10, center: endroit };

    var map = new google.maps.Map(document.getElementById('map'), optionMap);
    var opt = { minZoom: 4, maxZoom: 12 };
    map.setOptions(opt);
    var size = new google.maps.Size(35, 35);
    var monIcon = {
        url: ('../assets/img/unnamed.jpg'),
        scaledSize: size
    }
    var infoWindow = new google.maps.InfoWindow();
    var markerClick = function (e) {
        let lat = this.position.lat();
        let lng = this.position.lng();
        let mark = this;
        let requete = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyCBHYZeFM7ptfNmCvSEuA1G7I8D1kHi3r4";
        $.ajax({
            url: requete
        }).done(function (data) {
            infoWindow.setContent(data.results[0].formatted_address);
            if (infoWindow.getAnchor() == mark) {
                infoWindow.close()
            } else {
                infoWindow.open(map, mark);//si on met this > il se rapporte à la fonction done 
            }
        });
    }
    coordonnees.forEach(function (coords) {
        var markerOption = {
            position: coords,
            map: map,
            icon: monIcon
        }
        var marker = new google.maps.Marker(markerOption);
        marker.addListener('click', markerClick);
    });
}
