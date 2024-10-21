// Función para cargar una sección HTML en el <main>
function loadSection(section) {
    const content = document.getElementById('content');
    
    // Agrega la clase para el efecto de desvanecimiento
    content.classList.add('fade-out');
    
    // Espera a que la animación de desvanecimiento se complete antes de cambiar el contenido
    setTimeout(() => {
        fetch(`${section}.html`)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
                // Reinicia las clases de desvanecimiento
                content.classList.remove('fade-out');
                content.classList.add('fade-in');
                
                // Quita la clase fade-in al finalizar la transición
                setTimeout(() => {
                    content.classList.remove('fade-in');
                }, 300); // Asegúrate de que coincida con la duración de la transición
            })
            .catch(error => console.error('Error al cargar la sección:', error));
    }, 300); // Ajusta el tiempo de espera para coincidir con el tiempo de desvanecimiento
}

// Detecta el clic en los enlaces de navegación
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita la recarga de la página
        const section = e.target.getAttribute('data-section');
        loadSection(section); // Carga la sección
    });
});

// Cargar una sección por defecto al iniciar la página
window.addEventListener('DOMContentLoaded', () => {
    loadSection('about'); // Carga la sección 'about' al inicio
});

// Alterna la visibilidad del menú
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Muestra u oculta el menú
});

// Cargar una sección HTML al hacer clic en un enlace
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = e.target.getAttribute('data-section');
        loadSection(section); // Carga la sección

        // Cierra el menú después de seleccionar una sección
        if (window.innerWidth <= 768) {
            navbar.classList.remove('active'); // Oculta el menú en móvil
        }
    });
});