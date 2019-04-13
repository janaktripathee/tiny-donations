function getProfile(){
	$('div').empty();

	$.ajax({
		url: '/profile.json',
		method: 'GET'
	}).then(function(profile){
		for (var profileIndex in profile){
			

			var profileinfo = $('<div>'); // <p></p>

				
				profileinfo.html(`<br> Name: ${profile[profileIndex].name} 
								  <br> Street: ${profile[profileIndex].street}
							      <br> City: ${profile[profileIndex].city}
							      <br> State: ${profile[profileIndex].state}
							      <br> Zip: ${profile[profileIndex].zip}
								  <br> Days: ${profile[profileIndex].days}
								  <br> Hours: ${profile[profileIndex].hours}
								  <br> Instructions: ${profile[profileIndex].instructions}`)


				var bt = $('<button>'); //<button></button>
				bt.attr('class', 'delete');
				
				bt.text('delete'); //<button>delete</button>
				bt.attr('data-id', profile[profileIndex].id)
				//<button data-id="4">delete</button>

				profileinfo.append(bt);
			
			$('#profile-info').html(profileinfo);

			var windowprofileinfo = $('<div>'); // <p></p>

				
				windowprofileinfo.html(`<br> Name: ${profile[profileIndex].name} 
								  <br> Street: ${profile[profileIndex].street}
							      <br> City: ${profile[profileIndex].city}
							      <br> State: ${profile[profileIndex].state}
							      <br> Zip: ${profile[profileIndex].zip}
								  <br> Days: ${profile[profileIndex].days}
								  <br> Hours: ${profile[profileIndex].hours}
								  <br> Instructions: ${profile[profileIndex].instructions} 
								  <br> <input type='button' id='save_location' onclick="saveLocation()" value='Save'/> `)

			
			$('#profile-infowindow').html(windowprofileinfo);

		}
	})
}
