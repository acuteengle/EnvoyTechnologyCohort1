document.getElementById("myheader").innerHTML = "I understand Javascript";

document.getElementById("changeText").addEventListener("click" , function() {
    document.getElementById("myheader").innerHTML = "Event Listeners are cool";
}); 

document.getElementById("myParagraph").style.margin = "auto";
document.getElementById("myParagraph").style.color = "lightblue";

console.log("I understand how to log");

document.getElementById("sendAlert").addEventListener("click" , function() {
    alert("I understand alerts!");
}); 

document.getElementById("changeImage").addEventListener("click" , function() {
    document.getElementById("funIMG").src = "https://envoys.com/wp-content/uploads/2019/08/Envoys-Logo.png";
}); 