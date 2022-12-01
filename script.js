//ruleta
function shuffle(array){
    var currentIndex = array.length,
    randomIndex;
    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]]=[
            array[currentIndex],
            array[currentIndex],
        ];
    }
    return array;
}
    function spin(){
        Wheel.play();
        const box = document.getElementById("box");
        const element = document.getElementById("mainbox");
        let selectedItem="";

        let Murdered = shuffle([1890, 2250, 2610]);
        let Zodiac = shuffle([1850,2210,2570]);
        let Cannibal = shuffle([1770,2130,2490]);
        let Eaten = shuffle([1810,2170,2530]);
        let Bomblast = shuffle([1750,2110,2470]);
        let Beaten = shuffle([1570,1930,2290]);
        
        let results = shuffle([
            Murdered[0],
            Zodiac[0],
            Cannibal[0],
            Eaten[0],
            Bomblast[0],
            Beaten[0],
        ]);
        if(Murdered.includes(results[0])) selectedItem = "Murdered";
        if(Zodiac.includes(results[0])) selectedItem = "Zodiac";
        if(Cannibal.includes(results[0])) selectedItem = "Cannibal";
        if(Eaten.includes(results[0])) selectedItem = "Eaten";
        if(Bomblast.includes(results[0])) selectedItem = "Bomblast";
        if(Beaten.includes(results[0])) selectedItem = "Beaten";
        

        box.style.setProperty("transition", "all ease 5s");
        box.style.transform = "rotate(" + results[0] + "deg)";
        element.classList.remove("animate");
        setTimeout(function(){
            element.classlist.add("animate");
        },5000);
        setTimeout(function(){
            noblesacrifice.play();
            Swal.fire({
            title: '¡Ha llegado tu hora!',
            text: 'Al menos has vivido una vida larga...',
            imageUrl: 'imagen/parcas-2.webp',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
            },5500)

    
        setTimeout(function(){
            box.style.setProperty("transition","initial");
            box.style.transform = "rotate(90deg)";
        },6000);
    }

//lista nombres
//let nombres = []; /* Arreglo para uso global con los nombres a medida que se ingresan */

/*function insertarNombre(EventTarget) {

    EventTarget.preventDefault();

    let nombre = document.getElementById("nombre").value;
    nombres.push(nombre); 
   
    const lista = document.getElementById("lista-nombres");
    lista.innerHTML += `<li> ${nombre}</li>`;

    alert("Coder " +nombre+ " aguarda su sacrificio");  
};*/

let coders = arregloCoders(); // arreglo donde se hara la copia del contenido de la lista <ul li por id 'nombres'>

// x para eliminar con evento onclick cada elemento
let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.id = "quitar"
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// recarga la pagina para limpiar todo
function limpiar() {

    document.location.reload();
}

// elimiar de la lista y el arreglo elemto al hacer click a la x
let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        document.getElementById("listado").removeChild(div);
        coders = arregloCoders();
    }

}

// hace copia de la lista ul li por id al arreglo coders
function arregloCoders() {
    let lista = [...document.querySelectorAll(`li`)]
        .map(element => element.id);
    return (lista);
}

//Verifica que no hayan nombres repetidos en el listado
function verificarNombre(nombre) {

    if (coders.find(item => item === nombre)) {
        alert("No debe repetir un nombre");
    } else {
        return false;
    }
}

//Estandariza nombre de forma que primera letra mayuscula y las demas minusculas siempre
function capitalizacionNombre(nombre) {
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    return nombre;
}

// Crea un elemento nuevo a partir del boton agregar cumple llamadas a las demas funciones para adecuar lo visual con lo logico 
// asi mismo valida no reciba por entrada valores en blanco 
// tambien al final crea el apartado con evento para quitar elementos de la lista
function nuevoCoder() {

    let li = document.createElement("li");
    let nombre = document.getElementById("entrada").value;
    nombre = capitalizacionNombre(nombre);
    let t = document.createTextNode(nombre);
    li.appendChild(t);
    if (nombre === '') {
        alert("Debe agregar un nombre");
    } else {
        if (verificarNombre(nombre) == false) {
            li.setAttribute("id", nombre);
            li.setAttribute("class", "nombreLi");
            document.getElementById("listado").appendChild(li);
            coders = arregloCoders();
        }
    }
    document.getElementById("entrada").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7"); // 
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {

            let div = this.parentElement;
            document.getElementById("listado").removeChild(div);
            coders = arregloCoders();

        }
    }
} 

//funcion sacrificio
function sacrificio() {
    let death = Math.floor(Math.random() * coders.length);
    const coderDeath = document.getElementById(coders[death]);
    let msj = `El coder ${coders[death]} ha sido sacrificado`;
    coderDeath.remove();
    coders = arregloCoders();
    return swal({
        title: msj,
        icon: "",
        timer: 3000
    
        
    });
}








