// Inserte el código aquí
// import {guardarTareas}  from "../src/api.js";

let agregar = document.getElementById("agregarTarea")
let input = document.getElementById("nuevaTarea")

agregar.addEventListener("click", function(){
    if (agregar != "false" && input !=""){
        // alert("aqui vamos")
        // console.log( input.value)
        agregarTarea()
    }
    

})


function agregarTarea() {
    
    
    // Obtiene el valor del input con id "nuevaTarea"
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    // Verifica si el input está vacío
    if (nuevaTareaTexto === "") {
        // Si está vacío, muestra una alerta al usuario y detiene la ejecución de la función
        alert("Por favor, ingrese una tarea");
        return;
    }

    // Crea un nuevo elemento <li> para agregar la nueva tarea
    let nuevaTarea = document.createElement("li");

    // Asigna el texto ingresado por el usuario al nuevo elemento <li>
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    // Crea un nuevo botón para eliminar la tarea
    let botonEliminar = document.createElement("button");

    // Asigna el texto "Eliminar" al botón
    botonEliminar.textContent = "Eliminar";

    // Asigna una función al evento 'onclick' del botón que elimina la tarea
    botonEliminar.onclick = function () {
        // Remueve el elemento <li> cuando se hace clic en el botón
        nuevaTarea.remove();
    };

    // Añade el botón de eliminar al nuevo elemento <li>
    nuevaTarea.appendChild(botonEliminar);

    // Añade el nuevo elemento <li> con la tarea y el botón de eliminar a la lista de tareas con id "listaTareas"
    document.getElementById("listaTareas").appendChild(nuevaTarea);
}