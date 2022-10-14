// button.js

const button = document.getElementById('button');

button.addEventListener('click', (function() {
  let count = 0;

  return function() {
    count += 1;

    if (count === "button") {
      count = count + 1;
    }
  };
})());