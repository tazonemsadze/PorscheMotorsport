const menuList = document.querySelector(".menu__list");
const menuItems = document.querySelectorAll(".menu__item");
const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach(function (link, i) {
  menuItems[i].insertAdjacentHTML(
    "beforeend",
    `<div class="link__svg--container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
    <div>`
  );
});

const menu = document.querySelector(".menu__wrapper");
const openMenuBtn = document.querySelector(".hamburger-btn");
const closeMenuBtn = document.querySelector(".close__btn");
const overlay = document.querySelector(".overlay");

const openMenu = () => {
  menu.classList.toggle("is-active");
  overlay.classList.toggle("is-active");
  const isOpened = openMenuBtn.getAttribute("aria-expanded");
  if (isOpened === "false") {
    openMenuBtn.setAttribute("aria-expanded", "true");
  } else {
    openMenuBtn.setAttribute("aria-expanded", "false");
  }
};

const closeMenu = () => {
  menu.classList.remove("is-active");
  overlay.classList.remove("is-active");
  const isOpened = openMenuBtn.getAttribute("aria-expanded");
  if (isOpened === "false") {
    openMenuBtn.setAttribute("aria-expanded", "true");
  } else {
    openMenuBtn.setAttribute("aria-expanded", "false");
  }
};

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// Splide

let splide = new Splide(".splide", {
  arrows: false,
  pagination: true,
  type: "loop",
  perPage: 1,
  padding: "1.5rem",
  gap: "0.5rem",
  flickPower: "500",
  waitForTransition: true,
  autoplay: true,
  interval: 3000,
  pauseOnHover: true,
  pauseOnFocus: true,
});
splide.mount();

const header = document.querySelector(".header__nav");

const parallaxImage = document.querySelectorAll(".parallax__image");
const parallaxLinks = document.querySelectorAll(".parallax__nav--link");

const observer = new IntersectionObserver((entries) => {
  parallaxLinks.forEach((link) => {
    link.classList.remove("focused");
  });
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetId = entry.target.id;
      parallaxLinks.forEach((link) => {
        link.classList.toggle(
          "focused",
          link.getAttribute("href") === `#${targetId}`
        );
      });
    }
  });
});

parallaxImage.forEach((image) => {
  observer.observe(image);
});
