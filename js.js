var player = "O";
var won = false;

function clickbox(box){

    
    if(box.innerText != "" || won) return;
    box.innerText = player;
    // if(player == "O"){
    //     player = "X";
    // }
    // else{
    //     player = "O";
    // }
    player == "O" ? player = "X" : player = "O";
    checkgame();
}
// let number = 7;

// number % 2 == 0 ? alert("число четное") : alert("число нечетное");

// var grade = 60;
// grade >= 75 ? alert("проходной балл достигнут") : alert("не проходной балл");

// var age = 20;
// var legalstatus = ""
// age >= 18 ?  legalstatus = "совершенно летний" :  legalstatus = "несовершеннолетний";
// alert(legalstatus);

// var currency = "USD";

// currency === "USD" ? exchangerate = 1.0 : currency === "EUR" ? exchangerate = 0.85 : exchangerate = "неизвестная валюта";
// alert(exchangerate);
function checkgame(){
    //строка
    for (var i = 0; i <=2; i++){

        
        var first = document.getElementById("0_" + i).innerText;
        var second = document.getElementById("1_" + i).innerText;
        var third = document.getElementById("2_" + i ).innerText;

        if(first == "") continue;

        if(first == second && first == third){
            alert("winner");
            won = true;
        }
    }
    //столб
    for (var i = 0; i <=2; i++){

        
        var first = document.getElementById( i + "_0").innerText;
        var second = document.getElementById( i + "_1").innerText;
        var third = document.getElementById( i + "_2").innerText;

        if(first == "") continue;

        if(first == second && first == third){
            alert("winner");
            won = true;
        }
    }
    //диагональ левая
    var firstd1 = document.getElementById("0_0").innerText;
    var secondd1 = document.getElementById("1_1").innerText;
    var thirdd1 = document.getElementById("2_2").innerText;

    if(firstd1 !="" && firstd1 == secondd1 && firstd1 == thirdd1){
        alert("winner");
        won = true;
    }
    //диагональ правая
    var firstd2 = document.getElementById("0_2").innerText;
    var secondd2 = document.getElementById("1_1").innerText;
    var thirdd2 = document.getElementById("2_0").innerText;

    if(firstd2 !="" && firstd2 == secondd2 && firstd2 == thirdd2){
        alert("winner");
        won = true;
    }
}

function reload(){
    location.reload();
}