var timer = 60;
var score = 0;
var guessNo;
var timerelem = document.querySelector('#timerelem');
var hitelem = document.querySelector('#hitelem');
var btmpnl = document.querySelector('#btmpnl');
var scoreelem = document.querySelector('#scoreelem');




setInterval(function(){
    if( timer > 0){
        --timer;
        timerelem.textContent = timer;
    }
    else{
        btmpnl.innerHTML = '<h1 id="centre" >  Game Over ! </h1>'
    }
} , 1000);

function makeBubbles(){
    for(var i=0; i<90; i++){
        var randomNo = Math.floor(Math.random()*10);
        var template = `<div class="bubble">${randomNo}</div>`;
        btmpnl.innerHTML += template;
    }
}


function getNewGuess(){
    guessNo = Math.floor(Math.random()*10);
    hitelem.textContent = guessNo;
}

btmpnl.addEventListener('click', function(details){
   var clickedBblValue = details.target.textContent;
    if(clickedBblValue == guessNo){
        score = score + 10;
        scoreelem.textContent = score;
        getNewGuess();
        btmpnl.innerHTML = '';
        makeBubbles();
    }
    else{
       console.log('not hitted!');
    }
})



getNewGuess();
makeBubbles();