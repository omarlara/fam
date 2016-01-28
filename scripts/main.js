'use strict';

$(function () {

    $("#hero-carousel").owlCarousel({

        //autoPlay : 3000,
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
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
      success: function() {
          //$('.success').show();
      },
      highlight: function() {
          
      },
      messages: {
        name: {
            required:"Campo requerido"  
        },
        lastName: {
            required:"Campo requerido"
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


});
