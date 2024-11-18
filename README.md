<div align="center">
  <h1>Bisect-JS</h1>
  <p><a href="/docs/README.en.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/bisect-js/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Laporkan Bug</a> · <a href="https://github.com/BarudakRosul/bisect-js/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Ajukan Fitur</a></p>
  <p>
    <a href="https://github.com/BarudakRosul/bisect-js/actions/workflows/test.yml"><img src="https://github.com/BarudakRosul/bisect-js/actions/workflows/test.yml/badge.svg" alt="Testing"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/bisect"><img src="https://img.shields.io/npm/v/%40barudakrosul%2Fbisect" alt="NPM Version"/></a>
    <a href="/LICENSE"><img src="https://img.shields.io/github/license/BarudakRosul/bisect-js" alt="License"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/bisect"><img src="https://img.shields.io/npm/d18m/%40barudakrosul%2Fbisect" alt="Downloads"/></a>
    <a href="https://github.com/BarudakRosul/bisect-js/stargazers"><img src="https://img.shields.io/github/stars/BarudakRosul/bisect-js?style=flat" alt="Stars"/></a>
    <a href="https://github.com/BarudakRosul/bisect-js/network/members"><img src="https://img.shields.io/github/forks/BarudakRosul/bisect-js?style=flat" alt="Forks"/></a>
    <a href="https://github.com/BarudakRosul/bisect-js/issues"><img src="https://img.shields.io/github/issues/BarudakRosul/bisect-js" alt="Issues"/></a>
  </p>
  <a href="https://techforpalestine.org/learn-more"><img src="https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-support.svg" width="100%" alt="Support Palestine"/></a>
</div>

## Daftar Isi

