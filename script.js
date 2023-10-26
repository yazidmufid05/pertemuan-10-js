
function UbahTampilan() {

    // tag h5 dan p
    let teks_html = document.getElementById("teks_2")


    // tag input teks
    let teks = document.getElementById("teks").value
http://127.0.0.1:5500/#

    // tag input back
    let background = document.getElementById("background").value
  
    UbahTeks(teks)
    UbahBackground(background)
  }
  
  function UbahTeks(value) {
    // tag 5 dan p
    let teks_html = document.getElementById("teks_2")
  
    if (value == 1) {
      teks_html.style.color = "red"
    } else if (value == 2) {
      teks_html.style.color = "blue"
    }
  }

  function UbahBackground(value){
    // tag a
    let back_html = document.getElementById("back_2")

    if(value == 1){
        back_html.style.backgroundColor = "green"
    }

    else if (value == 2){
        back_html.style.backgroundColor = "purple"
    }

  }
  
  document.getElementById("teks").addEventListener("change", UbahTampilan)
  document.getElementById("background").addEventListener("change", UbahTampilan)