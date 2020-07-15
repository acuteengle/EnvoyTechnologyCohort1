document.getElementById("myHeader").innerHTML = "I understand Javascript.";
document.getElementById("changeText").addEventListener("click", function() {
    document.getElementById("myHeader").innerHTML = "Event Listeners Are Cool!";
})
document.getElementById("myParagraph").style.textAlign = "center";
document.getElementById("myParagraph").style.color = "lightblue";
console.log("I understand how to log.")
document.getElementById("sendAlert").addEventListener("click", function() {
    alert("I understand alerts!")
})
document.getElementById("changeImage").addEventListener("click", function() {
    document.getElementById("funImage").src = "https://media.giphy.com/media/l46CqLVMWzaJUFPLW/giphy.gif";
})