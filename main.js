
console.log("Hello Word")

/// EVENTOS /// 
let nav = document.getElementById("btn")
let reserva = document.getElementById("btn2")
let h1 = document.getElementById("h1header")

nav.onclick = () =>{console.log("NAVclick")}
nav.onmousemove = () =>{console.log("NAVmousemove")}
nav.onmousedown = () =>{console.log("NAVmousedown")}
nav.onmouseout = () =>{console.log("NAVmouseout")}
nav.onmouseover = () =>{console.log("NAVmouseover")}
nav.onmouseup = () =>{console.log("NAVmouseup")}

reserva.onmousemove = () =>{console.log("RESERVAmousemove")}
reserva.onmouseout = () =>{console.log("RESERVAmouseout")}
reserva.onmouseover = () =>{console.log("RESERVAmouseover")}

h1.onmousemove = () =>{console.log("BRODmousemove")}
h1.onmouseout = () =>{console.log("BRODmouseout")}
h1.onmouseover = () =>{console.log("BRODmouseover")}

/// DOM ///
console.dir(document.body)
console.dir(document.head)

let h1dom = document.getElementById("h1header");
let h2dom =document.getElementById("h2header");

console.log(h1dom);
console.log(h1dom.innerHTML);
console.log(h1dom.innerText);
console.log(h2dom)
console.log(h2dom.innerHTML)
console.log(h2dom.innerText) 

///STORAGE
localStorage.setItem('Bienvenido', 'Bienvenidos a Brod')
let mensaje = localStorage.getItem('Bienvenido')
console.log(mensaje)

sessionStorage.setItem('email', "brodbakery@gmail.com")
email = sessionStorage.getItem('email')
console.log( email)

for (let i = 0; i < localStorage.length; i++){

    let clave = localStorage.key(i)


    console.log("clave "+ clave);
    console.log("valor "+ localStorage.getItem(clave))
}

const producto1 = {id:1, tipo:"Pan Clasico "};

localStorage.setItem("producto1",producto1);

const enJSON = JSON.stringify(producto1);

console.log(enJSON); //carga el objeto
console.log(typeof enJSON) //tipo objeto
console.log(typeof producto1) //tipo string

localStorage.setItem("Panes", enJSON);

const producto2 = JSON.parse(localStorage.getItem("Panes"))
console.log(producto2.tipo)



const productos = [ {nro:1, producto: "Pan Clasico", precio:300},
{nro:2, producto: "Pan de semillas", precio:450},
{nro:3, producto:"Pan Mediterraneo", precio:480,}]

const guardarLocal = (clave,valor) => {localStorage.setItem(clave, valor)}

for (const producto of productos) {

    guardarLocal(producto.codigo, JSON.stringify(producto));
}

guardarLocal ("listaProductos", JSON.stringify(productos));

class Producto {

    constructor(obj){

        this.producto = obj.producto;
        this.precio = parseFloat(obj.precio);

    }

    sumaIva(){
        
        this.precio = this.precio * 1.21;
    }
}

const almacenados = JSON.parse(localStorage.getItem ("listaProductos"));
const productosPan = [];

for(const objeto of almacenados) productosPan.push(new Producto(objeto));
for (const precio of productosPan) precio.sumaIva();

console.log(productosPan);

