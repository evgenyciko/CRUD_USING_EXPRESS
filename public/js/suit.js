const rock_user = document.getElementById('rock-user');
const paper_user = document.getElementById('paper-user');
const scissors_user = document.getElementById('scissor-user');
const rock_com = document.getElementById('rock-com');
const paper_com = document.getElementById('paper-com');
const scissors_com = document.getElementById('scissor-com');
const winBox = document.getElementById('box');
const inFo = document.getElementById("test");
const refresh = document.getElementById("refresh");
const x = document.querySelector(".user-tool");
const addElement1 = [...document.getElementsByClassName("dissap")];
const button = document.querySelector('button');



// Computer
function comThink() {
    var choices = ['Batu', 'Gunting', 'Kertas'];
    var randomChoices = Math.floor(Math.random() * 3);
    return choices[randomChoices];

}
// Color Change 
function resultObject() {
    winBox.classList.add('winBox');
}
function resultDraw() {
    winBox.classList.add('drawBox');
}

// Class Win or Lose or Draw BOX
function win() {
    console.log("Player 1 Win");
    resultObject();
    inFo.classList.remove("vs");
    inFo.classList.add("win");

}

function lose() {
    console.log("COM WIN");
    resultObject();
    inFo.classList.remove("vs");
    inFo.classList.add("lose");
}

function draw() {
    console.log("Draw");
    resultDraw();
    inFo.classList.remove("vs");
    inFo.classList.add("draw");
}


// gameCompare
function gameCompare(pilihanUser) {

    const computerUser = comThink();
    console.log("Hasil User => " + pilihanUser);
    console.log("Hasil Com => " + computerUser);

    switch (pilihanUser + computerUser) {
        case "BatuGunting":
        case "GuntingKertas":
        case "KertasBatu":
            win();

            break;
        case "GuntingBatu":
        case "BatuKertas":
        case "KertasGunting":
            lose();
            break;
        case "GuntingGunting":
        case "BatuBatu":
        case "KertasKertas":
            draw();

    }


    switch (computerUser) {
        case "Batu":
            rock_com.classList.add('chosen');

            break;
        case "Gunting":
            scissors_com.classList.add('chosen');
            break;
        case "Kertas":
            paper_com.classList.add('chosen');


    }


}


// Human Choice
function play() {
    rock_user.addEventListener('click', function () {
        this.classList.add('chosen');
        
        gameCompare("Batu");
        addElement1.forEach(addElement3 => {
            addElement3.setAttribute("style", "cursor: not-allowed;pointer-events: none;")
        })

    })

    paper_user.addEventListener('click', function () {
        this.classList.add('chosen');
        gameCompare("Kertas");
        addElement1.forEach(addElement3 => {
            addElement3.setAttribute("style", "cursor: not-allowed;pointer-events: none;")
        })
    })

    scissors_user.addEventListener('click', function () {
        this.classList.add('chosen');
        gameCompare("Gunting");
        addElement1.forEach(addElement3 => {
            addElement3.setAttribute("style", "cursor: not-allowed;pointer-events: none;");
        })
    })


}

play();




// Refresh Listemner
refresh.addEventListener('click', function () {
    
    inFo.removeAttribute("class");
    inFo.classList.add("vs");
    addElement1.forEach(addElement2 => {
        addElement2.classList.remove('chosen')
    });
    addElement1.forEach(addElement3 => {
        addElement3.removeAttribute("style", "cursor: not-allowed;pointer-events: none;")
    })
    winBox.classList.remove('winBox');
    winBox.classList.remove('drawBox');
    inFo.style.marginTop = null
    inFo.style.fontSize = null
    button.disabled = false;
})