1. [Pendahuluan](#pendahuluan)
2. [Fitur](#fitur)
3. [Instalasi](#instalasi)
4. [Penggunaan](#penggunaan)
5. [Berkontribusi](#berkontribusi)
6. [Lisensi](#lisensi)
7. [Penghargaan](#penghargaan)
8. [Donasi](#donasi)
9. [Catatan Perubahan](#catatan-perubahan)

## Pendahuluan

Bisect-JS adalah modul JavaScript yang menyediakan fungsi-fungsi untuk pencarian dan penyisipan elemen dalam array yang sudah terurut. Modul ini sangat cocok digunakan untuk mempertahankan struktur data terurut tanpa perlu mengurutkan kembali array setiap kali elemen baru dimasukkan. Modul ini dibuat semirip mungkin dengan modul `bisect` di Python.

## Fitur

Bisect-JS menawarkan fitur-fitur berikut:

- Pencarian posisi menggunakan algoritma bisection (pencarian biner) yang cepat.
- Penyisipan elemen ke dalam array terurut.
- Mendukung pencarian dan penyisipan berdasarkan kunci (_key_) tertentu menggunakan fungsi pembanding khusus.
- Dapat diintegrasikan ke dalam kode TypeScript.

## Instalasi

Untuk menginstal Bisect-JS secara lokal, ikuti langkah instalasi ini:

```shell
npm install @barudakrosul/bisect
```

## Penggunaan

Untuk memulai menggunakan Bisect-JS, import modulnya terlebih dahulu:

**1\. CommonJS**
```javascript
const bisect = require("@barudakrosul/bisect");
```

**2\. ESM (ECMAScript Modules)**
```javascript
import bisect from "@barudakrosul/bisect";
```

Contoh penggunaan:

**1\. Penggunaan fungsi `bisectRight(a, x, lo=0, hi=null, key=null)`**

Mengembalikan indeks tempat di mana elemen `x` harus dimasukkan ke dalam array `a` yang sudah terurut. Semua elemen di sebelah kiri indeks tersebut lebih kecil dari atau sama dengan `x`, dan semua elemen di sebelah kanannya lebih besar dari `x`.

```javascript
let arr = [1, 3, 4, 7];
let idx = bisectRight(arr, 5); // idx = 3
```

Contoh lain:

```javascript
let scores = [60, 70, 80, 90];
let grade = ['F', 'D', 'C', 'B', 'A'];
let idx = bisect(scores, 85); // idx = 3
console.log(grade[idx]); // B
```

**2\. Penggunaan fungsi `bisectLeft(a, x, lo=0, hi=null, key=null)`**

Mirip dengan fungsi `bisectRight`, namun mengembalikan indeks di mana `x` dapat disisipkan sehingga semua elemen di kiri indeks lebih kecil dari `x`, dan semua elemen di kanan lebih besar atau sama dengan `x`.

```javascript
let arr = [1, 3, 4, 7];
let idx = bisectLeft(arr, 5); // idx = 3
```

**3\. Penggunaan fungsi `insortRight(a, x, lo=0, hi=null, key=null)`**

Menyisipkan elemen `x` ke dalam array `a` yang sudah terurut menggunakan `bisectRight`. Jika `x` sudah ada di array, maka elemen baru akan disisipkan setelah elemen yang serupa.

```javascript
let arr = [1, 3, 4, 7];
insortRight(arr, 5);
console.log(arr); // [1, 3, 4, 5, 7]
```

Contoh lain:

```javascript
let items = [{'name': 'apple', 'price': 10}, {'name': 'banana', 'price': 5}];
insortRight(items, {'name': 'cherry', 'price': 7});
console.log(items); // [{'name': 'apple', 'price': 10}, {'name': 'banana', 'price': 5}, {'name': 'cherry', 'price': 7}]
```

**4\. Penggunaan fungsi `insortLeft(a, x, lo=0, hi=null, key=null)`**

Menyisipkan elemen `x` ke dalam array `a` yang sudah terurut menggunakan `bisectLeft`. Jika `x` sudah ada di array, elemen baru akan disisipkan sebelum elemen yang serupa.

```javascript
let arr = [1, 3, 4, 4, 6];
insortLeft(arr, 4);
console.log(arr); // [1, 3, 4, 4, 4, 6]
```

## Berkontribusi

Kontribusi pada Bisect-JS sangat dihargai! Baik melaporkan bug, menyarankan fitur baru, atau berkontribusi pada perbaikan kode.

## Lisensi

Bisect-JS dilisensikan di bawah Lisensi MIT - lihat berkas [LICENSE](/LICENSE) untuk detailnya.

## Penghargaan

Bisect-JS menghargai dukungan dan kontribusi dari individu dan proyek sumber terbuka berikut:

- [@FajarKim](https://github.com/FajarKim) - Pengembang utama dan pencipta aplikasi.
- Modul [Bisect Python](https://docs.python.org/3/library/bisect.html) - Sumber asli dalam pengembangan Bisect JavaScript.
- Komunitas sumber terbuka - Untuk kontribusi berharga pada alat dan perpustakaan yang digunakan dalam proyek ini.

## Donasi

Kami sangat menghargai dukungan Anda untuk terus mengembangkan proyek ini. Jika Anda merasa proyek ini bermanfaat, Anda dapat mendukung kami dengan donasi:

[![Ko-fi](https://img.shields.io/badge/Ko%e2%80%91fi-donate-7480ff?logo=ko-fi&logoColor=cyan)](https://ko-fi.com/barudakrosul)
[![Trakteer](https://custom-icon-badges.demolab.com/badge/Trakteer-donate-red?logo=trakteerid&logoColor=pink)](https://trakteer.id/barudakrosul)

Setiap donasi, berapapun jumlahnya, sangat berarti bagi kami. Terima kasih atas dukungan Anda! ❤️

## Catatan Perubahan

Terus ikuti perubahan dan pembaruan terbaru Bisect-JS dengan mengacu ke [Catatan Perubahan](https://github.com/BarudakRosul/bisect-js/releases).

Terima kasih telah memilih Bisect-JS! Kami bertujuan untuk memberikan solusi yang mudah untuk pencarian dan penyisipan elemen dalam array yang sudah terurut.

[![Stand with Palestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://techforpalestine.org/learn-more)