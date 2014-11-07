$(function() {
  var selector = $('input.css_selector'); // cache selector element
  var clearButton = $('button.clear_button');
  var last_selected;

  //selector
  selector.on('keyup', function(e) {
    // console.log(e.keyCode);
    var code = e.keyCode || e.which;
    // 'enter' key applies .selected to elements
    if (code === 13) {
      $(selector.val()).addClass('selected');
      last_selected = $(selector.val());
    }
    // 'down arrow' triggers clearButton
    if (code === 40) {
      clearButton.trigger('click');
    }
  });

  // clear button
  clearButton.on('click', function (e){
    e.preventDefault();
    last_selected.removeClass('selected');
  });

}); // ends ready();