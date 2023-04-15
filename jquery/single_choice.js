function single_choice({ question_code, schema, randomize, array_filter, hide_answers } = {}) {
    // Select the question card
    const question_card = $(`#q_${question_code}_card`);
    // Select the options container
    const options_container = question_card.find(`#p_${question_code}`);
    // Select all form-check elements
    const form_checks = question_card.find('.form-check');
    // Create an object to store the answer options
    const answer_options = {};
    // Loop through each form-check element
    form_checks.each((index, form_check) => {
        // Select the input element
        const input = $(form_check).find('input');
        // Get the value of the input element
        const answer_code = input.val();
        // Get the label text
        const label = $(form_check).find('label > div > div').text().split('\n')[0].trim();
        // Select the open text input element
        const open_text = $(form_check).find('label > div:nth-child(2) > input');
        // Add the answer option to the answer_options object
        answer_options[answer_code] = { form_check, input, label, open_text };
    });

    // No randomization
    // Check if schema is defined
    /* DUMP SCHEMA */
    if (schema !== undefined) {
        console.log("Dump order outside randomization");
        // Find the element with the ID matching the schema and add "_1"
        // Use the jQuery selector to select the element and get the first (and only) item in the array
        var dump_at = $(`#p_${schema}_1`);

        // If the element does not exist, show an error message
        if (dump_at == null) {
            alert(`There is no such ${schema} open text to save the schema`);
        }
        // Otherwise, set the value of the element to the comma-separated list of answer options
        else {
            dump_at.val(Object.keys(answer_options).map(key => answer_options[key].input.val()).join(","));
        }
    }

    /* Here goes the randomization code */
    /* RANDOMIZATION */
    if (randomize !== undefined) {
        if (randomize["filter_schema"] !== undefined) {
            /* RANDOMIZE BASED ON PREVIOUS QUESTION */
            var filter;
            var filtered_positions = [];
            var new_positions = [];
            var j = 0;

            // Iterate over the response answers and find the filter schema
            response.answers.forEach((answer) => {
                if (answer.questionCode == randomize["filter_schema"]) {
                    filter = answer.value.split(",");
                }
            });

            // Filter out the invalid answer codes from the filter
            filter.forEach((filtered_position) => {
                if (Object.keys(answer_options).includes(filtered_position)) {
                    filtered_positions.push(filtered_position);
                }
            });

            // Determine the new positions of the answer options after randomization
            Object.keys(answer_options).forEach((answer_code, index) => {
                if (filtered_positions.includes(answer_code)) {
                    new_positions.push(filtered_positions[j]);
                    j++;
                } else {
                    new_positions.push(answer_code);
                }
            });

            // Move the answer options to their new positions in the DOM
            new_positions.forEach((new_position) => {
                // Remove the answer option from its current location
                answer_options[new_position]["form_check"].remove();
                // Append the answer option to the options container
                options_container.append(answer_options[new_position]["form_check"]);
            });

        } else {
            /* DEFAULT BEHAVIOR */

            // Function to shuffle a list of DOM elements
            function shuffle(DOMList) {
                // Use jQuery to sort the elements randomly
                return $(DOMList).sort(() => Math.random() - 0.5);
            }
            // Randomize answer groups
            var answer_groups = randomize["answer_groups"];
            var randomize_groups = randomize["randomize_groups"];
            var randomized_elements = [];

            // Shuffle each answer group
            answer_groups.forEach((group) => {
                randomized_elements.push(...shuffle(group.map(String))); // push answer codes as strings
            });

            // If required, shuffle the order of the answer groups themselves
            if (randomize_groups == true) {
                randomized_elements = shuffle(randomized_elements);
            }

            var new_positions = [];
            var j = 0;
            // Determine the new positions of the answer options after randomization
            Object.keys(answer_options).forEach((answer_code, index) => {
                if (randomized_elements.includes(answer_code)) { // check if answer_code is included
                    new_positions.push(Number(randomized_elements[j]));
                    j++;
                } else {
                    new_positions.push(Number(answer_code));
                }
            });

            // Save the new order of answer options to the schema, if applicable
            if (schema !== undefined) {
                console.log("Dump order inside randomization");
                var dump_at = $(`#p_${schema}_1`);
                if (dump_at == null) {
                    alert(`There is no such ${schema} open text to save the schema`);
                } else {
                    dump_at.val(new_positions.toString());
                }
            }

            // Move the answer options to their new positions in the DOM
            new_positions.forEach((new_position) => {
                // Remove the answer option from its current location
                answer_options[new_position]["form_check"].remove();
                // Append the answer option to the options container
                options_container.append(answer_options[new_position]["form_check"]);
            });
        }
    }

    /* ARRAY FILTER */
    /* If array_filter is defined, filter the answer options based on the filter criteria */
    if (array_filter !== undefined) {
        /* Create an array to store the filter answers and a variable to store the filter schema */
        var filter_answers = [];
        var filter_schema;
        /* Loop through each answer in the response */
        response.answers.forEach((answer) => {
            /* If the answer's question code matches the filter, add its code to the filter_answers array */
            if (answer.questionCode == array_filter["filter"]) {
                filter_answers.push(Number(answer.code));
            }
            /* If the answer's question code matches the filter schema, split its value by comma and store it in filter_schema */
            if (answer.questionCode == array_filter["filter_schema"]) {
                filter_schema = answer.value.split(",");
            }
        });

        /* Loop through each answer option */
        for (let [key, value] of Object.entries(answer_options)) {
            /* If the filter type is inclusive and the answer option is not in the filter answers but is in the filter schema, hide the answer option */
            if (array_filter["type"] == "inclusive" && !filter_answers.includes(Number(key)) && filter_schema.includes(key)) {
                $(value["form_check"]).hide(); // Hide the form-check element containing the answer option
            }
            /* If the filter type is exclusive and the answer option is in the filter answers and is in the filter schema, hide the answer option */
            else if (array_filter["type"] == "exclusive" && filter_answers.includes(Number(key)) && filter_schema.includes(key)) {
                $(value["form_check"]).hide(); // Hide the form-check element containing the answer option
            }
        }
    }

    /* HIDE ANSWER OPTIONS */
    /* If hide_answers is defined, hide the corresponding answer options */
    if (hide_answers !== undefined) {
        /* Loop through each answer option */
        for (let [key, value] of Object.entries(answer_options)) {
            /* If the answer option is in the hide_answers array, hide it */
            if (hide_answers.includes(Number(key))) {
                $(value["form_check"]).hide(); // Hide the form-check element containing the answer option
            }
        }
    }
}

single_choice({
    /* Question code to apply these settings */
    question_code: "Q2",
    /* Open text question code to dump the schema */
    schema: "Q2xSCHEMA",
    /* Use if randomization is required */
    randomize: {
        filter_schema: "Q1xSCHEMA"
    },
    /* Use if array filter is required */
    array_filter: {
        /* Question code of the filter radio/checkboxes */
        filter: "Q1",
        /* Open text schema of the filter */
        filter_schema: "Q1xSCHEMA",
        /* If inclusive, will keep the selected option in filter, if exclusive, answers will be excluded. 
        Not listed answer codes in schema will be ignored for the array filter process */
        type: "exclusive"
    },
});