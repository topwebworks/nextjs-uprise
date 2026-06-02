export const scrollToElement = () => {
  document.addEventListener("click", (e) => {
    const anchor = e.target.closest("a[href]");
    if (!anchor || anchor.hasAttribute("data-bs-toggle")) return;
    const href = anchor.getAttribute("href");
    // Handle both "#id" and "/#id" formats
    const hashMatch = href.match(/^(?:\/)?#(.+)$/);
    if (!hashMatch) return;
    const id = hashMatch[1];
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
    }
  });
};
