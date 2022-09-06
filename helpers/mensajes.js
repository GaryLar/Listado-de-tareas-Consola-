const { read } = require("fs");

require("colors")

const mostrarMenu=()=>{
console.clear();
console.log("=========================".green);
console.log("   Selecciona un color")
console.log("=========================\n".green);

console.log(`1. Crear tarea`)
console.log(`2. Listar tareas`)
console.log(`3. Listar tareas completadas`)
console.log(`4. Listar tareas pendientes`)
console.log(`5. Completar tarea(s)`)
console.log(`6. Borrar tarea`)
console.log(`7. Salir \n`)

const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("Seleccione una opcion: ",(opt)=>{
    console.log({opt});
    readline.close()
})
}
const pausa=()=>{
    
}


module.exports={
    mostrarMenu
}





