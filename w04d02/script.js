console.log('greetings from script.js');

console.log(username);

jQuery()
jQuery === $

// const node = document.createElement("li");
// const textnode = document.createTextNode("Water");
// node.appendChild(textnode);
// document.getElementById("myList").appendChild(node);

// $('li'); // find something in the DOM
// $('<li>'); // create a new HTML element
// $(() => {}); // equivalent to document.ready

// $(() => {
$(document).ready(() => {

  const $li = $('<li>'); // create a new element
  // console.log('li', $li);

  $li.text('water');

  const $mainList = $('#main-list');
  $mainList.append($li);
  // $('#main-list').append($li);
  // $li.appendTo('#main-list');
  // $li.prependTo('#main-list');

  // grab the input field
  const $input = $('#new-task-input');

  // grab the button
  const $button = $('#new-task-button');

  $('#new-task-form').on('submit', (event) => {
    // prevent the browser's default behaviour
    event.preventDefault();

  // $button.on('click', () => {
    console.log('the button got clicked');

    // get the value of the input field
    const inputVal = $input.val();

    // console.log('inputVal', inputVal);

    // create a new li with the text provided
    const $li = $('<li>').text(inputVal);

    // append the new li to the existing main-list
    // $mainList.append($li);
    $mainList.prepend($li);

    // clear the input field
    // $input.val('');
    // $input.focus();

    $input.val('').focus();
  });

});
