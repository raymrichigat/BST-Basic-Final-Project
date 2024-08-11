const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    let expression = display.value

    expression = expression.replace(/√(\d+)/g, "Math.sqrt($1)");
    
    expression = expression.replace(/(\d+)\^2/g, "Math.pow($1, 2)");

    display.value = eval(expression);
}