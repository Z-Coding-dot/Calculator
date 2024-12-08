const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Bro :) Error😏";
    }
}
function clearDisplay(){
    display.value = '';
}
function clearDisplayOne(){
    display.value = display.value.toString().slice(0,-1);
}

function module(){
    display.value = display.value/100
}