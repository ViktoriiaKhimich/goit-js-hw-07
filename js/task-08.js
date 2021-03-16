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
    render: document.querySelector('[data-action="render"]'),
    destroy: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
}

refs.render.addEventListener('click', getAmount);
refs.destroy.addEventListener('click', destroyBoxes)

function getAmount () {
    const amount = +document.querySelector('#controls input').value;
    createBoxes(amount);
}

function createBoxes (amount) {
    for (let i = 1; i <= amount; i += 1) {
        const div = document.createElement('div');
    
        div.style.backgroundColor = 'pink';
        div.style.width = `${20 + i * 10}px`;
        div.style.height = `${20 + i * 10}px`;
        
        div.style.marginBottom = '10px';
        refs.boxes.append(div);

        console.log(div)
    }
}

function destroyBoxes () {
    refs.boxes.innerHTML = '';
    refs.input.value = 0;
}






