let display = document.querySelector('.display');
let initialValue = 0;
let allBts  = document.querySelector('keys');

function handleBtnClick(event){
  console.log(event.target.innerText);
}

allBts.forEach(btn => {
  allBts.addEventListener("click",handleBtnClick);
});

display.innerText = initialValue;













