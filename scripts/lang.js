// function switchLanguage(lang) {
//     const translatableElements = document.querySelectorAll('[data-lang-ru]');
//
//     translatableElements.forEach(element => {
//         element.textContent = element.getAttribute(`data-lang-${lang}`);
//     });
//
//     const svgRuElements = document.querySelectorAll('[data-lang-svg-ru]');
//     const svgEnElements = document.querySelectorAll('[data-lang-svg-en]');
//     const svgRuMobElements = document.querySelectorAll('[data-lang-svg-ru-mob]');
//     const svgEnMobElements = document.querySelectorAll('[data-lang-svg-en-mob]');
//
//     if (window.innerWidth > 743) {
//
//         svgRuMobElements.forEach(svg => {
//             svg.style.display = 'none';
//         });
//         svgEnMobElements.forEach(svg => {
//             svg.style.display = 'none';
//         });
//
//         if (lang === 'ru') {
//             svgRuElements.forEach(svg => {
//                 svg.style.display = 'block';
//             });
//             svgEnElements.forEach(svg => {
//                 svg.style.display = 'none';
//             });
//         } else if (lang === 'en') {
//             svgRuElements.forEach(svg => {
//                 svg.style.display = 'none';
//             });
//             svgEnElements.forEach(svg => {
//                 svg.style.display = 'block';
//             });
//         }
//     } else {
//         svgRuElements.forEach(svg => {
//             svg.style.display = 'none';
//         });
//         svgEnElements.forEach(svg => {
//             svg.style.display = 'none';
//         });
//
//         if (lang === 'ru') {
//             svgRuMobElements.forEach(svg => {
//                 svg.style.display = 'flex';
//             });
//             svgEnMobElements.forEach(svg => {
//                 svg.style.display = 'none';
//             });
//         } else if (lang === 'en') {
//             svgRuMobElements.forEach(svg => {
//                 svg.style.display = 'none';
//             });
//             svgEnMobElements.forEach(svg => {
//                 svg.style.display = 'flex';
//             });
//         }
//     }
// }
//
// const langSwitchers = document.querySelectorAll('.dafes-switcher');
// console.log(langSwitchers);
//
// langSwitchers.forEach(button => {
//     button.addEventListener('click', () => {
//         const selectedLang = button.getAttribute('data-lang');
//
//         langSwitchers.forEach(btn => btn.classList.remove('active'));
//
//         button.classList.add('active');
//
//         switchLanguage(selectedLang);
//     });
// });
//
// document.addEventListener('DOMContentLoaded', () => {
//     switchLanguage('ru');
//
//     window.addEventListener('resize', () => {
//         const activeButton = document.querySelector('.dafes-switcher.active');
//         if (activeButton) {
//             const selectedLang = activeButton.getAttribute('data-lang');
//             switchLanguage(selectedLang);
//         }
//     });
// });
//
$(document).ready(function () {
    let currentLang = 'ru';

    function changeLanguage(lang) {
        currentLang = lang;

        $('[data-lang-ru], [data-lang-en]').each(function () {
            if (lang === 'ru') {
                $(this).text($(this).attr('data-lang-ru'));
            } else if (lang === 'en') {
                $(this).text($(this).attr('data-lang-en'));
            }
        });

        updateSvgDisplay(lang);
    }

    function updateSvgDisplay(lang) {
        const svgRuElements = $('[data-lang-svg-ru]');
        const svgEnElements = $('[data-lang-svg-en]');
        const svgRuMobElements = $('[data-lang-svg-ru-mob]');
        const svgEnMobElements = $('[data-lang-svg-en-mob]');

        // Check for the presence of SVG elements
        if (window.innerWidth > 743) {
            if (svgRuMobElements.length) svgRuMobElements.hide();
            if (svgEnMobElements.length) svgEnMobElements.hide();

            if (lang === 'ru') {
                if (svgRuElements.length) svgRuElements.show();
                if (svgEnElements.length) svgEnElements.hide();
            } else if (lang === 'en') {
                if (svgRuElements.length) svgRuElements.hide();
                if (svgEnElements.length) svgEnElements.show();
            }
        } else {
            if (svgRuElements.length) svgRuElements.hide();
            if (svgEnElements.length) svgEnElements.hide();

            if (lang === 'ru') {
                if (svgRuMobElements.length) svgRuMobElements.css('display', 'flex');
                if (svgEnMobElements.length) svgEnMobElements.hide();
            } else if (lang === 'en') {
                if (svgRuMobElements.length) svgRuMobElements.hide();
                if (svgEnMobElements.length) svgEnMobElements.css('display', 'flex');
            }
        }
    }

    function updateActiveButton(selectedLang) {
        if ($('.dafes-switcher').length) {
            $('.dafes-switcher').removeClass('active');
            $(`.dafes-switcher[data-lang="${selectedLang}"]`).addClass('active');
        }
    }

    changeLanguage(currentLang);

    if ($('.dafes-switcher').length) {
        $('.dafes-switcher').on('click', function () {
            const selectedLang = $(this).attr('data-lang');
            changeLanguage(selectedLang);
            updateActiveButton(selectedLang);
        });
    }

    $(window).on('resize', function () {
        updateSvgDisplay(currentLang);
    });

    if ($('.dafes-footer-else').length) {
        $('.dafes-footer-else').on('click', function () {
            const footerList = $('.dafes-footer-else-list');
            if (window.innerWidth < 744 && footerList.length) {
                footerList.toggleClass('active');
            }
        });
    }
});




