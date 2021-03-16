const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const parentEl = document.querySelector('#ingredients');

/* FIRST OPTION */

// const ingredientsItems = ingredients.map(item => {
//     const ingredient = document.createElement('li');
//     ingredient.classList.add('list-item');
//     ingredient.textContent = item;

//     return ingredient;
// })



/*  SECOND OPTION */

const createList = function (ingredients) {
    return ingredients.map(ingredient => {
        const item = document.createElement('li');
        item.textContent = ingredient;
        return item;
    })
}

const ingredientsItems = createList(ingredients);
parentEl.append(...ingredientsItems);









