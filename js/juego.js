const opcionesJuego = ["piedra", "papel", "tijera"];
const resultadoJuego = document.getElementById("resultado-juego");
const puntosJugador = document.getElementById("puntos-jugador");
const puntosOrdenador = document.getElementById("puntos-ordenador");
const botonesJuego = document.querySelector(".juego-opciones");
const botonReiniciar = document.getElementById("reiniciar-juego");
const nombresOpciones = {
    piedra: "piedra",
    papel: "papel",
    tijera: "tijera"
};
const estadosResultado = ["estado-victoria", "estado-empate", "estado-derrota"];

let puntuacionJugador = 0;
let puntuacionOrdenador = 0;

function jugar(eleccionJugador) {
    const eleccionOrdenador = opcionesJuego[Math.floor(Math.random() * opcionesJuego.length)];
    let resultado;
    let estado;

    if (eleccionJugador === eleccionOrdenador) {
        resultado = "¡Empate!";
        estado = "estado-empate";
    } else if (
        (eleccionJugador === "piedra" && eleccionOrdenador === "tijera") ||
        (eleccionJugador === "papel" && eleccionOrdenador === "piedra") ||
        (eleccionJugador === "tijera" && eleccionOrdenador === "papel")
    ) {
        puntuacionJugador += 1;
        resultado = "¡Has ganado!";
        estado = "estado-victoria";
    } else {
        puntuacionOrdenador += 1;
        resultado = "Ha ganado el ordenador.";
        estado = "estado-derrota";
    }

    resultadoJuego.textContent = `Tú: ${nombresOpciones[eleccionJugador]}. Ordenador: ${nombresOpciones[eleccionOrdenador]}. ${resultado}`;
    resultadoJuego.classList.remove(...estadosResultado);
    resultadoJuego.classList.add(estado);
    puntosJugador.textContent = puntuacionJugador;
    puntosOrdenador.textContent = puntuacionOrdenador;
}

botonesJuego.addEventListener("click", (evento) => {
    const boton = evento.target.closest("button[data-eleccion]");
    if (boton) {
        jugar(boton.dataset.eleccion);
    }
});

botonReiniciar.addEventListener("click", () => {
    puntuacionJugador = 0;
    puntuacionOrdenador = 0;
    puntosJugador.textContent = "0";
    puntosOrdenador.textContent = "0";
    resultadoJuego.textContent = "Puntuación reiniciada. ¡Haz tu jugada!";
    resultadoJuego.classList.remove(...estadosResultado);
});