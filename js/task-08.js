// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов 
// в input и нажимает кнопку Создать, после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.


const refs = {
    input: document.querySelector('#controls').firstElementChild,
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
    boxesDiv: document.querySelector('#boxes'),
}

refs.renderBtn.addEventListener('click', getAmount);
refs.destroyBtn.addEventListener('click', destroyBoxes)

function getAmount () {
    const amount = +refs.input.value;
    createBoxes(amount);
}

function createBoxes (amount) {
    let width = 30;
    let height = 30;
    const arrayDiv = [];
  
    for (let i = 1; i <= amount; i += 1) {
        const div = document.createElement('div');

        div.style.backgroundColor = 'pink';
        div.style.marginBottom = '10px';
        div.style.width = `${width}px`;
        div.style.height = `${height}px`;
        width += 10;
        height += 10;
        
        arrayDiv.push(div);
    }
    refs.boxesDiv.append(...arrayDiv);
}

function destroyBoxes () {
    refs.boxesDiv.innerHTML = '';
    refs.input.value = 0;
}






