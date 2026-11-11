//imprimir el titulo del documento
console.log("El titulo de esta pagina es:", document.title);

//guardar el contenido de la id
let titulo = document.querySelector("#titulopr");

console.log(titulo);

//extraer y editar propiedades
console.log(titulo.textContent);

titulo.textContent = "Editado desde javascript"
titulo.style.color = "white";
titulo.style.background = "royalblue";
titulo.stylefontSize = "1.5rem;";
titulo.textContent = "texto nuevo";

titulo.textContent = titulo.textContent + "Texto nuevo";
titulo.textContent += "otro texto nuevo";

let parrafo = document.querySelector("#parrafopr");

parrafo.innerHTML += "nuevo texto <i> pero este esta en cursivas </i>";

let caja1 = document.querySelector("#caja1");

caja1.innerHTML += "<p>Parrafo de la caja</p>";

caja1.classList.add("noaprobado");

let presupuesto = prompt("Introduce el presupuesto");

if(presupuesto >= 1200){
    caja1.classList.add("aprobado");
}else{
    caja1.classList.add("noaprobado")
}

const bodega = [
    {nombre: "Jasiel 1", precio: 100, stock: 3},
    {nombre: "Jasiel 2", precio: 200, stock: 1},
    {nombre: "Jasiel 3", precio: 350, stock: 0},
    {nombre: "Jasiel 4", precio: 1000, stock: 10},
    {nombre: "Jasiel 5", precio: 450, stock: 5}
]

let caja = document.querySelector("#cajavacia")

bodega.forEach(item => {
    let clasecolor = "";
    if(item.stock> 0){
        clasecolor = "aprobado"
    }
    else{
        clasecolor = "noaprobado"
    }

    caja.innerHTML += `
    <div class = "cajaproducto ${clasecolor}">
    <h2>Producto: ${item.nombre}</h2>
    <p>Precio: $ ${item.precio}</p>
    <p>stock:  ${item.stock}</p>

    </div>
    `
})
