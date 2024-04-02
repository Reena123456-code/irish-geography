// Loading game to dom before starting game
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn").addEventListener("click", counties);
});

// matching numbers to counties using switch

const county = ["Antrim", "Armagh", "Carlow", "Cavan", "Clare", "Cork", "Donegal", "Down", "Dublin", "Fermanagh", "Galway", "Kerry", "Kildare",
    "Kilkenny", "Laois", "Leitrim", "Limerick", "Londonderry", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon",
    "Sligo", "Tipperary", "Tyrone", "Waterford", "Westmeath", "Wexford", "Wicklow"];

function counties() {
    alert(county[(Math.floor(Math.random() * county.length))])
}

const image = {
    "Antrim": image2, "Armagh": image3, "Carlow": image4, "Cavan": image5, "Clare": image6, "Cork": image7, "Donegal": image8, "Down": image9, "Dublin": image10,
    "Fermanagh": image11, "Galway": image12, "Kerry": image13, "Kildare": image14, "Kilkenny": image15, "Laois": image16, "Leitrim": image17, "Limerick": image18,
    "Londonderry": image19, "Longford": image20, "Louth": image21, "Mayo": image22, "Meath": image23, "Monaghan": image24,
    "Offaly": image25, "Roscommon": image26, "Sligo": image27, "Tipperary": image28, "Tyrone": image29,
    "Waterford": image30, "Westmeath": image31, "Wexford": image32, "Wicklow": image33
};

function mouseDown() {
   document.getElementById("parent").style.color="blue";
};

function Answer() {
    if (image == county) {
        alert("correct");
        image.style.backgroundColor = green;
    } else {
        alert("incorrect", county);
        image.style.backgroundColor = orange;
    } elseif (image != county) 
        alert("incorrect", county);
        image.style.backgroundColor = red;
        return counties();
    };


function score() {
    let correct = correct++;
    let total = 32;
    alert(correct, total);
}
