let coba = function (){
    return "Coba Function";
}

let buah = ['apel','mangga','pisang',10, coba(),
    tes = () => "Hasil Return Arrow Function",
    function nama(){
        return "Khuntul";
    },
];

console.log (buah);
console.log (buah['1']);

for (let i in buah) {
    console.log (buah[i]);
}
console.log (buah[5]());
console.log (buah[6]());