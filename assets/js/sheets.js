$('#call-to-action').submit(function (e) {

    var formData = new FormData();

    e.preventDefault();
    e.stopPropagation();

    var fullname     = $('#fullname', this).val();
    var phone        = $('#phone', this).val();    
    var service_type = $('#service_type', this).val();
    var note         = $('#note', this).val();

    formData.append('fullname', fullname);
    formData.append('phone', phone);    
    formData.append('service_type', service_type);
    formData.append('note', note);


    $.ajax({
        url: 'php/index.php',
        type: 'POST',
        processData: false, // important
        contentType: false, // important
        data: formData,
        cache: false,
        beforeSend: function () {
            $('#call-to-action svg').show();
            $('#call-to-action i').show();
            $('#call-to-action').attr('disabled', true);
        },
        success: function (response) {
            $('#call-to-action .fa').hide();
            $('body #call-to-action').trigger("reset");
        },
        error: function (response) {
            alert('an error! please try again');
            $('#call-to-action').attr('disabled', false);
        }
    });

    return false;
});

/*****************************************************************/

$('#contact-form').submit(function (e) {

    var formData = new FormData();

    e.preventDefault();
    e.stopPropagation();

    var fullname            = $('#fullname', this).val();
    var phone               = $('#phone', this).val();    
    var service_type        = $('#service_type', this).val();
    var contact_message     = $('#contact-message', this).val();

    formData.append('fullname', fullname);
    formData.append('phone', phone);    
    formData.append('service_type', service_type);
    formData.append('contact_message', contact_message);


    $.ajax({
        url: 'php/contact.php',
        type: 'POST',
        processData: false, 
        contentType: false, 
        data: formData,
        cache: false,
        beforeSend: function () {
            $('#contact-form svg').show();
            $('#contact-form i').show();
            $('#contact-form').attr('disabled', true);
        },
        success: function (response) {
            $('#contact-form .fa').hide();
            $('body #contact-form').trigger("reset");
            $('#nadi').modal('show');
        },
        error: function (response) {
            alert('an error! please try again');
            $('#contact-form').attr('disabled', false);
        }
    });

    return false;
});