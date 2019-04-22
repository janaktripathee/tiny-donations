function makeDonation(){
$('.modal').modal('show')

$.ajax({
		url: '/profile.json',
		method: 'GET'
	}).then(function(profile){
		for (var profileIndex in profile){

			$.ajax({
			url: '/donationsaccepted.json',
			method: 'GET'
		}).then(function(donationsaccepted){
			
					for (var donationsacceptedIndex in donationsaccepted){
			
							var modalprofileinfo = $('<p>');
				
							modalprofileinfo.append(`Location:<br>${profile[profileIndex].location_name} <br>
													${profile[profileIndex].street}<br>
													${profile[profileIndex].city},${profile[profileIndex].zip}<br>
													 ${profile[profileIndex].state}<br>
													 Donation: <br>
													 <input type="checkbox" id="donation_type" value="${donationsaccepted[donationsacceptedIndex].donation_type}"> <label for="donation_type">${donationsaccepted[donationsacceptedIndex].donation_type}</label>
													 <div class="form-group">
												    <label for="donation_value">Donation Value </label>
												    <input type="text" class="form-control" id="donation_value" placeholder="ex: $50.00 ">
												    <span style="float:right; font-size: 75%; position: relative">No account? <a href='/signup'>Sign up</a> to save your donations or <a href="javascript:printScreen()">print </a>this page.</span>

												  </div>`);

					$('.modal-body').html(modalprofileinfo);
				};
			});
		}
	});
}

function completeDonation(){
    var cq = $( ".modal-body input[id='donation_value']" ).val();
    var cw = formatedMysqlString = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');
    var cg = $( "#donation_type").val();
	console.log( formatedMysqlString );
    console.log(cg);

    $.ajax({
        url: '/complete-donation',
        method: 'POST',
        data: {donation_type_made: cg,donation_value: cq, date: cw},

    }).then(function(message){
        window.open.href ='/profile'
        getProfile();
    });
 
}


function printScreen() {
  window.print();
}
