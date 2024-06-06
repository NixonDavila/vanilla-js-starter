
async function getTask() {
    try {
        const response = await fetch('http://localhost:3000/api/task');
        const data = await response.json();
        // console.log(data);
        return data
    } catch (error) {
        console.error(error);
    }
}

// Función para mostrar las tareas en la lista al cargar la página
// async function mostrarTareas() {
//     try {
//         const tareas = await extraerTarea();
//         tareas.forEach(t => {
//             displayUploadedFile(t); // Reutilizar la función existente
//             fileData.push(t); // Agregar tarea a fileData
//         });
//         // Actualizar el contador de tareas completadas
//         updateCompletedCount();
//     } catch (error) {
//         console.error("Error al realizar la solicitud:", error);
//     }
// }

// // Inicializar las tareas al cargar la página
// window.addEventListener("load", mostrarTareas);






async function extraerTareas() {
    try {
        const response = await fetch("http://localhost:3000/api/task/");
        if (response.ok) {
            const data = await response.json();
           for (const index in data) {
           console.log(data[index]);
           }
            return data;
        } else {
            console.error("Error al extraer las tareas:", response.statusText);
            return [];
        }
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
        return [];
    }
}





// async function getTask() {
//     try {
//         const response = await fetch('http://localhost:3000/api/task');
//         const data = await response.json();
//         console.log(data);
//         return data
        
//     } catch (error) {
//         console.error(error);
//     }
// }

async function guardarTareas(nuevaTarea) {
    try {
        const response = await fetch("http://localhost:3000/api/task/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                    task:nuevaTarea,
                })
        });

        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            console.error("Error al guardar la tarea:", response.statusText);
        }
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    }
    
}





async function eliminarTareas(id) {
    try {
        console.log(id);
        const response = await fetch("http://localhost:3000/api/task/" + id, {
            method: "delete",
            headers: {
                "Content-Type": "application/json"
            },
           
        });

        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            console.error("Error al guardar la tarea:", response.statusText);
        }
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    }
    
}





export {guardarTareas , getTask, extraerTareas , eliminarTareas }
  