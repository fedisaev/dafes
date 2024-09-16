function switchLanguage(lang) {
    const translatableElements = document.querySelectorAll('[data-lang-ru]');

    translatableElements.forEach(element => {
        element.textContent = element.getAttribute(`data-lang-${lang}`);
    });

    const svgRu = document.querySelector('[data-lang-svg-ru]');
    const svgEn = document.querySelector('[data-lang-svg-en]');
    const svgRuMob = document.querySelector('[data-lang-svg-ru-mob]');
    const svgEnMob = document.querySelector('[data-lang-svg-en-mob]');

    const screenWidth = window.innerWidth;

    if (screenWidth > 600) {
        if (lang === 'ru') {
            svgRu.style.display = 'block';
            svgEn.style.display = 'none';
            svgRuMob.style.display = 'none';
            svgEnMob.style.display = 'none';
        } else if (lang === 'en') {
            svgRu.style.display = 'none';
            svgEn.style.display = 'block';
            svgRuMob.style.display = 'none';
            svgEnMob.style.display = 'none';
        }
    } else {
        if (lang === 'ru') {
            svgRu.style.display = 'none';
            svgEn.style.display = 'none';
            svgRuMob.style.display = 'flex';
            svgEnMob.style.display = 'none';
        } else if (lang === 'en') {
            svgRu.style.display = 'none';
            svgEn.style.display = 'none';
            svgRuMob.style.display = 'none';
            svgEnMob.style.display = 'block';
        }
    }
}

const langSwitchers = document.querySelectorAll('.dafes-switcher');
console.log(langSwitchers);

langSwitchers.forEach(button => {
    button.addEventListener('click', () => {
        const selectedLang = button.getAttribute('data-lang');

        langSwitchers.forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');

        switchLanguage(selectedLang);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('ru');

    window.addEventListener('resize', () => {
        const activeButton = document.querySelector('.dafes-switcher.active');
        if (activeButton) {
            const selectedLang = activeButton.getAttribute('data-lang');
            switchLanguage(selectedLang);
        }
    });
});
