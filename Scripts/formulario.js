document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const tipocontacto = document.getElementById('tipocontacto').value;
        const mensaje = document.getElementById('mensaje').value;

        alert(`Datos ingresados:\nNombre: ${nombre} \nEmail: ${email} \nTelefono: ${telefono} \nTipo de contacto: ${tipocontacto} \nMensaje: ${mensaje}`);
    });
});
