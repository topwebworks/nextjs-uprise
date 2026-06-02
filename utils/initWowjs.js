let initTimer = null;
let menuTimer = null;
let wowInstances = [];

const WOW_TRIGGER_CLASS = "amw-wow-running";

function resetWowElement(el) {
  el.classList.remove(WOW_TRIGGER_CLASS, "animatedfgfg", "animated", "no-animate");
  el.style.visibility = "";
  el.style.animationName = "";
  el.style.webkitAnimationName = "";
  el.style.mozAnimationName = "";
  el.style.animationDuration = "";
  el.style.webkitAnimationDuration = "";
  el.style.mozAnimationDuration = "";
  el.style.animationDelay = "";
  el.style.webkitAnimationDelay = "";
  el.style.mozAnimationDelay = "";
  el.style.animationIterationCount = "";
  el.style.webkitAnimationIterationCount = "";
  el.style.mozAnimationIterationCount = "";
}

function resetWowState() {
  if (initTimer) {
    clearTimeout(initTimer);
    initTimer = null;
  }

  if (menuTimer) {
    clearTimeout(menuTimer);
    menuTimer = null;
  }

  wowInstances.forEach((instance) => instance?.stop?.());
  wowInstances = [];

  document
    .querySelectorAll(".wow, .wow-p")
    .forEach((el) => resetWowElement(el));
}

function revealWithoutAnimation(selector) {
  document.querySelectorAll(selector).forEach((el) => {
    resetWowElement(el);
    el.style.opacity = "1";
    el.style.visibility = "visible";
  });
}

function initWowGroup(WOW, boxClass) {
  document.querySelectorAll(`.${boxClass}`).forEach((el) => {
    resetWowElement(el);
    el.classList.add("no-animate");
  });

  const instance = new WOW({
    boxClass,
    animateClass: WOW_TRIGGER_CLASS,
    offset: 100,
    live: false,
    callback(box) {
      box.classList.add("animated");
      box.classList.remove("no-animate");
    },
  });

  instance.init();
  wowInstances.push(instance);

  requestAnimationFrame(() => {
    instance.scrollHandler?.();
    instance.scrollCallback?.();
  });
}

function initMenuBarAnimation() {
  if (
    !document.body.classList.contains("appear-animate") ||
    window.innerWidth < 1024 ||
    !document.documentElement.classList.contains("no-mobile")
  ) {
    document
      .querySelectorAll(".wow-menubar")
      .forEach((el) => (el.style.opacity = "1"));
    return;
  }

  document.querySelectorAll(".wow-menubar").forEach((el) => {
    el.classList.add("no-animate", "fadeInDown", "animated");
  });

  menuTimer = setTimeout(() => {
    document
      .querySelectorAll(".wow-menubar")
      .forEach((el) => el.classList.remove("no-animate"));
  }, 1500);
}

export function destroy_wow() {
  if (typeof document === "undefined") return;
  resetWowState();
}

export function init_wow() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return () => {};
  }

  resetWowState();

  initTimer = setTimeout(() => {
    const { WOW } = require("wowjs");

    if (document.body.classList.contains("appear-animate")) {
      initWowGroup(WOW, "wow");
      initWowGroup(WOW, "wow-p");
    } else {
      revealWithoutAnimation(".wow, .wow-p");
    }

    initMenuBarAnimation();
  }, 80);

  return destroy_wow;
}
