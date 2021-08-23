let images = ["pics/d1.png",
"pics/d2.png",
"pics/d3.png",
"pics/d4.png",
"pics/d5.png",
"pics/d6.png",
"pics/d7.png",
"pics/d8.png",
"pics/d9.png",
"pics/d10.png",
"pics/d11.png",
"pics/d12.png",
"pics/d13.png",
"pics/d14.png",
"pics/d15.png",
"pics/d16.png",
"pics/d17.png",
"pics/d18.png",
"pics/d19.png",
"pics/d20.png"];
let dice =  document.querySelectorAll("p")

function roll(){
  dice.forEach(function(die){
    die.classList.add("shake");
  });
  setTimeout(function(){
    dice.forEach(function(die){
      die.classList.remove("shake");

    });
    let dieOneValue = Math.floor(Math.random()*20)
    ;

    console.log(dieOneValue);

    document.querySelector("#die-1").setAttribute
    ("src", images[dieOneValue]);
    
    
  let result
  if (dieOneValue > 18) {
    result = document.querySelector("#total").innerHTML =
    "AMAZING!!!";
  } 
  
  else if (dieOneValue < 1) {
    result = document.querySelector("#total").innerHTML =
    "NOOOOOOOOOOOOOOOOOOOO!!!";}
  
  else {result = document.querySelector("#total").innerHTML =
    "You have rolled " + (dieOneValue +1);

    }



  },
  1500
  );
}

