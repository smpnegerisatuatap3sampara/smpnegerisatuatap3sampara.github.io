// quiz.js FINAL VERSION
const semuaSoal = [
  {
    pertanyaan: "Apa ibu kota Indonesia?",
    pilihan: ["Bandung", "Jakarta", "Medan", "Surabaya"],
    jawaban: 1,
  },
  {
    pertanyaan: "Lagu kebangsaan Indonesia adalah",
    pilihan: [
      "Tanah Airku",
      "Indonesia Raya",
      "Halo-Halo Bandung",
      "Garuda Pancasila",
    ],
    jawaban: 1,
  },
  {
    pertanyaan: "Pencipta lagu Indonesia Raya adalah",
    pilihan: ["Ismail Marzuki", "Ibu Sud", "W.R. Supratman", "H. Mutahar"],
    jawaban: 2,
  },
  {
    pertanyaan: "Hari Kemerdekaan Indonesia jatuh pada tanggal",
    pilihan: ["17 Juli", " 10 November", "28 Oktober", "17 Agustus"],
    jawaban: 3,
  },
  {
    pertanyaan: "Mata uang Indonesia adalah",
    pilihan: ["Rupiah", "Ringgit", "Dolar", "Peso"],
    jawaban: 0,
  },
  {
    pertanyaan: "Indonesia terletak di antara dua benua, yaitu",
    pilihan: [
      "Afrika dan Amerika",
      "Asia dan Australia",
      "Asia dan Afrika",
      "Australia dan Eropa",
    ],
    jawaban: 1,
  },
  {
    pertanyaan: "Presiden pertama Indonesia adalah",
    pilihan: ["B.J. Habibie", "Soekarno", "Soeharto", "Gus Dur"],
    jawaban: 1,
  },
  {
    pertanyaan: "Hari Pendidikan Nasional diperingati setiap",
    pilihan: ["21 April", "1 Mei", "2 Mei", "17 Agustus"],
    jawaban: 2,
  },
  {
    pertanyaan:
      "Pahlawan wanita dari Jepara yang memperjuangkan pendidikan perempuan adalah",
    pilihan: ["Fatmawati", "R.A. Kartini", "Dewi Sartika", "Cut Nyak Dien"],
    jawaban: 1,
  },
  {
    pertanyaan: "Burung nasional Indonesia adalah",
    pilihan: ["Elang", " Jalak Bali", "Burung Cendrawasih", "Garuda"],
    jawaban: 3,
  },
  {
    pertanyaan: "Provinsi paling barat Indonesia adalah",
    pilihan: ["Papua", "NTT", "Aceh", "Bengkulu"],
    jawaban: 2,
  },
  {
    pertanyaan: "Pulau terluas di Indonesia adalah",
    pilihan: ["Sumatera", "Kalimantan", "Sulawesi", "Papua"],
    jawaban: 1,
  },
  {
    pertanyaan: "Gunung tertinggi di Indonesia adalah",
    pilihan: [
      "Gunung Semeru",
      "Gunung Merapi",
      "Gunung Kerinci",
      " Puncak Jaya",
    ],
    jawaban: 3,
  },
  {
    pertanyaan: "Semboyan negara Indonesia adalah",
    pilihan: [
      "Adil dan Makmur",
      " Bhinneka Tunggal Ika",
      "Bersatu Kita Teguh",
      " Damai Itu Indah",
    ],
    jawaban: 1,
  },
  {
    pertanyaan: "Candi Borobudur terletak di provinsi",
    pilihan: [" Jawa Barat", "Jawa Timur", "Jawa Tengah", "Yogyakarta"],
    jawaban: 2,
  },
  {
    pertanyaan: "Sungai terpanjang di Indonesia adalah",
    pilihan: [" Kapuas", "Musi", "Mahakam", "Bengawan Solo"],
    jawaban: 0,
  },
  {
    pertanyaan: "Warisan budaya batik berasal dari",
    pilihan: ["Kalimantan", "Jawa", "Sumatera", "Papua"],
    jawaban: 1,
  },
  {
    pertanyaan: "Penemu lampu pijar adalah",
    pilihan: [
      "Isaac Newton",
      "Alexander Graham Bell",
      "Thomas Alva Edison",
      "Albert",
    ],
    jawaban: 2,
  },
  {
    pertanyaan: "Negara dengan populasi terbanyak di dunia adalah",
    pilihan: [" India", "Amerika Serikat", "Tiongkok", "Indonesia"],
    jawaban: 2,
  },
  {
    pertanyaan: "Benua terkecil di dunia adalah",
    pilihan: ["Australia", " Afrika", " Eropa", "Antartika"],
    jawaban: 0,
  },
  {
    pertanyaan: "Negara anggota ASEAN yang tidak memiliki garis pantai adalah",
    pilihan: ["Laos", "Kamboja", "Myanmar", "Thailand"],
    jawaban: 0,
  },
  {
    pertanyaan: "Organisasi dunia yang mengurusi kesehatan adalah",
    pilihan: [" IMF", "WHO", "FAO", " WTO"],
    jawaban: 1,
  },
  {
    pertanyaan: "Planet yang memiliki cincin paling jelas adalah",
    pilihan: ["Mars", "Bumi", "Jupiter", "Saturnus"],
    jawaban: 3,
  },
  {
    pertanyaan: "Hari Bumi sedunia diperingati setiap",
    pilihan: ["22 Apri", "5 Juni", "10 Oktober", "1 Maret"],
    jawaban: 0,
  },
  {
    pertanyaan:
      "Bendera Merah Putih dikibarkan pertama kali saat proklamasi di",
    pilihan: [
      "Lapangan Monas",
      "Rumah Soekarno",
      " Jalan Pegangsaan Timur 56",
      "Istana Negara",
    ],
    jawaban: 2,
  },
  {
    pertanyaan: "Indonesia pernah menjadi tuan rumah Asian Games pada tahun",
    pilihan: [" 2014", " 2016", "2018", " 2020"],
    jawaban: 2,
  },
  {
    pertanyaan: "Tokoh pelukis terkenal asal Indonesia adalah",
    pilihan: ["R.A. Kartini", "Basuki Abdullah", " Chairil Anwar", " Affandi"],
    jawaban: 2,
  },
  {
    pertanyaan: "Alat musik Sasando berasal dari",
    pilihan: ["Maluku", " Papua", "NTT", "Kalimantan"],
    jawaban: 2,
  },
  {
    pertanyaan:
      "Pemain bulu tangkis Indonesia peraih emas Olimpiade 1992 adalah",
    pilihan: [
      "Taufik Hidayat",
      "Alan Budikusuma",
      " Hendra Setiawan",
      "Kevin Sanjaya",
    ],
    jawaban: 1,
  },
  {
    pertanyaan: "Jumlah provinsi di Indonesia Tahun 2024 adalah",
    pilihan: ["34", "36", " 37", "38"],
    jawaban: 3,
  },
  {
    pertanyaan:
      "Kota tertua di Indonesia yang pernah menjadi pusat perdagangan rempah adalah",
    pilihan: ["Ternate", "Jakarta", "Surabaya", "Bandung"],
    jawaban: 0,
  },
  {
    pertanyaan: "Ibukota provinsi Kalimantan Timur adalah",
    pilihan: ["Banjarmasin", "Balikpapan", "Samarinda", "Palangkaraya"],
    jawaban: 2,
  },
  {
    pertanyaan: "Tujuan utama Sumpah Pemuda adalah",
    pilihan: [
      "Menyatukan Indonesia secara budaya",
      "Membebaskan Indonesia dari penjajah",
      "Menggalang kekuatan politik",
      "Mempersatukan pemuda dari berbagai suku",
    ],
    jawaban: 3,
  },
  {
    pertanyaan: "Julukan kota pelajar di Indonesia adalah",
    pilihan: ["Surabaya", "Bandung", "Yogyakarta", " Malang"],
    jawaban: 2,
  },
  {
    pertanyaan: "Danau terbesar di Indonesia adalah",
    pilihan: ["Toba", "Poso", "Sentani", "Singkarak"],
    jawaban: 0,
  },
  {
    pertanyaan:
      "Penemuan arkeologi manusia purba “Pithecanthropus Erectus” ditemukan di",
    pilihan: ["Sumatera", " Jawa", "SKalimantan", "Sulawesi"],
    jawaban: 1,
  },
  {
    pertanyaan: "Lembaga yang mengawasi keuangan negara adalah",
    pilihan: [" KPK", "BPK", " KPU", "BPS"],
    jawaban: 1,
  },
  {
    pertanyaan: "Jumlah pulau di Indonesia lebih dari",
    pilihan: [" 5.000", " 10.000", "13.000", " 17.000"],
    jawaban: 3,
  },
  {
    pertanyaan: "Negara yang berbatasan langsung dengan Papua adalah",
    pilihan: ["Timor Leste", " Malaysia", "Papua Nugini", " Filipina"],
    jawaban: 2,
  },
  {
    pertanyaan: "Cagar alam Komodo terletak di provinsi",
    pilihan: [" NTT", "NTB", "Bali", "Sulawesi"],
    jawaban: 0,
  },
  // soal mtk
  {
    pertanyaan: "Hasil dari 12 + 18 ÷ 3 × 2 adalah",
    pilihan: ["20", "24", "30", "36"],
    jawaban: 1,
  },
  {
    pertanyaan: "Bentuk pecahan dari 0,75 adalah",
    pilihan: ["3/4", "2/5", "1/2", "4/5"],
    jawaban: 0,
  },
  {
    pertanyaan: "Faktor prima dari 60 adalah",
    pilihan: [" 2, 3, 5", "2, 3, 4", "3, 4, 5", "2, 4, 5"],
    jawaban: 0,
  },
  {
    pertanyaan: "FPB dari 36 dan 60 adalah",
    pilihan: ["6", "12", "18", "24"],
    jawaban: 1,
  },
  {
    pertanyaan: "KPK dari 8 dan 12 adalah",
    pilihan: ["24", "36", "48", "60"],
    jawaban: 2,
  },
  {
    pertanyaan: "25% dari 80 adalah",
    pilihan: ["15", "18", "20", "25"],
    jawaban: 2,
  },
  {
    pertanyaan: "Hasil dari (15 - 5) × 2 adalah",
    pilihan: ["20", "12", "30", "25"],
    jawaban: 0,
  },
  {
    pertanyaan: "Nilai x yang memenuhi 3x + 6 = 15 adalah",
    pilihan: ["2", "3", "4", "5"],
    jawaban: 1,
  },
  {
    pertanyaan: "Hasil dari 5 × (4 + 2) adalah",
    pilihan: ["20", "25", "30", "32"],
    jawaban: 2,
  },
  {
    pertanyaan: "Suhu awal 20°C, lalu turun 7°C. Suhu akhir adalah",
    pilihan: ["27°C", "14°C", " 13°C", "17°C"],
    jawaban: 3,
  },
  {
    pertanyaan: "Keliling segitiga dengan sisi 5 cm, 6 cm, dan 7 cm adalah",
    pilihan: ["17 cm", "18 cm", " 19 cm", "20 cm"],
    jawaban: 1,
  },

  //Soal Ipa

  {
    pertanyaan: "Planet yang paling dekat dengan Matahari adalah",
    pilihan: ["Venus", "Mars", "Merkurius", "Jupiter"],
    jawaban: 2,
  },
  {
    pertanyaan: "Benda langit yang mengelilingi planet disebut",
    pilihan: ["Bintang", "Satelit", "Asteroid", "Komet"],
    jawaban: 1,
  },
  {
    pertanyaan: "Proses fotosintesis terjadi pada",
    pilihan: ["Tumbuhan", "Hewan", "Manusia", "Bakteri"],
    jawaban: 0,
  },
  {
    pertanyaan: "Gas yang paling melimpah di atmosfer Bumi adalah",
    pilihan: ["Oksigen", "Karbon dioksida", "Nitrogen", "Hidrogen"],
    jawaban: 2,
  },
  {
    pertanyaan: "Bagian sel yang berfungsi sebagai pusat pengendali adalah",

    pilihan: ["Sitoplasma", "Membran sel", "Nukleus", "Ribosom"],
    jawaban: 2,
  },
  {
    pertanyaan: "Proses perubahan air menjadi uap disebut",
    pilihan: [" Pengembunan", " Penguapan", " Pembekuan", " Peleburan"],
    jawaban: 1,
  },
  {
    pertanyaan: "Hewan yang memiliki tulang belakang disebut",
    pilihan: ["Invertebrata", "Vertebrata", "Amfibi", "Reptil"],
    jawaban: 1,
  },
  {
    pertanyaan: "Bagian tumbuhan yang berfungsi menyerap air adalah",
    pilihan: ["Akar", "Batang", "Daun", "Bunga"],
    jawaban: 0,
  },
  {
    pertanyaan:
      "Organ manusia yang berfungsi sebagai tempat pertukaran oksigen dan karbon dioksida adalah",
    pilihan: ["Hati", "Paru-paru", "Jantung", "Ginjal"],
    jawaban: 1,
  },
  {
    pertanyaan: "Bunyi merambat paling cepat melalui",
    pilihan: ["Udara", "Air", "Logam", "Vakum"],
    jawaban: 2,
  },
  {
    pertanyaan: "Proses perubahan zat padat menjadi cair disebut",

    pilihan: ["Mencair", "Pembekuan", "Penguapan", "Pengembunan"],
    jawaban: 0,
  },
  {
    pertanyaan:
      "Bagian dari sistem saraf yang mengendalikan gerakan tubuh adalah",
    pilihan: ["Otak", "Sumsum tulang belakang", "Saraf tepi", "Neuron"],
    jawaban: 0,
  },
  {
    pertanyaan: "Hewan yang hidup di dua alam (air dan darat) disebut",
    pilihan: ["Amfibi", "Reptil", "Mamalia", "Burung"],
    jawaban: 0,
  },
  {
    pertanyaan: "Bagian tumbuhan yang berfungsi untuk fotosintesis adalah",
    pilihan: ["Akar", "Batang", "Daun", "Bunga"],
    jawaban: 2,
  },
  {
    pertanyaan: "Proses perubahan air menjadi es disebut",

    pilihan: ["Mencair", "Pembekuan", "Penguapan", "Pengembunan"],
    jawaban: 1,
  },
  {
    pertanyaan: "Bagian dari sistem pencernaan yang menyerap nutrisi adalah",
    pilihan: ["Lambung", "Usus halus", "Usus besar", "Mulut"],
    jawaban: 1,
  },
  {
    pertanyaan: "Hewan yang mengalami metamorfosis sempurna adalah",

    pilihan: ["Kupu-kupu", "Kecoa", "Laba-laba", "Belalang"],
    jawaban: 0,
  },
  {
    pertanyaan: "Bagian dari tumbuhan yang berfungsi untuk reproduksi adalah",
    pilihan: ["Akar", "Batang", "Daun", "Bunga"],
    jawaban: 3,
  },
  {
    pertanyaan:
      "Alat optik yang digunakan untuk melihat benda sangat kecil adalah",

    pilihan: ["Mikroskop", "Teleskop", "Kamera", "Lensa"],
    jawaban: 0,
  },
  {
    pertanyaan: "Benda disebut konduktor jika",

    pilihan: [
      "Mampu menghantarkan listrik",
      "Tidak mampu menghantarkan listrik",
      "Mampu menyerap cahaya",
      "Tidak mampu menyerap cahaya",
    ],
    jawaban: 0,
  },
  {
    pertanyaan:
      "Bagian dari tumbuhan yang berfungsi untuk menyimpan cadangan makanan adalah",

    pilihan: ["Akar", "Batang", "Daun", "Bunga"],
    jawaban: 1,
  },
  {
    pertanyaan: "Hewan pemakan tumbuhan disebut",

    pilihan: ["Karnivora", "Herbivora", "Omnivora", "Insektivora"],
    jawaban: 1,
  },

  // Soal bhs ind/inggris

  {
    pertanyaan: "Antonim dari kata “kasar” adalah",
    pilihan: ["Halus", "Keras", "Lembut", "Rata"],
    jawaban: 0,
  },
  {
    pertanyaan:
      "Kata berimbuhan pada kalimat “Adik sedang membaca buku” adalah",

    pilihan: ["Adik", "Sedang", "Membaca", "Buku"],
    jawaban: 2,
  },
  {
    pertanyaan: "Tujuan dari teks eksposisi adalah untuk",

    pilihan: [
      "Menghibur pembaca",
      "Memberikan informasi",
      "Menceritakan pengalaman",
      "Mengajak pembaca berdebat",
    ],
    jawaban: 1,
  },
  {
    pertanyaan: "What is the plural of “child”?",
    pilihan: ["Childs", "Children", "Childes", "Childer"],
    jawaban: 1,
  },

  {
    pertanyaan: "Choose the correct verb: “She ___ to school every day.",
    pilihan: ["Go", "Goes", "Going", "Gone"],
    jawaban: 1,
  },
  {
    pertanyaan: "Which one is a noun?",
    pilihan: ["Run", "Table", "Happiness", "Beautiful"],
    jawaban: 1,
  },
  {
    pertanyaan: "Which one is an adjective?",
    pilihan: ["Run", "Slowly", "Read", "Tall"],
    jawaban: 3,
  },

  {
    pertanyaan: "Interaksi sosial terjadi jika ada",

    pilihan: ["Komunikasi", "Perbedaan budaya", "Pertentangan", "Kesamaan"],
    jawaban: 0,
  },
  {
    pertanyaan: "Contoh interaksi sosial di sekolah adalah",
    pilihan: [
      "Belajar sendiri",
      "Bermain sendirian",
      "Diskusi kelompok",
      "Tidur di kelas",
    ],
    jawaban: 2,
  },
  {
    pertanyaan: "Faktor yang mempengaruhi interaksi sosial adalah",

    pilihan: ["Agama", "Suku", "Budaya", "Semua jawaban benar"],
    jawaban: 3,
  },
  {
    pertanyaan: "Orang yang melanggar norma hukum akan mendapat",

    pilihan: [
      "Sanksi sosial",
      "Penghargaan",
      "Pujian",
      "Tidak ada konsekuensi",
    ],
    jawaban: 0,
  },
  {
    pertanyaan: "Salah satu contoh norma kesopanan adalah",

    pilihan: ["Menghormati orang tua", "Mencuri", "Berbohong", "Menipu"],
    jawaban: 0,
  },
  {
    pertanyaan: "Fungsi utama keluarga adalah",

    pilihan: [
      "Mendidik anak",
      "Mengumpulkan harta",
      "Bersenang-senang",
      "Berkumpul dengan teman",
    ],
    jawaban: 0,
  },
  {
    pertanyaan: "Contoh nilai sosial adalah",

    pilihan: ["Keadilan", "Kekayaan", "Kekuasaan", "Kesombongan"],
    jawaban: 0,
  },

  {
    pertanyaan: "Lembaga sosial yang mengatur pendidikan adalah",

    pilihan: ["Keluarga", "Sekolah", "Masyarakat", "Pemerintah"],
    jawaban: 1,
  },

  {
    pertanyaan: "Jika dua kelompok berbeda saling menghargai, maka terjadi",

    pilihan: ["Konflik", "Integrasi", "Persaingan", "Diskriminasi"],
    jawaban: 1,
  },
  {
    pertanyaan: "Konflik bisa diselesaikan dengan",

    pilihan: ["Kekerasan", "Musyawarah", "Menghindar", "Membiarkan"],
    jawaban: 1,
  },
  {
    pertanyaan: "Semboyan Bhinneka Tunggal Ika berarti",

    pilihan: [
      "Berbeda-beda tetapi tetap satu",
      "Satu untuk semua",
      "Semua sama",
      "Tidak ada perbedaan",
    ],
    jawaban: 0,
  },

  {
    pertanyaan: "Contoh sikap toleransi di sekolah adalah",

    pilihan: [
      "Menghargai perbedaan agama",
      "Mencemooh teman",
      "Menghindari teman yang berbeda",
      "Memaksakan pendapat",
    ],
    jawaban: 0,
  },
  {
    pertanyaan: "Keanekaragaman budaya Indonesia merupakan kekayaan yang harus",

    pilihan: ["Dilestarikan", "Dihancurkan", "Diabaikan", "Dibandingkan"],
    jawaban: 0,
  },

  {
    pertanyaan:
      "Jika ada teman berbeda agama yang sedang berpuasa, kita sebaiknya",

    pilihan: [
      "Memaksa menawarkan makanan",
      "Mengolok-olok",
      "Menghormati dan tidak mengganggu",
      "Mengabaikan",
    ],
    jawaban: 2,
  },
  {
    pertanyaan:
      "Sikap tidak adil terhadap seseorang karena suku atau agama disebut",

    pilihan: ["Diskriminasi", "Toleransi", "Integrasi", "Akulturasi"],
    jawaban: 0,
  },
  {
    pertanyaan: "Fungsi utama Pancasila dalam kehidupan berbangsa adalah",

    pilihan: [
      "Hiasan Negara",
      "Hukum tertinggi",
      "Sumber hukum",
      "Dasar pemersatu keberagaman",
    ],
    jawaban: 3,
  },

  // Tambahkan hingga 100 soal
];

