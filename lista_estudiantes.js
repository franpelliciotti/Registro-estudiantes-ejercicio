const mostrarListaEstudiantes = (estudiantes) => {
    console.log("Lista de estudiantes registrados");
    estudiantes.forEach((estudiante) => {
        console.log(`Nombre: ${estudiante.Nombre}. Edad: ${estudiante.Edad}`);
    });
};

module.exports = {mostrarListaEstudiantes};