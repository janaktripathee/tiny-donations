$(document).on('click', '.delete', function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.
    
	$.ajax({
		url: '/actors-delete',
		method: 'POST',
		data: {actor_id : $(this).attr('data-id')}
	}).then(function(message){
		getActors();
	});

});