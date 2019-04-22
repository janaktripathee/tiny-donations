function getProfile(){

	$.ajax({
		url: '/profile.json',
		method: 'GET'
	}).then(function(profile){
		for (var profileIndex in profile){
			

			var profileinfo = $('<div class="profile-container">'); 
				
				profileinfo.html(`Name: ${profile[profileIndex].name}`)

				$('#profile-info').html(profileinfo);

				var updateuserbt = $('<button>'); 
         		updateuserbt.attr('class', 'create_donation_center btn btn-dark btn-md');
         		updateuserbt.text('Create Donation Center');
         		$('#profile-info').append(updateuserbt);

			var locationinfo = $('<div>');	

				locationinfo.html(`Location Name: ${profile[profileIndex].location_name}
								  <br> Street: ${profile[profileIndex].street}
							      <br> City: ${profile[profileIndex].city}
							      <br> State: ${profile[profileIndex].state}
							      <br> Zip: ${profile[profileIndex].zip}
								  <br> Days: ${profile[profileIndex].days}
								  <br> Hours: ${profile[profileIndex].hours}
								  <br> Instructions: ${profile[profileIndex].instructions}
								  <br> `)

				$('#map-profile').hide();
				$('#update_profile').hide();
				$('#location-map').hide();
				$('#update_accepted_donations').hide();
				$('#location-map').hide();
				$('#donations-accepted').hide();
				$('#donations-accepted-button').hide();
				$('#add_profile_image').hide();
				$('#profile-map-container').hide();




				var deletebt = $('<button>'); //<button></button>
				deletebt.attr('class', 'btn btn-md btn-dark deletebt');
				
				deletebt.text('Delete'); //<button>delete</button>
				deletebt.attr('data-id', profile[profileIndex].id)
				//<button data-id="4">delete</button>

				locationinfo.append(deletebt);

				var editprofilebt = $('<button>'); //<button></button>
				editprofilebt.attr('class', 'btn btn-md btn-dark edit');
				
				editprofilebt.text('Edit'); //<button>delete</button>
				//<button data-id="4">delete</button>
				
				        				$('#edit-donations').hide();



			var windowprofileinfo = $('<div>'); // <p></p>

				
				windowprofileinfo.html(`Location Name: ${profile[profileIndex].location_name} 
								  <br> Street: ${profile[profileIndex].street}
							      <br> City: ${profile[profileIndex].city}
							      <br> State: ${profile[profileIndex].state}
							      <br> Zip: ${profile[profileIndex].zip}
								  <br> Days: ${profile[profileIndex].days}
								  <br> Hours: ${profile[profileIndex].hours}
								  <br> Instructions: ${profile[profileIndex].instructions} 
								  <br> <input type='button' id='save_location' onclick="saveLocation()" value='Save Location'/>
								   `)

			
			$('#profile-infowindow').html(windowprofileinfo);

		    var infowindow = new google.maps.InfoWindow();
		    var marker, profileIndex;
		

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
                  'Location Name: ' + profile[profileIndex].location_name + '<br>' +
                  'Street: ' + profile[profileIndex].street  + '<br>' +
                  'City: ' + profile[profileIndex].city + '<br>' +
                  'State: ' + profile[profileIndex].state + '<br>' +
                  'Zip: ' + profile[profileIndex].zip + '<br>' +
                  'Days: ' + profile[profileIndex].days + '<br>' +
                  'Hours: ' + profile[profileIndex].hours + '<br>' +
                  'Instructions: ' + profile[profileIndex].instructions + '<br>' 
                  );
                }
              })(marker, profileIndex));

			if (profile[profileIndex].user_group == 'donation_center'){      
				$('.create_donation_center').hide();
				$('#map-profile').show();
				$('#location-info').html(locationinfo);
				locationinfo.append(editprofilebt);
				$('#location-map').show();
				$('#update_accepted_donations').hide();
				$('#donations-accepted').show();
				$('#donations-accepted-button').show();
				$('#add_profile_image').show();
     			$('#donations-accepted').show();
     			$('#donations-accepted-button').show();
     			$('#profile-map-container').show();
     			$('#profile-donations-made').hide();
			}
		}
		$.ajax({
		url: '/donationsaccepted.json',
		method: 'GET'
	}).then(function(donationsaccepted){

		var editdonationsbutton = $('<button>'); 
			
			editdonationsbutton.attr('class', 'btn btn-md btn-dark edit-donations');
				
			editdonationsbutton.text('Add');
			$('#donations-accepted-button').append(editdonationsbutton);

			for (var donationsacceptedIndex in donationsaccepted){
			
			var donations_accepted = $('<div>');

			var deletedt = $('<a href=>'); 
				deletedt.attr('class', 'deletedt');
				
				deletedt.text('Delete'); 
				deletedt.attr('data-id', donationsaccepted[donationsacceptedIndex].id)

			donations_accepted.append(`${donationsaccepted[donationsacceptedIndex].donation_type} `)
			donations_accepted.append(deletedt);

			$('#donations-accepted').append(donations_accepted);
			
			};
		});
	})
}

function getDonations(){
	$.ajax({
			url: '/donationsmade.json',
			method: 'GET'
		}).then(function(donations_made){
			for (var donations_madeIndex in donations_made){
				var profile_donations_made = $('<div>')
				profile_donations_made.append(`${donations_made[donations_madeIndex].donation_type_made}
											   ${donations_made[donations_madeIndex].donation_value}
											   ${donations_made[donations_madeIndex].date}`)
				$('#profile-donations-made').append(profile_donations_made)
		}
	});
}
