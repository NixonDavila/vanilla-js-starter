// Inserte el código aquí
import {
  guardarTareas,
  getTask,
  extraerTareas,
  mostrarTareas,
  eliminarTareas
} from "../src/api.js";

// extraerTareas()
// mostrarTareas()

let agregar = document.getElementById("agregarTarea");
let input = document.getElementById("nuevaTarea");

agregar.addEventListener("click", async function () {
  if (agregar != "false" && input != "") {
  }

  if (input != "" && agregar != "false") {
    console.log(input.value);
    let guarda = await guardarTareas(input.value);
   inicioLista()
  }
  input.value= ""
});

function listarTarea(tarea) {
  let nuevaTarea = document.createElement("li");

  // Asigna el texto ingresado por el usuario al nuevo elemento <li>
  nuevaTarea.textContent = tarea.task + " ";

  // Crea un nuevo botón para eliminar la tarea
  let botonEliminar = document.createElement("button");

  // Asigna el texto "Eliminar" al botón
  botonEliminar.textContent = "Eliminar";

  // Asigna una función al evento 'onclick' del botón que elimina la tarea
  botonEliminar.onclick = async function () {
    let respuesta= await eliminarTareas(tarea.id)
    //aqui va a ir un llamado al api
    // Remueve el elemento <li> cuando se hace clic en el botón
    nuevaTarea.remove();
  };

  // Añade el botón de eliminar al nuevo elemento <li>
  nuevaTarea.appendChild(botonEliminar);

  // Añade el nuevo elemento <li> con la tarea y el botón de eliminar a la lista de tareas con id "listaTareas"
  document.getElementById("listaTareas").appendChild(nuevaTarea);
}

async function inicioLista() {
  let tareas = await extraerTareas();
  document.getElementById("listaTareas").innerHTML=""
  for (let index = 0; index < tareas.length; index++) {
    listarTarea(tareas[index]);
  }
}
inicioLista();


// }
agregarTareas();

function agregarTareas() {
  // Obtiene el valor del input con id "nuevaTarea"
  let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

  // Verifica si el input está vacío
  if (nuevaTareaTexto === "") {
    // Si está vacío, muestra una alerta al usuario y detiene la ejecución de la función
    alert("Por favor, ingrese una tarea");
    return;
  }

  // Crea un nuevo elemento <li> para agregar la nueva tarea
}



