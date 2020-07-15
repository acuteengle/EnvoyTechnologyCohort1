document.getElementById("myHeader").innerHTML="I understand Javascript";

document.getElementById("clickMe").addEventListener("click", function () {
    document.getElementById("myHeader").innerHTML="Event Listeners are cool";
})
document.getElementById("myParagraph").style.textAlign = "center";
document.getElementById("myParagraph").style.color = "lightblue";
console.log("I understand how to log");
document.getElementById("sendAlert").addEventListener("click", function () {
    alert("I understand Alerts")
})
document.getElementById("changeImage").addEventListener("click", function () {
    document.getElementById("funImage").src = "https://envoys.com/wp-content/uploads/2019/08/Envoys-Logo.png"
})



