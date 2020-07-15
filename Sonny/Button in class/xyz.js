document.getElementById("giveText").innerHTML = "I now have text";
document.getElementById("giveText").style.backgroundColor = "gold";
document.getElementById("giveText").style.fontSize = "50px";

document.getElementById("myFirstButton").addEventListener("click", function () {
  document.getElementById("myParagraph").innerHTML = "My text is different now";
  document.getElementById("myParagraph").style.color = "green";
});

document.getElementById("sendAlert").addEventListener("click", function () {
  alert("This is an alert that will pop up and stop the user");
});

document.getElementById("sendLog").addEventListener("click", function () {
  console.log("hello");
  /*
  fdafdsfdsafdsf
  
  fdafds
  */
  console.log("I made it here");
});

document.getElementById("overwrite").addEventListener("click", function () {
  document.write("I have overwritten the webpage");
});

document.getElementById("otherEvents").addEventListener("mouseover", function (){
  document.getElementById("printHere").innerHTML = "Moused over! <br/>";
});

document.getElementById("otherEvents").addEventListener("click", function (){
  document.getElementById("printHere").innerHTML = "I was clicked! <br/>";
});

document.getElementById("otherEvents").addEventListener("mouseout", function (){
  document.getElementById("printHere").innerHTML = "Moused out! <br/>";
});

document.getElementById("picture").addEventListener("click", function (){
  document.getElementById("myImage").src = "https://www.nba.com/images/cms/2020-03/michael-jordan-iso-archive-blazers.jpg?cw=1920&w=2051&x=96&ch=1080&h=1367&y=251";
});

document.getElementById("gif").addEventListener("click", function (){
  document.getElementById("myImage").src = "https://media.giphy.com/media/l46CqLVMWzaJUFPLW/giphy.gif";
});