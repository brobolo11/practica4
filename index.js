$(document).ready(function () {
    $('.boton').click(function () {
        var searchTerm = $('.barra').val().toLowerCase();
        $('.nombre').each(function () {
            var text = $(this).text().toLowerCase();
            var tarjeta = $(this).closest('.tarjeta');
            if (text.indexOf(searchTerm) === -1) {
                tarjeta.hide();
            } else {
                tarjeta.show();
            }
        });
    });
});