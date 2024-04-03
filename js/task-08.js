let form = document.querySelector(".login-form");
let email = (document.getElementsByName = "email");
let password = (document.getElementsByName = "password");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("All fields must be filled in!");
  } else {
    console.log(email.value, password.value);
    email.value = "";
    password.value = "";
  }
});
