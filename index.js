// Two random number generator between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// Query selectors which target the images and changing the sources in the html file.
document.querySelector("img.img1").setAttribute("src", "images/dice"+randomNumber1+".png"); 
document.querySelector("img.img2").setAttribute("src", "images/dice"+randomNumber2+".png");
// if-else statements that decides which random number is bigger.
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
document.querySelector("button").onclick = function () {
    window.location.reload();
}
