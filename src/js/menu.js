var last_known_scroll_position = 0;
var ticking = false;

var siteNavbar = document.querySelector('.site-navbar');
var phoneNavbar = document.querySelector('.navbar-phone-container');
var decoratorLink = document.querySelector('.link-decorator');
var textLink = document.querySelector('.navbar-option-link');

//navbar-fixed-top
function doSomething(scroll_pos) {
  if (window.location.pathname === '/index.html' || window.location.pathname === '/' || window.location.pathname === '/project-wicore/index.html' || window.location.pathname === '/project-wicore/') {
    if (scroll_pos > 30) {
      siteNavbar.classList.add('nav-strongblue');
      siteNavbar.classList.remove('nav-transparent');
      phoneNavbar.classList.add('phone-no-shadow');
      phoneNavbar.classList.remove('phone-shadow');
      decoratorLink.classList.remove('link-decorator');
      $('.link-decorator').addClass('remove-decorator');
      textLink.classList.add('active-link');

    } else {
      siteNavbar.classList.add('nav-transparent');
      siteNavbar.classList.remove('nav-strongblue');
      phoneNavbar.classList.add('phone-shadow');
      phoneNavbar.classList.remove('phone-no-shadow');
      decoratorLink.classList.add('link-decorator');
      $('.link-decorator').removeClass('remove-decorator');
      $('.navbar-option-link').removeClass('active-link-scroll');
      textLink.classList.remove('active-link');
    }
  }
}

doSomething();

window.addEventListener('scroll', function(e) {
  if (e.view) {
    last_known_scroll_position = e.view.pageYOffset;
  }
  else {
    last_known_scroll_position = window.scrollY;
  }
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false
    });
  }
  ticking = true;
});

function showMenu() {
  document.querySelector('#menuContainer').style.width = '85%';
  document.querySelector('#hamburgerMenu').style.display = 'none';
}

function hideMenu() {
  document.querySelector('#menuContainer').style.width = '0%';
  document.querySelector('#hamburgerMenu').style.display = 'inline';
}

window.addEventListener('click', function(e) {
  if (!e.target.dataset.hasOwnProperty('attribute')) {
    hideMenu();
  }
});

/*Events of touchstart to mobile version*/

var showHamburger = document.querySelector('#hamburgerMenu');

showHamburger.addEventListener('touchstart', function(e) {
  e.preventDefault();
  showMenu();
});

var hideHamburger = document.querySelector('#hideHamburger');

hideHamburger.addEventListener('touchstart', function(e) {
  e.preventDefault();
  hideMenu();
});

/* Events of click to desktop version*/

showHamburger.addEventListener('click', function(e) {
  e.preventDefault();
  showMenu();
});

hideHamburger.addEventListener('click', function(e) {
  e.preventDefault();
  hideMenu();
});