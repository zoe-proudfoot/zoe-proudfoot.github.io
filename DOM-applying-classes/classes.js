// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start() {
  // The first example is done for you. Uncomment the line below and reload the browser.
  one()

  // Your turn! Create a new function named `two` below, then call it from here.
}

function one() {
  // First, we have to find the element:
  let one = document.getElementById('one')

  // Next, we apply a new CSS class to it:
  one.classList.add('blue')
}

// CREATE FUNCTION two HERE
function start() {
  two()
}
function two() {
  let two = document.getElementById('two')
  two.classList.add('green')
}
// CREATE FUNCTION three HERE
function start() {
  three()
}
function three() {
  let three = document.getElementById('three')
  three.classList.add('purple')
}
// CREATE FUNCTION makeVisible HERE
// index.html
// Make sure you have an HTML file with a div that has the class "invisible".

// script.js
function start() {
  two()
  makeVisible()
}
function makeVisible() {
  const elements = document.getElementsByClassName('invisible')
  if (elements.length > 0) {
    elements[0].classList.add('visible')
  }
}
