function switchLanguage(lang) {
    const translatableElements = document.querySelectorAll('[data-lang-ru]');

    translatableElements.forEach(element => {
        element.textContent = element.getAttribute(`data-lang-${lang}`);
    });

    const svgRuElements = document.querySelectorAll('[data-lang-svg-ru]');
    const svgEnElements = document.querySelectorAll('[data-lang-svg-en]');

    if (lang === 'ru') {
        svgRuElements.forEach(svg => {
            svg.style.display = 'block';
        });
        svgEnElements.forEach(svg => {
            svg.style.display = 'none';
        });
    } else if (lang === 'en') {
        svgRuElements.forEach(svg => {
            svg.style.display = 'none';
        });
        svgEnElements.forEach(svg => {
            svg.style.display = 'block';
        });
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
});