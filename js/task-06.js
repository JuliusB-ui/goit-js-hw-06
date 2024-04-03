let textBox = document.getElementById("validation-input");
let validationLength = textBox.getAttribute("data-length");
textBox.addEventListener("blur", validation);

function validation(event) {
  if (textBox.value.length == validationLength) {
    if (textBox.classList.contains("invalid")) {
      textBox.classList.replace("invalid", "valid");
    } else {
      textBox.classList.add("valid");
    }
  } else {
    if (textBox.classList.contains("valid")) {
      textBox.classList.replace("valid", "invalid");
    } else {
      textBox.classList.add("invalid");
    }
  }
}
