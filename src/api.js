
// async function getTask() {
//     try {
//         const response = await fetch('http://localhost:3000/api/task');
//         const data = await response.json();
//         // console.log(data);
//         return data
//     } catch (error) {
//         console.error(error);
//     }
// }





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



// Nueva función para actualizar tareas
async function actualizarTareas(id, tareaActualizada) {
    try {
      const response = await fetch("http://localhost:3000/api/task/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          task: tareaActualizada
        })
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error("Error al actualizar la tarea:", response.statusText);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  }

  async function actualizarTareasFinalizadas(id, check) {
    
    try {
      const response = await fetch("http://localhost:3000/api/task/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "check": check
        })
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error("Error al actualizar la tarea:", response.statusText);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  }






export {guardarTareas ,  extraerTareas , eliminarTareas , actualizarTareas, actualizarTareasFinalizadas }
  