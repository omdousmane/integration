window.addEventListener("scroll", () => {
  (function scroll() {
    const header = document.getElementById("autofixed");
    if (header) {
      if (window.pageYOffset > 800) {
        header.classList.add("header-animated");
      } else {
        header.classList.remove("header-animated");
      }
      if (window.pageYOffset > 1200) {
        header.classList.add("fixed-top");
      } else {
        header.classList.remove("fixed-top");
      }
    }
  })();
});
