
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

function computerRandomMove(RandomNum){
     switch (RandomNum) {
    case 0:
        soundRelatedToEach("green");
        var greenBox = document.querySelector("#green");
        greenBox.classList.add("pressed");
        setTimeout(function(){
            greenBox.classList.remove("pressed");
            }, 100);
            return "green";
      break;

    case 1:
         soundRelatedToEach("red");
        var redBox = document.querySelector("#red");
        redBox.classList.add("pressed");
        setTimeout(function(){
            redBox.classList.remove("pressed");
            }, 100); 
            return"red";      
      break;

    case 2:
        soundRelatedToEach("yellow");
        var yellowBox = document.querySelector("#yellow");
        yellowBox.classList.add("pressed");
        setTimeout(function(){
            yellowBox.classList.remove("pressed");
            }, 100);
            return "yellow";
      break;

    case 3:
        soundRelatedToEach("purple");
        var purpleBox = document.querySelector("#purple");
        purpleBox.classList.add("pressed");
        setTimeout(function(){
            purpleBox.classList.remove("pressed");
            }, 100);
            return "purple";
      break;
  
    default:
      console.log(RandomNum);
      break;
  }
}
  


var computerBoxes = [];
function computerMoveRecord(){
   computerBoxes.push(computerRandomMove(randomNumber()));
   return computerBoxes;
  }

function computerMoveFromScratch(Level){
for(var i = 0 ; i < Level; i++){
  setTimeout(function(){
    switch(computerBoxes[i]){
    case "green":
      computerRandomMove(0);
    break;

    case "red":
      computerRandomMove(1);
    break; 

    case "yellow":
      computerRandomMove(2);
    break;

    case "purple":
      computerRandomMove(3);
    break;   
    default: 
    console.log(computerBoxes[i]);
   
  }
  }, 1000);
  
}
}
 


function gameOver(){
  
    document.querySelector("h1").innerHTML = "Game Over, Press  Any Key to Restart";
    document.body.style.backgroundColor = "red";
    setTimeout(function(){
      document.body.style.backgroundColor = "#001233";
    }, 200);
    var gameOverSound = new Audio("./sounds/poppop.ai - game over audio.mp3");
    gameOverSound.play();

}

function totalComparison(computerMove, userMove){

return (JSON.stringify(computerMove) === JSON.stringify(userMove));
}

function checkUserMove(){
      computerLastElement = computerBoxes[computerBoxes.length - 1];
      userLastElement = userBoxes[userBoxes.length - 1];

    if(computerLastElement !== userLastElement)
      {
          return false;
      }
      else{
        true;
      }
    
  }
 


var level = 0; 
function Game(){

  document.addEventListener("click",function(){
     level++;
    document.querySelector("h1").innerHTML = "level" + String(level);
    computerMoveRecord();
    computerMoveFromScratch(level);

  });
}


userClick();
Game();



