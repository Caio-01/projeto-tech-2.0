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


const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

//Funçoes para passar as imagens com os botoes
function hideSlider(){
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider(){
    slider[currentSlide].classList.add('on')
}

function nextSlider(){
    hideSlider()
    if(currentSlide == slider.length -1){
        currentSlide = 0
    }else {
        currentSlide++
    }
    showSlider()
}

function prevSlider(){
    hideSlider()
    if(currentSlide == 0){
        currentSlide = slider.length -1
    }else {
        currentSlide--
    }
    showSlider()
}


btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);


