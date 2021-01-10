// document.querySelector("button").addEventListener("click", clickedd);
//
// function clickedd(){
//   alert("I got clicked");
// }

var clickedd = document.querySelectorAll("button");
for(var i=0; i < clickedd.length;i++){
  clickedd[i].addEventListener("click", function (){
    var innerhtml = this.innerHTML;

    makesound(innerhtml)
    addbuttonanimation(innerhtml);
  })
}

function makesound(key){

  switch (key) {

    case "w":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

    case "j":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

    case "k":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;

    case "l":
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;

    default: console.log(innerhtml);

  }
}

document.addEventListener("keydown", function(event){
  makesound(event.key);
  addbuttonanimation(event.key)
})
// var clickedd = document.querySelectorAll("button").length;
// for(var i=0;i<clickedd; i++){
//   let t = i;
//   document.querySelectorAll("button")[i].addEventListener("click", function (){
//     alert(t + " I got clicked");
//   })
// }


function addbuttonanimation(keyy){

var activebutton = document.querySelector("."+ keyy);
// document.querySelector("."+ keyy).classList.add(".pressed")

activebutton.classList.add("pressed");

setTimeout(function(){
  activebutton.classList.remove("pressed")
},100);

}
