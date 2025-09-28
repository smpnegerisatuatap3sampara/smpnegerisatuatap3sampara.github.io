document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('prestasiLoopTrack');
  const speed = 0.9; // kecepatan scroll (semakin besar semakin cepat)

  // Gandakan isi track agar loop bisa seamless
  track.innerHTML += track.innerHTML;

  let scrollAmount = 0;

  function animateScroll() {
    scrollAmount += speed;
    if (scrollAmount >= track.scrollWidth / 2) {
      scrollAmount = 0;
    }
    track.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(animateScroll);
  }

  animateScroll();
});
