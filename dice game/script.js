const diceEl = document.querySelector('.dice')
const rollDice = document.querySelector('.btn--roll')
const holdDice = document.querySelector('.btn--hold')
const newGame = document.querySelector('.btn--new')

let currentScore=0;
let activePlayer=0;
let totalScore = [0,0]
let gameOver = true;
diceEl.style.display = 'none'
// Switch player
const  switchPlayer = ()=>{
     document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        activePlayer = activePlayer == 0 ? 1 : 0
        currentScore = 0;
        document.querySelector('.player--0').classList.toggle('player--active') 
        document.querySelector('.player--1').classList.toggle('player--active') 
}
// Roll bt
rollDice.addEventListener('click', ()=>{
   if(gameOver){ diceEl.style.display='block'
    const randomNum = Math.trunc(Math.random()*6)+1;
    diceEl.src=`dice-${randomNum}.png`   
    currentScore+=randomNum

    if(randomNum !==1){
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    }
    else{
        switchPlayer()
    }
}
})
// Hold btn
holdDice.addEventListener('click', ()=>{
  if(gameOver){  totalScore[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer]

    if(totalScore[activePlayer] >= 100){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        gameOver = false;
    }
    else{
        switchPlayer();
    }
}
})
// New Game
newGame.addEventListener('click',()=>{
currentScore=0;
activePlayer=0;
totalScore = [0,0]
gameOver = true;

document.getElementById(`current--0`).textContent = 0;
        document.getElementById(`current--1`).textContent = 0;
        document.getElementById(`score--0`).textContent = 0;
        document.getElementById(`score--1`).textContent = 0;

        document.querySelector(`.player--0`).classList.remove('player--winner');
        document.querySelector(`.player--1`).classList.remove('player--winner'); 
        document.querySelector(`.player--1`).classList.remove('player--active'); 
        document.querySelector(`.player--0`).classList.add('player--active'); 

})
