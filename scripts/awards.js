document.querySelector('.dafes-menu-mob').addEventListener('click', function () {
    if (window.innerWidth < 744) {
        const menuList = document.querySelector('.dafes-menu-list-mob');
        menuList.classList.toggle('active');
    }
});

window.addEventListener('resize', function () {
    const menuList = document.querySelector('.dafes-menu-list-mob');
    if (window.innerWidth >= 744) {
        menuList.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.second-level-menu');

    function switchContent(target) {
        document.querySelectorAll('.dafes-h3-best, .dafes-h3-art, .dafes-h3-fashion, .dafes-h3-education, .dafes-h3-startups,.awards25-images-best, .awards25-images-art,.awards25-images-fashion, .awards25-images-education,.awards25-images-startups')
            .forEach(el => el.classList.remove('active'));

        const title = document.getElementById(`title-${target}`);
        if (title) {
            title.classList.add('active');
        }

        const cards = document.getElementById(`cards-${target}`);
        if (cards) {
            cards.classList.add('active');
        }

        menuLinks.forEach(link => {
            link.classList.remove('active');
        });
        const activeLink = document.querySelector(`.dafes-menu-link[data-target="${target}"]`);
        console.log(activeLink);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            switchContent(target);
        });
    });

    switchContent('best');
});