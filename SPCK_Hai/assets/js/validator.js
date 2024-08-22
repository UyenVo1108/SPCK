// đối tượng validator
function Validator(options) {
  function validate(inputElement, rule) {
    //hàm thực hiện validate
    var errorMessage = rule.test(inputElement.value);
    var formMess = inputElement.parentElement.querySelector(options.error);
    if (errorMessage) {
      formMess.innerText = errorMessage; // Use formMess here instead of errorMessage
      inputElement.parentElement.classList.add("invalid");
    } else {
      formMess.innerText = ""; // Clear the error message
      inputElement.parentElement.classList.remove("invalid");
    }
  }
  //lay elemaent cần
  var formElement = document.querySelector(options.form);
  if (formElement) {
    options.rules.forEach(function (rule) {
      var inputElement = formElement.querySelector(rule.selector);
      if (inputElement) {
        //xử lí trường hợp blur
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };
        //xử lí mỗi khi người dùng nhập input
        inputElement.oninput = function () {
          var formMess = inputElement.parentElement.querySelector(".form-mess");
          formMess.innerText = ""; // Clear the error message
          inputElement.parentElement.classList.remove("invalid");
        };
      }
    });
  }
}

// định nghĩa rules
Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      // Implement the test logic for isRequired
      return value.trim() ? undefined : "Vui lòng nhập trường này";
    },
  };
};

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : "Vui lòng nhập lại email";
    },
  };
};
Validator.isPassword = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var passw = /^[A-Za-z]\w{7,14}$/;
      return passw.test(value) ? undefined : "Vui lòng nhập mật khẩu ";
    },
  };
};
Validator.isConfirm = function (selector, getConfirmvalue) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmvalue() ? undefined : "Giá trị không đúng";
    },
  };
};
