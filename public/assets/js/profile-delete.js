$(document).on('click', '.deletebt', function(e) {

    // e.preventDefault(); // avoid to execute the actual submit of the form.
    
	$.ajax({
		url: '/profile-delete',
		method: 'POST',
		data: {id : $(this).attr('data-id')}
	}).then(function(message){
		window.location.href ='/'


	});

});

$(document).on('click', '.deletedt', function(e) {
	// e.preventDefault();

	$.ajax({
		url: '/donationsaccepted-delete',
		method: 'POST',
		data: {id : $(this).attr('data-id')}
	}).then(function(message){
		getProfile();
		initMap();

	});

});
$(document).on('click', '#logout', function(e) {

    // e.preventDefault(); // avoid to execute the actual submit of the form.
    
	$.ajax({
		url: '/logout',
		method: 'GET',
		//data: {id : $(this).attr('data-id')}
	}).then(function(res){
		window.location.href ='/'

	});

});