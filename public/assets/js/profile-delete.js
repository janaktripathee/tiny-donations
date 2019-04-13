$(document).on('click', '.delete', function(e) {

    // e.preventDefault(); // avoid to execute the actual submit of the form.
    
	$.ajax({
		url: '/profile-delete',
		method: 'POST',
		data: {id : $(this).attr('data-id')}
	}).then(function(message){
		getProfile();
		initMap();

	});

});