const namaInput = document.getElementById("namaPeserta");
const mulaiBtn = document.getElementById("mulaiQuiz");
const peringatan = document.getElementById("peringatan");
const quizSection = document.getElementById("quizSection");
const quizForm = document.getElementById("quizForm");
const namaTampil = document.getElementById("namaTampil");
const timerEl = document.getElementById("timer");
const hasilSection = document.getElementById("hasilSection");
const skorTampil = document.getElementById("skorTampil");
const submitBtn = document.getElementById("submitQuiz");

let timerInterval;
let waktuTersisa = 25 * 60; // 25 menit 
let soalQuiz = [];

mulaiBtn.addEventListener("click", () => {
  const nama = namaInput.value.trim();
  if (!nama) {
    peringatan.textContent = "Nama tidak boleh kosong.";
    return;
  }
  const namaKey = nama.toLowerCase();
  const tanggal = new Date().toISOString().split("T")[0];
  const data = JSON.parse(localStorage.getItem("quiz_ranking") || "[]");
  const sudahIkut = data.find(
    (d) => d.nama.toLowerCase() === namaKey && d.tanggal === tanggal
  );

  if (sudahIkut) {
    peringatan.textContent = "Kamu sudah ikut quiz hari ini.";
    return;
  }

  // mulai quiz
  document.getElementById("form-nama").classList.add("hidden");
  quizSection.classList.remove("hidden");
  namaTampil.textContent = nama;

  soalQuiz = acakSoal(semuaSoal, 80); // ambil 80 soal acak dari semuaSoal
  tampilkanSoal();
  mulaiTimer();
});

