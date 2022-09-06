


import { guardarDB,leerDB } from './helpers/guardarArchivo.js';
import { inquirerMenu,
        pausa ,
        leerInput,listadoTareasBorrar,confirmar,mostrarListadoCheck} from './helpers/inquirer.js';

import { Tareas } from './models/tareas.js';


const main=async()=>{

    let opt="";
    const tareas=new Tareas()
    const tareasDB=leerDB();

    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB)
    }
    await pausa() 
    do{ 
        //Imprimir el menu
        opt=await inquirerMenu();

        switch(opt){
            case "1":
            const desc=await leerInput("Descripcion:")
            tareas.crearTarea(desc)
            break;

            case "2":
                tareas.listadoCompleto()
            break;
            case "3":
            tareas.listarPendientesCompletadas(true)
            break;
            case "4":
            tareas.listarPendientesCompletadas(false)
            break;
            case "5":
                const ids= await mostrarListadoCheck(tareas.listadoArr)
                tareas.toggleCompletadas(ids)
                break;
            case "6":
                const id= await listadoTareasBorrar(tareas.listadoArr)
                if(id!=="0"){
                const ok=await confirmar("¿Estas seguro?")
                if(ok){
                    tareas.borrarTarea(id)
                    console.log("Tarea borrada");
                }}
                break
            
        }
        guardarDB(tareas.listadoArr)
        
       await pausa() 
       

    }while(opt!=="0");
}
main() 




