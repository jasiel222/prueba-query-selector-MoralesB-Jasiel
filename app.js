// Imprimir el titulo del documento
console.log("El titulo de esta pagina es:", document.title);

// Guardar el contenido de la id
let titulo = document.querySelector("#titulopr");
console.log(titulo);
console.log(titulo.textContent);

// Editar propiedades
titulo.textContent = "Inventario de productos";
titulo.style.color = "white";
titulo.style.background = "#1d4ed8";
titulo.style.fontSize = "1.5rem";

let parrafo = document.querySelector("#parrafopr");
parrafo.insertAdjacentHTML(
    "afterend",
    "<p>Nuevo texto <i>pero este está en cursivas</i></p>"
);

let caja1 = document.querySelector("#caja1");
let presupuesto = prompt("Introduce el presupuesto");

if (presupuesto !== null && Number(presupuesto) >= 1200) {
    caja1.classList.add("aprobado");
    caja1.innerHTML = "<p>Presupuesto aprobado</p>";
} else {
    caja1.classList.add("noaprobado");
    caja1.innerHTML = "<p>Presupuesto no aprobado</p>";
}

const bodega = [
    {nombre: "Jasiel 1", precio: 100, stock: 3},
    {nombre: "Jasiel 2", precio: 200, stock: 1},
    {nombre: "Jasiel 3", precio: 350, stock: 0},
    {nombre: "Jasiel 4", precio: 1000, stock: 10},
    {nombre: "Jasiel 5", precio: 450, stock: 5}
];

let caja = document.querySelector("#cajavacia");
bodega.forEach(item => {
    let clasecolor = "";
    let estado = "";
    if (item.stock > 0) {
        clasecolor = "aprobado";
        estado = "Disponible";
    } else {
        clasecolor = "noaprobado";
        estado = "Agotado";
    }
    caja.innerHTML += `
        <div class="cajaproducto ${clasecolor}">
            <h2>Producto: ${item.nombre}</h2>
            <p>Precio: $ ${item.precio}</p>
            <p>Stock: ${item.stock}</p>
            <p>Estado: ${estado}</p>
        </div>
    `;
});
