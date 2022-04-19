
function computerPlay(){
if(Math.floor(Math.random()*3)===0){
      return "Paper";
} else if (Math.floor(Math.random()*3)===1){
      return "Rock";
} else return "Scissors";      
};


function playRound(playerSelection,computerSelection){
    
    playerSelection = this.id;
    console.log(playerSelection);
 
    computerSelection = computerPlay();
    console.log(computerSelection);
    
    if(playerSelection==computerSelection){
        alert("That's a tie.");
    } else if(playerSelection=='Rock'){
               if(computerSelection=='Paper'){
                   alert('You Lose!');
               } else
        return alert('You Win!');
    } else if(playerSelection=='Paper' ){
                 if(computerSelection=='Rock'){
                     alert('You Win!');
                 } else
        return alert('You Lose!');
    } else if(playerSelection=='Scissors'){
                 if(computerSelection=='Rock'){
                     return alert('You Lose!');
                 } else
        return alert('You Win!');     
    }   
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

const buttons = document.querySelectorAll('button');
buttons.forEach(button=>button.addEventListener('click',playRound));

