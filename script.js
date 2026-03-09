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


    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. LÓGICA DEL MODO OSCURO (DARK MODE)
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        updateButtonIcon(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            htmlElement.setAttribute('data-theme', 'dark');
            updateButtonIcon('dark');
        }
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateButtonIcon(newTheme);
    });

    function updateButtonIcon(theme) {
        if (theme === 'dark') {
            themeToggleBtn.textContent = '☀️';
            themeToggleBtn.setAttribute('aria-label', 'Cambiar a modo claro');
        } else {
            themeToggleBtn.textContent = '🌙';
            themeToggleBtn.setAttribute('aria-label', 'Cambiar a modo oscuro');
        }
    }

    // ==========================================
    // 2. LÓGICA DEL FORMULARIO DE CONTACTO
    // ==========================================
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Esto evita que la página haga un "refresh" (recarga) por defecto
            e.preventDefault(); 
            
            // Aquí es donde, en un futuro, conectarías una base de datos o un servicio de correos.
            // Por ahora, creamos una experiencia visual impecable inyectando HTML nuevo:
            
            contactForm.innerHTML = `
                <div style="text-align: center; padding: 3rem 1.5rem; background-color: var(--card-bg); border: 2px dashed var(--primary-color); border-radius: 8px; animation: fadeIn 0.5s ease;">
                    <h3 style="color: var(--primary-color); font-size: 1.8rem; margin-bottom: 0.5rem;">¡Gracias por contactarme! 🚀</h3>
                    <p style="font-size: 1.1rem;">He recibido tu mensaje correctamente. Te responderé lo más pronto posible.</p>
                </div>
            `;
        });
    }

});
