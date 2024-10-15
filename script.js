function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.classList.remove('active');
    });
  
    // Mostrar solo la sección seleccionada
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
  }
  
  // Mostrar la sección de inicio al cargar la página
  document.addEventListener("DOMContentLoaded", function() {
    showSection('inicio');
  });
  