
$(document).on('click', '#create_donation_center', function(e) {
     $('#update_profile').show();
     $('#map-profile').show();

});

$('#update_profile').submit(function(e) {

    // e.preventDefault(); // avoid to execute the actual submit of the form.
    var cn = $( "#update_profile input[id='location_name']" ).val();
    var cb = $( "#update_profile input[id='street']" ).val();
    var cj = $( "#update_profile input[id='city']" ).val();
    var cl = $( "#update_profile input[id='state']" ).val();
    var cg = $( "#update_profile input[id='zip']" ).val();
    var ca = $( "#update_profile input[id='days']" ).val();
    var cm = $( "#update_profile input[id='hours']" ).val();
    var cv = $( "#update_profile input[id='instructions']" ).val();

    $.ajax({
        url: '/profile-update',
        method: 'POST',
        data: {location_name: cn, street: cb, city: cj, state: cl, zip: cg, days: ca, hours: cm, instructions: cv},

    }).then(function(message){
        initMap();
        getProfile();

    });

});

$(document).on('click', '.edit', function(e) {
         $('#update_profile').show();
     });

