'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number'
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// //input field
// console.log(document.querySelector('.guess').value);
// document.querySelector('.check').addEventListener('click', 
// function(){
//     console.log(document.querySelector('.guess').value);
// })
let highScore = 0;
let randNum;
let score = 20;
function btnGuess()
{
    
   const guess = Number(document.querySelector('.guess').value);
   if(!guess)
   {
        document.querySelector('.message').textContent = 'No Number'
     
   }
   if(randNum === guess)
    {
            document.querySelector('.message').textContent = 'Correct';
            document.querySelector('.number').textContent = randNum;
            if(score > highScore)
            {
                highScore = score;
            }
            document.querySelector('.highscore').textContent = highScore;
            document.body.style.background = 'green';
    }
    else{
        score--;
        if(score<0)
        {
            document.querySelector('.message').textContent = 'Game Over.....';
            document.body.style.background = 'red';
           
        }
        else{
            
            document.querySelector('.message').textContent = 'Wrong';
            document.querySelector('.score').textContent = score;
        }        
    }

}
function btnAgain()
{
    score=20;
    randNum = Math.floor(Math.random() * 20);
    document.body.style.background = 'black';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = "?";
    console.log(randNum)
}