const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuBtnIcon = document.querySelector("#menu-btn i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "fa-solid fa-times" : "fa-solid fa-bars"
  );
});

navLinks.addEventListener("click", () => {
  // Close menu when a nav link is clicked
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
});
