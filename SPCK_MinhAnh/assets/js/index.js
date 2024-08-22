// Sử dụng JavaScript trơn
var userIcon = document.querySelector(".header-icon_item");
var userSubMenu = document.querySelector(".user-submenu");

userIcon.addEventListener("click", function () {
  userSubMenu.style.display =
    userSubMenu.style.display === "block" ? "none" : "block";
});

// Sử dụng jQuery
$(".header-icon_item").click(function () {
  $(".user-submenu").toggle();
});


