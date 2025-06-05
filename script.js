document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita el envío real del formulario

            // Simula el envío
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');

            // Opcional: Limpiar el formulario
            contactForm.reset();
        });
    }
});