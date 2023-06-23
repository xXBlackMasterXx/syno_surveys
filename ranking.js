function ranking({ question_code, top_label, bottom_label, validation } = {}) {
    // Load jQuery UI
    var jqueryUiScript = document.createElement("script");
    jqueryUiScript.src = "https://code.jquery.com/ui/1.12.1/jquery-ui.min.js";
    jqueryUiScript.onload = function () {
        // Your code that depends on jQuery UI can go here
        $(function () {
            $("#drop-area").sortable({
                cancel: "#not-draggable"
            });
            $("#sortable, #drop-area").sortable({
                connectWith: ".list-group"
            });
            $("#sortable, #drop-area").disableSelection();
        });
    };
    document.head.appendChild(jqueryUiScript);

    // Get the question card
    const question_card = document.querySelector(`#q_${question_code}_card`);
    // If not found
    if (question_card === null) {
        // Send alert to user and finish program
        alert(`Question ${question_code} does not exists`);
        return;
    }

    // Function to get all answer options as an object with their references
    function get_answer_options(){
        let answer_options = {};
        const form_rows = question_card.querySelectorAll(".form-row");
        // Give text labels, empty strings indicate is an inputs
        const form_labels = Array.from(form_rows).map((form_row) =>  (form_row.innerText));
        // List of non empty indexes that indicate visible labels
        const label_indexes = form_labels.reduce((acc, cur, idx) => {
            if (cur !== "") {
            acc.push(idx);
            }
            return acc;
        }, []);
    
        form_rows.forEach((form_row, index) => {
            if(!label_indexes.includes(index)) {
                let input = form_row.querySelector("input,textarea");
                let label = index > 0 && label_indexes.includes(index-1) ? form_rows[index-1] : undefined;
                let id = input.id.split("_")[2];
                
                answer_options[id] = {
                    "input_container" : form_row,
                    "input" : input,
                    "label_container" : label,
                    "label" : label === undefined ? undefined : label.querySelector(".col-12").innerText
                };
            }
        });

        // Return the object
        return(answer_options);
    }

    // Save the answer options
    let answer_options = get_answer_options();
    
    // Lists to store draggable and droppable items
    let draggable_items = [];
    let dropped_items = [];

    // For each found answer option, create a new draggable item and place it into the draggable items list
    for (let [key, value] of Object.entries(answer_options)) {
        // Create a new draggable items based using the label and key of the answer option
        const element = `<a href="#" class="list-group-item list-group-item-action" data-id="${Number(key)}">${value.label}</a>`;
        // If the input value is empty, it means its has not been dropped
        if(value.input.value == ""){
            // So placed as draggable item
            draggable_items.push(element);
        // If already has a value, has been dropped
        } else {
            // So placed it as dropped item
            dropped_items.push(element);
        }
    }

    // Create the rank UI with the draggable and dropped items
    // and use the custom top and bottom labels
    let rank_html = `
    <div class="row">
        <div class="col-sm-12 mb-4">
            <div class="list-group" id="sortable">
                ${draggable_items.join("")}
            </div>
        </div>
        <div class="col-sm-12">
            <div class="border rounded p-4 bg-white mb-0">
                <p class="text-center my-3">${top_label}</p>
                <div class="list-group list-group-numbered" id="drop-area" style="min-height: 50px;">
                    ${dropped_items.join("")}
                </div>
                <p class="text-center my-3">${bottom_label}</p>
            </div>
        </div>
    </div>
    <br>
    `;

    // Insert the rank UI into the question card container
    question_card.innerHTML += rank_html; 
    
    // Get the answer options again because we just changed the HTML of the page, and 
    // consequently, our current references are not the same anymore.
    answer_options = get_answer_options();

    // Iterate over all input rows & label to hide them
    const form_rows = question_card.querySelectorAll(".form-row");
    form_rows.forEach((form_row) => {
        // form_row.style.display = "none";
    });

    // If page is submitted
    document.querySelector("#p_next").addEventListener("click", (e) => {
        e.preventDefault();
        // Create a list to store the rank order
        let rank_order = [];
        // For each draggable item placed into the drop area
        question_card.querySelectorAll("#drop-area a").forEach((item) => {
            // Store the data-id of the placed draggable item into the rank_order list
            rank_order.push(item.getAttribute("data-id"));
        });

        // Print the rank order found
        console.log(rank_order);

        // A variable to store the number of options that were ranked 
        let ranked_options = 0;
        // For each item into the rank_order list of identifiers
        rank_order.forEach((rank_id, rank) => {
            // Print the ranked element and its id
            console.log(`rank_id: ${rank_id}, rank : ${rank}`);
            // Print the linked input that reference to the current rank element
            console.log(answer_options[rank_id]);
            // Store the ranking into its linked input
            answer_options[rank_id].input.value = `Rank ${rank + 1}`;
            // Increment the number of ranked options +1
            ranked_options++;
        });

        //  Print total number of ranked options
        console.log(`Ranked options: ${ranked_options}`);
    });
}

ranking({
    question_code: "Q9",
    top_label: "Most important",
    bottom_label: "Less important",
    validation : {
        n_required : 2
        // min_limit : 1,
        // max_limit : 2
    }
});