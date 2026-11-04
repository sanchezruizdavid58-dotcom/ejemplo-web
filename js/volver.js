const botonVolver = document.createElement("button");
botonVolver.type = "button";
botonVolver.className = "boton-volver";
botonVolver.textContent = "← Volver";
botonVolver.setAttribute("aria-label", "Volver a la página anterior");
botonVolver.addEventListener("click", () => {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = "index.html";
    }
});

const contenidoPrincipal = document.querySelector("main");
if (contenidoPrincipal) {
    contenidoPrincipal.prepend(botonVolver);
} else {
    document.querySelector("header").after(botonVolver);
}
