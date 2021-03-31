

function generateRandomColor(){
    let hexCharacters = "0123456789abcdef";
    let color = "#";

    for(let i = 0; i < 6; i++){
        let randomNumber = Math.floor(Math.random() * 16);
        color = color + hexCharacters(randomNumber);
    }

    return color;
}

let parentBoxes = document.querySelector('.boxes');

function randomNumber(max){
   return Math.floor(Math.random() * max);
}

for(i = 0; i < 500; i++){
    let div  = document.createElement('div');
    div.classList.add('box');
    let h3 = document.createElement("h3");
    let randomNo = randomNumber(500);
    h3.innerText = randomNo;
    div.append('h3');
    parentBoxes.append(div);
}

let allboxes = document.querySelectorAll('.box');
function handleMouseMove(){
    allboxes.forEach((box) => {
        box.style.backgroundColor = generateRandomColor;
        box.querySelector()
    });
}

parentBoxes.addEventListener('mousemove',handleMouseMove);















