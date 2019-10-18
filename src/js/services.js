$("a.services-option-anchor").click(function() {
  var targetDiv = $(this).attr('href');
  $('html, body').animate({
      scrollTop: $(targetDiv).offset().top - 95
  }, 800);
});