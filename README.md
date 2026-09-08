<p align="center">

<img src="assets/header.jpg" alt="Logo PAHAT Programming Language" width="300"/>

</p>

# 🚀 PAHAT Programming Language — Documentation Guide

**PAHAT (Pemrograman Analitis Berbasis Heuristik dan Arsitektur Terpadu)** adalah bahasa pemrograman **expressive & lightweight** dengan sintaks intuitif berbasis bahasa Indonesia.

---

# 👨‍💻 Tentang PAHAT

**PAHAT (Pemrograman Analitis Berbasis Heuristik dan Arsitektur Terpadu)** dibuat oleh **Syahdan Masyhuri** sebagai bahasa pemrograman yang berfokus pada kesederhanaan sintaks, keterbacaan, dan pengalaman pemrograman yang dekat dengan bahasa Indonesia.

PAHAT berusaha menghadirkan pengalaman pemrograman yang **ringan, ekspresif, dan mudah dipahami**, tanpa menghilangkan konsep-konsep fundamental dalam pemrograman seperti variabel, operator, kontrol alur, fungsi, struktur data, JSON, standard library, dan modul.

Bahasa ini dibuat dengan tujuan menghadirkan pendekatan alternatif dalam mempelajari dan menggunakan bahasa pemrograman melalui sintaks yang lebih familiar bagi pengguna bahasa Indonesia.

> **PAHAT — sederhana untuk dibaca, ringan untuk digunakan.** 🚀

> **Dibuat dengan ❤️ oleh Syahdan Masyhuri.**

---

# 📌 Metadata

| Properti           | Nilai                                                          |
| ------------------ | -------------------------------------------------------------- |
| **Nama**           | PAHAT Programming Language                                     |
| **Kepanjangan**    | Pemrograman Analitis Berbasis Heuristik dan Arsitektur Terpadu |
| **Pembuat**        | Syahdan Masyhuri                                               |
| **Versi**          | 1.2.0                                                          |
| **Status**         | Development                                                    |
| **Ekstensi File**  | `.pahat`                                                       |
| **Bahasa Sintaks** | Bahasa Indonesia                                               |
| **Paradigma**      | Prosedural, Imperatif, Fungsional                              |
| **Lisensi**        | MIT                                                            |
| **Dokumentasi**    | `README.md`                                                    |

---

# 📖 Daftar Isi

