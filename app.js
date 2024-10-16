// Función para cargar una sección HTML en el <main>
function loadSection(section) {
    fetch(`${section}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar la sección:', error));
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
