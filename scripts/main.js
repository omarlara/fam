'use strict';

$(function () {
    
    $(".borrar-referidoconfigreset").on("click", function () {
        event.stopPropagation();
        $form.find('input:text, input:password, select, textarea').val('');
        $form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
    });

    $("#hero-carousel").owlCarousel({

        //autoPlay : 3000,
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });

    $("#presentation-image").owlCarousel({

        //autoPlay : 3000,
        navigation: false,
        slideSpeed: 0,
        paginationSpeed: 0,
        singleItem: true
    });

    $(".form-capturar").validate({
        ignore: [],
        errorElement: 'span',
        rules: {
            name: {
                required: true
            },
            aPaterno: {
                required: true
            },
            aMaterno: {
                required: true
            },
            email: {
                required: true
            },
            phone: {
                required: true
            },
            pais: {
                required: true
            },
            Estado: {
                required: true
            },
            Ciudad: {
                required: true
            },
            PromoCode: {
                required: true
            },
            NumeroReferidor: {
                required: true
            },
            TipoReferidor: {
                required: true
            },
            Privacy: {
                required: true
            }

        },
        success: function () {
            //$('.success').show();
        },
        highlight: function () {

        },
        messages: {
            name: {
                required: "Campo requerido"
            },
            aPaterno: {
                required: "Campo requerido"
            },
            aMaterno: {
                required: "Campo requerido"
            },
            email: {
                required: "Campo requerido",
                email: "Este correo es inválido."
            },
            phone: {
                required: "Campo requerido"
            },
            pais: {
                required: "Favor de elegir una opción."
            },
            Estado: {
                required: "Campo requerido"
            },
            Ciudad: {
                required: "Campo requerido"
            },
            PromoCode: {
                required: "Campo requerido"
            },
            NumeroReferidor: {
                required: "Campo requerido"
            },
            TipoReferidor: {
                required: "Favor de elegir una opción."
            },
            Privacy: {
                required: "Campo requerido"
            }
        }
    });

    $(".form-inline").validate({
        rules: {
            name: {
                required: true
            },
            lastName: {
                required: true
            },
            email: {
                required: true
            },
            phone: {
                required: true
            },
            state: {
                required: true
            },
            city: {
                required: true
            }

        },
        success: function () {
            //$('.success').show();
        },
        highlight: function () {

        },
        messages: {
            name: {
                required: "Campo requerido"
            },
            lastName: {
                required: "Campo requerido"
            },
            email: {
                required: "Campo requerido",
                email: "Este correo es inválido."
            },
            phone: {
                required: "Campo requerido"
            },
            state: {
                required: "Favor de elegir una opción."
            },
            city: {
                required: "Campo requerido"
            }

        }
    });

    $(".toggle-control > span").on("click", function () {
        $(this).parent().find('span').removeClass('active');
        $(this).parent().find('input').val($(this).text());
        $(this).addClass('active');

    });

    $('.submit-minivacs').on("click", function () {});

    $("form.form-minivacs").submit(function (event) {

        var nombres = $('#inputNombres').val();
        var email = $('#inputEmail').val();
        var apellidos = $('#inputApellidos').val();
        var spanError = $("span.message-form").attr("data-error-message");
        var spanSuccess = $("span.message-form").attr("data-success-message");

        if (nombres.length || email.length || apellidos.length > 0) {
            $(".message-form").removeClass('error-m').addClass('success-m');
            $(".message-form").text("Hemos recibido los datos correctamente").fadeIn(500).show();
            console.log("Paso");
            event.preventDefault();
        } else {
            $(".message-form").removeClass('success-m').addClass('error-m');
            $(".message-form").text("Al menos un campo es requerdo").fadeIn(500).show();
            console.log("No Paso");
            event.preventDefault();
        }


    });

});
