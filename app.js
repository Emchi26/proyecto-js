// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresAmigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
    
    if (!nombreAmigo) {
        alert("Ingresa un nombre");
        return;
    }

    nombresAmigos.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus()
}

function renderizarAmigos() {}

