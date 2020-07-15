document.getElementById("myheader").innerHTML = "I understand javascript";
document.getElementById("changetext").addEventListener("click", function () {
    document.getElementById("changetext").innerHTML = "Event listeners are cool!";
  });
document.getElementById("myparagraph").style.textAlign = "center";
document.getElementById("myparagraph").style.color = "lightblue";
console.log("I understand how to log");
document.getElementById("sendalert").addEventListener("click", function () {
  alert("I understand alerts");
  document.getElementById("changeimage").addEventListener("click", function (){
    document.getElementById("myImage").src = "https://secure.img1-fg.wfcdn.com/im/02238154/compr-r85/8470/84707680/pokemon-pikachu-wall-decal.jpg";
  });