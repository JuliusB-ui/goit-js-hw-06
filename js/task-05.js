let nameInput = document.querySelector("#name-input");

let typeName = document.querySelector("#name-output");

let defaultName = typeName.innerText;

nameInput.addEventListener("input", (event) => {
  if (event.currentTarget.value !== "") {
    typeName.textContent = event.currentTarget.value;
  } else typeName.textContent = defaultName;
});
