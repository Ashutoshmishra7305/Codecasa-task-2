// script.js

window.onload = function () {
  // Function to change content on button click
  function changeContent() {
    const contentElement = document.getElementById('dynamic-content');
    contentElement.textContent = 'New content added dynamically!';
  }

  // Attach the click event to a button
  const changeButton = document.getElementById('change-button');
  changeButton.addEventListener('click', changeContent);
};
