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
    for (let i = 0; i < 6; i++) {
        console.log("House built!");
    }
}

buildHouses()