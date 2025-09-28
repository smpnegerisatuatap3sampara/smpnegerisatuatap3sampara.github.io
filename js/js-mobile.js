document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const body = document.body;

  function openMenu() {
    menuToggle.classList.add("active");
    navMenu.classList.add("active");
    body.classList.add("no-scroll"); // freeze background
  }

  function closeMenu() {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");
    body.classList.remove("no-scroll");
  }

  // Klik tombol toggle
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    if (navMenu.classList.contains("active")) closeMenu();
    else openMenu();
  });

  // Klik di luar menu → tutup
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains("active")) {
      closeMenu();
    }
  });

  // Tekan ESC → tutup
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
      closeMenu();
    }
  });
});
