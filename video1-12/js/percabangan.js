if (true) {
    console.log ("Dijalankan Jika Benar");
}else {
    console.log ("Dijalankan Jika Salah");
}

let nilai = 59;
let kkm = 60;
let benar = "Lulus";
let Tidak = "Tidak Lulus";
let batas = 100;
let bawah = 0;
let alert = "Nilai Tidak Valid";
if (nilai <= batas && nilai >= bawah) {
    if (nilai >= kkm) {
        console.log (benar);
    } else {
        console.log (Tidak);
    }
} else {
    console.log (alert);
}

