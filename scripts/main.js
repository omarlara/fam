'use strict';

$(function () {

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
      success: function() {
          //$('.success').show();
      },
      highlight: function() {
          
      },
      messages: {
        name: {
            required:"Campo requerido"  
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
            required: "Favor de elegir una opción"
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
            required: "Favor de elegir una opción"
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
