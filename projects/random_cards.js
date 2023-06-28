/**
 * A simple function to randomize
 * DOM elements inside a list
*/
function shuffle(DOMList) {
    var i, j, temp;
    for (i = DOMList.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = DOMList[i];
        DOMList[i] = DOMList[j];
        DOMList[j] = temp;
    }

    return DOMList;
}

// Question codes we want to suffle
let question_codes = ["Q01_A", "Q01_B", "Q01_C", "Q01_D"];
// A list to store the node question cards
let question_cards = [];

// Store the form buttons (Back and Next)
let control_buttons = document.querySelector("body > div > div:nth-child(2) > div > div > form > div.row.pb-5");
// Remove them from the DOM
control_buttons.remove();

// Iterate over the question codes
question_codes.forEach((question_code) => {
    // Get the card of each question code
    let question_card = document.getElementById(`q_${question_code}_card`)
    // Save the reference of the node into the list
    question_cards.push(question_card);
    // Delete it from the DOM
    question_card.remove();
});

// Randomize the question card references
question_cards = shuffle(question_cards);

// Get the reference of the main container that wraps question card
let main_container = document.querySelector("body > div > div:nth-child(2) > div > div > form");

// Iterate over the question_cards
question_cards.forEach((question_card) => {
    // Insert the randomized card into the main container again
    main_container.appendChild(question_card);
});

// Insert the control buttons right after all randomized elements 
main_container.appendChild(control_buttons);