import Rellax from "rellax";

export function parallaxScroll() {
  const mobileTest = false; // Assuming mobileTest is defined elsewhere

  if (document.querySelectorAll("[data-rellax-y]").length) {
    if (window.innerWidth >= 1280 && !mobileTest) {
      const rellax_y = new Rellax("[data-rellax-y]", {
        vertical: true,
        horizontal: false,
      });

      function addScrollParallax() {
        document.querySelectorAll("[data-rellax-y]").forEach((element) => {
          if (
            element.getBoundingClientRect().top < window.innerHeight &&
            element.getBoundingClientRect().bottom > 0
          ) {
            if (!element.classList.contains("js-in-viewport")) {
              element.classList.add("js-in-viewport");
              rellax_y.refresh();
            }
          } else {
            if (element.classList.contains("js-in-viewport")) {
              element.classList.remove("js-in-viewport");
            }
          }
        });
      }

      window.addEventListener("scroll", addScrollParallax);
      // window.removeEventListener("scroll", addScrollParallax);
      // rellax_y.destroy();
    }
  }

  if (document.querySelectorAll("[data-rellax-x]").length) {
    if (window.innerWidth >= 1280 && !mobileTest) {
      const rellax_x = new Rellax("[data-rellax-x]", {
        horizontal: true,
      });
      function addParallaxX() {
        document.querySelectorAll("[data-rellax-x]").forEach((element) => {
          if (
            element.getBoundingClientRect().top < window.innerHeight &&
            element.getBoundingClientRect().bottom > 0
          ) {
            if (!element.classList.contains("js-in-viewport")) {
              element.classList.add("js-in-viewport");
              rellax_x.refresh();
            }
          } else {
            if (element.classList.contains("js-in-viewport")) {
              element.classList.remove("js-in-viewport");
            }
          }
        });
      }
      window.addEventListener("scroll", addParallaxX);
      // window.removeEventListener("scroll", addParallaxX);
    }
  }
}
