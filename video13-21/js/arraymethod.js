// array -> string, number, object, function, mix(campuran)

let nilai = [
    {nama:"khan", ipa:70, bahasa:90, matematika: 59},
    {nama:"khin", ipa:88, bahasa:82, matematika: 50},
    {nama:"khun", ipa:94, bahasa:89, matematika: 55},
    {nama:"khen", ipa:92, bahasa:52, matematika: 45},
];

let nama = ["khan","khin","khun","khen"];

let mapel = ["Ipa","Bahasa","Matematika"];

// console.log (nama.concat(mapel));

// console.log (nama.concat(["Ips","Sejarah","Tik"]));

// nama.push = ("khon","kan");

// nama.unshift ("jina","khina");

// console.log (nama.slice(2,5))

// console.log (nama.splice(2,4));

// console.log (nama.pop());

// console.log (nama.shift());

//console.log (nilai[0].nama);
// console.log (nama);

// for (let index = 0; index < nama.length; index++) {
//     console.log (nama[index]);
// }

// nama.forEach(function(a) {
//     console.log (a);
// });

// nama.forEach((a => console.log (a)));

// nilai.filter(function(a){
//     if (a.ipa > 80) {
//         console.log (a.nama);
//     }
// })

// nilai.filter(a => (a.ipa > 80 && a.matematika > 50 ? console.log (a)  : null));

// let siswa = nilai.map(function (a) {
//     return a.nama;
// })

// let siswa = nilai.map(a => [a.nama, a.ipa, a.bahasa]);

// console.log (siswa);

// mapel.sort();
// console.log(mapel);

// let hasil = nilai.reduce(function (a, b) {
//     return (a = a + b.ipa);
// }, 0);

let hasil = nilai.reduce((a,b) => (a += b.ipa),0);

console.log (hasil);