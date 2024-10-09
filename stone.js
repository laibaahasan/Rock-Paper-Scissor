let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");  // saari choice ko select kar liya
const msg= document.querySelector("#msgcont");  
const userscoree=document.querySelector("#user-score");
const compscoree=document.querySelector("#comp-score");

const getCompchoice=()=>{
   
   let arr=["stone", "paper", "scissor"];
   let randomidx= Math.floor(Math.random()*3);
    return arr[randomidx];
};



const playgame=(userChoice)=>{
    console.log("user choice:", userChoice);
    const compChoice=getCompchoice();
    console.log("comp choice:", compChoice);

    if(userChoice===compChoice){
        drawGame();

    }
    else{
        let userwin=true;
        if(userChoice==="scissor" && compChoice==="stone"){
            userwin=false;
        }
        else if(userChoice==="stone" && compChoice==="paper"){
            userwin=false;
        }
        else{
            userwin=true;
        }
        showWinner(userwin,userChoice,compChoice);
    }
};


choices.forEach((choice)=>{
     
    choice.addEventListener("click",() =>{
            
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    })
});

const drawGame=()=>{
    console.log("Game Draw");
    msgcont.innerText="Game Draw, play again!"
    msgcont.style.backgroundColor="yellow";

}
const showWinner=(userWin, compChoice, userChoice)=>{
    if(userWin){
        userScore++;
        userscoree.innerText=userScore;
        msgcont.innerText=`Congrats! You Won, ${userChoice} beats  ${compChoice}`;
        msgcont.style.backgroundColor="green";
        // userScore.innerText+=1;
    }
    else{
        compScore++;
        compscoree.innerText=compScore;
       
        msgcont.innerText=`pheww, you looser,  ${compChoice} beats  ${userChoice}`;
        msgcont.style.backgroundColor="red";
    }
}



