$(document).ready(function(){
    const supportedLocales = ['de', 'en', 'es', 'es-419'];
    const browserLocale = (navigator.language || 'en').toLowerCase();
    const baseLocale = browserLocale.includes('es-') ? browserLocale : browserLocale.split('-')[0];

    let chosenLocale = localStorage.getItem('chosenLocale');

    if (!supportedLocales.includes(chosenLocale)) {
        chosenLocale = supportedLocales.includes(browserLocale)
            ? browserLocale
            : supportedLocales.includes(baseLocale)
                ? baseLocale
                : 'en';

        localStorage.setItem('chosenLocale', chosenLocale);
    }

    $('#languagesListToggle').click(function(){
        $('#languagesDropdown').toggleClass('visible');
    });

    $('.menu-bar_language-option').click(function () {
        const selectedLanguage = $(this).data('language');
        localStorage.setItem('chosenLocale', selectedLanguage);
        window.location.reload();
    });
});