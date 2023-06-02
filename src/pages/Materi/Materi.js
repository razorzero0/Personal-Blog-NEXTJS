const Materi = [
  {
    id: 1,
    kategori: "Javascript",
    judul: "Membuat Format Rupiah di JavaScript",
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
];

export default Materi;
