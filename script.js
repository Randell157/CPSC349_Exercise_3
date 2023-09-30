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
    let result = display.value;
    let tempResult = parseFloat(Function("return " + result)().toFixed(2));
    display.value = tempResult;
    console.log(result);
  } else if (value == "+" || value == "-" || value == "*" || value == "/") {
    if (display.value == "") {
      alert("Empty Calculator");
    } else if (display.value.charAt(display.value.length - 1) == "+") {
      display.value = display.value.replace(
        display.value.charAt(display.value.length - 1),
        value
      );
    } else if (display.value.charAt(display.value.length - 1) == "-") {
      display.value = display.value.replace(
        display.value.charAt(display.value.length - 1),
        value
      );
    } else if (display.value.charAt(display.value.length - 1) == "*") {
      display.value = display.value.replace(
        display.value.charAt(display.value.length - 1),
        value
      );
    } else if (display.value.charAt(display.value.length - 1) == "/") {
      display.value = display.value.replace(
        display.value.charAt(display.value.length - 1),
        value
      );
    } else {
      display.value += value;
    }
  } else {
    display.value += value;
  }
}
