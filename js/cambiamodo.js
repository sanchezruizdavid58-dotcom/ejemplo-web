const claveModo = "modoOscuro";

function aplicarModo(oscuro) {
    const temaOscuro = document.getElementById("tema-oscuro");
    temaOscuro.disabled = !oscuro;

    document.querySelectorAll("[data-cambiar-tema]").forEach((boton) => {
        boton.textContent = oscuro ? "Modo claro" : "Modo oscuro";
        boton.setAttribute("aria-pressed", String(oscuro));
    });
}

function cambiarModo() {
    const oscuro = document.getElementById("tema-oscuro").disabled;
    aplicarModo(oscuro);
    localStorage.setItem(claveModo, oscuro ? "oscuro" : "claro");
}

document.addEventListener("DOMContentLoaded", () => {
    aplicarModo(localStorage.getItem(claveModo) === "oscuro");
    document.querySelectorAll("[data-cambiar-tema]").forEach((boton) => {
        boton.addEventListener("click", cambiarModo);
    });
});
