const darkMode = document.getElementById("mode");
const modeBtn = document.getElementById("modeBtn");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
modeBtn.onclick = function mode() {
  darkMode.classList.toggle("dark-mode");
  modeBtn.classList.toggle("ri-sun-fill");
  modeBtn.classList.toggle("ri-moon-clear-fill");
};
menuBtn.onclick = function () {
  mobileMenu.classList.toggle("show");
  menuBtn.classList.toggle("ri-close-line");
  menuBtn.classList.toggle("ri-menu-line");
};
