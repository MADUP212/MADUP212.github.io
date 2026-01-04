// Attend que le contenu de la page soit entièrement chargé
document.addEventListener('DOMContentLoaded', function() {

    // --- SCRIPT POUR LE MENU LATÉRAL (SIDEBAR) ---
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    function toggleMenu() {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('open');
    }

    if (menuToggle && sidebar && overlay) {
        menuToggle.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
    }

    // --- SCRIPT POUR LES ACCORDÉONS DANS LA BARRE LATÉRALE ---
    var acc_sidebar = document.getElementsByClassName("accordion-sidebar");
    for (var i = 0; i < acc_sidebar.length; i++) {
        acc_sidebar[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    // --- SCRIPT POUR LES ACCORDÉONS DANS LES PAGES (ex: a-propos.html) ---
    var acc_page = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc_page.length; i++) {
        acc_page[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});
