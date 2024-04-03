let counterValue = 0;

let value = document.getElementById("value");

let decBtn = document.querySelector('[data-action="decrement"]');
let incBtn = document.querySelector('[data-action="increment"]');

decBtn.onclick = function () {
  counterValue -= 1;
  value.innerText = counterValue;
};

incBtn.onclick = function () {
  counterValue += 1;
  value.innerText = counterValue;
};
