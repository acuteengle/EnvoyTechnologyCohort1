doucument.getElementById("myHeader").innerHTML = "I understand Javascript";
document .getElementById("myParagraph").style.textAlign =  "center";
document .getElementById("myParagraph").style.textColor =  "lightblue";

doucument.getElementById("changeText").addEventListener("click", function() {
    doucument.getElementById("myHeader").innerHTML = "Event Listeners Are Cool!";
});

doucument.getElementById("sendAlert").addEventListener("click", function() {
    alert("I understand alerts!");
});
doucument.getElementById("changeImage").addEventListener("click", function() {
    document.getElementById("funImage").
});