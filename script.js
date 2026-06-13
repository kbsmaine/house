const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

document.querySelector(".quote-form").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Quote form placeholder submitted. Connect this form to your email/form service before launching.");
});
