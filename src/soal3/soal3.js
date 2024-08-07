"use strict";
function cetakSegitigaSikuKanan(tinggi) {
    for (let i = 1; i <= tinggi; i++) {
        let bintangDenganspasi = Array(i).fill('*').join(' ');
        console.log(' '.repeat(2 * (tinggi - i)) + bintangDenganspasi);
    }
}
// Contoh penggunaan
cetakSegitigaSikuKanan(10);
function segitiga(panjang) {
    var hasil = '';
    for (var a = panjang; a > 0; a--) {
        for (var b = 1; b <= panjang; b++) {
            if (b >= a) {
                hasil += ' *';
            }
            else {
                hasil += '  ';
            }
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga(9));
