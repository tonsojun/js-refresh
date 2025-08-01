let myButton = document.getElementById("help-button");
myButton.addEventListener("click", buttonClicked);

function buttonClicked() {
    console.log("Thanks for your help, human!");

    let newPElement = document.createElement("p");
    newPElement.innerHTML = "This is a new paragraph element";

    document.body.appendChild(newPElement);

    let newImageElement = document.createElement("img");
    newImageElement.src = "gnome-warrior.webp";

    document.body.appendChild(newImageElement);

}

function buildHouses () {
    let houses = prompt("How many houses do you want?");

    for (let i = 0; i < houses; i++) {
        if (i < 5) {
            console.log("Big house " + i + " built!");
        } else {
            console.log("Small house " + i + " built!");
        }

    }
}

buildHouses()

function buildStables () {
    let stables = prompt("How many stables do you want?");
    let stablesNumber = Number(stables);
    
    for (let i = 0; i < stablesNumber; i++) {
        console.log("Stable built!");
    }
}

buildStables()
