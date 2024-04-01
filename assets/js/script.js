// Loading game to dom before starting game
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn").addEventListener("click", counties);
    /*document.getElementClass("parent").Event("Click", image).innerHTML.county;
    image.addEventListener("click", );*/
});



// matching numbers to counties using switch

const county = ["Antrim", "Armagh", "Carlow", "Cavan", "Clare", "Cork", "Donegal", "Down", "Dublin", "Fermanagh", "Galway", "Kerry", "Kildare",
    "Kilkenny", "Laois", "Leitrim", "Limerick", "Londonderry", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon",
    "Sligo", "Tipperary", "Tyrone", "Waterford", "Westmeath", "Wexford", "Wicklow"];

function counties() {
    alert(county[(Math.floor(Math.random() * county.length))])
};
const image ={"image2": Antrim, "image3": Armagh, "image4": Carlow, "image5": Cavan, "image6": Clare, "image7": Cork, "image8": Donegal,
"image9": Down, "image10": Dublin, "image11": Fermanagh, "image12": Galway, "image13": Kerry, "image14": Kildare, "image15": Kilkenny, "image16": Laois,"image17": Leitrim, "image18": Limerick,
"image29": Londonderry, "image20": Longford, "image21": Louth, "image22": Mayo, "image23": Meath, "image24": Monaghan,
"image25": Offaly, "image26": Roscommon, "image27": Sligo, "image28": Tipperary, "image29": Tyrone,
"image30": Waterford, "image31": Westmeath, "image32": Wexford,
"image33": Wicklow};

function onclick() {
    image.onclick = function(Answer)
};

function Answer() {
    if (image == county) {
        alert("correct");
        image.style.backgroundColor = green;
    } else {
        alert("incorrect, county");
        image.style.backgroundColor = orange;

   return counties();     
    }
}
    
function score() {
    let correct = correct++;
    let total = 32;
    alert(correct, total);
}