* [Metadata](#-metadata)
* [Tentang PAHAT](#-tentang-pahat)
* [Variabel](#-variabel)
* [Tipe Data](#-tipe-data)
* [Operator](#-operator)
* [Input dan Output](#-input-dan-output)
* [Percabangan](#-percabangan)
* [Perulangan](#-perulangan)
* [Pilihan Kondisi (Switch Case)](#-pilihan-kondisi-switch-case)
* [Array](#-array)
* [Object](#-object)
* [JSON](#-json)
* [Fungsi](#-fungsi)
* [Modul](#-modul)
* [Standard Library](#-standard-library)
* [Komentar](#-komentar)
* [Contoh Program Lengkap](#-contoh-program-lengkap)
* [Ringkasan Fitur](#-ringkasan-fitur)
* [Lisensi](#-lisensi)

---

# 🔤 Variabel

PAHAT menggunakan sintaks sederhana untuk membuat variabel dengan operator penugasan `=`. Penulisan baris dieksekusi dengan diakhiri tanda titik koma `;`.

```pahat
nama = "Syahdan";
umur = 20;
tinggi = 170.5;
aktif = true;
```

PAHAT menggunakan penetapan tipe data secara dinamis berdasarkan nilai yang diberikan.

Contoh:

```pahat
angka = 10;
angka = "sepuluh";
```

Variabel dapat berubah tipe selama program berjalan.

---

# 🧩 Tipe Data

PAHAT mendukung beberapa tipe data dasar.

## INTEGER

Bilangan bulat.

```pahat
umur = 20;
jumlah = 100;
```

## FLOAT

Bilangan desimal yang dipisahkan tanda titik `.`.

```pahat
tinggi = 170.5;
nilai = 98.75;
```

## STRING

Teks menggunakan tanda kutip ganda (`"..."`) atau kutip tunggal (`'...'`).

PAHAT mendukung escape sequence seperti `\n`, `\t`, `\r`, `\"`, dan `\'`.

```pahat
nama = "Syahdan";
pesan = 'Halo Dunia!';
```

## BOOLEAN

Nilai logika menggunakan:

* `true`
* `false`

```pahat
aktif = true;
selesai = false;
```

## NULL

PAHAT menggunakan `nol` sebagai representasi nilai kosong.

```pahat
data = nol;
```

---

# 🧮 Operator

## Operator Aritmatika

| Operator | Fungsi                    | Contoh        |
| -------- | ------------------------- | ------------- |
| `+`      | Penjumlahan               | `a + b`       |
| `-`      | Pengurangan / Unary Minus | `a - b`, `-a` |
| `*`      | Perkalian                 | `a * b`       |
| `/`      | Pembagian                 | `a / b`       |
| `%`      | Modulo (Sisa Bagi)        | `a % b`       |
| `**`     | Pangkat (Exponentiation)  | `a ** b`      |

Contoh:

```pahat
a = 10;
b = 3;

cetak(a + b);   // 13
cetak(a - b);   // 7
cetak(a * b);   // 30
cetak(a / b);   // 3.333...
cetak(a % b);   // 1
cetak(a ** b);  // 1000
```

## Operator Perbandingan

| Operator | Fungsi                |
| -------- | --------------------- |
| `==`     | Sama dengan           |
| `!=`     | Tidak sama dengan     |
| `<`      | Lebih kecil           |
| `>`      | Lebih besar           |
| `<=`     | Lebih kecil atau sama |
| `>=`     | Lebih besar atau sama |

Contoh:

```pahat
umur = 20;

cetak(umur == 20);
cetak(umur > 18);
cetak(umur < 30);
```

## Operator Logika

| Operator | Fungsi       |   |    |
| -------- | ------------ | - | -- |
| `&&`     | AND          |   |    |
| `\|\|`   | OR           |   |    |
| `^`      | XOR          |   |    |
| `!`      | NOT (Negasi) |   |    |

Contoh:

```pahat
a = true;
b = false;

cetak(a && b);
cetak(a || b);
cetak(a ^ b);
cetak(!a);
```

## Increment dan Decrement

PAHAT mendukung increment (`++`) dan decrement (`--`).

```pahat
angka = 10;

angka++;
cetak(angka); // 11

angka--;
cetak(angka); // 10
```

---

# 🖨️ Input dan Output

Untuk menampilkan nilai ke layar digunakan fungsi `cetak()`.

```pahat
cetak("Halo Dunia!");
cetak(10);
cetak(10 + 20);
```

---

# 🔀 Percabangan

PAHAT menggunakan kata kunci `jika` untuk mengevaluasi kondisi dan `lainnya` untuk alternatif kondisi.

```pahat
umur = 20;

jika (umur >= 18) {
    cetak("Dewasa");
} lainnya {
    cetak("Belum dewasa");
}
```

Dukungan bercabang dengan `lainnya jika`:

```pahat
nilai = 85;

jika (nilai >= 90) {
    cetak("A");
} lainnya jika (nilai >= 80) {
    cetak("B");
} lainnya {
    cetak("C");
}
```

---

# 🔁 Perulangan

## `selama`

Perulangan berbasis kondisi, mirip `while`.

```pahat
angka = 1;

selama (angka <= 5) {
    cetak(angka);
    angka++;
}
```

## `ulang`

Perulangan berbasis iterasi terstruktur, mirip `for`.

```pahat
ulang (i = 0; i <= 4; i++) {
    cetak("Halo PAHAT!");
}
```

## Hentikan Iterasi — `hentikan`

Gunakan `hentikan` untuk menghentikan perulangan secara paksa.

```pahat
ulang (i = 1; i <= 10; i++) {
    jika (i == 5) {
        hentikan;
    }

    cetak(i);
}
```

---

# 🔀 Pilihan Kondisi (Switch Case)

PAHAT mendukung struktur kontrol keputusan menggunakan kata kunci `pilih`, `kasus`, dan `bawaan`.

```pahat
pilihan = 2;

pilih (pilihan) {

    kasus 1: {
        cetak("Pilihan pertama");
    }

    kasus 2: {
        cetak("Pilihan kedua");
    }

    bawaan: {
        cetak("Pilihan tidak ditemukan");
    }
}
```

Setiap `kasus` dievaluasi sampai ditemukan kecocokan.

PAHAT menggunakan perilaku **no fall-through**, sehingga setelah satu `kasus` cocok, kasus berikutnya tidak ikut dijalankan.

`bawaan` hanya dijalankan apabila tidak ada `kasus` yang cocok.

Ekspresi `kasus` juga dapat berupa ekspresi PAHAT.

---

# 📦 Array

Array di PAHAT didefinisikan menggunakan kurung siku `[...]`. Elemen diakses berdasarkan indeks berbasis 0.

```pahat
angka = [10, 20, 30, 40, 50];

cetak(angka[0]); // 10
cetak(angka[2]); // 30
```

Array dapat berisi tipe data campuran, bertingkat (nested array), hingga multi-dimensi.

```pahat
matrix = [
    [1, 2, 3],
    [4, 5, 6]
];

cetak(matrix[0][1]); // 2
```

---

# 🗂️ Object

PAHAT mendukung **object literal** untuk menyimpan pasangan key-value menggunakan kurung kurawal `{...}`.

Key dapat berupa identifier atau string.

```pahat
pengguna = {
    nama: "Syahdan",
    umur: 20,
    aktif: true
};
```

Nilai object dapat diakses menggunakan **bracket notation** (`["key"]`) maupun **dot notation** (`.key`).

```pahat
cetak(pengguna["nama"]);
cetak(pengguna.umur);
```

Pengubahan properti object:

```pahat
pengguna.umur = 21;
pengguna["aktif"] = false;
```

---

# 🧾 JSON

PAHAT menyediakan fungsi bawaan untuk pengolahan JSON:

* `baca_json(string_json)` — Mengubah string JSON menjadi nilai PAHAT.
* `tulis_json(data)` — Mengubah nilai PAHAT menjadi string JSON.

Contoh:

```pahat
data = baca_json("{\"nama\":\"Syahdan\",\"umur\":20}");

cetak(data.nama);
```

Konversi object PAHAT menjadi JSON:

```pahat
pengguna = {
    nama: "Syahdan",
    aktif: true
};

json_str = tulis_json(pengguna);

cetak(json_str);
```

Fungsi JSON tersebut merupakan **builtin core**, sehingga tidak membutuhkan:

```pahat
impor "json";
```

---

# ⚙️ Fungsi

Fungsi dideklarasikan menggunakan kata kunci `fungsi`. Nilai dapat dikembalikan menggunakan kata kunci `kembalikan`.

```pahat
fungsi tambah(a, b) {
    kembalikan a + b;
}

hasil = tambah(10, 20);

cetak(hasil); // 30
```

Fungsi dapat memiliki parameter dan dapat dipanggil dari module lain.

---

# 📦 Modul

PAHAT mendukung modularisasi kode dengan membagi kode ke dalam beberapa file `.pahat`.

## Mengimpor Modul PAHAT

Gunakan kata kunci `impor` diikuti string path module.

**Ekstensi `.pahat` tidak ditulis pada kode PAHAT.**

Contoh:

```pahat
impor "modul/matematika";
impor "web/http";
impor "config/database";
```

PAHAT akan mencari file:

```text
modul/matematika.pahat
web/http.pahat
config/database.pahat
```

Path module tidak dibatasi pada folder tertentu.

## Pemanggilan Fungsi Module

Fungsi dari module dipanggil menggunakan:

```text
nama_module.nama_fungsi()
```

Contoh:

```pahat
impor "modul/matematika";

hasil = matematika.tambah(10, 20);

cetak(hasil);
```

Jika file:

```text
modul/matematika.pahat
```

berisi:

```pahat
fungsi tambah(a, b) {
    kembalikan a + b;
}
```

maka fungsi tersebut dapat dipanggil sebagai:

```pahat
matematika.tambah(10, 20);
```

## Module Bersarang

Module dapat mengimpor module lain.

Contoh:

```text
web/
├── http.pahat
└── util.pahat
```

`http.pahat` dapat menggunakan:

```pahat
impor "util";
```

Resolver module akan menggunakan lokasi file module yang sedang melakukan import sebagai dasar pencarian.

## Module Circular

PAHAT mendeteksi circular import.

Contoh:

```text
a.pahat
  ↓
b.pahat
  ↓
a.pahat
```

akan menghasilkan error circular import.

---

# 📚 Standard Library

PAHAT memiliki **Standard Library native** yang terintegrasi langsung dengan runtime.

Standard Library dibagi menjadi dua kategori:

1. **Core builtin** — selalu tersedia tanpa import.
2. **Native module** — harus di-import sebelum digunakan.

---

## 🧠 Core Builtin

Fungsi core dapat langsung digunakan tanpa `impor`.

### `panjang()`

Mengembalikan panjang string atau jumlah elemen array.

```pahat
nama = "PAHAT";

cetak(panjang(nama));
```

Contoh array:

```pahat
angka = [10, 20, 30];

cetak(panjang(angka));
```

### `tipe()`

Mengembalikan nama tipe sebuah nilai.

```pahat
cetak(tipe(10));       // int
cetak(tipe(10.5));     // float
cetak(tipe("Halo"));   // string
cetak(tipe(true));     // bool
cetak(tipe([1, 2]));   // array
cetak(tipe(nol));      // null
```

### Fungsi GC

PAHAT menyediakan beberapa builtin untuk memantau dan mengendalikan garbage collector.

| Fungsi                       | Keterangan                                  |
| ---------------------------- | ------------------------------------------- |
| `gc_object_count()`          | Jumlah object yang sedang dikelola GC       |
| `gc_bytes_allocated()`       | Jumlah byte yang sedang dialokasikan        |
| `gc_total_allocated()`       | Total jumlah alokasi object                 |
| `gc_total_freed()`           | Total jumlah object yang dibebaskan         |
| `gc_total_bytes_allocated()` | Total byte yang pernah dialokasikan         |
| `gc_total_bytes_freed()`     | Total byte yang pernah dibebaskan           |
| `gc_collections()`           | Jumlah garbage collection                   |
| `gc_pending()`               | Memeriksa apakah collection sedang tertunda |
| `gc_collect()`               | Memaksa garbage collection                  |
| `gc_next_threshold()`        | Mendapatkan threshold collection berikutnya |

Contoh:

```pahat
cetak(gc_object_count());
cetak(gc_bytes_allocated());
cetak(gc_collections());

gc_collect();

cetak(gc_object_count());
```

---

# ➗ Module `math`

Module `math` berisi fungsi matematika native.

Module **harus di-import sebelum digunakan**.

```pahat
impor "math";
```

Pemanggilan fungsi menggunakan namespace:

```pahat
math.nama_fungsi(...)
```

Contoh:

```pahat
impor "math";

cetak(math.tambah(10, 20));
cetak(math.kurang(30, 10));
cetak(math.kali(5, 6));
cetak(math.pangkat(10, 2));
```

Contoh penggunaan:

```pahat
impor "math";

a = math.tambah(10, 20);
b = math.kali(a, 5);
c = math.pangkat(b, 2);

cetak(c);
```

Tanpa:

```pahat
impor "math";
```

pemanggilan:

```pahat
math.pangkat(10, 2);
```

akan menghasilkan error:

```text
Error: module 'math' belum diimport.
Gunakan: impor "math";
```

---

# 🔤 Module `string`

Module `string` menyediakan fungsi-fungsi untuk pemrosesan teks.

Module harus di-import:

```pahat
impor "string";
```

Contoh:

```pahat
impor "string";

teks = "Halo Pahat";

cetak(string.besar(teks));
cetak(string.kecil(teks));
```

Pemanggilan selalu menggunakan namespace:

```text
string.nama_fungsi(...)
```

Contoh:

```pahat
impor "string";

hasil = string.besar("halo dunia");

cetak(hasil);
```

Tanpa:

```pahat
impor "string";
```

pemanggilan `string.*` akan menghasilkan error module belum di-import.

---

# 📁 Module `file`

Module `file` menyediakan operasi dasar untuk file.

Import:

```pahat
impor "file";
```

## `file.ada()`

Memeriksa apakah sebuah file tersedia.

```pahat
impor "file";

cetak(file.ada("data.txt"));
```

Mengembalikan `true` atau `false`.

## `file.baca()`

Membaca seluruh isi file sebagai string.

```pahat
impor "file";

isi = file.baca("data.txt");

cetak(isi);
```

Jika file tidak dapat dibaca, fungsi mengembalikan `nol`.

## `file.tulis()`

Menulis isi baru ke file.

```pahat
impor "file";

berhasil = file.tulis(
    "data.txt",
    "Halo PAHAT!"
);

cetak(berhasil);
```

Mengembalikan `true` jika operasi berhasil.

## `file.tambah()`

Menambahkan isi ke akhir file.

```pahat
impor "file";

file.tambah(
    "data.txt",
    "\nBaris kedua."
);
```

## `file.hapus()`

Menghapus file.

```pahat
impor "file";

berhasil = file.hapus("data.txt");

cetak(berhasil);
```

## `file.ukuran()`

Mengembalikan ukuran file dalam byte.

```pahat
impor "file";

ukuran = file.ukuran("data.txt");

cetak(ukuran);
```

Jika file tidak ditemukan, fungsi mengembalikan `-1`.

---

# 💻 Module `os`

Module `os` menyediakan fungsi yang berhubungan dengan environment dan sistem operasi.

Import:

```pahat
impor "os";
```

## `os.cwd()`

Mengembalikan current working directory.

```pahat
impor "os";

cetak(os.cwd());
```

## `os.getenv()`

Membaca environment variable.

```pahat
impor "os";

path = os.getenv("PATH");

cetak(path);
```

Jika environment variable tidak tersedia, fungsi mengembalikan `nol`.

## `os.platform()`

Mengembalikan platform yang sedang digunakan.

```pahat
impor "os";

cetak(os.platform());
```

Contoh hasil:

```text
windows
```

atau:

```text
linux
```

atau:

```text
macos
```

## `os.env()`

Membuat atau mengubah environment variable.

```pahat
impor "os";

berhasil = os.env(
    "PAHAT_MODE",
    "development"
);

cetak(berhasil);
```

## `os.exit()`

Mengakhiri proses PAHAT dengan exit code tertentu.

```pahat
impor "os";

os.exit(0);
```

> `os.exit()` menghentikan proses secara langsung. Hindari penggunaannya di tengah automated test kecuali memang ingin menguji exit process.

---

# ⏱️ Module `time`

Module `time` menyediakan fungsi waktu.

Import:

```pahat
impor "time";
```

## `time.sekarang()`

Mengembalikan waktu lokal saat ini dalam format:

```text
YYYY-MM-DD HH:MM:SS
```

Contoh:

```pahat
impor "time";

cetak(time.sekarang());
```

## `time.timestamp()`

Mengembalikan Unix timestamp.

```pahat
impor "time";

timestamp = time.timestamp();

cetak(timestamp);
```

## `time.tidur()`

Menghentikan eksekusi selama sejumlah detik.

Mendukung integer dan float.

```pahat
impor "time";

cetak("Mulai");

time.tidur(1);

cetak("Selesai");
```

Dengan nilai desimal:

```pahat
time.tidur(0.5);
```

Nilai negatif tidak diperbolehkan.

---

# 🔐 Aturan Import Standard Library

Native module PAHAT menggunakan aturan import yang sama.

| Module   | Import            | Contoh                  |
| -------- | ----------------- | ----------------------- |
| `math`   | `impor "math";`   | `math.tambah(1, 2)`     |
| `string` | `impor "string";` | `string.besar("halo")`  |
| `file`   | `impor "file";`   | `file.baca("data.txt")` |
| `os`     | `impor "os";`     | `os.cwd()`              |
| `time`   | `impor "time";`   | `time.sekarang()`       |

Module native **tidak boleh digunakan sebelum di-import**.

Contoh yang salah:

```pahat
cetak(math.tambah(10, 20));
```

Contoh yang benar:

```pahat
impor "math";

cetak(math.tambah(10, 20));
```

Sementara fungsi core tetap dapat digunakan langsung:

```pahat
cetak(panjang("PAHAT"));
cetak(tipe(123));
cetak(gc_object_count());
```

---

# 💬 Komentar

PAHAT mendukung dua gaya penulisan komentar.

Komentar satu baris:

```pahat
// Ini komentar
```

Komentar multi-baris:

```pahat
/*
   Ini komentar
   multi-baris
*/
```

---

# 🧪 Contoh Program Lengkap

Contoh berikut menggunakan module PAHAT, native standard library, object, array, kontrol alur, dan JSON.

```pahat
impor "modul/matematika";
impor "math";
impor "string";
impor "file";
impor "os";
impor "time";

pengguna = {
    nama: "Syahdan",
    umur: 20,
    aktif: true,
    nilai: [80, 90, 95]
};

cetak("=== DATA PENGGUNA ===");

cetak(pengguna.nama);
cetak(pengguna.umur);
cetak(string.besar(pengguna.nama));

jika (pengguna.umur >= 18 && pengguna.aktif) {
    cetak("Pengguna aktif dan sudah dewasa");
} lainnya {
    cetak("Pengguna tidak memenuhi syarat");
}

cetak("=== MATEMATIKA ===");

total_nilai = matematika.tambah(
    pengguna.nilai[0],
    pengguna.nilai[1]
);

cetak(total_nilai);

hasil = math.pangkat(10, 2);

cetak(hasil);

cetak("=== SWITCH ===");

pilih (pengguna.umur) {

    kasus 20: {
        cetak("Berumur tepat 20 tahun");
    }

    bawaan: {
        cetak("Umur lainnya");
    }
}

cetak("=== FILE ===");

nama_file = "data_pahat.txt";

file.tulis(
    nama_file,
    "Halo dari PAHAT!"
);

cetak(file.ada(nama_file));

isi = file.baca(nama_file);

cetak(isi);

file.hapus(nama_file);

cetak("=== OS ===");

cetak(os.platform());
cetak(os.cwd());

cetak("=== TIME ===");

cetak(time.sekarang());
cetak(time.timestamp());

cetak("=== JSON ===");

json_data = tulis_json(pengguna);

cetak(json_data);
```

---

# 📋 Ringkasan Fitur

| Fitur               | Sintaks PAHAT                     |
| ------------------- | --------------------------------- |
| Variabel            | `nama = "Syahdan";`               |
| Output              | `cetak("Teks");`                  |
| Boolean             | `true` / `false`                  |
| Null                | `nol`                             |
| Operator Pangkat    | `a ** b`                          |
| Percabangan         | `jika`, `lainnya jika`, `lainnya` |
| Perulangan          | `selama (...)`, `ulang (...)`     |
| Kontrol Perulangan  | `hentikan;`                       |
| Multi Kondisi       | `pilih`, `kasus`, `bawaan`        |
| Array               | `[1, 2, 3]`                       |
| Akses Array         | `angka[0]`                        |
| Object              | `{ nama: "PAHAT" }`               |
| Akses Object        | `obj["key"]` / `obj.key`          |
| Pengembalian Fungsi | `kembalikan`                      |
| Fungsi              | `fungsi nama(...) { ... }`        |
| JSON                | `baca_json()` / `tulis_json()`    |
| Import Module       | `impor "nama/module";`            |
| Import Native       | `impor "math";`                   |
| Panggilan Module    | `nama_module.fungsi()`            |
| Math                | `math.fungsi()`                   |
| String              | `string.fungsi()`                 |
| File                | `file.fungsi()`                   |
| OS                  | `os.fungsi()`                     |
| Time                | `time.fungsi()`                   |
| Core                | `panjang()`, `tipe()`, fungsi GC  |

---

# 📜 Lisensi

PAHAT menggunakan lisensi **MIT**.

---

# 🚀 PAHAT

**Pemrograman Analitis Berbasis Heuristik dan Arsitektur Terpadu**

> **Sederhana untuk dibaca, ringan untuk digunakan.**

> **Dibuat oleh Syahdan Masyhuri.**
