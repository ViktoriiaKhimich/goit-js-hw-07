// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterValue = document.querySelector('#value');

const decrementButton = document.querySelector('[data-action="decrement"]')
decrementButton.addEventListener('click', decrement);

const incrementButton = document.querySelector('[data-action="increment"]')
incrementButton.addEventListener('click', increment);


function decrement(){
    const value = +counterValue.textContent;
    counterValue.textContent = value - 1;
}

function increment(){
    const value = +counterValue.textContent;
    counterValue.textContent = value + 1;
}



