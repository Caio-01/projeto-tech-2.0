//Funcao para usar colocar o menu responsivo - modo mobile
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



