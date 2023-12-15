function rank({ question_code, array_filter, validation } = {}) {
    // Get the question card
    const question_card = document.querySelector(`#q_${question_code}_card`);
    // If not found
    if (question_card === null) {
        // Send alert to user and finish program
        alert(`Question ${question_code} does not exists`);
        return;
    }

    // Function to get all answer options as an object with their references
    function get_answer_options() {
        let answer_options = {};
        const form_rows = question_card.querySelectorAll(".form-row");
        // Give text labels, empty strings indicate is an inputs
        const form_labels = Array.from(form_rows).map((form_row) => (form_row.innerText));
        // List of non empty indexes that indicate visible labels
        const label_indexes = form_labels.reduce((acc, cur, idx) => {
            if (cur !== "") {
                acc.push(idx);
            }
            return acc;
        }, []);

        form_rows.forEach((form_row, index) => {
            if (!label_indexes.includes(index)) {
                let input = form_row.querySelector("input,textarea");
                let label = index > 0 && label_indexes.includes(index - 1) ? form_rows[index - 1] : undefined;
                let id = input.id.split("_")[2];

                answer_options[id] = {
                    "input_container": form_row,
                    "input": input,
                    "label_container": label,
                    "label": label === undefined ? undefined : label.querySelector(".col-12").innerText
                };
            }
        });

        // Return the object
        return (answer_options);
    }

    // Save the answer options
    let answer_options = get_answer_options();

    if (array_filter !== undefined) {
        let filtered_options = [];
        let filtered_schema;

        response.answers.forEach((answer) => {
            if (answer.questionCode == array_filter.filter) {
                filtered_options.push(Number(answer.code));
            }

            if (answer.questionCode == array_filter.filter_schema) {
                filtered_schema = answer.value.split(",");
            }
        });

        for (let [key, value] of Object.entries(answer_options)) {
            if (array_filter.type == "inclusive" && !filtered_options.includes(Number(key)) && filtered_schema.includes(String(key))) {
                delete answer_options[key];
            } else if (array_filter.type == "exclusive" && filtered_options.includes(Number(key)) && filtered_schema.includes(String(key))) {
                delete answer_options[key];
            }
        }
    }

    // Lists to store draggable and droppable items
    let ranking_items = [];

    // For each found answer option, create a new draggable item and place it into the draggable items list
    for (let [key, value] of Object.entries(answer_options)) {
        // If the input value is empty, it means its has not been dropped
        if (value.input.value == "") {
            // Create a new draggable items based using the label and key of the answer option
            const element = `<a href="#" class="list-group-item list-group-item-action rank-item" data-id="${Number(key)}"><span class="badge badge-primary text-uppercase mr-2"></span>${value.label}</a>`;
            // So placed as draggable item
            ranking_items.push(element);
            // If already has a value, has been dropped
        } else {
            // Create a new draggable items based using the label and key of the answer option
            const element = `<a href="#" class="list-group-item list-group-item-action rank-item" data-id="${Number(key)}"><span class="badge badge-primary text-uppercase mr-2">${value.input.value}</span>${value.label}</a>`;
            // So placed it as dropped item
            ranking_items.push(element);
        }
    }

    // Create the rank UI with the draggable and dropped items
    // and use the custom top and bottom labels
    let rank_html = `
    <div class="row">
        <div class="col-sm-12 mb-4">
            <div class="list-group" id="sortable">
                ${ranking_items.join("")}
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
        form_row.style.display = "none";
    });

    /* Ranking logic */
    let ranking_elements = document.querySelectorAll(".rank-item");
    let rank_number = 1;


    let values = Object.values(answer_options);
    values.forEach((value) => {
        if (value.input.value > rank_number) {
            rank_number = Number(value.input.value) + 1;
        }
    });


    // console.log(rank_number);

    ranking_elements.forEach((rank_element) => {
        rank_element.addEventListener("click", (e) => {
            e.preventDefault();
            let rank_span = rank_element.querySelector("span");
            if (rank_span.innerText === "") {
                if (validation !== undefined && (validation.max_limit !== undefined || validation.n_required !== undefined)) {
                    if (rank_number <= validation.max_limit || rank_number <= validation.n_required) {
                        rank_span.innerText = rank_number;
                        rank_number++;
                    }
                }

                else {
                    rank_span.innerText = rank_number;
                    rank_number++;
                }

            } else {
                let current_rank = parseInt(rank_span.innerText);

                rank_span.innerText = "";

                // Update the rank numbers for elements with higher ranks
                ranking_elements.forEach((element) => {
                    let element_rank_span = element.querySelector("span");
                    if (element_rank_span.innerText !== "" && parseInt(element_rank_span.innerText) > current_rank) {
                        element_rank_span.innerText = parseInt(element_rank_span.innerText) - 1;
                    }
                });

                if (rank_number > 1) {
                    rank_number--;
                }
            }
            // console.log(rank_number);
        });
    });


    // If page is submitted
    document.querySelector("#p_next").addEventListener("click", (e) => {
        // Create a list to store the rank order
        let rank_orders = [];
        let rank_id = [];
        // For each draggable item placed into the drop area
        question_card.querySelectorAll("#sortable a").forEach((item) => {
            // Store the data-id of the placed draggable item into the rank_order list
            rank_orders.push(item.querySelector("span").innerText);
            rank_id.push(item.getAttribute("data-id"));
        });

        // A variable to store the number of options that were ranked 
        let ranked_options = 0;
        // For each item into the rank_order list of identifiers
        rank_orders.forEach((rank_order, index) => {
            // Store the ranking into its linked input
            answer_options[rank_id[index]].input.value = rank_order;
            // Increment the number of ranked options +1
            if (rank_order !== "") {
                ranked_options++;
            }
        });

        if (validation !== undefined) {
            if (validation.n_required !== undefined && validation.n_required != ranked_options) {
                alert(`Please, rank ${validation.n_required} options`);
                e.preventDefault();
            }

            else if (validation.min_limit !== undefined && ranked_options < validation.min_limit) {
                alert(`Please, rank at least ${validation.min_limit} options`);
                e.preventDefault();
            }
        } else {
            if (ranked_options != question_card.querySelectorAll(".list-group-item").length) {
                // console.log(ranked_options, question_card.querySelectorAll(".list-group-item").length);
                alert(`Please, rank the remaining options`);
                e.preventDefault();
            }
        }
    });
}