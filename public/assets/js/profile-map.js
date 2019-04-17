      var map;
      var marker;
      var infowindow;
      var messagewindow;

      function initMap() {
        var sanfrancisco = {lat: 37.7749, lng: -122.4194};

        map = new google.maps.Map(document.getElementById('map-profile'), {
          center: sanfrancisco,
          zoom: 13
        });

        infowindow = new google.maps.InfoWindow({
          content: document.getElementById('profile-infowindow')
        });

        messagewindow = new google.maps.InfoWindow({
          content: document.getElementById('message')
        });

        

           google.maps.event.addListener(map, 'click', function(event) {
          if ( marker ) {
          marker.setPosition(event.latLng);
        } else {

          marker = new google.maps.Marker({
            position: event.latLng,
            map: map
             });
          };

          // var latlng = marker.getPosition();
          var lat = marker.getPosition().lat();
          var lng = marker.getPosition().lng();
          

          google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
            document.getElementById('profile-infowindow').style.display = "block";

          });
        });
        

        // Try HTML5 geolocation.
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
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }
      

function saveLocation() {
  

    var cx = marker.getPosition().lat();
    var cy = marker.getPosition().lng();
    console.log(cx,cy);

   $.ajax({
    url: '/profile-update',
    method: 'POST',
        data: {lat : cx, lng: cy},

    }).then(function(message){
        getProfile();
        initMap();

    });

}


    

