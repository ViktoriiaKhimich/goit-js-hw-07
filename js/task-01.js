const catagoriesList = document.querySelectorAll('#categories .categories-item');
console.log(`В списке ${catagoriesList.length} категорий`);


for (const elem of catagoriesList) {
    const h2 = elem.querySelector('h2').textContent;
    const items = elem.querySelectorAll('li').length;
    console.log(`Категория: ${h2}; Количество категорий: ${items}`)
}




