console.log('Hello World!');
guess= document.getElementById('userGuess');
computer=document.getElementById('computerGuess');
checkBtn = document.getElementById("check");
playBtn = document.getElementById('play');
guess.value = guess.onInput;
myGuess = guess.value;
function number(){
   values = Math.floor(Math.random()*10);
   computer.value=values;
  }
/*function show(){
computer.value=number;
}*/
playBtn.onclick=number;
function info(){
if(myGuess===computer.value){
  console.log("correct")}
  else{console.log('wrong');
}
  
}
checkBtn.onclick = info;
/*times =checkBtn.onclick.length;
times===3?console.log("Gameover"):console.log("keep Guessing")*/