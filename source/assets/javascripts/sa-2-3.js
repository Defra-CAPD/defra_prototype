$(document).ready(function() {
  var $opts = $('.js-multi-opt');
  $opts.on('change', function(e) {
    var $form = $('#sa-2-3-form');

    if ($form.find('input[name=block-1]:checked').val() == "yes") {
      $('#sa-2-3-result').removeClass('js-hidden');
      $('#sa-2-3-button-true').removeClass('js-hidden');
      $('#sa-2-3-button-false').addClass('js-hidden');
    } else {
      $('#sa-2-3-result').addClass('js-hidden');
      $('#sa-2-3-button-true').addClass('js-hidden');
      $('#sa-2-3-button-false').removeClass('js-hidden');
    }
  });
});