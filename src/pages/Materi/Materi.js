const Materi = [
  {
    id: 1,
    kategori: "Javascript",
    judul: "Membuat Format Rupiah di Javascript",
    penulis: "Jane Doe",
    deskripsi:
      "Artikel ini menjelaskan cara membuat format Rupiah pada nilai uang di PHP.",
    isi: "<p>Dalam PHP, kita dapat menggunakan fungsi <code>number_format()</code> untuk melakukan formatting angka menjadi format Rupiah. Contohnya, jika kita memiliki angka 1000000, kita dapat menggunakan fungsi <code>number_format()</code> untuk mengubahnya menjadi 'Rp 1.000.000'.</p>",
    tanggal: "2023-06-02",
    syntax:
      "<?php\n\n$nilai = 1000000;\n$format_rupiah = 'Rp ' . number_format($nilai, 0, ',', '.');\necho $format_rupiah;\n?>",
  },
  {
    id: 2,
    kategori: "PHP",
    judul: "Membuat Format Rupiah di PHP",
    penulis: "Jane Doe",
    deskripsi:
      "Artikel ini menjelaskan cara membuat format Rupiah pada nilai uang di PHP.",
    isi: "<p>Dalam PHP, kita dapat menggunakan fungsi <code>number_format()</code> untuk melakukan formatting angka menjadi format Rupiah. Contohnya, jika kita memiliki angka 1000000, kita dapat menggunakan fungsi <code>number_format()</code> untuk mengubahnya menjadi 'Rp 1.000.000'.</p>",
    tanggal: "2023-06-02",
    syntax:
      "<?php\n\n$nilai = 1000000;\n$format_rupiah = 'Rp ' . number_format($nilai, 0, ',', '.');\necho $format_rupiah;\n?>",
  },
  {
    id: 3,
    kategori: "Javascript",
    judul: "Membuat Tombol Klik Sederhana dengan Javascript",
    penulis: "John Doe",
    deskripsi:
      "Artikel menjelaskan cara membuat tombol klik sederhana menggunakan Javascript.",
    isi: "Dalam tutorial ini, kita akan belajar bagaimana membuat tombol klik sederhana dengan Javascript. Tombol ini akan merespons saat diklik dan menampilkan pesan 'Tombol diklik!' di console. Untuk mencapai ini, kita akan menggunakan event listener yang akan mendengarkan kejadian klik pada tombol dan menjalankan fungsi yang ditentukan saat itu terjadi. Dengan mengikuti langkah-langkah dalam tutorial ini, Anda akan memahami cara menggunakan event listener dalam Javascript untuk merespons interaksi pengguna. Berikut adalah contoh syntax code Javascript untuk membuat tombol klik sederhana:",
    tanggal: "3 Juni 2023",
    syntax:
      "\n// HTML\n<button id='myButton'>Klik Saya</button>\n\n// Javascript\nconst button = document.getElementById('myButton');\n\nbutton.addEventListener('click', function() {\n  console.log('Tombol diklik!');\n});",
  },
  {
    id: 4,
    kategori: "PHP",
    judul: "Membuat Form Kontak dengan PHP",
    penulis: "Jane Smith",
    deskripsi:
      "Artikel ini memberikan tutorial singkat tentang cara membuat form kontak sederhana dengan PHP.",
    isi: "Dalam tutorial ini, kita akan belajar bagaimana membuat form kontak sederhana dengan PHP. Form ini akan mengambil input dari pengguna, seperti nama, email, dan pesan, dan mengirimkan email ke alamat tujuan menggunakan fungsi mail() dalam PHP. Kami akan mengajarkan langkah-langkah untuk membuat form HTML, mengambil data input, memvalidasi data, dan mengirim email. Dengan mengikuti tutorial ini, Anda akan memahami cara menggunakan PHP untuk mengelola form dan mengirim email.",
    tanggal: "3 Juni 2023",
    syntax:
      "Berikut adalah contoh syntax code PHP untuk mengirim email menggunakan fungsi mail():\n\n<?php\n$tujuan = 'alamat.tujuan@example.com';\n$subjek = 'Pesan dari Form Kontak';\n$nama = $_POST['nama'];\n$email = $_POST['email'];\n$pesan = $_POST['pesan'];\n\n$headers = 'From: ' . $nama . ' <' . $email . '>' . \"\\r\\n\";\n\nmail($tujuan, $subjek, $pesan, $headers);\n?>",
  },
  {
    id: 5,
    kategori: "Javascript",
    judul: "Membuat Slideshow dengan Javascript",
    penulis: "John Doe",
    deskripsi:
      "Artikel ini memberikan tutorial singkat tentang cara membuat slideshow sederhana dengan Javascript.",
    isi: "Dalam tutorial ini, kita akan belajar cara membuat slideshow sederhana menggunakan Javascript. Slideshow akan menampilkan beberapa gambar secara otomatis dengan efek transisi. Kami akan menggunakan HTML, CSS, dan Javascript untuk mencapai tujuan ini. Kami akan menjelaskan langkah-langkah untuk membuat struktur HTML, mengatur tampilan dengan CSS, dan menggunakan Javascript untuk mengendalikan perpindahan gambar. Setelah mengikuti tutorial ini, Anda akan dapat membuat slideshow yang menarik pada situs web Anda.",
    tanggal: "15 Juni 2023",
    syntax:
      "Berikut adalah contoh syntax code Javascript untuk membuat slideshow:\n\n// HTML\n<div class='slideshow'>\n  <img src='gambar1.jpg' alt='Gambar 1'>\n  <img src='gambar2.jpg' alt='Gambar 2'>\n  <img src='gambar3.jpg' alt='Gambar 3'>\n</div>\n\n// Javascript\nconst slideshow = document.querySelector('.slideshow');\nconst images = slideshow.querySelectorAll('img');\nlet currentIndex = 0;\n\nfunction showImage(index) {\n  images.forEach((image, i) => {\n    if (i === index) {\n      image.style.display = 'block';\n    } else {\n      image.style.display = 'none';\n    }\n  });\n}\n\nfunction nextImage() {\n  currentIndex = (currentIndex + 1) % images.length;\n  showImage(currentIndex);\n}\n\nsetInterval(nextImage, 3000);",
  },
  {
    id: 6,
    kategori: "PHP",
    judul: "Membuat Sistem Login dengan PHP dan MySQL",
    penulis: "Jane Smith",
    deskripsi:
      "Artikel ini memberikan tutorial singkat tentang cara membuat sistem login sederhana dengan PHP dan MySQL.",
    isi: "Dalam tutorial ini, kita akan belajar cara membuat sistem login sederhana menggunakan PHP dan MySQL. Sistem login akan memvalidasi kredensial pengguna, memeriksa apakah username dan password yang dimasukkan benar, dan memberikan akses ke halaman yang sesuai. Kami akan menjelaskan langkah-langkah untuk membuat tabel pengguna di database MySQL, membuat form login, menghubungkan dengan database, dan melakukan validasi login. Dengan mengikuti tutorial ini, Anda akan dapat mengimplementasikan sistem login pada aplikasi web Anda.",
    tanggal: "20 Juni 2023",
    syntax:
      'Berikut adalah contoh syntax code PHP untuk sistem login dengan MySQL:\n\n<?php\nsession_start();\n\n$koneksi = mysqli_connect(\'localhost\', \'username\', \'password\', \'database\');\n\nif (isset($_POST[\'login\'])) {\n  $username = $_POST[\'username\'];\n  $password = $_POST[\'password\'];\n\n  $query = "SELECT * FROM users WHERE username=\'$username\' AND password=\'$password\'";\n  $result = mysqli_query($koneksi, $query);\n\n  if (mysqli_num_rows($result) === 1) {\n    $_SESSION[\'username\'] = $username;\n    header(\'Location: dashboard.php\');\n  } else {\n    $error = "Username atau password salah";\n  }\n}\n\n?>\n\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Sistem Login</title>\n</head>\n<body>\n\n<form method="POST" action="login.php">\n  <input type="text" name="username" placeholder="Username"><br>\n  <input type="password" name="password" placeholder="Password"><br>\n  <input type="submit" name="login" value="Login">\n</form>\n\n</body>\n</html>',
  },
  {
    id: 7,
    kategori: "Javascript",
    judul: "Menggunakan Fetch API untuk Mengambil Data dari Server",
    penulis: "John Doe",
    deskripsi:
      "Artikel ini memberikan tutorial singkat tentang cara menggunakan Fetch API dalam Javascript untuk mengambil data dari server.",
    isi: "Dalam tutorial ini, kita akan belajar cara menggunakan Fetch API dalam Javascript untuk mengambil data dari server. Fetch API adalah antarmuka modern yang digunakan untuk melakukan permintaan HTTP dari browser. Kami akan menjelaskan cara membuat permintaan GET dan POST menggunakan Fetch API, mengelola respons server, dan menampilkan data yang diambil pada halaman web. Dengan mengikuti tutorial ini, Anda akan dapat mengambil data dari server secara dinamis dan menggunakannya dalam aplikasi web Anda.",
    tanggal: "25 Juni 2023",
    syntax:
      "Berikut adalah contoh syntax code Javascript untuk menggunakan Fetch API:\n\n// Mengambil data dengan metode GET\nfetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => {\n    console.log(data);\n  })\n  .catch(error => {\n    console.error(error);\n  });\n\n// Mengirim data dengan metode POST\nfetch('https://api.example.com/data', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    username: 'john_doe',\n    password: 'password123'\n  })\n})\n  .then(response => response.json())\n  .then(data => {\n    console.log(data);\n  })\n  .catch(error => {\n    console.error(error);\n  });",
  },
  {
    id: 8,
    kategori: "PHP",
    judul: "Menggunakan PDO untuk Interaksi dengan Database",
    penulis: "Jane Smith",
    deskripsi:
      "Artikel ini memberikan tutorial singkat tentang cara menggunakan PDO (PHP Data Objects) untuk interaksi dengan database dalam PHP.",
    isi: "Dalam tutorial ini, kita akan belajar cara menggunakan PDO (PHP Data Objects) untuk melakukan interaksi dengan database dalam PHP. PDO adalah ekstensi PHP yang menyediakan antarmuka umum untuk berinteraksi dengan berbagai jenis database. Kami akan menjelaskan cara terhubung ke database, menjalankan kueri SQL, mengambil data, dan menyimpan data menggunakan PDO. Dengan mengikuti tutorial ini, Anda akan dapat mengelola database secara efisien dalam aplikasi PHP Anda.",
    tanggal: "1 Juli 2023",
    syntax:
      "Berikut adalah contoh syntax code PHP untuk menggunakan PDO:\n\n// Terhubung ke database\n$host = 'localhost';\n$dbname = 'nama_database';\n$username = 'username';\n$password = 'password';\n\n$dsn = \"mysql:host=$host;dbname=$dbname;charset=utf8mb4\";\n$pdo = new PDO($dsn, $username, $password);\n\n// Menjalankan kueri SELECT\n$query = \"SELECT * FROM tabel\";\n$result = $pdo->query($query);\n\nwhile ($row = $result->fetch(PDO::FETCH_ASSOC)) {\n  // Mengakses data\n  echo $row['nama_kolom'];\n}\n\n// Menjalankan kueri INSERT\n$data = [\n  'nama' => 'John Doe',\n  'email' => 'johndoe@example.com'\n];\n\n$query = \"INSERT INTO tabel (nama, email) VALUES (:nama, :email)\";\n$statement = $pdo->prepare($query);\n$statement->execute($data);\n",
  },
];

export default Materi;
