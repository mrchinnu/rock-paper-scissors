console.log("hi");

function getComputerChoice(){
    let a=Math.random()*100;
    console.log(a);
    if(a>=0 && a<34){
        return "rock";
    }else if(a>=34 && a<67){
        return "paper";
    }else{
        return "scissors";
    }
}

function getHumanChoice(){
 let a=window.prompt("Choose 1-rock 2-paper 3-scissors (Enter only the number)");
 if(a==1){
    return "rock";
 }else if(a==2){
    return "paper";
 }else if(a==3){
    return "scissors";
 }else{
    alert("please enter valid options only(1-rock 2-paper 3-scissors)");
   return getHumanChoice();
 }
}

let humanscore=0;
let comscore=0;

function playround(){
    
    let comchoice=getComputerChoice();
    let humanchoice=getHumanChoice();
    if(humanchoice==comchoice){
        console.log("tie");
    }else if(humanchoice=="rock"){
        if(comchoice=="paper"){
            comscore++;
            console.log("You loose.paper beats rock!");
        }else{
            humanscore++;
            console.log("You win.rock beats scissors!");
        }
    }else if(humanchoice=="paper"){
        if(comchoice=="scissors"){
            comscore++;
            console.log("You loose.scissors beats paper!");
        }else{
            humanscore++;
            console.log("You win.paper beats rock!");
        }
    }else{
        if(comchoice=="rock"){
            comscore++;
            console.log("You loose.rock beats scissors!");
        }else{
            humanscore++;
            console.log("You win.scissors beats paper!");
        }
    }
}



playround();

