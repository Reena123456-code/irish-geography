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
function county(countyName, num) {
    switch (randomNumbernum) {
        case "1":
            alert("Antrim")
            break;
        case "2":
            alert("Armagh")
            break;
        case "3":
            alert("Carlow")
            break;
        case "4":
            alert("Cavan")
            break;
        case "5":
            alert("Clare")
            break;
        case "6":
            alert("Cork")
            break;
        case "7":
           alert("Donegal")
           break;
        case "8":
            alert("Down")
            break;
        case "9":
            alert("Dublin")
            break;
        case "10":
            alert("Fermanagh")
            break;
        case "11":   
            alert("Galway")
            break;
        case "12":
            alert("Kerry")
            break;
        case "13":
            alert("Kildare")
            break;
        case "14":   
            alert("Kilkenny") 
            break;
        case "15":
            alert("Laois")
            break;
        case "16":     
            alert("Leitrim")
            break;
        case "17":    
            alert("Limerick")
            break;
        case "18":    
            alert("Londonderry")
            break;
        case "19":    
            alert("Longford")
            break;
        case "20":    
            alert("Louth")
            break;
        case "21":     
            alert("Mayo")
            break;
        case "22":    
            alert("Meath")
            break;
        case "23":     
            alert("Monaghan")
            break;
        case "24":     
            alert("Offaly")
            break;
        case "25":    
            alert("Roscommon")
            break;
        case "26":    
            alert("Sligo")
            break; 
        case "27":
            alert("Tipperary")
            break;
        case "28":     
            alert("Tyrone")
            break; 
        case "29":
            alert("Waterford")
            break;
        case "30":     
            alert("Westmeath")
            break; 
        case "31":
            alert("Wexford")
            break;
        case "32":
            alert("Wicklow")
            break;
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
}
function wrongAnswer() {

}

function calculateResult() {
}