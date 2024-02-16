let answer=document.getElementById("answer");
let buttonNext=document.getElementById("next");
let box=document.querySelector("#box");
let buttonStart=document.getElementById("start");


buttonNext.addEventListener("click",correct);
buttonStart.addEventListener("click",reveal);

function correct() {
    if (answer.value!="") {
        if (answer.value=="Nairobi"||answer.value=="nairobi") {
            alert("correct");
        }else{
            alert("incorrect");
        }
    }else{
        alert("fill in the blank")
    }
  
}

function reveal() {
  
    buttonStart.style.display='none';
    box.style.backgroundColor='blueviolet';
    box.style.color='white';
    buttonNext.style.backgroundColor='black';
    buttonNext.style.color='white';
    
}
