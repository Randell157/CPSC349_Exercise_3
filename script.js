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
    // else if(value == '+' || value == '-' ||value == '*'||value == '/'){
    //     if(display.value.includes('+'|| '-'||'*'||'/')){
    //         display.value += value;
    //     }
    // }
    else{
        display.value += value;
    }

    console.log(display.value);
}