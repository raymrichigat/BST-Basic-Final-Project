const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate() {
    let expression = display.value;

    try {
        // Ganti operator khusus dengan fungsi JavaScript
        expression = expression.replace(/√(\d+)/g, "Math.sqrt($1)");
        expression = expression.replace(/(\d+)\^2/g, "Math.pow($1, 2)");
        expression = expression.replace(/sin\(([^)]+)\)/g, "Math.sin($1 * Math.PI / 180)");
        expression = expression.replace(/cos\(([^)]+)\)/g, "Math.cos($1 * Math.PI / 180)");
        expression = expression.replace(/tan\(([^)]+)\)/g, "Math.tan($1 * Math.PI / 180)");

        // Evaluasi ekspresi dan tangani potensi kesalahan apa pun
        display.value = eval(expression);

        // Handle potensi masalah
        if (isNaN(display.value) || !isFinite(display.value)) {
            display.value = "Error";
        }
    } catch (e) {
        display.value = "Error";
    }
}
