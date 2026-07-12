
function soundRelatedToEach(BoxColor){
  switch (BoxColor) {
    case "green":
       var greenSound = new Audio("./sounds/muffled-button-click-sound.mp3");
       greenSound.play();
        break;
    case "red":
      var redSound = new Audio("./sounds/button-click-sound.mp3");
       redSound.play();
    break;

     case "yellow":
      var yellowSound = new Audio("./sounds/pressing-a-computer-button.mp3");
       yellowSound.play();
    break;

     case "purple":
      var purpleSound = new Audio("./sounds/a-loud-button-press-sound.mp3");
       purpleSound.play();
    break;
  
    default:
      console.log("error!")
        break;
  }
}

function displayRelatedToEach(Box){

  Box.classList.add("pressed");
         var boxx = Box;
         setTimeout(function(){
            boxx.classList.remove("pressed");
         }, 100);
}


 var userBoxes = [];
function userMoveRecord(theId){
  userBoxes.push(theId);
  return userBoxes;
}


function userClick(){

    for (var i = 0; i < document.querySelectorAll(".item").length; i++){

    document.querySelectorAll(".item")[i].addEventListener("click", function(){
        if(!userCanClick){
          return;
        }
        
        displayRelatedToEach(this);
        soundRelatedToEach(this.id);
        userMoveRecord(this.id);
        checkUserMove();
        
    });
}
}



function randomNumber(){
  return Math.floor(Math.random() * 4);
}


function computerNextMoveRandomColor(RandomNum){
switch (RandomNum) {
  case 0:
    return "green";
  case 1:
    return "red";
  case 2:
    return "yellow";
  case 3:
    return "purple";

  default:
    console.log(RandomNum);
    break;
}
}


var computerBoxes = [];
function computerMoveRecord(){
  var color = computerNextMoveRandomColor(randomNumber());
   computerBoxes.push(color);
   return computerBoxes;
  }

function computerMoveFromScratch(Level){
  userCanClick = false;
for(let i = 0 ; i < Level; i++){
  setTimeout(function(){
    switch(computerBoxes[i]){

    case "green":
      soundRelatedToEach("green");
      var greenBox = document.querySelector("#green");
      greenBox.classList.add("pressed");
      setTimeout(function(){
            greenBox.classList.remove("pressed");
            }, 200);
    break;

    case "red":
      soundRelatedToEach("red");
      var redBox = document.querySelector("#red");
      redBox.classList.add("pressed");
      setTimeout(function(){
             redBox.classList.remove("pressed");
            }, 200); 
    break; 

    case "yellow":
      soundRelatedToEach("yellow");
      var yellowBox = document.querySelector("#yellow");
      yellowBox.classList.add("pressed");
      setTimeout(function(){
            yellowBox.classList.remove("pressed");
            }, 200); 
    break;

    case "purple":
      soundRelatedToEach("purple");
      var purpleBox = document.querySelector("#purple");
      purpleBox.classList.add("pressed");
      setTimeout(function(){
            purpleBox.classList.remove("pressed");
            }, 200);    
    break;   
    default: 
    console.log(computerBoxes[i]);
   
  }
  setTimeout(function(){
   if(i === Level - 1)
    userCanClick = true;
  }, 300)


  }, 500 * i)
    
 
  
}
}
 


function gameOver(){
  
    document.querySelector("h1").innerHTML = "Game Over, Press  Any Key to Restart";
    document.body.style.backgroundColor = "red";
    setTimeout(function(){
      document.body.style.backgroundColor = "#001233";
    }, 500);
    var gameOverSound = new Audio("./sounds/round-not-completed.mp3");
    gameOverSound.play();
    computerBoxes = [];
    userBoxes = [];
    level = 1; 
    gameStarted = false;
     
    
}



function checkUserMove(){
  if(computerBoxes[userBoxes.length -1 ] !== userBoxes[userBoxes.length -1]){
      gameOver();
      return;
  }
  if(userBoxes.length === computerBoxes.length){
    level++;
    document.querySelector("h1").innerHTML = "level" + String(level);
    userBoxes = [];
    setTimeout(function(){
      playTheGame();
    }, 1000);
    
  }
  }
 

var gameStarted = false;
var level = 1; 
function Game(){
  
 document.addEventListener("keydown",function(){

  if(gameStarted == false){
    gameStarted = true;
    playTheGame();
  }
  
});
}
var userCanClick = false;
function playTheGame(){
  document.querySelector("h1").innerHTML = "level" + String(level);
  computerMoveRecord();
  computerMoveFromScratch(level);
  highestLevel();
}

var bestLevel = 0;
function highestLevel(){

  if(level > bestLevel){
    bestLevel = level;
    document.getElementById("record").innerHTML = "Highest Level: " + String(bestLevel);
    localStorage.setItem('bestLevel', bestLevel);
  }
  else{
     document.getElementById("record").innerHTML = "Highest Level: " + String(bestLevel);
  }
  
}


 bestLevel = localStorage.getItem("bestLevel"); 
 highestLevel();
userClick();
  Game();
 





