// Navegación Suave al Hacer Click en los Enlaces
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animaciones al Desplazarse
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.5
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    appearOnScroll.observe(section);
});

// Validación del Formulario de Contacto
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    form.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Animaciones en los Elementos de Servicios y Certificaciones
const serviceItems = document.querySelectorAll('.servicio, .certificacion');

serviceItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('hover');
    });

    item.addEventListener('mouseout', () => {
        item.classList.remove('hover');
    });
});

// Efecto Parallax en la Sección de Hero
window.addEventListener('scroll', function() {
    const hero = document.getElementById('hero');
    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.7 + 'px';
});

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});
