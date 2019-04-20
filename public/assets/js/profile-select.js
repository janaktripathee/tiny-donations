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
				$('#location-map').hide();
				$('#donations-accepted').hide();



				var deletebt = $('<button>'); //<button></button>
				deletebt.attr('class', 'delete');
				
				deletebt.text('Delete'); //<button>delete</button>
				deletebt.attr('data-id', profile[profileIndex].id)
				//<button data-id="4">delete</button>

				locationinfo.append(deletebt);

				var editprofilebt = $('<button>'); //<button></button>
				editprofilebt.attr('class', 'edit');
				
				editprofilebt.text('Edit'); //<button>delete</button>
				//<button data-id="4">delete</button>
				
				        				$('#edit-donations').hide();


			var windowprofileinfo = $('<div>'); // <p></p>

				
				windowprofileinfo.html(`Name: ${profile[profileIndex].name} 
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
				locationinfo.append(editprofilebt);
				$('#location-map').show();
				$('#update_accepted_donations').show();
				$('#donations-accepted').show();
				$('.edit-donations').show();


			}
		}
	})

    
	$.ajax({
		url: '/donationsaccepted.json',
		method: 'GET'
	}).then(function(donationsaccepted){

		var editdonationsbutton = $('<button>'); //<button></button>
				editdonationsbutton.attr('class', 'edit-donations');
				
				editdonationsbutton.text('Edit');
			$('#donations-accepted-button').append(editdonationsbutton);
			        				$('.edit-donations').hide();

		for (var donationsacceptedIndex in donationsaccepted){
			

			var donations_accepted = $('<div>');
			donations_accepted.append(`${donationsaccepted[donationsacceptedIndex].donation_type} Qty: ${donationsaccepted[donationsacceptedIndex].quantity}`)
			$('#donations-accepted').append(donations_accepted);

			// $('#profile-infowindow').append(donations_accepted);
};
});
}
