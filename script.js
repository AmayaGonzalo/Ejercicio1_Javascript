let btn = document.querySelector("#boton");

function intercambiar() {
  document.querySelector("#intercambiable").classList.toggle("oculto");
}

btn.addEventListener("click", intercambiar);
