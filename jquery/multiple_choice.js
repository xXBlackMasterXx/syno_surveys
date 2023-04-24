function multiple_choice({ question_code, schema, randomize, array_filter, hide_answers, validation } = {}) {
    // Select the question card
    const question_card = $(`#q_${question_code}_card`);
    // If question code doesn't exists
    if (question_card.length == 0) {
        alert(`Question card with code "${question_code}" not found.`);
        return;
    }
    // Select the options container
    const options_container = question_card.find(`#p_${question_code}`);
    // Select all form-check elements
    const form_checks = question_card.find('.form-check');
    // If question doesn't have answer options
    if (form_checks.length == 0) {
        alert(`No answer options found for question with code "${question_code}".`);
        return;
    }
    // Create an object to store the answer options
    let answer_options = {};
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
        if (dump_at.length == 0) {
            alert(`There is no such ${schema} open text to save the schema`);
        }
        // Otherwise, set the value of the element to the comma-separated list of answer options
        else {
            dump_at.val(Object.keys(answer_options).toString());
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

            if (filter === undefined) {
                alert(`Error: The filter schema "${randomize.filter_schema}" was not found. Please add an open text question with this code below the question where you want to use its random order.`);
                return;
            }

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
                // Convert the DOMList to an array using Array.from()
                const arr = Array.from(DOMList);
                // Use the sort() method to shuffle the array
                arr.sort(() => Math.random() - 0.5);
                // Return the shuffled array
                return arr;
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
                console.log(randomized_elements, answer_code);
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
                if (dump_at.length == 0) {
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

        if (filter_answers.length == 0) {
            alert(`Error: The filter "${array_filter.filter}" was not found. Please add an sigle/multiple choice question with this code to use it as an array filter.`);
            return;
        }

        if (filter_schema === undefined) {
            if (filter === undefined) {
                alert(`Error: The filter schema "${array_filter.filter_schema}" was not found. Please add an open text question with this code below the question where you want to use it as an array filter.`);
                return;
            }
        }

        /* Loop through each answer option */
        for (const [key, value] of Object.entries(answer_options)) {
            /* If the filter type is inclusive and the answer option is not in the filter answers but is in the filter schema, hide the answer option */
            if (array_filter["type"] == "inclusive" && !filter_answers.includes(Number(key)) && filter_schema.includes(key)) {
                $(value["form_check"]).remove(); // Remove the form-check element containing the answer option
            }
            /* If the filter type is exclusive and the answer option is in the filter answers and is in the filter schema, hide the answer option */
            else if (array_filter["type"] == "exclusive" && filter_answers.includes(Number(key)) && filter_schema.includes(key)) {
                $(value["form_check"]).remove(); // Remove the form-check element containing the answer option
            }
        }
    }

    /* HIDE ANSWER OPTIONS */
    /* If hide_answers is defined, hide the corresponding answer options */
    if (hide_answers !== undefined) {
        /* Loop through each answer option */
        for (const [key, value] of Object.entries(answer_options)) {
            /* If the answer option is in the hide_answers array, hide it */
            if (hide_answers.includes(Number(key))) {
                $(value["form_check"]).remove(); // Remove the form-check element containing the answer option
            }
        }
    }

    /* CHECKBOX VALIDATION */
    if (validation !== undefined) {
        let n_checked;

        function count_checked() {
            n_checked = question_card.find(".form-check > input:checked").length;
            console.log(n_checked);
            /* If max_limit is defined and n_checked is more or equal to max_limit or if n_required is defined and n_checked is more or equal than n_required */
            if ((validation["max_limit"] !== undefined && n_checked >= validation["max_limit"]) || (validation["n_required"] !== undefined && n_checked >= validation["n_required"])) {
                for (const [key, value] of Object.entries(answer_options)) {
                    if (!value.input.prop("checked")) {
                        value.input.prop("disabled", true);

                        if (value.open_text.length != 0) {
                            value.open_text.val("");
                            value.open_text.prop("disabled", true);
                        }
                    }
                }
            } else {
                for (const [key, value] of Object.entries(answer_options)) {
                    if (value.input.prop("disabled")) {
                        value.input.prop("disabled", false);
                        if (value.open_text.length != 0) {
                            value.open_text.prop("disabled", false);
                        }
                    }
                }
            }
        }

        $(window).on('load', count_checked);
        $(question_card).on('change', count_checked);

        $('#p_next').on('click', function (e) {
            const feedback = $(`#feedback_${question_code}`);

            const lang = $('html').attr('lang').substring(0, 2);
            const min_limit_validation = validation["min_limit"] !== undefined && n_checked < validation["min_limit"] && options_container.find('input.exclusive:checked').length == 0;
            const n_required_validation = validation["n_required"] !== undefined && n_checked < validation["n_required"] && options_container.find('input.exclusive:checked').length == 0;

            if (validation === undefined) {
                if (min_limit_validation) {
                    e.preventDefault();

                    if (feedback.length != 0) {
                        feedback.remove();
                    }

                    const translations = {
                        "en": "Please select at least {n} option(s)",
                        "fr": "Veuillez sélectionner au moins {n} option(s)",
                        "de": "Bitte wählen Sie mindestens {n} Option(en)",
                        "it": "Seleziona almeno {n} opzione(i)",
                        "es": "Por favor, selecciona al menos {n} opción(es)",
                        "no": "Vennligst velg minst {n} alternativ(er)",
                        "sv": "Vänligen välj minst {n} alternativ",
                        "da": "Vælg venligst mindst {n} mulighed(er)"
                    }

                    const message = translations[lang] ? translations[lang].replace("{n}", validation["min_limit"]) : translations["en"].replace("{n}", validation["min_limit"]);

                    options_container.before(`<span class="d-block custom-error pb-1 text-center" id="feedback_${question_code}"><span class="form-error-message text-danger">${message}</span></span>`);

                    $("html, body").animate({scrollTop: $(question_card).offset().top}, "slow");
                }
            } else {
                if (n_required_validation) {
                    e.preventDefault();

                    if (feedback.length != 0) {
                        feedback.remove();
                    }
                    
                    const translations = {
                        "en": "Please select {n} option(s)",
                        "fr": "Veuillez sélectionner {n} option(s)",
                        "de": "Bitte wählen Sie {n} Option(en)",
                        "it": "Seleziona {n} opzione(i)",
                        "es": "Por favor, selecciona {n} opción(es)",
                        "no": "Vennligst velg {n} alternativ(er)",
                        "sv": "Vänligen välj {n} alternativ",
                        "da": "Vælg venligst {n} mulighed(er)"
                    };

                    const message = translations[lang] ? translations[lang].replace("{n}", validation["n_required"]) : translations["en"].replace("{n}", validation["n_required"]);

                    options_container.before(`<span class="d-block custom-error pb-1 text-center" id="feedback_${question_code}"><span class="form-error-message text-danger">${message}</span></span>`);

                    $("html, body").animate({scrollTop: $(question_card).offset().top}, "slow");

                }
            }
        });
    }

    // Bug fixing: Exclusive answer options break after using this codes
    const exclusive_answers = question_card.find('input.exclusive');
    exclusive_answers.each(function() {
        $(this).on('change', function() {
            const is_checked = $(this).prop("checked");
            const other_options = question_card.find('input').not(this);
            
            if(is_checked) {
            other_options.prop("disabled", true).prop("checked", false);
            } else {
            other_options.prop("disabled", false);
            }
        });
    });

}

multiple_choice({
    /* Question code of the multiple choice to set up */
    question_code: "Q1",
    /* Open text question code to dump the schema */
    schema: "Q1xSCHEMA",
    /* If randomization is required */
    randomize: {
        /* Question code of the filter schema */
        filter_schema: "Q0xSCHEMA",
        /* OR */
        /* Define list of answer codes */
        answer_groups: [[1, 2]],
        /* If true, groups will be randomize each other, if false, just elements inside groups 
        are randimized */
        randomize_groups: false
    },
    /* If array filter is required */
    array_filter: {
        /* Question code of the filter */
        filter: "Q0",
        /* Question code of filter's schema */
        filter_schema: "Q0xSCHEMA",
        /* If inclusive, keeps the selected options in filter, if exclusive, will exclude selected in filter
        Answer options that didn't appeared in filter_schema are ignored for array filter process */
        type: "inclusive"
    },
    /* Answer codes to be hidden */
    hide_answers: [1, 2],
    /* If validation for checked options are required */
    validation: {
        /* Define a require amount of checks */
        n_required: 1,
        /* OR */
        /* Define a minimum checked options */
        min_limit: 1,
        /* Define a maximum checked options */
        max_limit: 2
    }
});