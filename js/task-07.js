let slideValue = document.getElementById("font-size-control");
let text = document.getElementById("text");

slideValue.addEventListener("input", (e) => {
  text.style.fontSize = `${slideValue.value}px`;
});
