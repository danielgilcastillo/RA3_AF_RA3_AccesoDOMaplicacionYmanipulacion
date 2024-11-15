// Configura la función `inicio` para que se ejecute una vez que el HTML ha sido completamente cargado
window.onload = inicio;

// Función principal `inicio` que configura todos los eventos y ajustes iniciales
function inicio() {
    // Cambia el título principal al cargar la página
    const etiquetaTitulo = document.getElementById("tituloPrincipal");
    etiquetaTitulo.innerHTML = "Bienvenido al gestor interactivo de tareas";

    // Configuración de eventos para actualizar el nombre del usuario
    const botonActualizarNombre = document.getElementById("btnActualizarNombre");
    botonActualizarNombre.addEventListener("click", actualizarNombre);

    // Configuración de eventos para agregar nuevas tareas a la lista
    const botonAgregarTarea = document.getElementById("btnAgregarTarea");
    botonAgregarTarea.addEventListener("click", agregarTarea);

    // Selección de los cuadros de información y configuración de eventos para interactuar con ellos
    const cuadroInfo = document.querySelectorAll(".cuadroInfo");
    // Cambiar color de fondo al pasar el ratón por encima (mouseover y mouseout)
    cuadroInfo[0].addEventListener("mouseover", () => cambiarColorCuadroInfo(cuadroInfo[0], true));
    cuadroInfo[0].addEventListener("mouseout", () => cambiarColorCuadroInfo(cuadroInfo[0], false));
    // Ocultar el segundo cuadroInfo al hacer doble clic (dblclick)
    cuadroInfo[1].addEventListener("dblclick", ocultarCuadroInfo);

    // Configuración de eventos para ampliar o reducir imágenes de la galería al hacer clic
    const imagenesGaleria = document.querySelectorAll(".imagenGaleria");
    imagenesGaleria.forEach(img => img.addEventListener("click", ampliarReducirImagen));

    // Configuración de eventos para mostrar u ocultar la lista de tareas
    const botonOcultarTareas = document.getElementById("btnOcultarTareas");
    botonOcultarTareas.addEventListener("click", ocultarMostrarTareas);

    // Configuración de eventos para alternar entre temas claro y oscuro
    const botonAlternarTema = document.getElementById("btnAlternarTema");
    botonAlternarTema.addEventListener("click", alternarTema);
}

// Función para actualizar el mensaje de bienvenida con el nombre ingresado y el color seleccionado
function actualizarNombre() {
    // Obtener el nombre ingresado por el usuario en el campo de texto
    const nombre = document.getElementById("inputNombre").value;
    // Obtener el párrafo de bienvenida y actualizar su contenido
    const mensajeBienvenida = document.getElementById("mensajeBienvenida");
    mensajeBienvenida.innerHTML = "Bienvenido, " + nombre;

    // Obtener el color seleccionado en el menú desplegable
    const colorSeleccionado = document.getElementById("colorUsuario").value;
    // Aplicar el color seleccionado al mensaje de bienvenida
    mensajeBienvenida.style.color = colorSeleccionado;
}

// Función para agregar una nueva tarea a la lista de tareas
function agregarTarea() {
    // Obtener el texto de la nueva tarea ingresado por el usuario
    const inputTarea = document.getElementById("inputTarea");
    const tareaTexto = inputTarea.value.trim();  // Trim elimina espacios en blanco al inicio y final

    // Comprobar que el campo de tarea no esté vacío antes de agregarla
    if (tareaTexto !== "") {
        // Crear un nuevo elemento de lista (`li`) para la tarea
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = tareaTexto;

        // Crear un botón de "Eliminar" para la tarea y agregarle un evento de clic para eliminarla
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", () => nuevaTarea.remove());
        
        // Agregar el botón de eliminar al elemento de lista y añadirlo a la lista de tareas
        nuevaTarea.appendChild(botonEliminar);
        document.getElementById("listaTareas").appendChild(nuevaTarea);
        
        // Limpiar el campo de entrada de la tarea
        inputTarea.value = "";
    }
}

// Función para cambiar el color de fondo del cuadro de información al pasar el ratón
function cambiarColorCuadroInfo(cuadro, isHover) {
    // Cambia el color a gris claro si `isHover` es verdadero, o vuelve al color original
    cuadro.style.backgroundColor = isHover ? "lightgray" : "";
}

// Función para ocultar el cuadro de información al hacer doble clic
function ocultarCuadroInfo() {
    // Ocultar el cuadro estableciendo la propiedad `display` a "none"
    this.style.display = "none";
}

// Función para ampliar o reducir el tamaño de una imagen al hacer clic
function ampliarReducirImagen() {
    // Cambia el ancho entre 100px y 300px cada vez que se hace clic en la imagen
    this.style.width = this.style.width === "300px" ? "100px" : "300px";
}

// Función para alternar la visibilidad de la lista de tareas
function ocultarMostrarTareas() {
    const listaTareas = document.getElementById("listaTareas");
    // Alternar la visibilidad cambiando `display` entre "none" y "block"
    listaTareas.style.display = listaTareas.style.display === "none" ? "block" : "none";
}

// Función para alternar entre temas claro y oscuro
function alternarTema() {
    // Alternar la clase `tema-oscuro` en el cuerpo del documento
    document.body.classList.toggle("tema-oscuro");
}

// Inserta un estilo CSS para el tema oscuro en el `head` del documento HTML
document.head.insertAdjacentHTML("beforeend", `
    <style>
        /* Estilos para el tema oscuro */
        .tema-oscuro {
            background-color: #333;
            color: white;
        }
    </style>
`);