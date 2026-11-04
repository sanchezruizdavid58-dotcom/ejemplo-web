const pantalla = document.getElementById("pantalla");
const teclas = document.querySelector(".calculadora-teclas");

let valorActual = "0";
let valorGuardado = null;
let operadorPendiente = null;
let iniciarNuevoValor = false;
let hayError = false;

function actualizarPantalla() {
    pantalla.value = valorActual;
}

function escribirDigito(digito) {
    if (hayError || iniciarNuevoValor) {
        valorActual = digito;
        iniciarNuevoValor = false;
        hayError = false;
    } else if (valorActual === "0") {
        valorActual = digito;
    } else {
        valorActual += digito;
    }

    actualizarPantalla();
}

function escribirDecimal() {
    if (hayError || iniciarNuevoValor) {
        valorActual = "0.";
        iniciarNuevoValor = false;
        hayError = false;
    } else if (!valorActual.includes(".")) {
        valorActual += ".";
    }

    actualizarPantalla();
}

function calcular(izquierda, operador, derecha) {
    switch (operador) {
        case "+":
            return izquierda + derecha;
        case "-":
            return izquierda - derecha;
        case "*":
            return izquierda * derecha;
        case "/":
            return derecha === 0 ? null : izquierda / derecha;
        default:
            return derecha;
    }
}

function mostrarResultado(resultado) {
    if (resultado === null || !Number.isFinite(resultado)) {
        valorActual = "Error";
        valorGuardado = null;
        operadorPendiente = null;
        hayError = true;
    } else {
        valorActual = String(Number(resultado.toPrecision(12)));
    }

    iniciarNuevoValor = true;
    actualizarPantalla();
}

function seleccionarOperador(operador) {
    if (hayError) {
        return;
    }

    const valor = Number(valorActual);
    if (operadorPendiente && !iniciarNuevoValor) {
        const resultado = calcular(valorGuardado, operadorPendiente, valor);
        if (resultado === null || !Number.isFinite(resultado)) {
            mostrarResultado(null);
            return;
        }
        valorActual = String(Number(resultado.toPrecision(12)));
        actualizarPantalla();
    }

    valorGuardado = Number(valorActual);
    operadorPendiente = operador;
    iniciarNuevoValor = true;
}

function resolverOperacion() {
    if (hayError || operadorPendiente === null || valorGuardado === null) {
        return;
    }

    mostrarResultado(calcular(valorGuardado, operadorPendiente, Number(valorActual)));
    valorGuardado = null;
    operadorPendiente = null;
}

function borrar() {
    valorActual = "0";
    valorGuardado = null;
    operadorPendiente = null;
    iniciarNuevoValor = false;
    hayError = false;
    actualizarPantalla();
}

teclas.addEventListener("click", (evento) => {
    const tecla = evento.target.closest("button");
    if (!tecla) {
        return;
    }

    if (tecla.dataset.digit !== undefined) {
        escribirDigito(tecla.dataset.digit);
    } else if (tecla.dataset.operator) {
        seleccionarOperador(tecla.dataset.operator);
    } else if (tecla.dataset.action === "decimal") {
        escribirDecimal();
    } else if (tecla.dataset.action === "equals") {
        resolverOperacion();
    } else if (tecla.dataset.action === "clear") {
        borrar();
    }
});