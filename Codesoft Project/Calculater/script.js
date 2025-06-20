const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

let currentInput = "";
let operator = "";
let firstOperand = null;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (!isNaN(value)) {
      // Number clicked
      currentInput += value;
      display.value = currentInput;
    } else if (value === "+" || value === "-") {
      // Operator clicked
      if (currentInput === "") return;
      firstOperand = parseFloat(currentInput);
      operator = value;
      currentInput = "";
    } else if (value === "=") {
      // Equal clicked
      if (firstOperand === null || currentInput === "") return;
      const secondOperand = parseFloat(currentInput);
      let result = 0;

      if (operator === "+") {
        result = firstOperand + secondOperand;
      } else if (operator === "-") {
        result = firstOperand - secondOperand;
      }

      display.value = result;
      currentInput = result.toString();
      operator = "";
      firstOperand = null;
    } else if (value === "DEL") {
      // Delete last character
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    }
  });
});