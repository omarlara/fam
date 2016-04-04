'use strict';

$(function () {
    
    $('#loginUser').on('focusout', function () {
        $('.forgotPass').css('display', 'block');
    });
    
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
    
    //se valida si es en español o ingles el sitio para modificar los indicadores de las tablas
    if (( (window.location.href).indexOf('/es/') ) != -1) {       
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
    } else {        
        
        if ($('#tablaConsulta').length) {
            
            $('#tablaConsulta').DataTable({
                ordering: true,
                responsive: true,
                "language": {
                    url: "scripts/English.json",
                    searchPlaceholder: "Search",
                }
            });
            
        }

        if ($('#tablaCaptura').length) {
            
            $('#tablaCaptura').DataTable({
                ordering: true,
                responsive: true,
                language: {
                    url: "scripts/English.json",
                    searchPlaceholder: "Search"
                }
            });
            
            
        }

        if ($('#tablaListado').length) {
            
            $('#tablaListado thead th').each(function () {
                var title = $(this).text();
                $(this).html('<div class="head-text">' + title + '</div>' + '<input type="text" placeholder="Search" />');
            });
            
            var table = $('#tablaListado').DataTable({
                ordering: true,
                responsive: false,
                "language": {
                    url: "scripts/English.json",
                }
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
        
    }
    
    $(".printListado").on("click", function ()  {
        window.print();
    });

    $('input[type="search"]').attr('placeholder', 'Buscar');

    $(".borrar-referidoconfigreset").on("click", function () {
        event.stopPropagation();
        $form.find('input:text, input:password, select, textarea').val('');
        $form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
    });
    
   /* $('a[data-target="#modalRecompensas"]').on('click', function () {
        console.log('Click a recompensas');
        $('.btn-guardar-recompensas').attr('disabled', 'disabled');
        
        $('#modalRecompensas').find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected').removeAttr('disabled');
        var statusID = '19';
        if ( statusID == '19' ) {
            $('input[name="recompensaComprado"]').attr('disabled', 'disabled');
        } else if ( statusID == '20' ) {            
            $('input[name="recompensaAsistido"]').attr('disabled', 'disabled');
        }
        
        $('.formReferidos').on('click', function () {
            if ($('input[name="recompensaAsistido"]').is(':checked')) {
                $('.btn-guardar-recompensas').removeAttr('disabled');
            } else if ($('input[name="recompensaComprado"]').is(':checked')) {
                $('.btn-guardar-recompensas').removeAttr('disabled');
            }
        });
        
    });
    */
    $("#hero-carousel").owlCarousel({

        autoPlay : 5000,
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
    
    $("#inputReferidor, #inputPhone, #inputTelefonoOficina, #inputTelefonoCasa").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
    
    $('.submit-minivacs').on("click", function () {});

    $("form.form-busqueda").submit(function (event) {

        var nombres = $('#inputNombres').val();
        var socio = $('#inputNumSocio').val();
        var apellidos = $('#inputApellidos').val();
        var spanError = $("span.message-form").attr("data-error-message");
        var spanSuccess = $("span.message-form").attr("data-success-message");

        if (nombres.length || socio.length || apellidos.length > 0) {
            $(".message-form").removeClass('error-m').addClass('success-m');
            $(".message-form").text("Hemos recibido los datos correctamente").fadeIn(500).show();
            form.submit();
            event.preventDefault();
        } else {
            $(".message-form").removeClass('success-m').addClass('error-m');
            $(".message-form").text("Llena al menos uno de los siguientes campos para ver los referidos").fadeIn(500).show();
            event.preventDefault();
        }

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
                regex: /\b\d{3}[- .]?\d{3}[- .]?\d{4}\b/
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
                //regex: /\d+/
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
                regex: "Formato de nombre incorrecto."
            },
            aPaterno: {
                required: "Campo requerido.",
                regex: "Formato de apellido incorrecto."
            },
            aMaterno: {
                required: "Campo requerido.",
                regex: "Formato de apellido incorrecto."
            },
            email: {
                required: "Campo requerido.",
                email: "Este correo es inv&aacute;lido."
            },
            phone: {
                required: "Campo requerido.",
                regex: "Formato de telefono invalido."
            },
            pais: {
                required: "Favor de elegir una opci&oacute;n."
            },
            Estado: {
                required: "Favor de elegir una opci&oacute;n."
            },
            Ciudad: {
                required: "Campo requerido.",
                regex: "Formato de ciudad incorrecto."
            },
            PromoCode: {
                required: "Favor de elegir una opci&oacute;n."
            },
            NumeroReferidor: {
                required: "Campo requerido."
            },
            TipoReferidor: {
                required: "Favor de elegir una opci&oacute;n."
            },
            Privacy: {
                required: "Campo requerido."
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
    
    
    $(".formReferidos").validate({
        submitHandler: function (form) {
            form.submit();
        }
    });
    
    $(".formModStatusRec").validate({
        rules: {
            selectStatusRec: {
                required: true
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
    
    $(".formModStatus").validate({
        rules: {
            selectStatus: {
                required: true
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
    
    $(".formModalMail").validate({
        submitHandler: function (form) {
            form.submit();
        }
    });
    
    $("#loginUser").val(localStorage["user"]);
    
    $('.form-login').validate({
        rules: {
            loguser: {
                required: true
            },
            logpwd: {
                required: true
            }

        },
        submitHandler: function (form) {
            form.submit();
            localStorage["user"] = $("#loginUser").val();
        },
        messages: {
            loguser: {
                required: "Campo requerido."
            },
            logpwd: {
                required: "Campo requerido."
            }
        }
    });
    
    
    $('.formReferidos').validate({
        errorPlacement: function(error,element) {
            return true;
          },
        submitHandler: function (form) {
            form.submit();
        }        
    });
    
    $(".form-home").validate({
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
                regex: "Formato de nombre incorrecto."
            },
            lastName: {
                required: "Campo requerido.",
                regex: "Formato de apellido incorrecto"
            },
            email: {
                required: "Campo requerido.",
                email: "Este correo es inv&aacute;lido."
            },
            phone: {
                required: "Campo requerido.",
                regex: "Formato de telefono incorrecto."
            },
            state: {
                required: "Favor de elegir una opci&oacute;n."
            },
            city: {
                required: "Campo requerido.",
                regex: "Formato de ciudad incorrecto."
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
    
    $(".toggle-control > span[disabled]").off();
    
    
    $(".toggle-control > span[disabled]").click(false);

});