const burger = document.querySelector(".menu");
const navContent = document.querySelector(".navigation");
const links = document.querySelectorAll(".navlinks li");
const slideNav = () => {
  burger.classList.toggle("toggle");
  navContent.classList.toggle("nav-active");
  links.forEach((link, index) => {
    link.classList.toggle("animated", "slideInDown");
    if (link.style.animation) {
      link.style.animation = ``;
    } else {
      link.style.animation = `navlinkfade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });
};

const section = document.querySelector("section");

burger.addEventListener("click", slideNav);
