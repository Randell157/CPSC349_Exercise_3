const numpad = document.querySelectorAll('button');
const display = document.querySelector('input');

for (let button of numpad) {
    button.addEventListener("click", calculator);
}

function calculator(event) {
    let value = event.target.innerHTML;
    display.value += value;

    console.log(value);
}