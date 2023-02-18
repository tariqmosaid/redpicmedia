function open_modal(pack) {

    select = { 'consultation': 0, 'video': 1, 'photo': 2, 'pack-1': 3, 'pack-2': 4, 'pack-3': 5, 'pack-4': 6, 'pack-5': 7, 'pack-6': 8 };
    $('#service option:eq(' + select[pack] + ')').prop('selected', true);

    selected = $('#service').find(":selected").val();

    $('form#sendorder .nice-select.form-control span.current').html(selected)

    $('form#sendorder .nice-select.form-control .list .option').removeClass('selected focus');

    $('[data-value="' + selected + '"]').addClass('selected focus');

    $('#modalsendorder').modal('show');
}




$(document).on('submit','body #sendorder',function(e){

    var formData = new FormData();
  

    e.preventDefault();
    e.stopPropagation();

    var name = $('#name', this).val();
    var phone = $('#phone', this).val();
    var service = $('#service').find(":selected").val();


    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('service', service);

    $.ajax({
        url: '../assets/php/index.php',
        type: 'POST',
        processData: false, // important
        contentType: false, // important
        data: formData,
        cache: false,
        beforeSend: function() {
            $('.order-form i').show();
            $('.order-form button').attr('disabled', true);
        },
        success: function(response) {
            $('.order-form i').hide();
            $('.order-form').trigger("reset");
            $('.order-form button').attr('disabled', false);
            window.location = '/thank-you.html';
        },
        error: function(response) {
            alert('an error! please try again');
            $('.order-form button').attr('disabled', false);
        }
    });

    return false;
});