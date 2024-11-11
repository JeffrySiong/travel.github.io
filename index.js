const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  })
);

// SCROLL REVEAL
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 400,
});
sr.reveal(".home__data, .explore__data, .footer__container");
sr.reveal(".home__card", {
  delay: 600,
  interval: 100,
  distance: "100px",
});
sr.reveal(".about__data, .join__data", { origin: "right" });
sr.reveal(".about__image, .join__img", { origin: "left" });
sr.reveal(".popular__card", { interval: 200 });
