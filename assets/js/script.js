// Loading game to dom before starting game
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn").addEventListener("click", counties); 
    document.getElementClass("images").addEventListener("onClick", counties)

});



// matching numbers to counties using switch

const county = ["Antrim", "Armagh", "Carlow", "Cavan", "Clare", "Cork", "Donegal", "Down", "Dublin", "Fermanagh", "Galway", "Kerry", "Kildare",
    "Kilkenny", "Laois", "Leitrim", "Limerick", "Londonderry", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon",
    "Sligo", "Tipperary", "Tyrone", "Waterford", "Westmeath", "Wexford", "Wicklow"];

function counties() {
       alert(county[(Math.floor(Math.random() * county.length))]) 
    };

function onClick() {
      if (image === counties) {
   }
}

function checkAnswer() {
    if (image == counties) {
        alert("correct");
    } else {
       alert("Please try again, This is counties()");
    }
}

function correctAnswer() {
    let correct = correct++;
    let total = 32;
    alert(correct, total);
    };
