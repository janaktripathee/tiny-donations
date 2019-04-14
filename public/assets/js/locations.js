
function  initLocations() {
    var mapOptions = {
        center: new google.maps.LatLng( 37.7749, -122.4194), 
        zoom: 14
     };
    
    var map = new google.maps.Map(document.getElementById("map-locations"), mapOptions);

    $.ajax({
    url: '/profile.json',
    method: 'GET'
    }).then(function(profile){

    var infowindow = new google.maps.InfoWindow();
    var marker, profileIndex;

    for (var profileIndex in profile){

      var lat = profile[profileIndex].lat;
      var lng = profile[profileIndex].lng;

      console.log(lat, lng);

      marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      map: map,
      });

      google.maps.event.addListener(marker, 'click', (function (marker, profileIndex) {
                return function () {
                infowindow.open(map, marker);
                infowindow.setContent(
                  'Name: ' + profile[profileIndex].name + '<br>' +
                  'Street: ' + profile[profileIndex].street  + '<br>' +
                  'City: ' + profile[profileIndex].city + '<br>' +
                  'State: ' + profile[profileIndex].state + '<br>' +
                  'Zip: ' + profile[profileIndex].zip + '<br>' +
                  'Days: ' + profile[profileIndex].days + '<br>' +
                  'Hours: ' + profile[profileIndex].hours + '<br>' +
                  'Instructions: ' + profile[profileIndex].instructions + '<br>' +
                  "<input type='button' id='save_location' value='Donate Here'>"
                  );
                }
              })(marker, profileIndex));
    
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          handleLocationError(false, infoWindow, map.getCenter());
        }
      
    };
  });
}




