
/* Xử lý Javascript Nav3 */
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    document.querySelector(".nav-main").classList.add("fixed");
    document.querySelector(".header-logo").classList.add("fixed-nav");
  } else {
    document.querySelector(".nav-main").classList.remove("fixed");
    document.querySelector(".header-logo").classList.remove("fixed-nav");
  }
});