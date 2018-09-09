var score,roundScore,activePlayer;
//document.querySelector('#current-'+ activePlayer).textContent = dice;

document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice1').style.display = 'none';
//add eventListener

//Makeing initial score to zero
initialise();

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    var dice  = Math.floor(Math.random() * 6) + 1;
    var dice1  = Math.floor(Math.random() * 6) + 1;
    
    console.log(dice);
    console.log(dice1);
     var diceDom = document.querySelector('.dice');
     var diceDom1 = document.querySelector('.dice1');
    diceDom.style.display = 'block';
    diceDom1.style.display = 'block';
    
    diceDom.src = 'dice-' + dice + '.png'; 
    diceDom1.src = 'dice-' + dice1 + '.png';//Selecting which picture to choose
    
    if(dice !== dice1)
        {
            roundScore+=(dice+dice1);
            document.getElementById('current-'+activePlayer).textContent = roundScore;
            
        }
    else{
       
       nextPlayer(); 
    }
});

//Hold button

document.querySelector('.btn-hold').addEventListener('click',function(){
    score[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
    if(checkWinner())
        {
            document.getElementById('name-'+activePlayer).textContent = 'WON!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice1').style.display = 'none';
              document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.btn-roll').disabled = true;
            document.querySelector('.btn-hold').disabled = true;
        }
    else{
    nextPlayer();
    }
});

//New Game

document.querySelector('.btn-new').addEventListener('click',initialise);

function nextPlayer()
{
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice1').style.display = 'none';
        //both become zero as we hit 1
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        //as the player changes we also want to move the background class.....use toggle
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
}

function checkWinner()
{
    if(score[activePlayer]>=100)
        return 1;
    return 0;
}

//Initialise back to zero

function initialise()
{
    score = [0,0];
    roundScore = 0;
    activePlayer = 0; // 0-> player 1 , 1-> palyer 2
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';
    
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.btn-roll').disabled = false;
document.querySelector('.btn-hold').disabled = false;
//document.querySelector.('.player-0-panel').classList.add('newGame');
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');
}












    