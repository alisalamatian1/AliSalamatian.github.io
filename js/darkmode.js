/* Darkmode */

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
};

let darkmode = localStorage.getItem('darkmode');

if (darkmode === 'enabled') {
    enableDarkMode();
}

const darkModeToggle = document.querySelector('.darkmode_icon');

darkModeToggle.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkMode');
    if (darkmode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});