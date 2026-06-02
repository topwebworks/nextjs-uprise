export const headerChangeOnScroll = () => {
  var mainNav = document.querySelector(".main-nav");
  var navLogoWrapLogo = document.querySelector(".nav-logo-wrap .logo");
  var lightAfterScroll = document.querySelector(".light-after-scroll");
  if (window.scrollY > 0) {
    mainNav.classList.remove("transparent", "light-content", "dark");
    mainNav.classList.add("small-height", "body-scrolled");
    if (navLogoWrapLogo) navLogoWrapLogo.classList.add("small-height");
    if (lightAfterScroll) lightAfterScroll.classList.remove("dark");
  } else if (window.scrollY === 0) {
    mainNav.classList.add("transparent");
    mainNav.classList.remove("small-height", "body-scrolled");
    if (navLogoWrapLogo) navLogoWrapLogo.classList.remove("small-height");
    if (lightAfterScroll) lightAfterScroll.classList.add("dark");
    if (mainNav.dataset.lightNav === "true") mainNav.classList.add("light-content", "dark");
  }
};
