let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);
// let winnerStatus = document.querySelector("h1").innerText;

document.querySelectorAll("img")[0].setAttribute("src", "./asset/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "./asset/dice" + randomNumber2 + ".png");

function winOrLose() {
    if (randomNumber1 > randomNumber2) 
        { document.querySelector("h1").innerHTML = "Player 1 Won 🏆";
    } 
    else if (randomNumber2 > randomNumber1) 
        {document.querySelector("h1").innerHTML = "Player 2 Won 🏆";
    } 
    else {
       return document.querySelector("h1").innerHTML = "Draw!";
    }
}
winOrLose();