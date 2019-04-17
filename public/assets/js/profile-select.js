function getProfile(){
	$('div').empty();

	$.ajax({
		url: '/profile.json',
		method: 'GET'
	}).then(function(profile){
		for (var profileIndex in profile){
			

			var profileinfo = $('<div>'); 
				
				profileinfo.html(`Name: ${profile[profileIndex].name}`)

				$('#profile-info').html(profileinfo);

				var updateuserbt = $('<button>'); 
         		updateuserbt.attr('id', 'create_donation_center');
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
								  <br>`)

				$('#map-profile').hide();
				$('#update_profile').hide();
				$('#location-map').hide();
				$('#update_accepted_donations').hide();


				var deletebt = $('<button>'); //<button></button>
				deletebt.attr('class', 'delete');
				
				deletebt.text('Delete Profile'); //<button>delete</button>
				deletebt.attr('data-id', profile[profileIndex].id)
				//<button data-id="4">delete</button>

				locationinfo.append(deletebt);

				var editbt = $('<button>'); //<button></button>
				editbt.attr('class', 'edit');
				
				editbt.text('Edit Profile'); //<button>delete</button>
				//<button data-id="4">delete</button>
				
			

			var windowprofileinfo = $('<div>'); // <p></p>

				
				windowprofileinfo.html(`<br> Name: ${profile[profileIndex].name} 
								  <br> Street: ${profile[profileIndex].street}
							      <br> City: ${profile[profileIndex].city}
							      <br> State: ${profile[profileIndex].state}
							      <br> Zip: ${profile[profileIndex].zip}
								  <br> Days: ${profile[profileIndex].days}
								  <br> Hours: ${profile[profileIndex].hours}
								  <br> Instructions: ${profile[profileIndex].instructions} 
								  <br> <input type='button' id='save_location' onclick="saveLocation()" value='Save Location'/> `)

			
			$('#profile-infowindow').html(windowprofileinfo);

			if (profile[profileIndex].user_group == 'donation_center'){      
				$('#create_donation_center').hide();
				$('#map-profile').show();
				$('#location-info').html(locationinfo);
				locationinfo.append(editbt);
				$('#location-map').show();

			}
		}
	})
}
