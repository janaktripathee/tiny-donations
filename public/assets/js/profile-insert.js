
$(document).on('click', '.create_donation_center', function(e) {
     $('#update_profile').show();
     $('#map-profile').show();
     $('#update_accepted_donations').hide();
     $('.create_donation_center').hide();



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

        // url: '/profile-insert-accepted-donations',
        // method: 'POST',
        // data: {donation_type: cx, quantity: cz},

    
    }).then(function(message){
        initMap();
        getProfile();
    });
});

$('#update_accepted_donations').submit(function(e) {

    var ct = $( "#update_accepted_donations input[name='donation_type[]']" ).val();
   
    // var cx = $("#update_accepted_donations input[name='donation_type[]']").map(function(){return $(this).val();}).get();
    // var cz = $("#update_accepted_donations input[name='quantity[]']").map(function(){return $(this).val();}).get();

    
    // for (var i = 0; i < cxv.length; i++) {
    //     console.log(cxv[i]);
    // }
    // for (var i = 0; i < czv.length; i++) {
    //     console.log(czv[i]);
    // }

 
    $.ajax({
        url: '/profile-insert-accepted-donations',
        method: 'POST',
        data: {'donation_type': ct},

    }).then(function(message){
        initMap();
        getProfile();

    });

});

$('#close-donations-accepted').hide();


$(document).on('click', '.edit', function(e) {
         $('#update_profile').show();

     });
$(document).on('click', '.edit-donations', function(e) {
        $('#update_accepted_donations').show();
        $('#close-donations-accepted').show();
        $('.edit-donations').hide();

     });
$(document).on('click', '#close-update-profile', function(e) {

$('#update_profile').hide();
});
$(document).on('click', '#close-donations-accepted', function(e) {
        $('#close-donations-accepted').hide();
        $('.edit-donations').show();
        $('#update_accepted_donations').hide();
});



