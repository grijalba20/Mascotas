function activarImgA() {
    let ImgA = document.getElementById("img-1");
    let ImgB = document.getElementById("img-2");
    let btnA = document.getElementById("btn-1");
    let btnB = document.getElementById("btn-2");

    ImgB.classList.remove("active");
    ImgA.classList.add("active");

    btnB.classList.remove("active");
    btnA.classList.add("active");

}

function activarImgB() {
    let ImgA = document.getElementById("img-1");
    let ImgB = document.getElementById("img-2");
    let btnA = document.getElementById("btn-1");
    let btnB = document.getElementById("btn-2");

    ImgB.classList.add("active");
    ImgA.classList.remove("active");

    btnB.classList.add("active");
    btnA.classList.remove("active");

}


const btnGatos = document.getElementById("btn-1");
const btnPerros = document.getElementById("btn-2");
const tarjetasGatos = document.getElementById("tarjetas-gatos");
const tarjetasPerros = document.getElementById("tarjetas-perros");


function mostrarGatos() {
  btnGatos.classList.add("active");
  btnPerros.classList.remove("active");
  tarjetasGatos.classList.remove("oculto");
  tarjetasPerros.classList.add("oculto");
}


function mostrarPerros() {
  btnPerros.classList.add("active");
  btnGatos.classList.remove("active");
  tarjetasPerros.classList.remove("oculto");
  tarjetasGatos.classList.add("oculto");
}
