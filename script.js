const btnCourses = document.querySelector('#courses-redirect');
const btnMoodle = document.querySelector('#moodle-redirect');
const btnBase = document.querySelector('#base-redirect');

const endText = document.querySelector('#end-text');
const footerText = document.querySelector('#footer-text');

btnCourses.addEventListener('click', () => {
    redirect(1);
});
btnMoodle.addEventListener('click', () => {
    redirect(2);
});
btnBase.addEventListener('click', () => {
    redirect(3);
});

document.addEventListener("DOMContentLoaded", () => {
    changeText();
});

window.addEventListener("resize", () => {
    changeText();
});

function redirect(number) {
    if(number === 1) {
        if(window.innerWidth <= 768) {
            window.open('https://ava.senadorcanedo.go.gov.br/cursos', '_self');
        }
        else
            window.open('https://ava.senadorcanedo.go.gov.br/cursos', '_blank');
    }
    else if (number === 2) {
        if(window.innerWidth <= 768) {
            window.open('https://moodle.senadorcanedo.go.gov.br', '_self');
        }
        else
            window.open('https://moodle.senadorcanedo.go.gov.br', '_blank');
    }
    else {
        console.log('sem link ainda');
    }
}

function changeText() {
    if(window.innerWidth <= 900) {
        endText.classList.add('hidden');
        footerText.classList.remove('hidden')
    }
    else {
        endText.classList.remove('hidden');
        footerText.classList.add('hidden');
    }
}