let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let numberIndicator = indicator.querySelector('.number');

let active = 0;
let lastPosition = items.length - 1;

function showSlider() {
    // Remove a classe 'active' de todos os itens e dots
    items.forEach(item => {
        item.classList.remove('active');
        item.classList.remove('hide'); // Garante que nenhum item tenha a classe 'hide' ao ser exibido
    });
    dots.forEach(dot => dot.classList.remove('active'));

    // Adiciona a classe 'active' ao item e dot atual
    items[active].classList.add('active');
    dots[active].classList.add('active');

    // Atualiza o número do indicador
    numberIndicator.textContent = '0' + (active + 1);
}

// Inicializa o slider para o primeiro item
showSlider();

nextButton.onclick = () => {
    const prevActive = active;
    active = active + 1 > lastPosition ? 0 : active + 1;

    // Define a direção da transição para a direita (hide)
    items[prevActive].style.setProperty('--calculation', '1');
    items[prevActive].classList.add('hide');

    showSlider();
};

prevButton.onclick = () => {
    const prevActive = active;
    active = active - 1 < 0 ? lastPosition : active - 1;

    // Define a direção da transição para a esquerda (hide)
    items[prevActive].style.setProperty('--calculation', '-1');
    items[prevActive].classList.add('hide');
    
    showSlider();
};