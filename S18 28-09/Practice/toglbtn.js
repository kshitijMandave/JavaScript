var inputPassword = document.querySelector("#password");
var toglbtn = document.querySelector("#btn");

toglbtn.addEventListener("click", () => {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    toglbtn.textContent = "Hide Password";
  } else {
    inputPassword.type = "password";
    toglbtn.textContent = "Show Password";
  }
});
