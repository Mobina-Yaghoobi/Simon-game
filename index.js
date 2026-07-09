
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

function userClick(){

    for (var i = 0; i < document.querySelectorAll(".item").length; i++){

    document.querySelectorAll(".item")[i].addEventListener("click", function(){
        
         
         displayRelatedToEach(this);
         soundRelatedToEach(this.id);
         return (this.id);
        
    });
}
}



function randomNumber(){
  return Math.floor(Math.random() * 4);
}

function computerRandomMove(RandomNum){
     switch (RandomNum) {
    case 0:
        SoundRelatedToEach("green");
        var greenBox = document.querySelector("#green");
        greenBox.classList.add("pressed");
        setTimeout(function(){
            greenBox.classList.remove("pressed");
            }, 100);
            return "green";
      break;

    case 1:
         SoundRelatedToEach("red");
        var redBox = document.querySelector("#red");
        redBox.classList.add("pressed");
        setTimeout(function(){
            redBox.classList.remove("pressed");
            }, 100); 
            return"red";      
      break;

    case 2:
        SoundRelatedToEach("yellow");
        var yellowBox = document.querySelector("#yellow");
        yellowBox.classList.add("pressed");
        setTimeout(function(){
            yellowBox.classList.remove("pressed");
            }, 100);
            return "yellow";
      break;

    case 3:
        SoundRelatedToEach("purple");
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
  
  // computerRandomMove(randomNumber());



function computerMoveRecord(){
   var computerBoxes = [];
   computerBox.push(computerRandomMove(randomNumber()));
   return computerBoxes;
  }
 
function userMoveRecord(){
  var userBoxes = [];
  userBoxes.push(userClick());
  return userBoxes;
}

function levelUp(){
  level = 0;
  do{
    level++;
    document.querySelector("h1").innerHTML = "level" + String(level);
    for(var i = 0; i < level; i++){
      computerMoveRecord();
    }
    userMoveRecord();
   
  }while(computerMoveRecord() === userMoveRecord());
}

function gameOver(){
  // if(computerMoveRecord() !== userMoveRecord()){
    document.querySelector("h1").innerHTML = "Game Over, Press  Any Key to Restart";
    document.body.style.backgroundColor = "red";
    setTimeout(function(){
      document.body.style.backgroundColor = "#001233";
    }, 200);
    var gameOverSound = new Audio("./sounds/poppop.ai - game over audio");
    gameOverSound.play();

  }
// }

gameOver();








