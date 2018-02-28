$('form[name="wicore-form"]').validate({
  name: 'required',
  email: 'required',
  messages: {
   name: "Por favor, introduce tu Nombre.",
   email: "Por favor, introduce un Correo Electrónico.",
  },
  submitHandler: function(form) {
   var data = $('form[name="wicore-form"]').serialize();
   console.log(data);
   $.ajax({
     url: 'http://integrations.blick.mx/wicore/contact/',
     method: 'POST',
     data: data
   }).done(function(data) {
     if (parseInt(data) === 1) {
       alertify.logPosition("bottom right");
       alertify.success("Correo enviado, gracias por contactarte con nosotros.");
       $('form[name="wicore-form"]')[0].reset();
     }
   });
  },
  invalidHandler: function(event, validator) {
   var errors = validator.numberOfInvalids();
   alertify.logPosition("bottom right");
   alertify.error("Verifica tu información tienes " + errors + " errores.");
  }
});
