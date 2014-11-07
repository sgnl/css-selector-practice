$(function() {
  // cache input element
  var selector = $('input.css_selector');
  // clear button
  var clearButton = $('button.clear_button');

  //selector
  selector.on('keyup', function(e) {
    // console.log(e.keyCode); // debug
    var code = e.keyCode || e.which;

    // reset the playing field
    $('.selected').each(function (e) {
      $(this).removeClass('selected');
    });

    // 'enter' key applies .selected to elements
    if (code === 13) {
      $(selector.val()).addClass('selected');
    }
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