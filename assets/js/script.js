// Loading game to dom before starting game
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "start") {
                alert(county());
            }
        }
        }
}
})

// selecting county using math random
function runGame() {
    let county() = Math.floor(Math.random() * 32) + 1;
}

// matching numbers to counties using switch
switch (numbers) {
    case 1:
        county = "Antrim";
        break;
    case 2:
        county = "Armagh";
        break;
    case 3:
        county = "Carlow";
        break;
    case 4:
        county = "Cavan";
        break;
    case 5:
        county = "Clare";
        break;
    case 6:
        county = "Cork"; 
        break;
    case 7:
        county = "Donegal"; 
        break;
    case 8:
        county = "Down";
        break;
    case 9:
        county = "Dublin";
        break;
    case 10:
        county = "Fermanagh";
        break;
    case 11:
        county = "Galway";
        break;
    case 12:
        county = "Kerry";
        break; 
    case 13:
        county = "Kildare";
        break;
    case 14:
        county = "Kilkenny";
        break;
    case 15:
        county = "Laois";
        break;
    case 16:
        county = "Leitrim";
        break;
    case 17:
        county = "Limerick";
        break;
    case 18:
        county = "Londonderry";
        break;
    case 19:
        county = "Longford";
        break;
    case 20:
        county = "Louth";
        break;
    case 21:
        county = "Mayo";
        break;
    case 22:
        county = "Meath";
        break;
    case 23:
        county = "Monaghan";
        break;
    case 24:
        county = "Offaly";
        break;
    case 25:
        county = "Roscommon";
        break;
    case 26:
        county = "Sligo";
        break;
    case 27:
        county = "Tipperary";
        break;
    case 28:
        county = "Tyrone";
        break;
    case 29:
        county = "Waterford";
        break;
    case 30:
        county = "Westmeath";
        break;
    case 31:
        county = "Wexford";
        break;
    case 32:
        county = "Wicklow";
        break;
}

function checkAnswer() {

}

function correctAnswer() {

}

function wrongAnswer() {

}

function calculateResult() {

}