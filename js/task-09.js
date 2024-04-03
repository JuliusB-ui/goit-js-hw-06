let color = document.querySelector(".color");
let clrBtn = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

clrBtn.addEventListener("click", (e) => {
  color.textContent = getRandomHexColor();
  document.body.style.backgroundColor = color.textContent;
});
