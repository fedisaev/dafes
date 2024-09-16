function switchLanguage(lang) {
    const translatableElements = document.querySelectorAll('[data-lang-ru]');

    translatableElements.forEach(element => {
        element.textContent = element.getAttribute(`data-lang-${lang}`);
    });

    const svgRu = document.querySelector('[data-lang-svg-ru]');
    const svgEn = document.querySelector('[data-lang-svg-en]');

    if (lang === 'ru') {
        svgRu.style.display = 'block';
        svgEn.style.display = 'none';
    } else if (lang === 'en') {
        svgRu.style.display = 'none';
        svgEn.style.display = 'block';
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