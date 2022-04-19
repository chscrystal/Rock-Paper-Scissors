
function computerPlay(){
if(Math.floor(Math.random()*3)===0){
      return "Paper";
} else if (Math.floor(Math.random()*3)===1){
      return "Rock";
} else return "Scissors";      
};


//console.log(computerPlay());

const choice=['Rock','Paper','Scissors'];


function playRound(playerSelection,computerSelection){
    
    console.log(computerSelection);
    
    if(playerSelection==computerSelection){
        return "That's a tie.";
    } else if(playerSelection==choice[0]){
               if(computerSelection==choice[1]){
                   return false;
               } else
        return true;
    } else if(playerSelection==choice[1] ){
                 if(computerSelection==choice[0]){
                     return true;
                 } else
        return false;
    } else if(playerSelection==choice[2]){
                 if(computerSelection==choice[0]){
                     return false;
                 } else
        return true;     
    }   
}





function game(){
    let score={
        player:0,
        comp:0
    };
    
    for(let i=0;i<5;i++){
        const computerSelection = computerPlay();
        const playerSelection = prompt("Rock,Paper,Scissors?");
        console.log(playRound(playerSelection, computerSelection));

        if(playRound(playerSelection,computerSelection)===true){
            score.player+=1;
            console.log(score);
        } else if(playRound(playerSelection,computerSelection)===false){
            score.comp+=1;
            console.log(score);
        } else {
           console.log(score);
        }
    }
    return `Player scores ${score.player} and Computer scores ${score.comp}`;
}

console.log(game());