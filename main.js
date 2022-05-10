

//////SISTEMA DE RESTAURANT//////////////////

/////////////sistema de facturacion////////

///cd es caja diaria ///cf es cantidad de facturas
////cp es cantidad de personas ///
///facaras y fabarats es para comparar cuales superaron mil pesos
/*
var personas = 0;var facaras= 0;
var cd = 0;var cf= 0; var cp=0;var fabarats= 0; 


var factura = parseInt(prompt("Ingrese Nro de factura o presione 0 para salir")) 

while(factura != 0){

    personas = parseInt(prompt("Ingrese Nro de personas atendidas:"));
    importe = parseInt(prompt("Ingrese el importe $: "));

    if(importe >= 1000){

        facaras++;
    } else{

        fabarats++;
    }

    cp=cp+personas;//acumulador de cantidad de personas atendidas
    cd=cd+importe;//acumulador del caja diaria
    cf=cf+1;//acumulador de cantidad de facturas realizadas
    
   var factura = parseInt(prompt("Ingrese numero de factura o presione 0 para salir"))
}


const iva = cd => {return cd*1.21} //funcion flecha que calcula iva
const descuento = cd => {return cd - (cd*0.2)} //funcion flecha que calcula descuentos


console.log("La cantidad de personas atendidas son: " + cp); 
console.log("La cantidad de facturas realizadas son: " + cf ); 
console.log("Las facturas superiores a 1000 son: " + facaras );
console.log("Las facturas inferiores a 1000 son: " + fabarats );
console.log("La caja diaria es de un monto total de: " + cd);
console.log("El monto total mas iva es",iva(cd));
console.log("El monto con descuento del 20% de los lunes es",descuento(cd));

////////////////Carga de datos de clientes en el sistema/////////////////////

class cliente{
    
    constructor (){
    
    this.nombre = prompt("Nombre del cliente")
    this.edad = prompt("Edad")
    this.calle= prompt("Calle")
    
    }

}

for(i= 0; i<2; i++){  

    const x = new cliente();
    console.log(x);
    
}

///////////////Carga de menu al sistema/////////////////////

const productos = [{producto:prompt("Ingrese producto"),precio:parseInt(prompt("Ingrese precio"))},
{producto:prompt("Ingrese producto"),precio:parseInt(prompt("Ingrese precio"))},
{producto:prompt("Ingrese producto"),precio:parseInt(prompt("Ingrese precio"))},
{producto:prompt("Ingrese producto"),precio:parseInt(prompt("Ingrese precio"))}]

                   
for(const producto of productos){

    console.log(producto.producto);
    console.log(producto.precio)

}

const total= productos.reduce((acc,el) => acc + el.precio, 0);
const buscar = productos.find((el)=> el.producto === "Carne");


console.log("El precio total de los prodcutos es",total);
console.log(buscar)
console.log(productos.some((el)=> el.producto == "Ensalada"))


//////DOM//// 

console.log(document)//es lo mimos que inspect element
console.dir(document.body)
console.dir(document.head)

let div = document.getElementById("app");
let parr1 = document.getElementById("parr1")

console.log(div);
console.log(div.innerHTML);
console.log(div.innerText);
console.log(parr1.innerHTML)
console.log(parr1.innerText)

let paises = document.getElementsByClassName("paises");
console.log(paises) //html collection
console.log(paises[0].innerHTML)
console.log(paises[1].innerHTML)
console.log(paises[2].innerHTML)
console.log(paises[0].innerText)



for(const pais of paises){
    console.log(pais.innerHTML)
}

let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML)
console.log(contenedores[1].innerHTML)
console.log(contenedores[2].innerHTML)
console.log(contenedores[3].innerHTML)
console.log(contenedores[4].innerHTML)


let parrafo = document.createElement("p")

parrafo.innerHTML = "<h2>Titulo agregado por codigo</>"

document.body.appendChild(parrafo);

parrafo.remove();



let miul = document.getElementById("personas")
let personas = ["martin","juan","pedro"];
for(const nombres of personas){

    let li = document.createElement("li");
    li.innerHTML = nombres;
    miul.append(li)

}

*/




