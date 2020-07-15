document.getElementById("myHeader").innerHTML = "I understand Javascript";

document.getElementById("myParagraph").style.textAlign = "center";
document.getElementById("myParagraph").style.backgroundColor = "lightblue";

console.log("I understand how to log")

document.getElementById("changeText").addEventListener("click", function () {
    document.getElementById("myHeader").innerHTML = "Event Listeners are cool!";
  });
  document.getElementById("sendAlert").addEventListener("click", function () {
    alert("I understand alerts!");
  });

