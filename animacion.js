let estado = true

let click = document.getElementById("click")
let teclas = document.getElementById("teclas")

let boton = document.querySelector(".boton")

let gato = document.querySelector(".gato")

boton.addEventListener("click", activar_animacion)

function activar_animacion(){
    if (estado){
        gato.classList.add("gato_mov")
        click.play()
        teclas.play()
        estado = false
    } else{
        gato.classList.remove("gato_mov")
        click.play()
        teclas.pause()
        estado = true
    }
}