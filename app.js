const readlineSync = require("readline-sync");
const { mostrarListaEstudiantes } = require("./lista_estudiantes");

const registrarEstudiantes = () => { 
    console.log("Iniciando Registro de Estudiantes");

    let cantidadEstudiantes = readlineSync.question("Ingresar la cantidad de estudiantes a registrar: ");

    console.log("Cantidad Estudiantes a registrar: " + cantidadEstudiantes);

    let estudiantes = [];

    for(let i = 0; i < cantidadEstudiantes; i++) {
        const Nombre = readlineSync.question(`Ingrese el nombre del estudiante ${i}: `);

        const Edad = readlineSync.question(`Ingrese la edad de ${Nombre}: `);

        const estudiante = {
            Nombre,
            Edad
        };;
        estudiantes.push(estudiante);

    }

    mostrarListaEstudiantes(estudiantes);
};

// Iniciar registro
registrarEstudiantes();
