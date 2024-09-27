console.log("hi");

function getComputerChoice(){
    let a=Math.random()*100;
    if(a>=0 && a<34){
        return "rock";
    }else if(a>=34 && a<67){
        return "paper";
    }else{
        return "scissors";
    }
}



let humanscore=0;
let comscore=0;
const res=document.querySelector(".results");


function playround(humanchoice){
    const ele=document.createElement("p");
    let comchoice=getComputerChoice();
    if(humanchoice==comchoice){

    }else if(humanchoice=="rock"){
        if(comchoice=="paper"){
            comscore++;
        }else{
            humanscore++;
        }
    }else if(humanchoice=="paper"){
        if(comchoice=="scissors"){
            comscore++;
        }else{
            humanscore++;
           
        }
    }else{
        if(comchoice=="rock"){
            comscore++;
            
        }else{
            humanscore++;
            
        }
    }
    ele.innerHTML="Human: "+humanscore+" points"+"\nCom: "+comscore+" points";
    res.appendChild(ele);
    if(humanscore===5 || comscore===5){
        const ele1=document.createElement("p");
        if(humanscore===5){
                ele1.innerHTML="YAY! you won";
        }
        if(comscore===5){
                ele1.innerHTML="Seems like you lost! better luck next time!";
        }
        res.appendChild(ele1);
        humanscore=0;
        comscore=0;
    }
}



const btn=document.querySelector(".hc");

btn.addEventListener("click" , (event) => {
    let hc=event.target;
    if(hc.value===undefined){
        alert("please click on the buttons visible on screen to make the choice.");
        return
    }
    let hcv=hc.value;
    playround(hcv);
})


