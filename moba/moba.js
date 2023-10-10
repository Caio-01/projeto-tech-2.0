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


//Otimização dos Slides
const slides = document.querySelector('.slides');
firstImg = slides.querySelectorAll("img")[0];
myIcons = document.querySelectorAll(".my-carousel i");


let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;


const showHideIcons = () => {
    //mostrando e movendo o ícone anterior//próximo de acordo com o valor inferior da rolagem do carrossel
    let scrollWidth = slides.scrollWidth - slides.clientWidth;//obtendo largura máxima rolável
    myIcons[0].style.display = slides.scrollLeft <= 0 ? "none" : "block";
    myIcons[1].style.display = slides.scrollLeft >= scrollWidth ? "none" : "block";
   
}

myIcons.forEach( icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 4; //obtendo largura de img do punho e adicionando valor de margem 14
        //se o ícone clicado estiver à esquerda, reduza o valor da margem da rolagem do carrossel para a esquerda, caso contrário, adicione-o
        slides.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); //tempo de aparecer o icon de 60segundos
    });
});
    
const autoSlide = () => {
    //se não houver mais imagem para rolar, retorne daqui
    if(slides.scrollLeft == (slides.scrollWidth - slides.clientWidth)) return; 

    positionDiff = Math.abs(positionDiff);  //tornando positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 4;
    //obtendo o valor da diferença que precisa ser adicionado ou reduzido do carrossel à esquerda para o centro da imagem intermediária
    let valDiferente = firstImgWidth - positionDiff;

    if(slides.scrollLeft > prevScrollLeft) { //se o     usuário estiver rolando para a direita
        return slides.scrollLeft += positionDiff > firstImgWidth / 3 ? valDiferente : -positionDiff;
    }
    //se o usuário estiver rolando para a esquerda
    slides.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDiferente : -positionDiff;
}

const dragStart = (e) => {
    //atualizando o valor das variáveis ​​globais no evento do mouse para baixo
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slides.scrollLeft;
}

const dragging = (e) => {
    //rolando imagens/carrossel para a esquerda de acordo com o ponteiro do mouse
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    slides.classList.add("arrastando");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slides.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    slides.classList.remove("arrastando");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

slides.addEventListener("mousedown", dragStart);
slides.addEventListener("touchstart", dragStart);

slides.addEventListener("mousemove", dragging);
slides.addEventListener("touchmove", dragging);

slides.addEventListener("mouseup", dragStop);
slides.addEventListener("mouseleave", dragStop);
slides.addEventListener("touchend", dragStop);