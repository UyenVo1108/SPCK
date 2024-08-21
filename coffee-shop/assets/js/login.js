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
  var email = document.getElementById("email").value.trim();
  var passwordValue = password.value.trim();
  var storedData = JSON.parse(localStorage.getItem("UserData"));
  if (
    storedData &&
    email === storedData.email &&
    passwordValue === storedData.pass
  ) {
    success();
  } else {
    error();
  }
});
function error() {
  swal({
    title: "Tài khoản không tồn tại",
    text: "Mời bạn đăng nhập lại",
    icon: "error",
    button: "Đồng ý",
  });
}
// tạo hàm xử lí thành công
function success() {
  swal({
    title: "Good job!",
    text: "Bạn đã đăng kí thành công",
    icon: "success",
    button: "Tiếp tục!",
  }).then(function () {
    window.location.href = "index.html";
  });
}