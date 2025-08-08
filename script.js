console.log("Hello world")

let comp=getComputerChoice();
let user=getUserChoice();

function getComputerChoice(){
let choice =Math.floor(Math.random() *3)
   if(choice===0){
    return "rock";
   }
  else if(choice===1){
    return "paper";
   }
  else if(choice===2) {
     return "scissor"
   }

}

function getUserChoice(){
    const prompt = require('prompt-sync')();
    let UserChoice=prompt("please enter rock paper or scissor: ");
    return UserChoice;
}
if(comp==="rock" && user==="scissor"){
     console.log("computer chose " + comp +"\n computer wins");
}
else if(comp==="scissor" && user==="paper"){
    console.log("computer chose " + comp +"\n computer wins");
}
else if(user==="rock" && comp==="scissor"){
     console.log("computer chose " + comp +"\n User wins");
}
else if(user==="scissor" && comp==="paper"){
    console.log("computer chose " + comp +" \n User wins");
}
else{
    console.log("computer chose " + comp + "\n Its draw");
}