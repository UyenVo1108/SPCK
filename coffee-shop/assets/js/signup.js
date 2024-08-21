
document.getElementById('eye').addEventListener('click', function() {
var pwdField = document.getElementById('password');
if (pwdField.type === 'password') {
  pwdField.type = 'text';
  this.name = 'eye-off-outline';
} else {
  pwdField.type = 'password';
  this.name = 'eye-outline';
}
});

document.getElementById('submit1').addEventListener('click', function(event) {
event.preventDefault();
var fullName = document.getElementById('fullName').value.trim();
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var confirmPassword = document.getElementById('confirmPassword').value;
var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// điều kiện
var fullNameValid = fullName !== "";
var emailVali = emailRegex.test(email);
var passwordVali = passwordRegex.test(password);
var confirmPasswordVali = password === confirmPassword;
displayErrorMessage("fullNameError", fullNameValid, "Vui lòng điền họ và tên vào đây");
displayErrorMessage("emailError", emailVali, "Email không hợp lệ (Gợi ý: email bao gồm dạng abc@gmail.com)");
displayErrorMessage("passwordError", passwordVali, "Mật khẩu không hợp lệ (Gợi ý: password bao gồm ít nhất 1 chữ cái in hoa, 1 chữ thường, 1 kí tự đặc biệt, 1 chữ số và gồm 8 kí tự)");
displayErrorMessage("confirmPasswordError", confirmPasswordVali, "Mật khẩu không khớp");
    if (
        fullNameValid && 
        emailVali && 
        passwordVali && 
        confirmPasswordVali
    )
    {
        saveToLocalStorage(fullName, email, password)
        success();
    }
});

function displayErrorMessage(id, isVali, message) {
    var errorElement = document.getElementById(id);
    if (!isVali) {
        errorElement.textContent = message;
    }
    else {
        errorElement.textContent = ""
    }
};

function success() {
    swal({
        title: "Good job!",
        text: "Signup Success",
        icon: "success",
        button: "Continue",
    })
    .then(()=> {
        window.location.href = "login.html";
    });
};

function saveToLocalStorage(fullname, email, password) {
    var userData ={
        fullname: fullname,
        email: email,
        password: password,
    };
    localStorage.setItem("userData",JSON.stringify(userData));
};