function doSomething(e){"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-wicore/index.html"!==window.location.pathname&&"/project-wicore/"!==window.location.pathname||(e>30?(siteNavbar.classList.add("nav-strongblue"),siteNavbar.classList.remove("nav-transparent"),phoneNavbar.classList.add("phone-no-shadow"),phoneNavbar.classList.remove("phone-shadow"),decoratorLink.classList.remove("link-decorator"),$(".link-decorator").addClass("remove-decorator"),textLink.classList.add("active-link")):(siteNavbar.classList.add("nav-transparent"),siteNavbar.classList.remove("nav-strongblue"),phoneNavbar.classList.add("phone-shadow"),phoneNavbar.classList.remove("phone-no-shadow"),decoratorLink.classList.add("link-decorator"),$(".link-decorator").removeClass("remove-decorator"),$(".navbar-option-link").removeClass("active-link-scroll"),textLink.classList.remove("active-link")))}function showMenu(){document.querySelector("#menuContainer").style.width="85%",document.querySelector("#hamburgerMenu").style.display="none"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline"}!function(){$.validator.setDefaults({invalidHandler:function(e,r){var o=$(this);o.find(".form-message").removeClass(o.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var r=$(e).serialize(),o=$(e).find("select, input, textarea, button").not("[disabled]"),t=$(e).find(".form-message"),a=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),n=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),i=function(e){var r=e?a:n;o.removeAttr("disabled"),t.removeClass(e?"error":"success"),t.addClass(e?"success":"error"),t.html(r)};o.attr("disabled","disabled"),t.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:r}).done(function(r){i(1===parseInt(r)),e.reset()}).fail(function(){i(!1)}).always(function(){o.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}(),$('form[name="wicore-form"]').validate({name:"required",email:"required",messages:{name:"Por favor, introduce tu Nombre.",email:"Por favor, introduce un Correo Electrónico."},submitHandler:function(e){var r=$('form[name="wicore-form"]').serialize();console.log(r),$.ajax({url:"http://integrations.blick.mx/wicore/contact/",method:"POST",data:r}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Correo enviado, gracias por contactarte con nosotros."),$('form[name="wicore-form"]')[0].reset())})},invalidHandler:function(e,r){var o=r.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica tu información tienes "+o+" errores.")}}),$('form[name="wicore-form-mobile"]').validate({name:"required",email:"required",messages:{name:"Por favor, introduce tu Nombre.",email:"Por favor, introduce un Correo Electrónico."},submitHandler:function(e){var r=$('form[name="wicore-form-mobile"]').serialize();console.log(r),$.ajax({url:"http://integrations.blick.mx/wicore/contact/",method:"POST",data:r}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Correo enviado, gracias por contactarte con nosotros."),$('form[name="wicore-form-mobile"]')[0].reset())})},invalidHandler:function(e,r){var o=r.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica tu información tienes "+o+" errores.")}}),$(".benefits-carousel").owlCarousel({loop:!0,margin:10,nav:!0,navText:['<img class="benefits-carousel-arrows" src="img/icons/arrowleft-icon.png"/>','<img class="benefits-carousel-arrows" src="img/icons/arrowright-icon.png" />'],responsive:{0:{items:1},600:{items:1},1e3:{items:5}}});var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".site-navbar"),phoneNavbar=document.querySelector(".navbar-phone-container"),decoratorLink=document.querySelector(".link-decorator"),textLink=document.querySelector(".navbar-option-link");doSomething(),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(e){e.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");hideHamburger.addEventListener("touchstart",function(e){e.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(e){e.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(e){e.preventDefault(),hideMenu()}),$("a.services-option-anchor").click(function(){var e=$(this).attr("href");$("html, body").animate({scrollTop:$(e).offset().top-95},800)});