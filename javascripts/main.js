$(function() {
  // cache input element
  var ಠ_ಠ711 = $('input.css_selector');
  // clear button
  var ಠ_ಠ712 = $('button.clear_button');

  //ಠ_ಠ711
  ಠ_ಠ711.on('keyup', function(ಠ_ಠ717) {
    // console.log(ಠ_ಠ717.keyCode); // debug
    var ಠ_ಠ713 = ಠ_ಠ717.keyCode || ಠ_ಠ717.which;

    // reset the playing field
    $('.selected').each(function (ಠ_ಠ717) {
      $(this).removeClass('selected');
    });

    // 'enter' key applies .selected to elements
    if (ಠ_ಠ713 === 13) {
      $(ಠ_ಠ711.val()).addClass('selected');
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

  var ಠ_ಠ714 = $('<p>');
  ಠ_ಠ714.html('Type in a <span>CSS</span> ಠ_ಠ711 that want to use in the <span>INPUT</span> box pinned to the top of the page. Press <span>ENTER</span> to <span>execute</span> it. You can use the <span>DOWN ARROW</span> to <span>clear</span> the input box. If successful, the selected element will get a <span>GREEN BACKGROUND COLOR</span>.');

  var ಠ_ಠ715 = $('<p>');
  ಠ_ಠ715.html('Click anywhere to close this pop-up.');

  // add to DOM
  modalContainer.append(modalHeader.hide());
  modalContainer.append(ಠ_ಠ714.hide());
  modalContainer.append(ಠ_ಠ715.hide());
  modalParent.append(modalContainer.hide());
  $('body').append(modalParent);

  // fancy
  modalContainer.slideDown('slow');
  modalHeader.fadeIn('slow');
  ಠ_ಠ714.fadeIn('slow');
  ಠ_ಠ715.fadeIn('slow');

  // add Event to remove Modal
  var ಠ_ಠ716 = -1;
  $('body').on('click', '.modal', function() {
    ಠ_ಠ716++;
    if (ಠ_ಠ716 >= 1) {
      $('.modal').fadeOut();
    }
  });

}); // ends ready();