////////////////////////////////////////////////////////////////////////////////
/* FUNCION ANONIMA
const suma = function(a,b){return a + b}
const resta = function(a,b){return a - b}

console.log(suma(5,8));
console.log(resta(5,8));

/* ///FUNCION FLECHA
const suma = (a,b) => {return a+b}
const resta = (a,b) => {return a-b}
const iva = x => {return x*0.21}

let producto = 500;
let descuento = 50;
let precio = resta(suma(producto, iva(producto)), descuento )
console.log(precio);*/

/*////OBJETOS
const persona = {nombre: "Homero", edad:39, calle:"Avenida 32"}

persona["apellido"]= "Marge"

console.log(persona["nombre"]["apellido"]) */

/*
let cadena= "Hola Coder";

console.log(cadena)

function persona(nombre,edad,calle){

    this.nombre=nombre;
    this.edad=edad;
    this.calle=calle;  
    this.hablar= function(){ console.log("Hola soy " + this.nombre + ", tengo " + this.edad + " anos" + " y soy de la calle " + this.calle) }

}

const persona1 = new persona("Homero","39","avenida 28");
const persona2 = new persona("Marge","32","lartigau 130");
const persona3 = new persona()

console.log(persona1,persona2,persona3)
persona1.hablar();
persona2.hablar();

if("nombre" in persona1){

        console.log("Sos homero vos")
}


///CLASS EN LUGAR DE CONSTRUCTORES
class person{   

    constructor(nombre,edad,calle){

        this.nombre=nombre;
        this.edad=edad;
        this.calle=calle;
    }

    hablar(){ console.log("Hola soy")}
}

*/

////ARRAY DE OBJETOS
/*
const productos = [{id:1,producto:"arroz"},{id:2,producto:"Fideo"},{id:3,producto:"pan"}]
for(const producto of productos){

    console.log(producto.id);
    console.log(producto.producto);
}



//////ARRAYS

/*const numeros = [0,1,2,3,4,5,6,7,8,9,10,]

for (let i = 0; i<11; i++){

    console.log(numeros[i])
}

////lenght: valores de la cadena
const numeros = [0,1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i< numeros.length; i++){

    console.log(numeros[i])
}

////push: agrega elementos al final del array
const array = ["hola",3]

array.push("Homero")

console.log(array.length);
console.log(array);

///unshift: agrega elementos al inicio del array
const array = ["hola",3]

array.unshift("Homero")

console.log(array.length);
console.log(array);

///shift y pop: elimina elementos al principio o al final respectivamente
const array = ["hola",3,"Homero"]

array.pop()
array.shift()

console.log(array.length);
console.log(array);


////splice: eliminamos elementos del array de cualquier lugar
const nombres = ["Rita", "Pedro","Miguel", "Ana", "Vanesa"]

nombres.splice(1,2)
console.log(nombres);

///join: unimos los elementos del array en un string 
const nombres = ["Rita", "Pedro","Miguel", "Ana", "Vanesa"]
console.log(nombres.join(","))

///contac: union de dos arrays
const nombres = ["Rita", "Pedro","Miguel", ]
const apellidos = ["Lopez","Rodriguez","Mecozi"]
const union = nombres.concat(apellidos)
console.log(union);

////slice: devuelve una copia de una parte del array dentro de un nuevo array
const nombres = ["Rita", "Pedro","Miguel", "Ana", "Vanesa"]
const masculinios = nombres.slice(1,3);
console.log(masculinios)

///indexOf: obtenemos el indice de un elemento array
const nombres = ["Rita", "Pedro","Miguel", "Ana", "Vanesa"]
const masculinios = nombres.indexOf("Pedro");
console.log(masculinios)

///includes: permite saber si se paso ese valor por parametro
const nombres = ["Rita", "Pedro","Miguel", "Ana", "Vanesa"]
const masculinios = nombres.includes("Pedro");
console.log(masculinios)

////reverse: da vuelta el orden de los elementos del array
const nombres = ["Rita", "Pedro","Miguel", "Ana", "Vanesa"]
 nombres.reverse()
console.log(nombres)

*/

