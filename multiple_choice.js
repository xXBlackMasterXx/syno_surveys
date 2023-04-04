"use strict";

function multiple_choice({ question_code, schema, randomize, array_filter, hide_answers, validation } = {}) {
    var question_card = document.querySelector("#q_" + question_code + "_card");
    var options_container = question_card.querySelector("#p_" + question_code);
    var form_checks = question_card.querySelectorAll(".form-check");
    var options = {};
    form_checks.forEach((form_check, index) => {
        var answer = form_check.querySelector("input");
        var answer_code = answer.value;
        var label = form_check.querySelector("label > div > div").innerText;
        var open_text = form_check.querySelector("label > div:nth-child(2) > input");
        options[answer_code] = { "form_check": form_check, "input": answer, "label": label, "open_text": open_text };
    });

    function autocheck_free_text() {
        for (let [key, value] of Object.entries(options)) {
            if (value.open_text != null) {
                value.open_text.addEventListener("input", (e) => {
                    if (e.target.value != "") {
                        value.input.checked = true;
                    } else {
                        value.input.checked = false;
                    }
                });
            }
        }
    }

    function clear_unchecked() {
        for (let [key, value] of Object.entries(options)) {
            if (value.open_text != null && value.input.checked == false && value.open_text.value != "") {
                value.open_text.value = "";
            }
        }
    }

    window.addEventListener("load", autocheck_free_text);
    question_card.addEventListener("change", clear_unchecked);
    window.addEventListener("load", autocheck_free_text);
    question_card.addEventListener("change", clear_unchecked);

    /* RANDOMIZATION */
    if (randomize !== undefined) {
        if (randomize["filter_schema"] !== undefined) {
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
                if (Object.keys(options).includes(filtered_position)) {
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

            if (randomize_groups == true) {
                randomized_elements = shuffle([...randomized_elements]);
            }

            randomized_elements = randomized_elements.flat();
            var j = 0;
            var new_positions = [];

            Object.keys(options).forEach((answer_code, index) => {
                if (randomized_elements.includes(Number(answer_code))) {
                    new_positions.push(randomized_elements[j]);
                    j++;
                } else {
                    new_positions.push(Number(answer_code));
                }
            });

            if (schema !== undefined) {
                var dump_at = document.querySelector("#p_" + schema + "_1");
                if (dump_at == null) {
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
        if (schema !== undefined) {
            var dump_at = document.querySelector("#p_" + schema + "_1");
            if (dump_at == null) {
                alert(`There is no such ${schema} open text to save the schema`);
            } else {
                dump_at.value = Object.keys(options).join(",");
            }
        }
    }

    /* ARRAY FILTER */
    if (array_filter !== undefined) {
        var filter_answers = [];
        var filter_schema;
        response.answers.forEach((answer) => {
            if (answer.questionCode == array_filter["filter"]) {
                filter_answers.push(Number(answer.code));
            }

            if (answer.questionCode == array_filter["filter_schema"]) {
                filter_schema = answer.value.split(",");
            }
        });

        for (let [key, value] of Object.entries(options)) {
            if (array_filter["type"] == "inclusive" && !filter_answers.includes(Number(key)) && filter_schema.includes(key)) {
                value["form_check"].style.display = "none";
            } else if (array_filter["type"] == "exclusive" && filter_answers.includes(Number(key)) && filter_schema.includes(key)) {
                value["form_check"].style.display = "none";
            }
        }
    }

    /* HIDE ANSWER OPTIONS */
    if (hide_answers !== undefined) {
        for (let [key, value] of Object.entries(options)) {
            if (hide_answers.includes(Number(key))) {
                value["form_check"].style.display = "none";
            }
        }
    }

    /* CHECKBOX VALIDATIONS */
    if (validation !== undefined) {
        console.log("Using validation");
        console.log("n_required, min_limit, max_limit");
        console.log(validation.n_required, validation.min_limit, validation.max_limit);
        var feedback;
        var n_checked;

        function count_checked() {
            n_checked = question_card.querySelectorAll(".form-check > input:checked").length;

            if ((validation["max_limit"] !== undefined && n_checked >= validation["max_limit"]) || (validation["n_required"] !== undefined && n_checked >= validation["n_required"])) {
                for (let [key, value] of Object.entries(options)) {
                    if (value.input.checked == false) {
                        value.input.disabled = true;
                        if (value.open_text != null) {
                            value.open_text.value = "";
                            value.open_text.disabled = true;
                        }
                    }
                }
            } else {
                for (let [key, value] of Object.entries(options)) {
                    if (value.input.disabled == true) {
                        value.input.disabled = false;
                        if (value.open_text != null) {
                            value.open_text.disabled = false;
                        }
                    }
                }
            }
        }

        window.addEventListener("load", count_checked);
        question_card.addEventListener("change", count_checked);

        document.querySelector("#p_next").addEventListener("click", (e) => {
            if (validation["n_required"] === undefined) {
                if (validation["min_limit"] !== undefined && n_checked < validation["min_limit"]) {
                    e.preventDefault();
                    feedback = document.querySelector("#feedback_" + question_code);
                    if (feedback != null) {
                        feedback.remove();
                    }

                    let translations = {
                        "en": "Please select at least {n} option(s)",
                        "fr": "Veuillez sélectionner au moins {n} option(s)",
                        "de": "Bitte wählen Sie mindestens {n} Option(en)",
                        "it": "Seleziona almeno {n} opzione(i)",
                        "es": "Por favor, selecciona al menos {n} opción(es)",
                        "no": "Vennligst velg minst {n} alternativ(er)",
                        "sv": "Vänligen välj minst {n} alternativ",
                        "da": "Vælg venligst mindst {n} mulighed(er)"
                    };

                    let lang = navigator.language.substring(0, 2);

                    let translation = translations[lang] || translations["en"];

                    options_container.insertAdjacentHTML(
                        "beforebegin",
                        `<span class="d-block custom-error pb-1 text-center" id="feedback_${question_code}">
                          <span class="form-error-message text-danger">${translation.replace("{n}", String(validation["n_required"]))}</span>
                        </span>`
                    );


                    /*options_container.insertAdjacentHTML(
                        "beforebegin",
                        `<span class="d-block custom-error pb-1 text-center" id="feedback_` + question_code + `">
                        <span class="form-error-message text-danger">Please, select at least `+ String(validation["min_limit"]) + ` options</span></span>`
                    );*/

                    question_card.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                }
            } else {
                if (n_checked < validation["n_required"]) {
                    e.preventDefault();
                    feedback = document.querySelector("#feedback_" + question_code);
                    if (feedback != null) {
                        feedback.remove();
                    }

                    let translations = {
                        "en": "Please select {n} option(s)",
                        "fr": "Veuillez sélectionner {n} option(s)",
                        "de": "Bitte wählen Sie {n} Option(en)",
                        "it": "Seleziona {n} opzione(i)",
                        "es": "Por favor, selecciona {n} opción(es)",
                        "no": "Vennligst velg {n} alternativ(er)",
                        "sv": "Vänligen välj {n} alternativ",
                        "da": "Vælg venligst {n} mulighed(er)"
                    };

                    let lang = navigator.language.substring(0, 2);

                    let translation = translations[lang] || translations["en"];

                    options_container.insertAdjacentHTML(
                        "beforebegin",
                        `<span class="d-block custom-error pb-1 text-center" id="feedback_${question_code}">
                          <span class="form-error-message text-danger">${translation.replace("{n}", String(validation["n_required"]))}</span>
                        </span>`
                    );


                    /*options_container.insertAdjacentHTML(
                        "beforebegin",
                        `<span class="d-block custom-error pb-1 text-center" id="feedback_` + question_code + `">
                        <span class="form-error-message text-danger">Please, select `+ String(validation["n_required"]) + ` options</span></span>`
                    );*/

                    question_card.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                }
            }
        });
    }

    // Bug fixed: Exclusive options break after applying all the codes above
    exclusive = question_card.querySelectorAll("input.exclusive");
    exclusive.forEach((button) => {
        button.addEventListener("change", (e) => {
            if (button.checked == true) {
                question_card.querySelectorAll("input").forEach((other_button) => {
                    if (other_button != button) {
                        other_button.disabled = true;
                        other_button.checked = false;
                    }
                });
            } else {
                question_card.querySelectorAll("input").forEach((other_button) => {
                    if (other_button != button) {
                        other_button.disabled = false;
                    }
                });
            }
        });
    });
}