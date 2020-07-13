/* Navabr */

/* Show narbar on scroll up*/
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    document.getElementById("nav-btn").style.opacity = "1";
    if (prevScrollpos > currentScrollPos || window.pageYOffset < 50) {
        document.getElementById("header").style.top = "0";
        document.getElementById("nav-btn").style.top = "15px";
    } else {
        document.getElementById("header").style.top = "-100px";
        document.getElementById("nav-btn").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

/* Slowly fades shadow */
window.addEventListener("scroll", function(event) {
    let scroll_y = this.scrollY;

    if (scroll_y >= window.innerHeight) {
        document.getElementById("header").style.boxShadow="0 0 15px 0 rgba(0, 0, 0, .25)";
    } else {
        var pos = .25 - (0.5 * (1 - (scroll_y / window.innerHeight)) - 0.2);
        document.getElementById("header").style.boxShadow=`0 0 15px 0 rgba(0, 0, 0, ${pos})`;
    }
});

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