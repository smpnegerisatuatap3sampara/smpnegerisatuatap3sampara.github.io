const guruData = [
    { name: "Abdan Syakur, S.Pd", position: "Guru Agama Islam", img: "images/Abdan Syakur, S.Pd.jpg" },
    { name: "Yohana Samaa, S.Pd", position: "Kepala Sekolah", img: "images/KS Yohana Samaa, S.Pd.jpg" },
    { name: "Marlina, S.Pd, Gr.", position: "Guru Bahasa Inggris", img: "images/Marlina, S.Pd, Gr..jpg" },
    { name: "Risnawati hHardin, S.Si", position: "Guru Matematika", img: "images/profile-sketa.jpg" },
    { name: "Masnia, S.Pd", position: "Guru IPS", img: "images/profile-sketa.jpg" },
    { name: "Nursaidam, S.Pd", position: "Guru IPA", img: "images/profile-sketa.jpg" },
    { name: "Mogawatim S.Pd", position: "Guru Bahasa Indonesia", img: "images/profile-sketa.jpg" },
    { name: "Nurjanna, S.Pd", position: "Guru PKN", img: "images/profile-sketa.jpg" },
    { name: "Yuni Sahara, S.Pd", position: "Guru Prakarya", img: "images/profile-sketa.jpg" },
    { name: "Rosangelina", position: "Belum Di Isi", img: "images/profile-sketa.jpg" },
    { name: "Evi, S.Kom", position: "Belum Di Isi", img: "images/profile-sketa.jpg" },
    { name: "Novita Bunga, S.Pd", position: "Guru Seni Budaya", img: "images/profile-sketa.jpg" },
    { name: "Andi Rasik, S.Pd", position: "Guru Seni BUdaya", img: "images/profile-sketa.jpg" },
    // GURU

    //STAF 
    { name: "Yeni", position: "Belum Di Isi", img: "images/profile-sketa.jpg" },
    { name: "Rina Sabon, SE", position: "Belum Di Isi", img: "images/profile-sketa.jpg" },
    { name: "Hendri Tandy", position: "Belum Di Isi", img: "images/profile-sketa.jpg" },
    { name: "Rio Aprianus", position: "Belum Di Isi", img: "images/profile-sketa.jpg" },
    { name: "Andi Siti Alang", position: "Belum Di Isi", img: "images/profile-sketa.jpg" },
];

const guruContainer = document.querySelector('.guru-container');
let currentIndex = 0;
const totalVisible = 3; // Menampilkan 3 guru sekaligus

function updateGuruCards() {
    guruContainer.innerHTML = '';
    for (let i = 0; i < totalVisible; i++) {
        const index = (currentIndex + i) % guruData.length;
        const guru = guruData[index];
        const card = document.createElement('div');
        card.classList.add('guru-card', 'fade-in');
        card.style.transitionDelay = `${i * 0.2}s`;
        card.innerHTML = `
            <img src="${guru.img}" alt="${guru.name}">
            <h3>${guru.name}</h3>
            <p>${guru.position}</p>
        `;
        guruContainer.appendChild(card);
    }
}

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + guruData.length) % guruData.length;
    updateGuruCards();
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % guruData.length;
    updateGuruCards();
});

updateGuruCards();

