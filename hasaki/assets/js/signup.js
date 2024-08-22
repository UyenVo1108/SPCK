var eye = document.getElementById("eye");
var submit = document.getElementById("submit");
var password = document.getElementById("password");
eye.addEventListener("click", () => {
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
    eye.setAttribute("name", "eye-off-outline");
  } else {
    password.setAttribute("type", "password");
    eye.setAttribute("name", "eye-outline");
  }
});

submit.addEventListener("click", (event) => {
  event.preventDefault();
  var patternEamil = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var patternPass =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
  var lastname = document.getElementById("lastname").value.trim();
  var firstname = document.getElementById("firstname").value.trim();
  var email = document.getElementById("email").value.trim();
  var passwordValue = password.value.trim();
  var passwordConfirm = document.getElementById("passwordConfirm").value.trim();
  // set giá trị bolean thành true
  var firstnameVali = firstname !== "";
  var lastnameVali = lastname !== "";
  var emailVali = patternEamil.test(email);
  var passVali = patternPass.test(passwordValue);
  var passwordConfirmVali = passwordConfirm === passwordValue;
  // sử dụng hàm
  displayErrorMessage(
    "firstname-error",
    firstnameVali,
    "Firstname is required."
  );
  displayErrorMessage("lastname-error", lastnameVali, "Lastname is required.");
  displayErrorMessage("email-error", emailVali, "Email is not valid.");
  displayErrorMessage(
    "password-error",
    passVali,
    "Password must contain at least 8 characters including at least one number, one letter, and one special character."
  );
  displayErrorMessage(
    "passwordConfirm-error",
    passwordConfirmVali,
    "Password confirmation does not match the password."
  );
  if (
    firstnameVali &&
    lastnameVali &&
    emailVali &&
    passVali &&
    passwordConfirmVali
  ) {
    success();
    saveToLocalStorage(firstname, lastname, email, passwordValue);
  }
});
// Viết hàm xử lý ( hàm , callback)
function displayErrorMessage(id, isVali, message) {
  var errorElement = document.getElementById(id);
  if (!isVali) {
    errorElement.textContent = message;
  } else {
    errorElement.textContent = "";
  }
}
// tạo hàm xử lí thành công
function success() {
  swal({
    title: "Good job!",
    text: "Bạn đã đăng kí thành công",
    icon: "success",
    button: "Tiếp tục!",
  }).then(function () {
    window.location.href = "login.html";
  });
}
// tạo hàm xử lý lưu trữ trên local storage
function saveToLocalStorage(firstname, lastname, email, pass) {
  var userData = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    pass: pass,
  };
  localStorage.setItem("UserData", JSON.stringify(userData));
}