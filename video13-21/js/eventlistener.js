function coba() {
    a = document.querySelector(".isi");
    a.innerHTML = "Khtunl";
    console.log("coba Event Listener");
}

// judul.addEventListener("click",coba);

// judul.onclick = coba;
// judul.onmouseover = coba;

judul.onmouseover = function () {
    console.log ("Satu Tambah Satu");
};