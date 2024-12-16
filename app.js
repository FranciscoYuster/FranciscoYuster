// Función para cargar una sección HTML en el <main>
function loadSection(section, language = 'es') {
    const content = document.getElementById('content');
    const url = `${section}_${language}.html`;

    content.classList.add('fade-out');
    setTimeout(async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Error al cargar la sección');
            content.innerHTML = await response.text();
        } catch (error) {
            console.error(error);
        } finally {
            content.classList.replace('fade-out', 'fade-in');
            setTimeout(() => content.classList.remove('fade-in'), 300);
        }
    }, 300);
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

// Selecciona el botón del menú hamburguesa y el navbar
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbar = document.getElementById('navbar');

// Añadir evento de clic al menú hamburguesa
hamburgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Muestra/oculta el menú
});

// Añadir evento de clic a cada enlace del menú de navegación
document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', () => {
        // Cierra el menú hamburguesa si está abierto en dispositivos móviles
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
        }
    });
});

// Traducciones para las secciones, el header y el footer
const translations = {
    es: {
        navbar: {
            about: "Sobre mí",
            curriculum: "Curriculum",
            projects: "Proyectos"
        },
        footer: {
            copyright: "© Creado por Francisco Yuster",
            connect: "¡Conéctate conmigo en mis redes sociales!"
        }
    },
    en: {
        navbar: {
            about: "About Me",
            curriculum: "Resume",
            projects: "Projects"
        },
        footer: {
            copyright: "© Created by Francisco Yuster",
            connect: "Connect with me on social media!"
        }
    }
};

// Función para cambiar el idioma del contenido
function changeLanguage(language) {
    // Cambiar el texto del header
    document.querySelector('nav a[data-section="about"]').textContent = translations[language].navbar.about;
    document.querySelector('nav a[data-section="curriculum"]').textContent = translations[language].navbar.curriculum;
    document.querySelector('nav a[data-section="projects"]').textContent = translations[language].navbar.projects;

    // Cambiar el texto del footer
    document.querySelector('footer p').textContent = translations[language].footer.copyright;
    document.querySelector('.contact-info p').textContent = translations[language].footer.connect;
}

// Función para cargar la sección según el idioma
function loadSection(section, language = 'es') {
    const content = document.getElementById('content');
    
    // Agrega la clase para el efecto de desvanecimiento
    content.classList.add('fade-out');
    
    // Espera a que la animación de desvanecimiento se complete antes de cambiar el contenido
    setTimeout(() => {
        fetch(`${section}_${language}.html`)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
                // Reinicia las clases de desvanecimiento
                content.classList.remove('fade-out');
                content.classList.add('fade-in');
                
                // Quita la clase fade-in al finalizar la transición
                setTimeout(() => {
                    content.classList.remove('fade-in');
                }, 300);
            })
            .catch(error => console.error('Error al cargar la sección:', error));
    }, 300);
}

// Detectar el cambio de idioma
document.getElementById('language-select').addEventListener('change', (e) => {
    const selectedLanguage = e.target.value;
    const currentSection = document.querySelector('nav a.active')?.getAttribute('data-section') || 'about';
    
    // Cambiar el idioma y recargar la sección actual
    changeLanguage(selectedLanguage);
    loadSection(currentSection, selectedLanguage);
});

// Detecta el clic en los enlaces de navegación y carga la sección correspondiente
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = e.target.getAttribute('data-section');
        const selectedLanguage = document.getElementById('language-select').value;

        // Marcar el enlace activo
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');

        // Cargar la sección en el idioma seleccionado
        loadSection(section, selectedLanguage);
    });
});

// Cargar una sección por defecto al iniciar la página
window.addEventListener('DOMContentLoaded', () => {
    const selectedLanguage = 'es'; // Establece 'en' como el idioma predeterminado
    const defaultSection = 'about'; // Cambiar esta línea si prefieres cargar otra sección al inicio

    // Marcar la sección "about" como activa por defecto
    document.querySelector(`nav a[data-section="${defaultSection}"]`).classList.add('active');
    
    // Cambiar el idioma del contenido al iniciar
    changeLanguage(selectedLanguage);

    loadSection(defaultSection, selectedLanguage);
});


// Mostrar/Ocultar botón "Ir al Top" según el scroll
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Scroll suave al hacer clic en el botón "Ir al Top"
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
    } else {
        console.error(`La sección con ID ${sectionId} no existe.`);
    }
}

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Guardar preferencia en localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Aplicar el tema guardado al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true; // Mantener el toggle activado
    }
});


