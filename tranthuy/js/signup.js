// validation form register and register user local storage
const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".signup__signInButton");

// Hàm kiểm tra mật khẩu mạnh
function isStrongPassword(password) {
  // Kiểm tra độ dài
  if (password.length < 12) {
    return false;
  }

  // Kiểm tra ký tự đầu tiên có phải là chữ viết hoa
  if (password[0] !== password[0].toUpperCase() || !/[A-Z]/.test(password[0])) {
    return false;
  }

  // Kiểm tra có ít nhất một ký tự đặc biệt
  const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
  if (!specialCharacters.test(password)) {
    return false;
  }

  return true;
}

// validation form register and register user local storage
btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("Vui lòng không để trống");
  } else if (!isStrongPassword(inputPasswordRegister.value)) {
    alert("Mật khẩu phải có ít nhất 12 ký tự, ký tự đầu là chữ viết hoa, và có ít nhất một ký tự đặc biệt.");
  } else {
    // array user
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);

    // Hiển thị thông báo thành công kèm username và password
    alert(`Đăng ký thành công! \nUsername: ${user.username}\nPassword: ${user.password}`);
    window.location.href = "login.html";
  }
});
