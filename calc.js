var screen = document.getElementById('screen');

function btnclick(value){
    screen.value += value;
}

function clearScreen(){
    screen.value = "";
}

function lastclear(){
    screen.value = screen.value.slice(0,-1);
}

function findResult(){
    try{
    var result = eval(screen.value)
    screen.value = result;
    }catch{
        screen.value="Error"
    }
}
