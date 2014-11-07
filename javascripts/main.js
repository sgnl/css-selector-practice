$(function() {
  var selector = $('input.css_selector'); // cache selector element
  var clearButton = $('button.clear_button');
  var last_selected = [];

  //selector
  selector.on('keyup', function(e) {
    // console.log(e.keyCode);
    var code = e.keyCode || e.which;
    // 'enter' key applies .selected to elements
    if (code === 13) {
      $(selector.val()).addClass('selected');
      last_selected.push($(selector.val()));
    }
    // 'down arrow' triggers clearButton
    if (code === 40) {
      clearButton.trigger('click');
    }
  });

  // clear button
  clearButton.on('click', function (e){
    e.preventDefault();
    last_selected.forEach(function (e) {
      e.removeClass('selected');
    });
  });

  // instructions modal
  var modalParent = $('<div>', {
    class: 'modal'
  });

  var modalContainer = $('<div>', {
    class: 'modalContainer'
  });

  var modalHeader = $('<h1>', {
    text: "Instructions"
  });

  var modalBody = $('<p>');
  modalBody.html('Type in a <span>CSS</span> selector that want to use in the <span>INPUT</span> box pinned to the top of the page. Press <span>ENTER</span> to <span>execute</span> it. You can use the <span>DOWN ARROW</span> to <span>clear</span> the input box. If successful, the selected element will get a <span>GREEN BACKGROUND COLOR</span>.');

  var modalClose = $('<p>');
  modalClose.html('Click anywhere to close this pop-up.');




  // add to DOM
  modalContainer.append(modalHeader.hide());
  modalContainer.append(modalBody.hide());
  modalContainer.append(modalClose.hide());
  modalParent.append(modalContainer.hide());
  $('body').append(modalParent);

  // fancy
  modalContainer.slideDown('slow');
  modalHeader.fadeIn('slow');
  modalBody.fadeIn('slow');
  modalClose.fadeIn('slow');

  // add Event to remove Modal
  var closeModalClicks = -1;
  $('body').on('click', '.modal', function() {
    closeModalClicks++;
    if (closeModalClicks >= 1) {
      $('.modal').fadeOut();
    }
  });

}); // ends ready();