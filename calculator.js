
const display = document.getElementById("display");

function appendToDisplay (input){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "🙏 اوکون نمیشه";
    }  
}

function clearDisplay(){
    display.value = "";
}