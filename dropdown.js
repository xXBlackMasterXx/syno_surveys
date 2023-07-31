function dropdown({question_code } = {}) {
    // Get the question card
    let question_card = document.querySelector(`#q_${question_code}_card`);
    if(question_card === null){
        alert(`Question ${question_code} does not exist!`);
        return; // Ends the function
    }

    // Get the radio buttons container
    let buttons_container = question_card.querySelector(`#p_${question_code}`);
    buttons_container.style.display = "none";

    // Get the buttons of the container
    let buttons = Array.from(buttons_container.querySelectorAll(".form-check > input[type='radio']"));
    // Get the answer codes of all buttons inside the container
    let answer_codes = buttons.map(button => button.value);
    // Get the container of the answer labels
    let answer_label_containers = Array.from(buttons_container.querySelectorAll(".form-check > label > div:nth-child(1) > div"));
    // Get the text inside the answer label containers
    let answer_labels = answer_label_containers.map(label_container => label_container.innerText);

    // Create the option elements for the select
    let answer_data = answer_labels.map((answer_label, index) => {
        let option = document.createElement("option");
        option.textContent = answer_label;
        option.value = answer_codes[index];

        return option;
    });

    // Create the placeholder for the select
    let placeholder = document.createElement("option");
    placeholder.textContent = "Select an option";
    placeholder.disabled = true;
    placeholder.hidden = true;
    placeholder.value = "0";

    // Create a select dom element
    let select = document.createElement("select");
    // Set up an ID for the select
    select.id = `select_${question_code}`;
    select.classList.add("form-control");
    // Insert all options as children of select element
    select.appendChild(placeholder);
    select.append(...answer_data);
    select.value = "0";

    // Insert the select above the radio buttosn container
    buttons_container.insertAdjacentElement("beforebegin", select);

    // Saves the selected state into the radio button
    select.addEventListener("change", () => {
        let selected_value = select.value;
        let selected_button = buttons.find(button => button.value == selected_value);
        selected_button.checked = true;
    });

    // Loads the previously selected radio button
    window.addEventListener("load", () => {
        let checked_button_value = buttons.find(button => button.checked == true).value;
        select.value = checked_button_value;
    });
}

dropdown({question_code : "Q1"});