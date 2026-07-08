
function SoundRelatedToEach(BoxColor){
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




function ClickResponse(){

    for (var i = 0; i < document.querySelectorAll(".item").length; i++){

    document.querySelectorAll(".item")[i].addEventListener("click", function(){
        
         this.classList.add("pressed");
         var thiss = this;
         setTimeout(function(){
            thiss.classList.remove("pressed");
         }, 100);
        
         SoundRelatedToEach(this.id);
        
    });
}
}

ClickResponse();