function acakSoal(array, jumlah) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, jumlah);
}

function tampilkanSoal() {
  quizForm.innerHTML = "";
  soalQuiz.forEach((soal, index) => {
    const div = document.createElement("div");
    div.classList.add("soal-box");
    const html = `
      <p>${index + 1}. ${soal.pertanyaan}</p>
      ${soal.pilihan
        .map(
          (pil, i) => `
        <label>
          <input type="radio" name="soal${index}" value="${i}" /> ${pil}
        </label>
      `
        )
        .join("<br>")}
    `;
    div.innerHTML = html;
    quizForm.appendChild(div);
  });
}

function mulaiTimer() {
  updateTimer();
  timerInterval = setInterval(() => {
    waktuTersisa--;
    updateTimer();
    if (waktuTersisa <= 0) {
      clearInterval(timerInterval);
      submitQuiz();
    }
  }, 1000);
}

function updateTimer() {
  const menit = Math.floor(waktuTersisa / 60);
  const detik = waktuTersisa % 60;
  timerEl.textContent = `${String(menit).padStart(2, "0")}:${String(
    detik
  ).padStart(2, "0")}`;
}

submitBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  submitQuiz();
});

function submitQuiz() {
  const nama = namaInput.value.trim();
  let skor = 0;
  soalQuiz.forEach((soal, index) => {
    const jawaban = quizForm.querySelector(
      `input[name='soal${index}']:checked`
    );
    if (jawaban && parseInt(jawaban.value) === soal.jawaban) {
      skor++;
    }
  });

  const now = new Date();
  const tanggal = now.toISOString().split("T")[0];
  const waktu = now.toTimeString().split(" ")[0]; // hh:mm:ss

  let data = JSON.parse(localStorage.getItem("quiz_ranking") || "[]");

  // Hapus data dari hari sebelumnya
  data = data.filter((item) => item.tanggal === tanggal);

  // Simpan data hari ini
  data.push({ nama, skor, tanggal, waktu });
  localStorage.setItem("quiz_ranking", JSON.stringify(data));

  quizSection.classList.add("hidden");
  hasilSection.classList.remove("hidden");
  skorTampil.textContent = `Skor kamu: ${skor} dari ${soalQuiz.length}`;
}
