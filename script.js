document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Verificar si hay una preferencia guardada en localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        updateButtonIcon(savedTheme);
    } else {
        // Preferencia del sistema operativo
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            htmlElement.setAttribute('data-theme', 'dark');
            updateButtonIcon('dark');
        }
    }

    // Cambiar de tema al hacer clic
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateButtonIcon(newTheme);
    });

    // Actualizar el emoji del botón dependiendo del tema
    function updateButtonIcon(theme) {
        if (theme === 'dark') {
            themeToggleBtn.textContent = '☀️';
            themeToggleBtn.setAttribute('aria-label', 'Cambiar a modo claro');
        } else {
            themeToggleBtn.textContent = '🌙';
            themeToggleBtn.setAttribute('aria-label', 'Cambiar a modo oscuro');
        }
    }
});

/* Optimizaciones específicas para pantallas móviles (menores a 600px) */
@media (max-width: 600px) {
    /* Apilar las tarjetas de proyectos en una sola columna */
    .projects-grid {
        grid-template-columns: 1fr;
    }

    /* Reducir un poco el padding de las secciones para aprovechar el espacio en pantalla */
    section {
        padding: 4rem 5%;
    }

    /* Ajustar el tamaño del texto del Hero para que no se desborde */
    .hero-title {
        font-size: 2rem;
    }

    .hero-quote {
        font-size: 1.2rem;
    }
}
