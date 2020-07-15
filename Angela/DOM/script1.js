document.getElementById("myHeader").innerHTML="I understand Javascript";                //makes the header say "I understand Javascript!"

document.getElementById("changeText").addEventListener("click", function(){             //changes the text when button is clicked
    document.getElementById("myHeader").innerHTML="Event Listeners are cool!";
});

document.getElementById("myParagraph").style.textAlign="center";                        //aligns the p
document.getElementById("myParagraph").style.color="lightblue";                         //makes the p lightblue

console.log("I understand how to log");                                                 //console logs

document.getElementById("sendAlert").addEventListener("click", function(){
    alert("I understand alerts!");                                                      //creates an alert
});

document.getElementById("changeImage").addEventListener("click", function(){
    document.getElementById("funImage").src="https://secure.img1-fg.wfcdn.com/im/02238154/compr-r85/8470/84707680/pokemon-pikachu-wall-decal.jpg";
});