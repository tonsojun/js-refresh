/*

1. Getting weapons ready for the soldiers

create a function called prepareWeapons() with a console.log inside that displays:  "Looks like you need your axe.  I'll get it ready for you."

and call that function in your code. 

*/

/*
Displaying different weapons

update the previous function to accept an argument called weapon

then use that weapon in the console lne like this: "Looks like you need your [weapon].  Ill get it ready for you!"
"Looks like you need your sword. I'll get it ready for you!"

*/

/*

now add a prompt() to ask the use what they need. 

then call the function using what they typed in as the argument. 

*/
let weapon = prompt("What weapon do you need?")

function prepareWeapons(weapon) {
    console.log("Looks like you need your " + weapon + ".  I'll get it ready for you.");
}

prepareWeapons(weapon);


/*

Special preparation for battle hammers

if the usre enters hammer, display the following lines:
1. Battle hammer requested
2. Factory notified.
3. Your item will arrive in 3-5 business days. 

If they enter anything else, show the usual mesage like before. 

*/

/*

Moving hammer code into its own function

create a separate function called prepareHammer()

move the three hammer-related console.log() lines into that function

then, instead of having those three lines inside prepareWeapons() just call prepareHammer()

The code should still work the same:

if the user asks for a hammer they should see those three lines

if they ask for anything else they should see the usual message. 
*/