
var randomNumber1= Math.floor(Math.random() * 6) + 1; //1-6

var ranndomDiceimg = "dice" + randomNumber1 + ".png";//dice.png - dice6.png

var ranndomDiceimgsource = "Images/" +ranndomDiceimg; // images/dice.png - dice6.png

var image1 =document.querySelectorAll("img")[0];

image1.setAttribute("src",ranndomDiceimgsource);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var ranndomDiceimgsource2 = "Images/dice" + randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src",ranndomDiceimgsource2);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
  document.querySelector("h1").innerHtml = "Draw";
}
