// Loading game to dom before starting game
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn").addEventListener("click", function() );
});



// matching numbers to counties using switch

const county = ["Antrim", "Armagh", "Carlow", "Cavan", "Clare", "Cork", "Donegal", "Down", "Dublin", "Fermanagh", "Galway", "Kerry", "Kildare",
    "Kilkenny", "Laois", "Leitrim", "Limerick", "Londonderry", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon",
    "Sligo", "Tipperary", "Tyrone", "Waterford", "Westmeath", "Wexford", "Wicklow"];

function counties() {
    alert(county[(Math.floor(Math.random() * county.length))]);
}
counties()



function checkAnswer() {

    if (county() = True) {
        alert("correct");
    } else {
        alert("incorrect");
    }
}

function correctAnswer() {

}

function wrongAnswer() {

}

function calculateResult() {
}