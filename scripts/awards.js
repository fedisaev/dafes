document.querySelector('.dafes-menu-mob').addEventListener('click', function() {
    // Проверяем, меньше ли ширина экрана 744px
    if (window.innerWidth < 744) {
        const menuList = document.querySelector('.dafes-menu-list-mob');
        menuList.classList.toggle('active');
    }
});

// Обновляем поведение при изменении размера окна
window.addEventListener('resize', function() {
    const menuList = document.querySelector('.dafes-menu-list-mob');
    if (window.innerWidth >= 744) {
        // Если ширина окна больше или равна 744px, скрываем меню
        menuList.classList.remove('active');
    }
});