document.getElementById("myheader").innerHTML = "I understand Javascript";

document.getElementById("changeText").addEventListener("click", function () {
    document.getElementById("myHeader").innerHTML = "Event Listeners are cool!";
});

document.getElementById("myParagraph").innerHTML = "My paragraph";
document.getElementById("myParagraph").style.textAlign = "Center";
document.getElementById("myParagraph").style.color = "light blue";

console.log("I understand how to log");

document.getElementById("sendAlert").addEventListener("click", function () {
    alert("I understand alerts!");
});

document.getElementById("sendAlert").addEventListener("click", function () {
    document.getElementById("myImage").src = "https://envoys.com/wp-content/uploads/2019/08/Envoys-Logo.png";
});