"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { parallaxScroll } from "@/utils/parallax";
import { init_wow } from "@/utils/initWowjs";
import { headerChangeOnScroll } from "@/utils/changeHeaderOnScroll";
import { captureUTMs } from "@/utils/utmCapture";
import { init_classic_menu_resize } from "@/utils/menuToggle";
import { scrollToElement } from "@/utils/scrollToElement";

export default function ClientInit() {
  const path = usePathname();

  // Capture UTM params once on initial load for GHL form attribution
  useEffect(() => {
    captureUTMs();
  }, []);

  useEffect(() => {
    import("splitting").then(({ default: Splitting }) => {
      Splitting();
      init_wow();
    });
    var mainNav = document.querySelector(".main-nav");
    if (mainNav?.classList.contains("transparent")) {
      mainNav.classList.add("js-transparent");
    } else if (!mainNav?.classList?.contains("dark")) {
      mainNav?.classList.add("js-no-transparent-white");
    }
    window.addEventListener("scroll", headerChangeOnScroll);
    parallaxScroll();

    // Scroll-to-top button visibility
    const scrollBtn = document.querySelector(".link-to-top");
    const handleScrollBtn = () => {
      if (scrollBtn) {
        scrollBtn.classList.toggle("visible", window.scrollY > 400);
      }
    };
    window.addEventListener("scroll", handleScrollBtn);
    handleScrollBtn();

    // Smooth scroll for all hash anchors (handles already-on-page case)
    scrollToElement();

    // Mobile menu init
    init_classic_menu_resize();
    window.addEventListener("resize", init_classic_menu_resize);

    return () => {
      window.removeEventListener("scroll", headerChangeOnScroll);
      window.removeEventListener("resize", init_classic_menu_resize);
      window.removeEventListener("scroll", handleScrollBtn);
    };
  }, [path]);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.esm");
  }, []);

  return null;
}
