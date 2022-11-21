const lawan = document.querySelector("span#lawan")
const kamu = document.querySelector("span#kamu")
const hasil_per = document.querySelector("h1#t")
const kiri = document.querySelector("div.kiri img")
const kanan = document.querySelector("div.kanan img")
const ket_hasil = document.querySelector("div.ket img")
const fixed_div= document.querySelector("div.pilihan .fixed")


let random_pilihan = Math.random();


let play_games = (komputer_pil, user_pil) =>{
    const pil = document.querySelector("div.ket")
    pil.style.opacity= "1"
    let hasil = "" 
    let komputer = komputer_pil.toFixed(1)
    let pilihan_komputer;
    let pilihan_user;

    if(komputer >= 0 && komputer <= 0.4){
        pilihan_komputer = "batu"
    }else if(komputer >= 0.5 && komputer <= 0.7){
        pilihan_komputer = "kertas"
    }else{
        pilihan_komputer = "gunting"
    }


  let waktu_inter = setTimeout(() =>{
    if (pilihan_komputer == "batu" && pilihan_komputer !== user_pil && user_pil == "kertas" ) {
        hasil = "Kamu Menang"
        kiri.setAttribute("src", "img/batu.png")
        kanan.setAttribute("src", "img/kertas.png")
        ket_hasil.setAttribute("src", "img/menang.png")
    }
     else if(pilihan_komputer == "kertas" && pilihan_komputer !== user_pil && user_pil == "batu"){
        hasil = "Kamu Kalah"
        kiri.setAttribute("src", "img/kertas.png")
        kanan.setAttribute("src", "img/batu.png")
        ket_hasil.setAttribute("src", "img/kalah.png")
    }
     else if(pilihan_komputer == "gunting" && pilihan_komputer !== user_pil && user_pil == "kertas"){
        hasil = "Kamu Kalah"
        kiri.setAttribute("src", "img/gunting.png")
        kanan.setAttribute("src", "img/kertas.png")
        ket_hasil.setAttribute("src", "img/kalah.png")
    }
     else if(pilihan_komputer == "batu" && pilihan_komputer !== user_pil && user_pil == "gunting"){
        hasil = "Kamu Kalah"
        kiri.setAttribute("src", "img/batu.png")
        kanan.setAttribute("src", "img/gunting.png")
        ket_hasil.setAttribute("src", "img/kalah.png")
    }
     else if(pilihan_komputer == "kertas" && pilihan_komputer !== user_pil && user_pil == "gunting"){
        hasil = "Kamu Menang"
        kiri.setAttribute("src", "img/kertas.png")
        kanan.setAttribute("src", "img/gunting.png")
        ket_hasil.setAttribute("src", "img/menang.png")
    }
     else if(pilihan_komputer == "gunting" && pilihan_komputer !== user_pil && user_pil == "batu"){
        hasil = "Kamu Menang"
        kiri.setAttribute("src", "img/gunting.png")
        kanan.setAttribute("src", "img/batu.png")
        ket_hasil.setAttribute("src", "img/menang.png")
    }
    else if(pilihan_komputer == user_pil){
        hasil = "Seri"
        kiri.setAttribute("src", `img/${pilihan_komputer}.png`)
        kanan.setAttribute("src", `img/${user_pil}.png`)
        ket_hasil.setAttribute("src", "img/seimbang.png")
    }

    lawan.innerHTML = pilihan_komputer
    kamu.innerHTML = user_pil
    hasil_per.innerHTML = `< ${hasil} >`
    if(hasil == "Kamu Menang"){
    	hasil_per.style.color = "lightgreen"
    }else if(hasil == "Kamu Kalah"){
    	hasil_per.style.color = "#ed1948"
    }else{
    	hasil_per.style.color = "yellow"
    }
   
  }, 300)
  
  fixed_div.style.display = "flex"
  fixed_div.style.zIndex = "33"
    

}
