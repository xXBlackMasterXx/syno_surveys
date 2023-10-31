function maxdiff({ question_code, itemset, card_size, img_height } = {}) {
    // Get the question card
    const question_card = document.querySelector(`#q_${question_code}_card`);
    // Checks if question is found
    if (question_card === null) {
        // If not found, then trigger a message and end the function
        alert(`Error: Question with code ${question_code} was not found!\n\nPro-tip: Please check if you are using the correct question code or have scripted the question`)
        return;
    }

    // Hide the matrix question
    question_card.querySelector("table").style.display = "none";

    // Replace all placeholders in headers with the images taken from the itemset
    let headers = Array.from(question_card.querySelectorAll("table > thead > tr > th"));
    let images = Array.from(response.answers.filter(answer => answer.questionCode == itemset)).map((answer) => answer.value);

    if (headers.length != images.length){
        alert(`Error: The number of columns in matrix ${question_code} (${headers.length}) do not correspond to the number of images in ${itemset} (${itemset.length})!\n\nPro-tip:\n* Please check that your your matrix ${question_code} has the same number of columns as textfields in ${itemset}.\n* Make sure that all textfields in ${itemset} are being filled with the URL of the images.`)
    }

    headers.forEach((header, index) => {
        let item_img = document.createElement("img");
        item_img.src = images[index]; 
        header.append(item_img);
    });

    // Get the labels from for the dichotomies.
    let labels = Array.from(question_card.querySelectorAll("table > tbody > tr > th")).map(label_container => {
        return label_container.innerHTML;
    });

    // Get the items to compare
    let items = Array.from(question_card.querySelectorAll("table > thead > tr > th > img")).map(item_container => {
        return item_container.src;
    });

    // Get the column codes of items
    let ids = Array.from(question_card.querySelectorAll("table > tbody > tr:nth-child(1) > td > div > .form-check > input")).map(input => input.id.split("_")[3]);

    let chosen_accepted = null, chosen_rejected = null;

    function onClickButton(button, other_button, card){
        let is_active = button.classList.contains("active");
        let is_accepted = button.classList.contains("accepted");
        
        if(is_active && is_accepted) { // If accepted was selected when button is clicked
            // Remove all indicators that button is selected
            button.classList.remove("active");
            card.classList.remove("border-success");
            card.style.boxShadow = "";
            
            if(chosen_rejected === null) {
                other_button.classList.remove("d-none");
                other_button.classList.add("d-block");
            }

            question_card.querySelector(`.form-check > input[id='p_${question_code}_1_${button.getAttribute("data-id")}']`).checked = false;
            chosen_accepted = null;
            
            // Shows the same category buttons in non-active cards
            question_card.querySelectorAll("button.accepted:not(.active):not(.d-block)").forEach((alternative) => {
                if(alternative.getAttribute("data-id") !== chosen_rejected) {
                    alternative.classList.remove("d-none");
                    alternative.classList.add("d-block");
                }
            });

        } else if(is_active && !is_accepted) { // If rejected was selected when button is clicked
            // Remove all indicators that button is selected
            button.classList.remove("active");
            card.classList.remove("border-danger");
            card.style.boxShadow = "";

            if(chosen_accepted === null){
                other_button.classList.remove("d-none");
                other_button.classList.add("d-block");
            }
            
            question_card.querySelector(`.form-check > input[id='p_${question_code}_2_${button.getAttribute("data-id")}']`).checked = false;
            chosen_rejected = null;

            question_card.querySelectorAll("button.rejected:not(.active):not(.d-block)").forEach((alternative) => {
                if(alternative.getAttribute("data-id") !== chosen_accepted) {
                    alternative.classList.remove("d-none");
                    alternative.classList.add("d-block");
                }
            });

        } else if(!is_active && is_accepted) { // If accepted was released when button is clicked
            // Add all indicators that button is selected
            button.classList.add("active");
            card.classList.add("border-success");
            card.style.boxShadow = "0 2px 20px 0 rgba(36, 201, 96, 0.5)";
            other_button.classList.remove("d-block");
            other_button.classList.add("d-none");

            question_card.querySelector(`.form-check > input[id='p_${question_code}_1_${button.getAttribute("data-id")}']`).checked = true;
            chosen_accepted = button.getAttribute("data-id");

            question_card.querySelectorAll("button.accepted:not(.active):not(.d-none)").forEach((alternative) => {
                if(alternative !== other_button && alternative.getAttribute("data-id") !== chosen_accepted) {
                    alternative.classList.remove("d-block");
                    alternative.classList.add("d-none");
                }
            });

        } else if(!is_active && !is_accepted) { // If rejected was released when button is clicked
            // Add all indicators that button is selected
            button.classList.add("active");
            card.classList.add("border-danger");
            card.style.boxShadow = "0 2px 20px 0 rgba(244, 80, 94, 0.5)";
            other_button.classList.remove("d-block");
            other_button.classList.add("d-none");

            question_card.querySelector(`.form-check > input[id='p_${question_code}_2_${button.getAttribute("data-id")}']`).checked = true;
            chosen_rejected = button.getAttribute("data-id");

            question_card.querySelectorAll("button.rejected:not(.active):not(.d-none)").forEach((alternative) => {
                if(alternative !== other_button && alternative.getAttribute("data-id") !== chosen_rejected) {
                    alternative.classList.remove("d-block");
                    alternative.classList.add("d-none");
                }
            });
        }

        console.log(`chosen accepted: ${chosen_accepted}\tchosen rejected: ${chosen_rejected}`);
    }

    // Create a card for each found item
    let item_cards = items.map((item, index) => {
        // Create the card element
        let card = document.createElement("div");
        card.classList.add("card");

        // Create the card image
        let card_img = document.createElement("img");
        card_img.src = item;
        card_img.style.height = img_height;
        card_img.style.objectFit = "scale-down";
        // card_img.classList.add("card-img-top");
        card_img.classList.add("my-auto");

        // Create the card body
        let card_body = document.createElement("div");
        card_body.classList.add("card-body", "d-flex", "justify-content-center");

        // Create the two dichotomies buttons
        let accept_btn = document.createElement("button");
        let reject_btn = document.createElement("button");

        // Add the button type to avoid the page being submitted
        accept_btn.type = "button";
        reject_btn.type = "button";

        // Add a custom data-id to the button selected corresponding to the item column code 
        accept_btn.setAttribute("data-id", ids[index]);
        reject_btn.setAttribute("data-id", ids[index]);

        // Add Bootstrap classes to the new buttons
        accept_btn.classList.add("btn", "btn-sm", "btn-outline-success", "mr-4", "accepted");
        reject_btn.classList.add("btn", "btn-sm", "btn-outline-danger", "rejected");

        // Insert the labels html into the buttons
        accept_btn.innerHTML = labels[0];
        reject_btn.innerHTML = labels[1];

        accept_btn.addEventListener("click", (e) => {onClickButton(e.target, reject_btn, card)});
        reject_btn.addEventListener("click", (e) => {onClickButton(e.target, accept_btn, card)});

        // Insert into the card body, the accept and reject buttons
        card_body.append(...[accept_btn, reject_btn]);

        // Insert into the card, the card image and card body sections
        card.append(...[card_img, card_body]);
        card.style.minWidth = card_size;
        card.style.maxWidth = card_size;
        card.classList.add("mt-5");

        return card;
    });

    // Create a deck with all the cards created
    let card_deck = document.createElement("div");
    card_deck.classList.add("card-deck", "d-flex", "justify-content-center");

    // Insert the new item cards into card deck
    card_deck.append(...item_cards);

    // Insert the card deck into the question card
    question_card.append(card_deck);

    /* Question Logic */
    let next_btn = document.querySelector("#p_next");
    let lang = navigator.language.substring(0, 2);
    
    next_btn.addEventListener("click", (e) => {
        if(chosen_accepted === null){
            alert(`Please, select an option for ${labels[0]}`);
            e.preventDefault();
        } else if(chosen_rejected === null) {
            alert(`Please, select an option for ${labels[1]}`);
            e.preventDefault();
        }
    });
}

// Change the question code to yours
maxdiff({ question_code: "Q1", itemset : "ITEMSET1", card_size : "350px", img_height : "350px"});
maxdiff({ question_code: "Q2", itemset : "ITEMSET2", card_size : "350px", img_height : "350px"});