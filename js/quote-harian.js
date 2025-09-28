document.addEventListener('DOMContentLoaded', () => {
  const quoteText = document.getElementById('quoteText');

  const quotes = [
    "Pendidikan adalah senjata paling ampuh untuk mengubah dunia. – Nelson Mandela",
    "Belajar tidak akan pernah menghianati hasil.",
    "Masa depan adalah milik mereka yang percaya pada keindahan mimpinya. – Eleanor Roosevelt",
    "Setiap anak adalah bintang, mereka hanya butuh kesempatan untuk bersinar.",
    "Guru bukan hanya pengajar, tapi pembentuk masa depan."
  ];

  // Ambil quote berdasarkan tanggal hari ini
  const index = new Date().getDate() % quotes.length;
  quoteText.textContent = quotes[index];
});
