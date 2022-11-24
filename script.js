let nombres = []; /* Arreglo para uso global con los nombres a medida que se ingresan */

function insertarNombre(EventTarget) {

    EventTarget.preventDefault();

    let nombre = document.getElementById("nombre").value;
    nombres.push(nombre); 
   
    const lista = document.getElementById("lista-nombres");
    lista.innerHTML += `<li> ${nombre}</li>`;

    /*alert("Sacrificado " +nombre+ " añadido");*/
};

