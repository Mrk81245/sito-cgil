// =====================================================
// JAVASCRIPT BASE - Sito CGIL
// =====================================================
console.log('Sito CGIL avviato');

// =====================================================
// MENU MOBILE - Mostra/Nasconde con animazione
// =====================================================
function toggleMenu() {
  const menuOverlay = document.getElementById('menuOverlay');
  menuOverlay.classList.toggle('open');
}

// =====================================================
// CHIUSURA MENU MOBILE - Al click su una voce
// =====================================================
document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('#menuOverlay a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('menuOverlay').classList.remove('open');
    });
  });

  // =====================================================
  // RESET SCROLL SU GALLERIA (solo se NON usi Swiper)
  // =====================================================
  const gallery = document.querySelector('.galleria-locandine.scroll-x');
  if (gallery) {
    setTimeout(() => {
      gallery.scrollTo({ left: 0, behavior: 'auto' });
    }, 100); // attende che la galleria venga renderizzata
  }
});