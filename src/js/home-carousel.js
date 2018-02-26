$('.benefits-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: ['<img class="benefits-carousel-arrows" src="img/icons/arrowleft-icon.png"/>', '<img class="benefits-carousel-arrows" src="img/icons/arrowright-icon.png" />'],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 5
    }
  }
})
