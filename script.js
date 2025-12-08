// Menú móvil
const botonMenu = document.getElementById('boton-menu');
const listaNavegacion = document.getElementById('lista-navegacion');

if (botonMenu && listaNavegacion) {
    botonMenu.addEventListener('click', () => {
        listaNavegacion.classList.toggle('mostrar');
    });
}

// Año dinámico en el pie de página
const etiquetaAnio = document.getElementById('anio-actual');
if (etiquetaAnio) {
    etiquetaAnio.textContent = new Date().getFullYear();
}

// Enviar formulario a WhatsApp
const formularioContacto = document.getElementById('form-contacto');

if (formularioContacto) {
    formularioContacto.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const curso = document.getElementById('curso').value;
        const mensaje = document.getElementById('mensaje').value.trim();

        if (!nombre || !curso) {
            alert('Por favor completa tu nombre y el curso de interés.');
            return;
        }

        const numeroWhatsApp = '59176558972';
        const texto = `Hola, mi nombre es ${nombre}. Me interesa el curso: ${curso}. Mensaje: ${mensaje || 'Sin mensaje adicional.'}`;

        const enlace = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
        window.open(enlace, '_blank');
    });
}
