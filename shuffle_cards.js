function shuffle_cards() {
    let form = document.querySelector("form[name='p']");
    let cards = Array.from(document.querySelectorAll(".question.card"));
    let action_buttons = document.querySelector("form[name='p'] > div.row.pb-5");

    // Remove all cards from the UI
    cards.forEach((card) => {
        card.remove();
    });

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i

            // Swap elements at i and j
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    // Shuffle cards
    shuffleArray(cards);

    // Remove action buttons
    action_buttons.remove();
    // Insert shuffled cards into the form
    form.append(...cards);
    // Append the action buttons at the end of the form
    form.append(action_buttons);
}

shuffle_cards();