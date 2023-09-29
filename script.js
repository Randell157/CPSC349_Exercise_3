const numpad = document.querySelectorAll('button');
const display = document.querySelector('input');

for (let button of numpad) {
    button.addEventListener("click", calculator);
}

function calculator(event) {
    let value = event.target.innerHTML;
    if(value === 'C'){
        display.value = '';
    }
    else if(value == '='){
        let result = display.value;
        display.value = eval(result);
    }
    else if(value == '+' || value == '-' ||value == '*'||value == '/'){
        if (display.value == ''){
            alert("Empty Calculator");
        }
        else if(display.value.split('+').length > 1){ //if more than one + is in the string
            display.value = display.value.slice(0, -1) + value;
        }
        else if(display.value.split('-').length > 1){
            display.value = display.value.slice(0, -1) + value;
        }
        else if(display.value.split('*').length > 1){
            display.value = display.value.slice(0, -1) + value;
        }
        else if(display.value.split('/').length > 1){
            display.value = display.value.slice(0, -1) + value;
        }
        else{
            display.value += value;
        }
    }
    else{
        display.value += value;
    }
    console.log(display.value);
}