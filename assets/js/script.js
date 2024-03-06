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
    return Math.floor(Math.random() * (max - min)) + min;
}

// matching numbers to counties using switch
function countyName(county1, num) {
    let county = {
        Antrim: 1,
        Armagh: 2,
        Carlow: 3,
        Cavan: 4,
        Clare: 5,
        Cork: 6,
        Donegal: 7,
        Down: 8,
        Dublin: 9,
        Fermanagh: 10,
        Galway: 11,
        Kerry: 12,
        Kildare: 13,
        Kilkenny: 14,
        Laois: 15,
        Leitrim: 16,
        Limerick: 17,
        Londonderry: 18,
        Longford: 19,
        Louth: 20, 
        Mayo: 21,
        Meath: 22,
        Monaghan: 23,
        Offaly: 24,
        Roscommon:25,
        Sligo :26,
        Tipperary: 27,
        Tyrone: 28,
        Waterford: 29,
        Westmeath: 30,
        Wexford: 31,
        Wicklow: 32,
    }
    return county;
}
console.log(countyName);


function checkAnswer() {

}

function correctAnswer() {

}

function wrongAnswer() {

}

function calculateResult() {

}