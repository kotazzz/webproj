// Функция для смены темы
document.getElementById('theme-toggle').addEventListener('click', () => {
    const themeStyle = document.getElementById('theme-style');
    if (themeStyle.getAttribute('href') === '../css/dark-theme.css') {
        themeStyle.setAttribute('href', '../css/light-theme.css');
    } else {
        themeStyle.setAttribute('href', '../css/dark-theme.css');
    }
});

// Добавление эффекта наведения для кнопки
document.getElementById('theme-toggle').addEventListener('mouseover', () => {
    document.getElementById('theme-toggle').style.transform = 'scale(1.05)';
});

document.getElementById('theme-toggle').addEventListener('mouseout', () => {
    document.getElementById('theme-toggle').style.transform = 'scale(1)';
});