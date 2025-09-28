document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const body = document.body;

  function openMenu() {
    menuToggle.classList.add("active");
    navMenu.classList.add("active");
    body.style.overflow = "hidden"; // kunci scroll
  }

  function closeMenu() {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");
    body.style.overflow = ""; // buka scroll
  }

  // Klik tombol
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    if (navMenu.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Klik di luar nav → tutup
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      closeMenu();
    }
  });

  // ESC → tutup
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });
});
