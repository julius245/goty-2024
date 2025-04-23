const lightbox = document.getElementById('lightbox');
const imagenAmpliada = document.getElementById('imagen-ampliada');
const imagenes = document.querySelectorAll('.galeria-grid img');

// Al hacer clic en una imagen, mostrar el lightbox
imagenes.forEach(img => {
    img.addEventListener('click', () => {
        imagenAmpliada.src = img.src;
        lightbox.style.display = 'flex';
    });
});

// Cerrar al hacer clic fuera de la imagen
lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        imagenAmpliada.src = '';
    }
});

// Cerrar con tecla ESC
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        lightbox.style.display = 'none';
        imagenAmpliada.src = '';
    }
});