// Creating inputs, button and display
let inputTotal = document.createElement("input");
let inputPayed = document.createElement("input");
let button = document.createElement("button");
let display = document.createElement("div");

// Appending elements to body
document.body.appendChild(inputTotal);
document.body.appendChild(inputPayed);
document.body.appendChild(button);
document.body.appendChild(display);

inputTotal.placeholder = "Amount you owe";
inputPayed.placeholder = "Amount you give cashier";
button.textContent = "Calculate change";

// Eventlistener for input
button.addEventListener("click", function (e) {
	let total = inputTotal.value;
	let payed = inputPayed.value;
	howMuchChange(total, payed);

})

// Array of denominations for the function
const values = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

// howMuchChange(50, 500);

// Function that calculates how much change, and how many of each denomination
function howMuchChange(total, payed) {
	// Emptying the DOM
	display.innerHTML = "";
	inputPayed.value = "";
	inputTotal.value = "";

	// Declaring the change object array
	let change = {};

	// Declaring what the difference is between total and payed
	let difference = payed - total;
	display.insertAdjacentHTML("afterbegin", `<p>Du ska få tillbaka <strong>${difference} kr</strong> i följande valörer</p>`);
	console.log("difference at start:", difference);

	// Looping through all of the denominations
	for (let i = 0; i < values.length; i++) {
		// Saving each denomination as "value"
		let value = values[i];
		// If the value is less or equal to the difference
		if (value <= difference) {
			// Add number of denominations to change object array
			change[value] = Math.floor(difference / value);
			console.log(difference/value);
			// difference -= values[i] * change[value];

			// Set difference to the new value of the remainder of difference%value
			difference = difference % value;
			console.log("difference:", difference);
			console.log("values[i]:", values[i]);
			console.log("change[value]:", change[value]);
			display.insertAdjacentHTML("beforeend", `<p><strong>${value} kr</strong> : ${change[value]} st</p>`);
		}
	}
	display.insertAdjacentHTML("afterbegin", `<p>Du betalade: <strong>${payed} kr</strong></p>`);
	display.insertAdjacentHTML("afterbegin", `<p>Total summa att betala: <strong>${total} kr</strong></p>`);
	console.log("change:", change);
}

// Working function to show how much change of each denomination
// function howMuchChange(total, payed) {
//     let result = {};
//     let difference = payed - total;
//     console.log(difference);
//    for (let i = 0; i < values.length; i++) {
//        let value = values[i];

//        if (value <= difference) {
//             result[value] = Math.floor(difference / value);
//             difference -= value * result[value];
//        }
//    }
//     console.log(result);
// }

// Skapa en funktion som tar 2 st parametrar. Hur mycket som skall betalas, samt med vilken valör som betalats. 

// Sedan skall funktionen returnera hur mcyket växel som skall lämnas tillbaks. 

// Tex skall jag betala 321 kr och betalar med 500 kr så skall jag få tillbaks

// 179 kr eller

// 1 st 100 kr sedel

// 3 st 20 kr sedlar

// 1 st tio mynt

// 1 st femkronor

// 2 st tvåkronor. 



// Tips: Kolla på javascriptens Modulus operator som räknar ut vad som blir kvar efter att ett värde delats med ett annat värde
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder