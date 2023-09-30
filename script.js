const numpad = document.querySelectorAll("button");
const display = document.querySelector("input");

for (let button of numpad) {
  button.addEventListener("click", calculator);
}

function calculator(event) {
  let value = event.target.innerHTML;
  if (value === "C") {
    display.value = "";
  } else if (value == "=") {
    let tempResult = display.value;
    let result = parseFloat(Function("return " + tempResult)().toFixed(2));
    display.value = result;
  } else if (value == "+" || value == "-" || value == "*" || value == "/") {
    if (display.value == "") {
      alert("Empty Calculator");
    } else if (display.value.slice(-1) == "+") {
      display.value = display.value.slice(0, -1);
      display.value += value;
    } else if (display.value.slice(-1) == "-") {
      display.value = display.value.slice(0, -1);
      display.value += value;
    } else if (display.value.slice(-1) == "*") {
      display.value = display.value.slice(0, -1);
      display.value += value;
    } else if (display.value.slice(-1) == "/") {
      display.value = display.value.slice(0, -1);
      display.value += value;
    } else {
      display.value += value;
    }
  } else {
    display.value += value;
  }
  console.log(display.value);
}
