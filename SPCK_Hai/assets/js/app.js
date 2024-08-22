document.addEventListener("DOMContentLoaded", function () {
  // Get references to elements
  const hamburgerIcon = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  const hideSidebarIcon = document.querySelector(".hideSidebar");
  // Add click event listener to the hamburger icon
  hamburgerIcon.addEventListener("click", function () {
    sidebar.classList.add("show-sidebar");
  });

  // Add click event listener to the hideSidebar icon
  hideSidebarIcon.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
  });
});
