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
