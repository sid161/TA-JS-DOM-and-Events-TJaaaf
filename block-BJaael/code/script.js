









let parentBox = document.querySelector('.boxes');
for(i = 0; i < 500; i++){
    div.createElement('div');
    div.classList.add('.box');

    let h3 = document.querySelector('h3');
    
}
















function randomNumber(max){
    return Math.floor(Math.random() * max);
}

function generateRandomColor(){
    let hexCharacters = '0123456789abcdef';

    let color = "#";

    for(let i = 0; i < 6; i++){
        let randomNumber = getRandomNumber(16);
        color = color + hexCharacters(randomNumber);
    }

    return color;
}

let parentBox = document.querySelector(".boxes");

for(let i = 0; i < 500; i++){
    let div = document.createElement("div");
    div.classList.add('box');

    let h3 = document.createElement("h3");
    let randomNo = getRandomNumber(500);
    h3.innerText = randomNo;

    div.append(h3);
    parentBox.append(div);
}
let allBoxes = document.querySelector('.box')
function handleMouseMove(){
    allBoxes.forEach(box => {
        box.style.backgroundColor = generateRandomColor;
        box.querySelector("h3").innerText = getRandomNumber(500);
    });
    
}

parentBox.addEventListener('mousemove', handleMouseMove);