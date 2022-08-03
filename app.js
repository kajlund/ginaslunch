document.getElementById("thisYear").innerHTML = new Date().getFullYear();

const navBtn = document.getElementById("btn-nav");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("btn-nav-close");
const navTop = document.getElementById("navTop");

// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("nav-show");
});

// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("nav-show");
});

// Nav items
document.querySelectorAll('.nav-link').forEach(item => {
  item.addEventListener('click', event => {
    navbar.classList.remove("nav-show");
  });
});