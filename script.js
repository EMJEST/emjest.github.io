// Menú móvil: abre/cierra la navegación
const menuBtn = document.querySelector('.menu-btn');
const siteNav = document.querySelector('.site-nav');

if (menuBtn && siteNav) {
  menuBtn.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

// Poner año actual en footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}


/* LIGHTBOX PARA FOTOS Y VIDEOS */
document.querySelectorAll('[data-lightbox]').forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();

        const src = item.getAttribute('href');
        const isVideo = src.endsWith(".mp4");

        const overlay = document.createElement("div");
        overlay.classList.add("lightbox-overlay");

        overlay.innerHTML = `
            <div class="lightbox-content">
                ${isVideo 
                    ? `<video src="${src}" controls autoplay></video>`
                    : `<img src="${src}" alt="">`
                }
            </div>
        `;

        overlay.addEventListener("click", () => overlay.remove());
        document.body.appendChild(overlay);
    });
});


// Animación suave al cargar
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 0.7s";
        document.body.style.opacity = "1";
    }, 50);
});
