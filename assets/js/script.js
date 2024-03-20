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
    var image =["image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12", "image13", "image14", "image15", "image16",
"image17", "image18", "image19", "image20", "image21", "image22", "image23", "image24", "image25", "image26", "image27", "image28", "image29", "image30", "image31", "image32", "image33"];
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
