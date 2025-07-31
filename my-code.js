//add prompt to ask how many tools they have. Convert the result to anumber using Number()

//then add another prompt to ask how much food they're carrying.  Convet that one to a number too.

//Next, create a variable called total that adds the number of tools and food.

//Finally, show a summary in the console like this: "You have 8 items in total"

let toolsNumberString = prompt("How many tools do you have?");
let toolsNumber = Number(toolsNumberString);

let foodNumberString = prompt("How much food are you carrying?");
let foodNumber = Number(foodNumberString);

let total = (toolsNumber + foodNumber);

console.log("You have " + total + " items in total.");