//////funciones de orden superior
/*
function mayorQue (n){

    return (m)=> m > n

}

let mayorQueDiez = mayorQue(10);
console.log(mayorQueDiez(12));
console.log(mayorQueDiez(4));



function operacion(op){
    if(op=="sumar"){
        
        return(a,b) => a+b;

    } else if(op=="restar"){
    
        return(a,b) => a-b;

    }
}

let suma = operacion("sumar");
let resta = operacion("restar");
console.log(suma(10,6));
console.log(resta(10,6))


function cada (arr,fn){

    for(const el of arr){
        fn(el)

    }
}


const numeros =[0,1,2,3,4]
const duplicado = []

cada(numeros, (el)=>{duplicado.push(el*2)} )
console.log(duplicado);

*/

//////METODOS DE BUSQUEDA Y TRANSFORMACION
////forEach
/*
const numeros = [1,2,3,4]

numeros.forEach( (num)=>{console.log(num)})

////find encontrar el elemento del arrary

const cursos = [{nombre:"Java", precio:"1000"},
                {nombre:"React", precio:"2000"}]

const resultado = cursos.find((el)=> el.nombre === "Java")      
console.log(resultado) 

////filter  es un metodo de busqueda del elemento del array

const cursos = [{nombre:"Java", precio:"1000"},
                {nombre:"React", precio:"2000"}]

const resultado = cursos.filter((el)=> el.nombre.includes ("t"))    
console.log(resultado) 


//// some //devuelve un booleano

const cursos = [{nombre:"Java", precio:"1000"},
                {nombre:"React", precio:"2000"}]

const resultado = cursos.some((el)=> el.nombre == ("Java"))    
console.log(resultado) 

///map /// crea un nuevo array con los elementos del array original

///STORAGE

//local storage: los datos duran hasta borrar los datos del navegador
localStorage.setItem('Bienvenido', 'hola coder')
localStorage.setItem('verdad',true)
localStorage.setItem('numero',20)

let mensaje = localStorage.getItem('Bienvenido')
let bandera = localStorage.getItem('verdad')
let numero = localStorage.getItem('numero')

console.log(mensaje)
console.log(bandera)
console.log(numero)

////sessionstorage: los datos duran hasta cerrar el navegador

sessionStorage.setItem('seleccionados', [1,2,3])
sessionStorage.setItem('valido', true);
sessionStorage.setItem('email', "tinchodomi@gmail.com")

lista = sessionStorage.getItem('seleccionados').split(",")
bandera2 = sessionStorage.getItem('valido');
email = sessionStorage.getItem('email')


console.log( typeof lista)
console.log( bandera2)
console.log( email)

///recorrer el storage////////////////////////////////
for (let i = 0; i < localStorage.length; i++){

    let clave = localStorage.key(i)


    console.log("clave"+ clave);
    console.log("valor "+ localStorage.getItem(clave))
}


///STRGFY convierte un OBJETO javascrip a STRING en formato JSON///
const producto1 = {id:2, tipo:"Arroz"};
localStorage.setItem("producto1",producto1);


const enJSON = JSON.stringify(producto1);

console.log(enJSON); //carga el objeto
console.log(typeof enJSON) //tipo objeto
console.log(typeof producto1) //tipo string

localStorage.setItem("miProducto", enJSON);


///PARSE convierte un STRING en formato JSON en OBJETO Javascript///
const producto2 = JSON.parse(localStorage.getItem("miProducto"))
console.log(producto2.id)

///////////ejemplo

const productos = [ {codigo:231, producto: "logitech g920", precio:300},
{codigo:245, producto: "logitech 915", precio:450},
{codigo:356, producto:"logitech g620", precio:370,}]

const guardarLocal = (clave,valor) => {localStorage.setItem(clave, valor)}

for (const producto of productos) {

    guardarLocal(producto.codigo, JSON.stringify(producto));
}

guardarLocal ("listaProductos", JSON.stringify(productos));

*/
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
const productos = [];

for(const objeto of almacenados) productos.push(new Producto(objeto))



for (const precio of productos) precio.sumaIva();

console.log(productos)





