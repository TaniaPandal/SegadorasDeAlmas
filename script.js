/* function insertarNombre(EventTarget){
    EventTarget.preventDefault();

    let nombre = document.getElementById("nombre").value;

    let opcion = "<li>" + nombre + "</li>";

    let lista = document.getElementById("lista-nombres");

    lista.InnerHTML += opcion;

    alert("Sacrificado añadido");
};

function recogerDatos(){

}

*/



let addNamesButton = document.getElementById("addNames");
let namesContainer = document.getElementById ("namesContainer");
let inpuField = document.getElementById("inputField");

addToDoButton.addEventListener ("click", function(){
    let paragraph =document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;
    namesContainer.appendChild(paragraph);
    inputField.value="";
    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-though";
    })
    paragraph.addEventListener("dblclick", function(){
        namesContainer.appendChild(paragraph);
})