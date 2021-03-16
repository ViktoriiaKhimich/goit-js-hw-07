// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputChangeBorder);


const length = +input.dataset.length;

function onInputChangeBorder(event) {
        if(event.currentTarget.value.length === length) {
            input.classList.add('valid');
        } else {
            input.classList.add('invalid');
        }
}

input.addEventListener('input', onInputChange);

function onInputChange () {
    input.classList.remove('valid', 'invalid');
}