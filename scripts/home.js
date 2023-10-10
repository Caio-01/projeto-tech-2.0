//Funcao para colocar o menu responsivo - modo mobile
const toggleMenu = () => {
    const burgerMenu = document.querySelector(".menu-icon");
    const src = burgerMenu.getAttribute('src');
    const iconName = src === 'menu.svg' ?
    'close.svg'
    :
    'menu.svg';

    burgerMenu.setAttribute(
        'src',
        iconName
    );

    const navegation = document.querySelector('.navegation');

    navegation.classList.toggle(
        'navegation--mobile'
    );

    const btn1 = document.querySelector('.btn1');

    btn1.classList.toggle(
        'btn1--mobile'
    );

};

//Funcao para scroll do header

const navBar = document.querySelector('.menu-bar');
let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function () {
    let currScrollPos = window.scrollY;

    if(currScrollPos > prevScrollPos) {
        navBar.style.transform = `translateY(-100%)`;
    } else{
        navBar.style.transform = `translateY(0%)`;
    }

    prevScrollPos = currScrollPos;
});