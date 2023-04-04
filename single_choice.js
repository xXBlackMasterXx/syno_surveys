function single_choice({question_code, schema, randomize, array_filter, hide_answers} = {})  {
    var question_card = document.querySelector("#q_"+question_code+"_card");
    var options_container = question_card.querySelector("#p_"+question_code);
    var form_checks = question_card.querySelectorAll(".form-check");
    var options = {};
    form_checks.forEach((form_check, index) => {
        var answer = form_check.querySelector("input");
        var answer_code = answer.value;
        var label = form_check.querySelector("label > div > div").innerText;
        var open_text = form_check.querySelector("label > div:nth-child(2) > input");
        options[answer_code] = {"form_check" : form_check, "input" : answer, "label" : label, "open_text" : open_text};
    });

    /* RANDOMIZATION */
    if(randomize !== undefined) {
        if(randomize["filter_schema"] !== undefined) {
            /* RANDOMIZE BASED ON PREVIOUS QUESTION */
            var filter;
            var filtered_positions = [];
            var new_positions = [];
            var j = 0;

            response.answers.forEach((answer) => {
                if (answer.questionCode == randomize["filter_schema"]) {
                    filter = answer.value.split(",");
                }
            });
            
            filter.forEach((filtered_position) => {
                if(Object.keys(options).includes(filtered_position)) {
                    filtered_positions.push(filtered_position);
                }
            });

            Object.keys(options).forEach((answer_code, index) => {
                if (filtered_positions.includes(answer_code)) {
                    new_positions.push(filtered_positions[j]);
                    j++;
                } else {
                    new_positions.push(answer_code);
                }
            })

            new_positions.forEach((new_position) => {
                console.log("form_check to be removed", options[new_position]["form_check"]);
                options[new_position]["form_check"].remove();
                options_container.appendChild(options[new_position]["form_check"]);
            });

        } else {
            /* DEFAULT BEHAVIOR */
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
    
            var answer_groups = randomize["answer_groups"];
            var randomize_groups = randomize["randomize_groups"];
            var randomized_elements = [];

            answer_groups.forEach((group) => {
                randomized_elements.push(shuffle(group));
            });
    
            if(randomize_groups == true) {
                randomized_elements = shuffle([...randomized_elements]);
            }
    
            randomized_elements = randomized_elements.flat();
            var j=0;
            var new_positions = [];
    
            Object.keys(options).forEach((answer_code, index) => {
                if(randomized_elements.includes(Number(answer_code))) {
                    new_positions.push(randomized_elements[j]);
                    j++;
                } else {
                    new_positions.push(Number(answer_code));
                }
            });

            if(schema !== undefined) {
                var dump_at = document.querySelector("#p_"+schema+"_1");
                if(dump_at == null) {
                    alert(`There is no such ${schema} open text to save the schema`);
                } else {
                    dump_at.value = new_positions.toString();
                }
            }
    
            new_positions.forEach((new_position) => {
                options[new_position]["form_check"].remove();
                options_container.appendChild(options[new_position]["form_check"]);
            });
        }
    } else {
        if(schema !== undefined) {
            var dump_at = document.querySelector("#p_"+schema+"_1");
            if(dump_at == null) {
                alert(`There is no such ${schema} open text to save the schema`);
            } else {
                dump_at.value = Object.keys(options).join(",");
            }
        }
    }

    /* ARRAY FILTER */
    if(array_filter !== undefined) {
        var filter_answers = [];
        var filter_schema;
        response.answers.forEach((answer) => {
            if(answer.questionCode == array_filter["filter"]) {
                filter_answers.push(Number(answer.code));
            }

            if(answer.questionCode == array_filter["filter_schema"]) {
                filter_schema = answer.value.split(",");
            }
        });

        for(let [key, value] of Object.entries(options)) {
            if(array_filter["type"] == "inclusive" && !filter_answers.includes(Number(key)) && filter_schema.includes(key)) {
                value["form_check"].style.display = "none";
            } else if(array_filter["type"] == "exclusive" && filter_answers.includes(Number(key)) && filter_schema.includes(key)) {
                value["form_check"].style.display = "none";
            }
        }
    }

    /* HIDE ANSWER OPTIONS */
    if(hide_answers !== undefined) {
        for(let [key, value] of Object.entries(options)) {
            if(hide_answers.includes(Number(key))) {
                value["form_check"].style.display = "none";
            }
        }
    }
}