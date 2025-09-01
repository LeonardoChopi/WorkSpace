document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');

    menuBtn.addEventListener('click', function () {
        navMenu.style.display = (navMenu.style.display === 'flex') ? 'none' : 'flex';
    });
});
