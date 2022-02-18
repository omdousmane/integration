let headerDesktop = document.querySelector(".header-desktop");
let headerMobile = document.querySelector(".header-menu__mobile");
console.log(headerMobile);
let ticking = false;

window.addEventListener("scroll", function (e) {
  scrollPosition = window.scrollY;
  if (scrollPosition <= 1000 || scrollPosition >= 2200) {
    headerDesktop.classList.add("slide-bottom");
    headerDesktop.classList.remove("slide-top");
    headerDesktop.style.display = "flex";
  } else {
    headerDesktop.classList.add("slide-top");
    headerDesktop.classList.remove("slide-bottom");
    headerDesktop.style.display = "none";
  }
  if (screen.width <= 760) {
    headerDesktop.style.display = "none";
    headerDesktop.classList.add("slide-bottom");
  }
  if (!ticking) {
    window.requestAnimationFrame(function () {
      ticking = false;
    });
  }

  ticking = true;
});
