
function initLocations() {
    var mapOptions = {
        center: new google.maps.LatLng( 37.7749, -122.4194), 
        zoom: 12
     };
    
    var map = new google.maps.Map(document.getElementById("map-locations"),
                                  mapOptions);
    
    buscarCoords(function(resultsObject) {
        var coordsArray = ConvertFromGrdToGoogle(resultsObject.result);
        for (var i = 0; i < coordsArray.length; i++) {
            var coords = coordsArray[i].split(", ");
            new google.maps.Marker({
                position: new google.maps.LatLng(parseFloat(coords[0]), parseFloat(coords[1])),
                map: map
            });
        };
        
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

function buscarCoords(callback) {
     /* var result = result;
      connection.query('SELECT * FROM monitoreo_actual', function(err, result){
        if(err){
          console.log(err);
        }
          callback({result:result});
      });*/
    
    // Simulate the sql access and respond in 1 second;
    setTimeout(function() {
        var response = {result: {}};
        callback(response);
    }, 1000);
}

function ConvertFromGrdToGoogle(result) {
    // Your code here
    
    // I return this hardcoded simulating you process.
    return [ '37.8287810797496, -122.26560568468084',
              ];
}


