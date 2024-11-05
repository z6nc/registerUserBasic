    const alumnos = [];

function newAlumno(event) {
    event.preventDefault();

    const userDni = document.getElementById('dni').value;
    const userName = document.getElementById('nombre').value;
    const userAge = document.getElementById('edad').value;
    const userCareer = document.getElementById('carrera').value;
    const userYear = document.getElementById('año_ingreso').value;

    const newalumno = {
        id: alumnos.length + 1,
        dni: userDni,
        nombre: userName,
        edad: userAge,
        carrera: userCareer,
        añoIngreso: userYear
    };

    alumnos.push(newalumno);
    displayAlumnos();
    document.getElementById('registrar').reset(); // Reiniciar el formulario
}

function displayAlumnos() {
    const tableBody = document.querySelector('#tablaAlumnos tbody');
    tableBody.innerHTML = ''; // Limpiar la tabla antes de mostrar

    alumnos.forEach(alumno => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class =" class="px-4 py-2 border border-gray-300 ">${alumno.id}</td>
            <td>${alumno.dni}</td>
            <td>${alumno.nombre}</td>
            <td>${alumno.edad}</td>
            <td>${alumno.carrera}</td>
            <td>${alumno.añoIngreso}</td>
        `;
        tableBody.appendChild(row);
    });
}

document.getElementById('registrar').addEventListener('submit', newAlumno);

