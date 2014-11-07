$(function() {
  var selector = $('input.css_selector'); // cache selector element
  var clearButton = $('button.clear_button');
  var last_selected;

  //selector
  selector.on('keyup', function(e) {
    var code = e.keyCode || e.which;
    if (code === 13) {
      $(selector.val()).addClass('selected');
      last_selected = $(selector.val());
    }
  });

  // clear button
  clearButton.on('click', function (e){
    e.preventDefault();
    last_selected.removeClass('selected');
  });

}); // ends ready();