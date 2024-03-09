// Loading game to dom before starting game
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("button") === "start") {

                alert(county());
            }
        })
    }
})

// selecting county using math random
function randomNumber(min, max) {
    min = Math.ceil(1);
    max = Math.floor(32);
    return Math.floor(Math.random() * (max - min)) + 32;
}

// matching numbers to counties using switch
function county() {
    const counties = ["Antrim", "Armagh", "Carlow", "Cavan", "Clare", "Cork", "Donegal", "Down", "Dublin", "Fermanagh", "Galway", "Kerry", "Kildare",
        "Kilkenny", "Laois", "Leitrim", "Limerick", "Londonderry", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon",
        "Sligo", "Tipperary", "Tyrone", "Waterford", "Westmeath", "Wexford", "Wicklow"];
    console.log(county());
    }

function checkAnswer() {
  if (county() = True) {
    alert("correct");
 } else{
    alert("incorrect");
 }
}

function correctAnswer() {

}

function wrongAnswer() {

}

function calculateResult() {
}