let clicks = document.querySelector('.clicks');
let keyClicks = document.querySelector('.keyClicks');
let reset = document.querySelector('.reset');
let clickCount = 0;



 document.addEventListener('keydown', event => {
    clickCount++;
    clicks.textContent = clickCount;
    localStorage.setItem('keyboard', clickCount);
})

let initionalCount = localStorage.getItem('keyboard')

if(!initionalCount) {
    clickCount = 0;
}
else{
   clickCount = initionalCount;
};


let keyPressCount = 0;

addEventListener('click', event => {
  keyPressCount++;
  keyClicks.textContent = keyPressCount;
  localStorage.setItem('mouse', keyPressCount);
})

let initionalCountt = localStorage.getItem('mouse')

if(!initionalCountt) {
    keyPressCount = 0;
}
else{
   keyPressCount = initionalCountt;
};

keyClicks.textContent = initionalCountt;
clicks.textContent = initionalCount;


function resetAll() {
clicks.textContent = 0;
clickCount = 0;

keyClicks.textContent = 0;
keyPressCount = 0 -1 ;
}

reset.addEventListener('click', resetAll)