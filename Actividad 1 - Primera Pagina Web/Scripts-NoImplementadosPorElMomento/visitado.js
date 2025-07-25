//Este código es para una implementacion futura de la página web
//Para saber si es la primera vez que el usuario visita la página
document.addEventListener("DOMContentLoaded", function () { // Espera a que el DOM esté completamente cargado
  // Verificamos si ya aceptó
  if (!localStorage.getItem("cookiesAceptadas")) {
    // Creamos el HTML del mensaje
    const contenedor = document.createElement("div"); // Crear un nuevo div para el mensaje
    contenedor.className = "MesajeTipoCookies"; // Asignar una clase para estilos
    contenedor.id = "mensaje-cookies"; // Asignar un ID para poder referenciarlo más tarde
    contenedor.innerHTML = // Contenido del mensaje  
    ` 
    <div class="MesajeTipoCookies">
      <input type="checkbox" id="aceptar-cookies" class="oculto">
      <div class="aviso-cookies">
        <p>Página desarrollada para el curso de Jóvenes Creativos.</p>
        <br>
        <label for="aceptar-cookies" class="btn-aceptar" id="btn-aceptar">Aceptar</label>
      </div>
      </div>
    `;

    document.body.appendChild(contenedor); // Agregarlo al final del body

    // Función para cerrar el aviso
    document.getElementById("btn-aceptar").addEventListener("click", function () { // Escuchar el clic en el botón de aceptar
      localStorage.setItem("cookiesAceptadas", "true"); // Guardar en localStorage que las cookies han sido aceptadas
      const mensaje = document.getElementById("mensaje-cookies"); // Obtener el mensaje por su ID
      if (mensaje) mensaje.remove(); // Eliminar el mensaje del DOM
    });

    // Mostrar el aviso (si el CSS lo tiene oculto por defecto)
    contenedor.style.display = "block"; 
  }
});

