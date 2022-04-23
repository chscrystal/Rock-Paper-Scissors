
function computerPlay(){
if(Math.floor(Math.random()*3)===0){
      return "Paper";
} else if (Math.floor(Math.random()*3)===1){
      return "Rock";
} else return "Scissors";      
};


let computerScore = 0;
let playerScore = 0;


function playRound(playerSelection,computerSelection){
    //console.log(this)
    playerSelection = this.id;
    this.classList.add('chosen')
    console.log(playerSelection);

    
 
    computerSelection = computerPlay();
    //console.log(computerSelection);
    const computerChoice = document.querySelector(`#computer${computerSelection}`);
    console.log(computerChoice)
    computerChoice.classList.add('chosen');

    
    setTimeout(returnResult,500);

    //returnResult(playerSelection,computerSelection);

    function removeTransition(e) {
        // if(!e.propertyName == 'transform') return;
         console.log(e)

    }


    const imgs = document.querySelectorAll('img');
    imgs.forEach(img=> img.addEventListener('transitionend',removeTransition));
    
    

    function returnResult(player,computer){
        player = playerSelection;
        computer = computerSelection

    if(player==computer){
        alert("That's a tie.");
    } else if(player=='Rock'){
               if(computer=='Paper'){
                   alert('You Lose!');
                   computerScore+=1;
               } else if(computer == 'Scissors'){
                    alert('You Win!');
                    playerScore+=1;      
               }     
    } else if(player=='Paper' ){
                if(computer=='Rock'){
                    alert('You Win!');
                    playerScore+=1;
                } else if(computer == 'Scissors'){
                    alert('You Lose!');
                    computerScore+=1;
                }    
    } else if(player=='Scissors'){
                if(computer=='Rock'){
                    alert('You Lose!');
                    computerScore+=1;
                } else if(computer == 'Paper'){
                    alert('You Win!');
                    playerScore+=1;    
                }     
    }   

    

    // console.log(computerScore);
    // console.log(playerScore)

    const computerScoreDisplay = document.querySelector('#computerScore');
    computerScoreDisplay.innerText = `PC: ${computerScore}`;
    
    const playerScoreDisplay = document.querySelector('#playerScore');
    playerScoreDisplay.innerText = `You: ${playerScore}`;

    if(computerScore==5){
        alert('Computer is the final winner!');
        computerScore = 0;
        playerScore = 0;
    }
    if(playerScore==5){
        alert('You are the final winner!');
        computerScore = 0;
        playerScore = 0;
    }


   }

    







//    this.classList.remove('chosen');
//    computerChoice.classList.remove('chosen');



}

// function game(){
//     let score={
//         player:0,
//         comp:0
//     };
    
//     for(let i=0;i<5;i++){
//         const computerSelection = computerPlay();
//         const playerSelection = prompt("Rock,Paper,Scissors?");
//         console.log(playRound(playerSelection, computerSelection));

//         if(playRound(playerSelection,computerSelection)===true){
//             score.player+=1;
//             console.log(score);
//         } else if(playRound(playerSelection,computerSelection)===false){
//             score.comp+=1;
//             console.log(score);
//         } else {
//            console.log(score);
//         }
//     }
//     return `Player scores ${score.player} and Computer scores ${score.comp}`;
// }

// console.log(game());

// function play(){
//  console.log(this.textContent)
// }

const buttons = document.querySelectorAll('.player');
buttons.forEach(button=>button.addEventListener('click',playRound));

