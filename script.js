
const rock=document.querySelector("#rok");
rock.addEventListener("click", ()=>{comparer(rock.textContent,getComputerChoice())});

const paper =document.querySelector("#pap");
paper.addEventListener("click", ()=>{comparer(paper.textContent,getComputerChoice())});

const scissor=document.querySelector("#sci");
scissor.addEventListener("click", ()=>{comparer(scissor.textContent,getComputerChoice())});

const container = document.querySelector("#container");

let compScore =0;
let userScore=0;
let roundPlayed=0;




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



function comparer (user,comp){

  if(roundPlayed>=5){
    return;
  }
  const div = document.createElement("div"); // move inside comparer


if( user==="scissor"  && comp==="rock" ){
    div.textContent="computer chose " + comp +"\n computer wins";
    container.appendChild(div);
    compScore++
     roundPlayed++


}
else if(user==="scissor" && comp==="paper"){
    div.textContent="computer chose " + comp +" \n User wins";
      container.appendChild(div);
      userScore++
       roundPlayed++
      
}
else if(user==="paper" && comp==="rock"){
    div.textContent="computer chose " + comp +" \n User wins";
      container.appendChild(div);
       userScore++
        roundPlayed++
      
}
else if( user==="paper" && comp==="scissor" ){
div.textContent="computer chose " + comp +"\n computer wins";
  container.appendChild(div);
    compScore++
     roundPlayed++
  
}
else if(user==="rock" && comp==="scissor"){
     div.textContent="computer chose " + comp +"\n User wins";
       container.appendChild(div);
        userScore++
        roundPlayed++
       
}
else if(user==="rock" && comp==="paper"){
    div.textContent="computer chose " + comp +" \n Computer wins";
      container.appendChild(div);
        compScore++
         roundPlayed++
    
}

else{
    div.textContent="computer chose " + comp+ "\n Its draw ";
      container.appendChild(div);
       roundPlayed++
      
}
if(roundPlayed===5){
  if(userScore>compScore){
    div.textContent="Userwins";
     container.appendChild(div);
  }
  else{
    div.textContent="computer wins";
    container.appendChild(div);
  }
}

}






