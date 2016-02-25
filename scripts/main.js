'use strict';

$(function () {
    
    $('[data-order]').each(function() {
        var progressVal = $(this).attr('data-order');
        var statusVal = $(this).attr('data-status');
        $(this).children().each(function(i, element) {
            if (progressVal > i) {
                if (statusVal > 0 && progressVal == (i+1)) {
                    $(element).addClass('status');
                    //$(element).children().find('i').addClass('fa-times');
                    $(element).find('span').css("background", "url(img/icon-x.svg) center no-repeat");
//.css( "background": "url(../img/checkbox-tick.svg) no-repeat" );
                }
                else {                     
                    $(element).addClass('status');
                    //$(element).children().find('i').addClass('fa-check');
                    $(element).find('span').css("background", "url(img/checkbox-tick.svg) center no-repeat");
                }
            }
        });
    }); 

    if ($('#tablaConsulta').length) {
        $('#tablaConsulta').DataTable({
            ordering: true,
            responsive: true
        });
    }

    if ($('#tablaCaptura').length) {
         $('#tablaCaptura').DataTable({
            ordering: true,
            responsive: true
        });
    }

    if ($('#tablaListado').length) {
        var table = $('#tablaListado').DataTable({
            ordering: true,
            responsive: false
        });

        $('#tablaListado thead th').each(function () {
            var title = $(this).text();
            $(this).html('<div class="head-text">' + title + '</div>' + '<input type="text" placeholder="Buscar" />');
        });

        $('#tablaListado thead th:first').find('div').addClass('first');
        $('#tablaListado thead th:last').find('div').addClass('last');

        table.columns().every(function () {
            var that = this;

            $('input', this.header()).on('keyup change', function () {
                if (that.search() !== this.value) {
                    that
                        .search(this.value)
                        .draw();
                }
            });
        });
    }

    $('input[type="search"]').attr('placeholder', 'Buscar');

    $(".borrar-referidoconfigreset").on("click", function () {
        event.stopPropagation();
        $form.find('input:text, input:password, select, textarea').val('');
        $form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
    });

    $("#hero-carousel").owlCarousel({

        autoPlay : 3000,
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });

    $("#presentation-image").owlCarousel({

        autoPlay : 3000,
        navigation: false,
        slideSpeed: 0,
        paginationSpeed: 0,
        singleItem: true
    });

    $(".form-capturar").validate({
        ignore: [],
        errorElement: 'span',
        errorPlacement: function (error, element) {
            if (element.attr("name") === "Privacy") {
                error.insertAfter("label[for='inputPrivacy']");
            } else {
                error.insertAfter(element);
            }
        },
        rules: {
            name: {
                required: true,
                regex: /[a-zA-Z]+/
            },
            aPaterno: {
                required: true,
                regex: /[a-zA-Z]+/
            },
            aMaterno: {
                required: true,
                regex: /[a-zA-Z]+/
            },
            email: {
                required: true
            },
            phone: {
                required: true,                
                regex: /\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*/
            },
            pais: {
                required: true
            },
            Estado: {
                required: true
            },
            Ciudad: {
                required: true,
                regex: /[a-zA-Z]+/
            },
            PromoCode: {
                required: true
            },
            NumeroReferidor: {
                required: true,
                regex: /\d+/
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
        //success: "valid",
        submitHandler: function (form) {
            $('.success').show();
            form.submit();
        },
        highlight: function () {

        },
        messages: {
            name: {
                required: "Campo requerido.",
                regex: "Formato incorrecto"
            },
            aPaterno: {
                required: "Campo requerido.",
                regex: "Formato incorrecto"
            },
            aMaterno: {
                required: "Campo requerido.",
                regex: "Formato incorrecto"
            },
            email: {
                required: "Campo requerido.",
                email: "Este correo es inv&aacute;lido."
            },
            phone: {
                required: "Campo requerido.",
                regex: "Telefono invalido"
            },
            pais: {
                required: "Favor de elegir una opci&oacute;n."
            },
            Estado: {
                required: "Favor de elegir una opci&oacute;n."
            },
            Ciudad: {
                required: "Campo requerido.",
                regex: "Formato incorrecto"
            },
            PromoCode: {
                required: "Favor de elegir una opci&oacute;n."
            },
            NumeroReferidor: {
                required: "Campo requerido.",
                regex: "Formato incorrecto"
            },
            TipoReferidor: {
                required: "Favor de elegir una opci&oacute;n."
            },
            Privacy: {
                required: "Campo requerido"
            }
        }
    });

    $.validator.addMethod(
        "regex",
        function (value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Verifice sus datos."
    );
    
    $(".form-inline").validate({
        rules: {
            name: {
                required: true,
                regex: /[a-zA-Z]+/
            },
            lastName: {
                required: true,
                regex: /[a-zA-Z]+/
            },
            email: {
                required: true
            },
            phone: {
                required: true,
                regex: /\b\d{3}[- .]?\d{3}[- .]?\d{4}\b/
            },
            state: {
                required: true
            },
            city: {
                required: true,
                regex: /[a-zA-Z]+/
            },
            numSocio: {
                required: true
            }

        },
        success: function () {
            //  $('.success').show();
        },
        submitHandler: function (form) {
            $('.success').show();
            form.submit();
        },
        highlight: function () {

        },
        messages: {
            name: {
                required: "Campo requerido.",
                regex: "Formato incorrecto"
            },
            lastName: {
                required: "Campo requerido.",
                regex: "Formato incorrecto"
            },
            email: {
                required: "Campo requerido.",
                email: "Este correo es inv&aacute;lido."
            },
            phone: {
                required: "Campo requerido.",
                regex: "Telefono invalido"
            },
            state: {
                required: "Favor de elegir una opci&oacute;n."
            },
            city: {
                required: "Campo requerido.",
                regex: "Formato incorrecto"
            },
            numSocio: {
                required: "Campo requerido."
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
        var socio = $('#inputNumSocio').val();
        var apellidos = $('#inputApellidos').val();
        var spanError = $("span.message-form").attr("data-error-message");
        var spanSuccess = $("span.message-form").attr("data-success-message");

        if (nombres.length || socio.length || apellidos.length > 0) {
            $(".message-form").removeClass('error-m').addClass('success-m');
            $(".message-form").text("Hemos recibido los datos correctamente").fadeIn(500).show();
            console.log("Paso");
            event.preventDefault();
        } else {
            $(".message-form").removeClass('success-m').addClass('error-m');
            $(".message-form").text("Llena al menos uno de los siguientes campos para ver los referidos").fadeIn(500).show();
            console.log("No Paso");
            event.preventDefault();
        }


    });

});