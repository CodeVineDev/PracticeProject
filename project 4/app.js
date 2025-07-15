window.addEventListener("load", () => {
  const mobileNav = document.getElementById("mobile-nav");
  const navBtn = document.getElementById("nav-btn");
  const navBar = document.getElementById("navbar");

  navBtn.addEventListener("click", () => {
    if (navBar.classList.contains("h-22")) {
      navBar.classList.remove("h-22");
      navBar.classList.add("h-[25rem]");
    } else {
      navBar.classList.remove("h-[25rem]");
      navBar.classList.add("h-22");
    }
  });
});

