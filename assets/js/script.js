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
    var image2 = "Antrim";
    var image3 = "Armagh";
    var image4 = "Carlow";
    var image5 = "Cavan";
    var image6 = "Clare"; 
    var image7 = "Cork"; 
    var image8 = "Donegal"; 
    var image9 = "Down";
    var image10 = "Dublin";
    var image11 = "Fermanagh";
    var image12 = "Galway";
    var image13 = "Kerry";
    var image14 = "Kildare";
    var image15 = "Kilkenny";
    var image16 = "Laois";
    var image17 = "Leitrim";
    var image18 = "Limerick";
    var image29 = "Londonderry";
    var image20 = "Longford";
    var image21 = "Louth";
    var image22 = "Mayo";
    var image23 = "Meath";
    var image24 = "Monaghan";
    var image25 = "Offaly";
    var image26 = "Roscommon";
    var image27 = "Sligo";
    var image28 = "Tipperary";
    var image39 = "Tyrone";
    var image30 = "Waterford";
    var image31 = "westmeath";
    var image32 = "Wexford"; 
    var image33 = "image33";
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
