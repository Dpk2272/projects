var timer = 60;
var score = 10;
var hitrn = 0; 

function  is(){
    score +=10;
    document.querySelector("#scoreval").textcontent = score; 
}

function getnewhit(){
    hitrn= Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent= hitrn;
}

function makeBubble(){  
    var clutter ="";

for(var i = 1; i<=60;i++){
     hitrn = Math.floor(Math.random()*10)

    clutter += `<div class="bubble">${hitrn}</div>`;

}

document.querySelector("#pbot").innerHTML = clutter;
    
}


function runTimer(){
    var timerint = setInterval(function(){
   
        if(timer>0){
            timer--;

            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("pbot"),innerHTML =`<h1> game over</h1>`
        }
  
    },1000);
}
document.querySelector("#pbot")
.addEventListener("click",function(dets) {
    var clickednum=Number(dets.target.textContent) ;
    if(clickednum === hitrn){
        is();   
        makeBubble();
        getnewhit();

    }
    
}) 
runTimer();
makeBubble();
getnewhit();
is();

