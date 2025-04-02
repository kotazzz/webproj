// Функция для смены темы
document.getElementById('theme-toggle').addEventListener('click', () => {
    const themeStyle = document.getElementById('theme-style');
    if (themeStyle.getAttribute('href') === '../css/dark-theme.css') {
        themeStyle.setAttribute('href', '../css/light-theme.css');
    } else {
        themeStyle.setAttribute('href', '../css/dark-theme.css');
    }
});