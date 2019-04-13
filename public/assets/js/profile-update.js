$('#edit_profile').submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var cn = $( "#edit_profile input[id='name']" ).val();


	$.ajax({
		url: '/profile-edit/' + cn,
		method: 'POST',
		data: {name : cn},
	}).then(function(message){
		getProfile();
	});

});