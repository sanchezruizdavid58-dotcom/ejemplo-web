// Actividad de iniciación a JavaScript: Mi pequeña tienda
// Para ejecutar: node mitienda.js

// APARTADO 1. VARIABLES Y TIPOS DE DATOS
console.log("===== BIENVENIDO A MI TIENDA =====");

const nombreTienda = "Mi pequeña tienda";
console.log("Bienvenido a " + nombreTienda);

const nombreProducto = "Ratón";
const precio = 15;
const stock = 10;

console.log("Producto: " + nombreProducto);
console.log("Precio: " + precio);
console.log("Stock: " + stock);

// APARTADO 2. ARRAYS Y MÉTODOS
console.log("\n===== NUESTROS PRODUCTOS =====");

const productos = ["Ratón", "Teclado", "Monitor", "Auriculares", "Altavoces"];
console.log(productos);
console.log("Número de productos: " + productos.length);

productos.push("Webcam");
console.log("Productos después de añadir uno: " + productos);

console.log("¿Tenemos teclado? " + productos.includes("Teclado"));
console.log("Primer producto en mayúsculas: " + productos[0].toUpperCase());

// APARTADO 3. OPERADORES
console.log("\n===== CALCULAR UNA COMPRA =====");

const unidadesCompradas = 3;
const totalCompra = precio * unidadesCompradas;

console.log("Unidades compradas: " + unidadesCompradas);
console.log("Total de la compra: " + totalCompra + " euros");

const descuento = 4;
const totalConDescuento = precio * 2 - descuento;
const precioUnidadConDescuento = totalConDescuento / 2;
console.log("Precio por unidad con descuento: " + precioUnidadConDescuento + " euros");

// APARTADO 4. CONDICIONALES
console.log("\n===== COMPROBAR LA COMPRA =====");

if (precio > 20) {
    console.log("Es un producto caro");
} else {
    console.log("Es un producto económico");
}

if (stock >= unidadesCompradas) {
    console.log("Hay stock suficiente");
} else {
    console.log("No hay stock suficiente");
}

if (unidadesCompradas >= 3) {
    console.log("El cliente tiene descuento");
} else {
    console.log("El cliente no tiene descuento");
}

// APARTADO 5. BOOLEANOS Y OPERADORES LÓGICOS
console.log("\n===== COMPROBACIONES =====");

const tiendaAbierta = true;
const pagoRealizado = false;

console.log("Tienda abierta: " + tiendaAbierta);
console.log("Pago realizado: " + pagoRealizado);

if (tiendaAbierta && pagoRealizado) {
    console.log("Pedido confirmado");
} else {
    console.log("Pedido pendiente");
}

// APARTADO 6. BUCLES
console.log("\n===== LISTA DE PRODUCTOS =====");

for (let i = 0; i < productos.length; i++) {
    console.log(productos[i]);
}

for (const producto of productos) {
    console.log(producto);
}

for (let numero = 1; numero <= 5; numero++) {
    console.log("Número: " + numero);
}

// APARTADO 7. FUNCIONES
console.log("\n===== FUNCIONES DE LA TIENDA =====");

function saludarCliente() {
    console.log("Gracias por visitar nuestra tienda");
}

saludarCliente();

function calcularTotal(precioProducto, cantidad) {
    return precioProducto * cantidad;
}

console.log("Total calculado: " + calcularTotal(10, 3) + " euros");

function comprobarStock(stockDisponible, unidadesSolicitadas) {
    if (stockDisponible >= unidadesSolicitadas) {
        return true;
    } else {
        return false;
    }
}

console.log("¿Hay stock para 5 unidades? " + comprobarStock(10, 5));
console.log("¿Hay stock para 12 unidades? " + comprobarStock(10, 12));

// APARTADO 8. RESUMEN FINAL
console.log("\n===== RESUMEN DE LA COMPRA =====");
console.log("Tienda: " + nombreTienda);
console.log("Productos disponibles: " + productos);
console.log("Producto seleccionado: " + nombreProducto);
console.log("Precio por unidad: " + precio + " euros");
console.log("Unidades compradas: " + unidadesCompradas);
console.log("Precio total: " + calcularTotal(precio, unidadesCompradas) + " euros");

if (comprobarStock(stock, unidadesCompradas) && tiendaAbierta && pagoRealizado) {
    console.log("Compra realizada correctamente");
} else {
    console.log("No se puede completar la compra");
}

console.log("\n===== FIN DE LA ACTIVIDAD =====");
console.log("¡Buen trabajo!");
