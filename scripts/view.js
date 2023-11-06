let vbtn = document.getElementById("view")
let hbtn = document.getElementById("hide")
const charts = document.getElementById("charts")

vbtn.addEventListener("click", Mostrar)

hbtn.addEventListener("click", Ocultar)

function Mostrar() {
    charts.classList.add('viewable')
    vbtn.classList.remove('boton')
    vbtn.classList.add('hide')
    hbtn.classList.add('boton')
    hbtn.classList.remove('hide')
}

function Ocultar() {
    charts.classList.remove('viewable')
    vbtn.classList.add('boton')
    vbtn.classList.remove('hide')
    hbtn.classList.remove('boton')
    hbtn.classList.add('hide')
}