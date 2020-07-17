/* Darkmode */
let darkmode = localStorage.getItem('darkmode');
const darkModeToggle = document.querySelector('.darkmode_icon');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
};

if (darkmode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkMode');
    if (darkmode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});