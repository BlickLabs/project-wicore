function doSomething(e){"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-wicore/index.html"!==window.location.pathname&&"/project-wicore/"!==window.location.pathname||(e>30?(siteNavbar.classList.add("nav-strongblue"),siteNavbar.classList.remove("nav-transparent"),phoneNavbar.classList.add("phone-no-shadow"),phoneNavbar.classList.remove("phone-shadow")):(siteNavbar.classList.add("nav-transparent"),siteNavbar.classList.remove("nav-strongblue"),phoneNavbar.classList.add("phone-shadow"),phoneNavbar.classList.remove("phone-no-shadow")))}function showMenu(){document.querySelector("#menuContainer").style.width="85%",document.querySelector("#hamburgerMenu").style.display="none"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline"}!function(){$.validator.setDefaults({invalidHandler:function(e,n){var a=$(this);a.find(".form-message").removeClass(a.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var n=$(e).serialize(),a=$(e).find("select, input, textarea, button").not("[disabled]"),t=$(e).find(".form-message"),r=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),s=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),o=function(e){var n=e?r:s;a.removeAttr("disabled"),t.removeClass(e?"error":"success"),t.addClass(e?"success":"error"),t.html(n)};a.attr("disabled","disabled"),t.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:n}).done(function(n){o(1===parseInt(n)),e.reset()}).fail(function(){o(!1)}).always(function(){a.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}(),$(".benefits-carousel").owlCarousel({loop:!0,margin:10,nav:!0,navText:['<img class="benefits-carousel-arrows" src="img/icons/arrowleft-icon.png"/>','<img class="benefits-carousel-arrows" src="img/icons/arrowright-icon.png" />'],responsive:{0:{items:1},600:{items:1},1e3:{items:5}}});var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".site-navbar"),phoneNavbar=document.querySelector(".navbar-phone-container");doSomething(),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(e){e.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");hideHamburger.addEventListener("touchstart",function(e){e.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(e){e.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(e){e.preventDefault(),hideMenu()});