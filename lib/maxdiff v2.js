function maxdiff({ question_code, array_filter, card_size, img_height } = {}) {
    // Get the question card
    const question_card = document.querySelector(`#q_${question_code}_card`);
    // Checks if question is found
    if (question_card === null) {
        // If not found, then trigger a message and end the function
        alert(`Error: Question with code ${question_code} was not found!\n\nPro-tip: Please check if you are using the correct question code or have scripted the question`)
        return;
    }

    var matrix_container = question_card.querySelector("table.matrix");
    // Obtener todas las celdas con la clase .form-check
    const formCheckCells = matrix_container.querySelectorAll('.form-check');

    // Crear un objeto para almacenar las opciones de respuesta
    let answer_options = {};

    // Obtener las filas del tbody y del thead
    const tableRows = document.querySelectorAll('tbody tr, thead tr');

    function reverseNodeList(nodeList) {
        var nodeArray = Array.prototype.slice.call(nodeList);
        return nodeArray.reverse();
    }

    var column_codes = [];
    var col_i = 0;
    // Recorrer todas las filas
    reverseNodeList(tableRows).forEach((row, rowIndex) => {
        // Obtener los nodos de columna de la fila
        const colNodes = row.querySelectorAll('th, td');

        // Recorrer las columnas
        colNodes.forEach((colNode, colIndex) => {
            // Si es la primera fila, agregar una nueva propiedad al objeto answer_options
            if (rowIndex === tableRows.length - 1) {
                if (colIndex != 0) {
                    answer_options[0] = answer_options[0] || {};
                    answer_options[0][column_codes[col_i]] = {
                        form_check: null,
                        input: null,
                        rowNode: row,
                        colNode: colNode
                    };
                    col_i++;
                }
            } else {
                // Si no es la primera fila, obtener la celda .form-check de la columna
                const cell = colNode.querySelector('.form-check');

                if (cell) {
                    // Obtener el input de la celda
                    const input = cell.querySelector('input');

                    // Obtener el ID del input y dividirlo en secciones
                    const id = input.id;
                    const idSections = id.split('_');

                    // Obtener el número de fila y de columna
                    const rowId = idSections[2];
                    const col = input.value;

                    // Almacenar los datos en el objeto answer_options
                    answer_options[rowId] = answer_options[rowId] || {};
                    answer_options[rowId][col] = {
                        form_check: cell,
                        input: input,
                        rowNode: row,
                        colNode: colNode
                    };
                    if (rowIndex === 0) {
                        column_codes.push(col);
                    }
                }

            }
        });
    });

    /* ARRAY FILTER */
    if (array_filter !== undefined) {
        if (array_filter["rows"] !== undefined) {
            var filter = [];
            var filter_schema = [];

            response.answers.forEach((answer) => {
                if (answer.questionCode == array_filter["rows"]["filter"]) {
                    filter.push(answer.code);
                }

                if (answer.questionCode == array_filter["rows"]["filter_schema"]) {
                    filter_schema = answer.value.split(",");
                }
            });

            // Iterate over all the rows
            for (let [key, value] of Object.entries(answer_options)) {
                if (array_filter["rows"]["type"] == "inclusive") {
                    if (key != 0 && !filter.includes(key) && filter_schema.includes(key)) {
                        value[Object.keys(value)[0]]["rowNode"].remove();
                    }
                } else if (array_filter["rows"]["type"] == "exclusive") {
                    if (key != 0 && filter.includes(key) && filter_schema.includes(key)) {
                        value[Object.keys(value)[0]]["rowNode"].remove();
                    }
                }
            }
        }

        if (array_filter["columns"] !== undefined) {
            var filter = [];
            var filter_schema = [];

            response.answers.forEach((answer) => {
                if (answer.questionCode == array_filter["columns"]["filter"]) {
                    filter.push(answer.code);
                }

                if (answer.questionCode == array_filter["columns"]["filter_schema"]) {
                    filter_schema = answer.value.split(",");
                }
            });

            for (let [key, value] of Object.entries(answer_options)) {
                if (array_filter["columns"]["type"] == "inclusive") {
                    for (let [key2, value2] of Object.entries(value)) {
                        if (!filter.includes(key2) && filter_schema.includes(key2)) {
                            value2.colNode.remove();
                        }
                    }

                } else if (array_filter["columns"]["type"] == "exclusive") {
                    for (let [key2, value2] of Object.entries(value)) {
                        if (filter.includes(key2) && filter_schema.includes(key2)) {
                            value2.colNode.remove();
                        }
                    }
                }
            }
        }
    }

    // Hide the matrix question
    question_card.querySelector("table").style.display = "none";

    // Get the labels from for the dichotomies.
    let labels = Array.from(question_card.querySelectorAll("table > tbody > tr > th")).map(label_container => {
        return label_container.innerHTML;
    });

    // Get the items to compare
    let items = Array.from(question_card.querySelectorAll("table > thead > tr > th > div"))

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
    }

    // Create a card for each found item
    let item_cards = items.map((item, index) => {
        // Create the card element
        let card = document.createElement("div");
        card.classList.add("card");

        // Create the card body
        let card_body = document.createElement("div");
        card_body.classList.add("card-body");

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
        accept_btn.classList.add("btn", "btn-sm", "btn-outline-success", "mr-3", "accepted");
        reject_btn.classList.add("btn", "btn-sm", "btn-outline-danger", "rejected");

        // Insert the labels html into the buttons
        accept_btn.innerHTML = labels[0];
        reject_btn.innerHTML = labels[1];

        accept_btn.addEventListener("click", (e) => {onClickButton(e.target, reject_btn, card)});
        reject_btn.addEventListener("click", (e) => {onClickButton(e.target, accept_btn, card)});

        let buttons_container = document.createElement("div");
        buttons_container.classList.add("d-flex", "justify-content-center", "row", "mt-5");
        buttons_container.append(...[accept_btn, reject_btn]);

        // Insert into the card body, the accept and reject buttons
        console.log(item);
        item.classList.add("row");
        card_body.append(...[item, buttons_container]);

        // Insert into the card, the card image and card body sections
        card.append(card_body);
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
    const lang = document.querySelector('html').getAttribute('lang').substring(0, 2);
    
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
maxdiff({ 
  question_code: "C6",
  array_filter : { // Filter options based on a FILTER ITEMSET
    filter: "ITEMSET1",
    filter_schema: "ITEMSET1xSCHEMA",
    type: "inclusive"
  },
  card_size : "350px" // Controls the size of the cards in the deck layout
});