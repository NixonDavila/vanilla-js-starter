// Inserte el código aquí
import {
  guardarTareas,                 // Importa la función para guardar tareas
  actualizarTareasFinalizadas,   // Importa la función para actualizar el estado de las tareas (completas/incompletas)
  extraerTareas,                 // Importa la función para extraer todas las tareas
  mostrarTareas,                 // Importa la función para mostrar tareas (no se usa en este script)
  eliminarTareas,                // Importa la función para eliminar tareas
  actualizarTareas               // Importa la función para actualizar tareas
} from "../src/api.js";

// Obtiene el botón de agregar tarea por su ID
let agregar = document.getElementById("agregarTarea");
// Obtiene el campo de entrada de texto por su ID
let input = document.getElementById("nuevaTarea");

// Agrega un evento para que el botón de agregar tarea se active al presionar "Enter"
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();    // Evita la acción predeterminada del "Enter"
    agregar.click();           // Simula un clic en el botón de agregar tarea
  }
});

// Añade un evento de clic al botón de agregar tarea
agregar.addEventListener("click", async function () {
  if (input.value != "" && agregar != "false") {
    console.log(input.value);  // Muestra el valor del campo de entrada en la consola
    let guarda = await guardarTareas(input.value);  // Guarda la nueva tarea
    inicioLista();             // Reinicia la lista de tareas para mostrar la nueva tarea
  } else {
    alert("Por favor, ingrese una tarea");  // Muestra una alerta si el campo de entrada está vacío
  }
  input.value = "";            // Limpia el campo de entrada
});

// Función para listar una tarea en la lista de tareas
function listarTarea(tarea) {
  let nuevaTarea = document.createElement("li");  // Crea un nuevo elemento <li>
  nuevaTarea.textContent = tarea.task + " ";      // Asigna el texto de la tarea al nuevo elemento <li>

  let botonEliminar = document.createElement("button");  // Crea un nuevo botón para eliminar la tarea
  botonEliminar.textContent = "Eliminar";                 // Asigna el texto "Eliminar" al botón
  botonEliminar.onclick = async function () {
    let respuesta = await eliminarTareas(tarea.id);       // Llama a la función eliminarTareas con el ID de la tarea
    nuevaTarea.remove();                                  // Remueve el elemento <li> cuando se hace clic en el botón
  };

  let botonEditar = document.createElement("button");     // Crea un nuevo botón para editar la tarea
  botonEditar.textContent = "Editar";                     // Asigna el texto "Editar" al botón
  botonEditar.onclick = function () {
    editarTarea(tarea);                                   // Llama a la función editarTarea con la tarea a editar
  };

  let checkbox = document.createElement("input");         // Crea un nuevo checkbox
  checkbox.type = "checkbox";                             // Establece el tipo del input a "checkbox"
  checkbox.checked = tarea.check === "completa";          // Marca el checkbox si la tarea está completa
  checkbox.onclick = async function () {
    let nuevoEstado = checkbox.checked ? "completa" : "incompleta";  // Determina el nuevo estado de la tarea
    await actualizarTareasFinalizadas(tarea.id, nuevoEstado);        // Actualiza el estado de la tarea en la base de datos
    tarea.check = nuevoEstado;                                       // Actualiza el estado local de la tarea
  };

  nuevaTarea.appendChild(botonEliminar);  // Añade el botón de eliminar al nuevo elemento <li>
  nuevaTarea.appendChild(botonEditar);    // Añade el botón de editar al nuevo elemento <li>
  nuevaTarea.appendChild(checkbox);       // Añade el checkbox al nuevo elemento <li>

  document.getElementById("listaTareas").appendChild(nuevaTarea);  // Añade el nuevo elemento <li> a la lista de tareas
}

// Función para iniciar la lista de tareas
async function inicioLista() {
  let tareas = await extraerTareas();  // Obtiene todas las tareas llamando a la función extraerTareas
  if (tareas.length > 0) {             // Verifica si hay tareas
    document.getElementById("listaTareas").innerHTML = "";  // Limpia la lista de tareas actual
    let contador = 0;                  // Inicializa el contador de tareas completas
    for (let index = 0; index < tareas.length; index++) {   // Itera sobre cada tarea
      listarTarea(tareas[index]);      // Lista cada tarea en la interfaz
      if (tareas[index].check === "completa") {  // Incrementa el contador si la tarea está completa
        contador++;
      }
    }
    document.getElementById("contador").innerText = contador;  // Actualiza el contador de tareas completas en la interfaz
  } else {
    document.getElementById("listaTareas").innerText = "No hay tareas";  // Muestra un mensaje si no hay tareas
  }
}
inicioLista();  // Llama a la función inicioLista al cargar el script para inicializar la lista de tareas

// Función para editar una tarea
function editarTarea(tarea) {
  let nuevaTareaTexto = prompt("Edita la tarea:", tarea.task);  // Muestra un prompt para que el usuario edite la tarea
  if (nuevaTareaTexto !== null && nuevaTareaTexto !== "") {     // Verifica que el texto ingresado no sea nulo ni vacío
    actualizarTareas(tarea.id, nuevaTareaTexto).then(() => {    // Llama a la función actualizarTareas para actualizar la tarea en la base de datos
      inicioLista();  // Reinicia la lista de tareas para reflejar los cambios
    });
  }
}


