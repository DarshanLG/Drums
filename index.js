///Getting all buttons into  the loop to get functionality applied to it all together.

var numberofbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofbuttons; i++) {

/// Detecting Mouse clicks!!!

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var btninnerHtml = this.innerHTML;
     sound(btninnerHtml);
     btn_animation(btninnerHtml);
  });
}

 /// Detecting Keyboard clicks!!!

  document.addEventListener("keypress", function(event) {
    sound(event.key);
    btn_animation(event.key);
  });

///Playing Audion when the function sound is called back

function sound(key) {
    switch (key) {
      case "w":
       var tom1 = new Audio ("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
      var tom2 = new Audio ("sounds/tom-2.mp3");
       tom2.play();
        break;

      case "s":
      var tom3 = new Audio ("sounds/tom-3.mp3");
       tom3.play();
      break;

      case "d":
      var tom4 = new Audio ("sounds/tom-4.mp3");
      tom4.play();
      break;

      case "j":
      var crash = new Audio ("sounds/crash.mp3");
       crash.play();
        break;

      case "k":
      var kick = new Audio ("sounds/kick-bass.mp3");
       kick.play();
        break;

      case "l":
      var snare = new Audio ("sounds/snare.mp3");
       snare.play();
        break;

      default: console.log(innerHtml)
  }
}

///Adding Animation to the buttons to look nice.

function btn_animation(currentkey) {
   var animation = document.querySelector("." + currentkey);
   animation.classList.add("pressed");

///This is to remove the clas presses from the button and make it back to normal.

   setTimeout(function(){
     animation.classList.remove("pressed");
   }, 100);
}
