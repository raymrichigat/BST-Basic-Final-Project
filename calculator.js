const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    let expression = display.value;

    try {
        expression = expression.replace(/√(\d+)/g, "Math.sqrt($1)");
        expression = expression.replace(/(\d+)\^2/g, "Math.pow($1, 2)");
        expression = expression.replace(/sin\(([^)]+)\)/g, "Math.sin($1 * Math.PI / 180)");
        expression = expression.replace(/cos\(([^)]+)\)/g, "Math.cos($1 * Math.PI / 180)");
        expression = expression.replace(/tan\(([^)]+)\)/g, "Math.tan($1 * Math.PI / 180)");

        display.value = eval(expression);

        if (isNaN(display.value) || !isFinite(display.value)) {
            display.value = "Error";
        }
    } catch (e) {
        display.value = "Error";
    }
}
