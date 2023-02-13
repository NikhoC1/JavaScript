let fungsi = function (nama) {
    console.log ("Belajar Function " + nama);
};

fungsi("khin");

let contoh = (nama) => {
    console.log ("Belajar Function" + nama);
};

contoh("budi"); 

let tambah = function (a, b) {
    return a + b;
};

console.log(tambah(2, 9)); 

let plus = (a, b ) => a + b;

console.log (plus(9,8));

let hasil = (a) => a * 2;
console.log (hasil(4));

let lagi = () => console.log ("Coba Lagi");

lagi();

let belajar = () => {
    console.log("Baris Satu");
    console.log("Baris Dua");
    console.log("Baris Tiga");
    console.log("Baris Selanjutnya");
};

belajar();

let nilai = 8;

let uji = (nilai < 7) ? () => predikat = "Gagal" : () => predikat = "Lulus";

console.log (uji());
