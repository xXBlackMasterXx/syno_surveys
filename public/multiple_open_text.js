function multiple_open_text({ question_code, array_filter, addons, numerical_validation, top_of_mind, fill_empty_with, allow_empty_fields } = {}) {
    const lang = document.querySelector('html').getAttribute('lang').substring(0, 2);
    const question_card = document.querySelector(`#q_${question_code}_card`);
    if (question_card === null) {
        console.warn(`Question ${question_code} does not exists`);
        return;
    }

    function get_answer_options() {
        let answer_options = {};
        const form_rows = question_card.querySelectorAll(".form-row");
        const form_labels = Array.from(form_rows).map((form_row) => (form_row.innerText));
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

        return (answer_options);
    }

    function loadAnimateCSS() {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
        document.head.appendChild(link);
    }

    const remaining_translations = {
        "en": "Remaining",
        "fr": "Restant",
        "de": "Verbleibend",
        "it": "Rimanente",
        "es": "Restante",
        "nb": "Gjenstående",
        "sv": "Kvarvarande",
        "da": "Tilbageværende",
        "fi": "Jäljellä"
    }

    const completed_translations = {
        "en": "Completed",
        "fr": "Terminé",
        "de": "Abgeschlossen",
        "it": "Completato",
        "es": "Completado",
        "nb": "Fullført",
        "sv": "Färdigställd",
        "da": "Færdiggjort",
        "fi": "Valmis"
    };

    const remaining_message = remaining_translations[lang] ? remaining_translations[lang] : remaining_translations["en"];
    const completed_message = completed_translations[lang] ? completed_translations[lang] : completed_translations["en"];

    function updateProgress(now, min, max) {

        const percentage = ((now - min) / (max - min)) * 100;
        const progressBar = document.querySelector("#progressbar_sum");
        const progressBarRemaining = document.querySelector("#progressbar_remaining");
        progressBar.setAttribute('aria-valuenow', now);
        progressBar.setAttribute('aria-valuemin', min);
        progressBar.setAttribute('aria-valuemax', max);
        progressBar.style.width = `${percentage}%`;
        progressBar.textContent = `${now}/${numerical_validation["required_sum"]}`;
        progressBarRemaining.textContent = `${remaining_message}: ${numerical_validation["required_sum"] - now}`;
        if (percentage >= 0 && percentage <= 49) {
            progressBar.classList.remove('bg-info', 'bg-primary', 'bg-success', 'bg-danger');
            progressBar.classList.add('bg-warning');
            progressBarRemaining.classList.remove("text-danger", "text-success", "font-weight-bold", "animate__animated", "animate__headShake");
        } else if (percentage >= 50 && percentage <= 99) {
            progressBar.classList.remove('bg-warning', 'bg-primary', 'bg-success', 'bg-danger');
            progressBar.classList.add('bg-info');
            progressBarRemaining.classList.remove("text-danger", "text-success", "font-weight-bold", "animate__animated", "animate__headShake");
        } else if (percentage == 100) {
            progressBar.classList.remove('bg-warning', 'bg-info', 'bg-primary', 'bg-danger');
            progressBar.classList.add('bg-success');
            progressBarRemaining.classList.remove("text-danger", "font-weight-bold", "animate__animated", "animate__headShake");
            progressBarRemaining.classList.add('text-success', 'font-weight-bold');
            progressBarRemaining.textContent = `${completed_message}`;
        } else {
            progressBar.classList.remove('bg-warning', 'bg-info', 'bg-primary', 'bg-success');
            progressBar.classList.add('bg-danger');
            progressBarRemaining.classList.remove('text-success', 'font-weight-bold');
            progressBarRemaining.classList.add("text-danger", "font-weight-bold", "animate__animated", "animate__headShake");
        }
    }

    let answer_options = get_answer_options();

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

        for (let [key, value] of Object.entries(answer_options)) {
            if (array_filter["type"] == "inclusive" && !filter_answers.includes(Number(key)) && filter_schema.includes(key)) {
                value["input_container"].remove();
                value["label_container"].remove();
                delete answer_options[key];
            } else if (array_filter["type"] == "exclusive" && filter_answers.includes(Number(key)) && filter_schema.includes(key)) {
                value["input_container"].remove();
                value["label_container"].remove();
                delete answer_options[key];
            }
        }
    }


    if (addons !== undefined) {
        for (let [key, value] of Object.entries(answer_options)) {
            value.input_container.remove();
            if (value.label_container !== undefined) {
                value.label_container.remove();
            }
        }

        for (let [key, value] of Object.entries(answer_options)) {
            let form_group;

            if (addons["type"] == "suffix") {
                form_group = `<label for="${value.input.id}">${value.label_container !== undefined ? value.label : ""}</label><div class="input-group mb-4">${value.input.outerHTML}<div class="input-group-append"><span class="input-group-text">${addons.text}</span></div></div>`;
            } else if (addons["type"] == "preffix") {
                form_group = `<label for="${value.input.id}">${value.label_container !== undefined ? value.label : ""}</label><div class="input-group mb-4"><div class="input-group-prepend"><span class="input-group-text">${addons.text}</span></div>${value.input.outerHTML}</div>`;
            }

            question_card.innerHTML += form_group;
        }

        if (numerical_validation !== undefined && numerical_validation.required_sum !== undefined) {
            loadAnimateCSS();

            question_card.insertAdjacentHTML(
                "beforebegin",
                `<div class="question card mb-5 px-4 pt-3 pb-4 border-0 bg-white sticky-top" style="padding-top: 15px !important;"><div class="progress" style="height: 20px; position: sticky; top: 0px; z-index:100">
    <div class="progress-bar progress-bar-striped progress-bar-animated font-weight-bold" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%" id="progressbar_sum"></div>
    </div><h5 class="text-center" id="progressbar_remaining" style="padding: 15px !important;">${remaining_message}: ${numerical_validation.required_sum}</h5></div>`
            );
        }

        answer_options = {};
        const input_groups = question_card.querySelectorAll(".input-group");
        input_groups.forEach((input_group) => {
            const addon_container = input_group.querySelector(".input-group-append, .input-group-prepend");
            const addon = addon_container.querySelector(".input-group-text").innerText;
            const input = input_group.querySelector("input, textarea");
            const id = input.id.split("_")[2];

            answer_options[id] = {
                "input_container": input_group,
                "input": input,
                "addon_container": addon_container,
                "addon": addon
            };
        });
    }

    function handle_error_message({ key, target, message, where = "beforebegin" }) {
        delete_error_message({ key: key, target: target });
        target.insertAdjacentHTML(
            where,
            `<span class="d-block custom-error pb-1 text-center" id="feedback_${question_code}_${key}"><span class="form-error-message text-danger">${message}</span></span>`
        );
        if (target.querySelector("input") !== null) {
            target.querySelector("input").classList.add("is-invalid", "text-danger");
        }
        question_card.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    function delete_error_message({ key, target }) {
        const feedback = document.querySelector(`#feedback_${question_code}_${key}`);
        if (feedback != null) {
            feedback.remove();
            if (target.querySelector("input") !== null) {
                target.querySelector("input").classList.remove("is-invalid", "text-danger");
            }
        }
    }

    let reached_sum = false;
    for (let [key, value] of Object.entries(answer_options)) {
        if (numerical_validation !== undefined) {
            const max_length = numerical_validation.max_length;
            value.input.setAttribute('inputmode', 'numeric');

            function updateInput(e) {
                value.input.addEventListener("input", (e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    if (max_length !== undefined) {
                        e.target.value = e.target.value.slice(0, max_length);
                    }

                    // Sum all open text if required sum is needed
                    if (numerical_validation.required_sum !== undefined) {
                        let total_sum = 0;
                        for (let [key, value] of Object.entries(answer_options)) {
                            total_sum += Number(value.input.value);

                            if (total_sum == numerical_validation.required_sum) {
                                reached_sum = true;
                            } else {
                                reached_sum = false;
                            }
                            updateProgress(total_sum, 0, numerical_validation.required_sum);
                        }
                    }
                });
            }

            window.addEventListener("load", updateInput);
            updateInput();
        }
    }

    const next_button = document.querySelector("#p_next");
    next_button.addEventListener("click", (e) => {
        if (numerical_validation !== undefined) {
            const min_value = numerical_validation.min_value;
            const max_value = numerical_validation.max_value;
            const required_sum = numerical_validation.required_sum;
            const min_length = numerical_validation.min_length;

            for (let [key, value] of Object.entries(answer_options)) {

                if (min_value !== undefined && value.input.value < min_value && value.input.value !== "") {
                    e.preventDefault();

                    const translations = {
                        "en": `Number can't be lesser than ${min_value}`,
                        "fr": `Le nombre ne peut pas être inférieur à ${min_value}`,
                        "de": `Die Zahl darf nicht kleiner sein als ${min_value}`,
                        "it": `Il numero non può essere inferiore a ${min_value}`,
                        "es": `El número no puede ser menor que ${min_value}`,
                        "nb": `Tallet kan ikke være mindre enn ${min_value}`,
                        "sv": `Numret kan inte vara mindre än ${min_value}`,
                        "da": `Tallet kan ikke være mindre end ${min_value}`,
                        "fi": `Luvun ei saa olla pienempi kuin ${min_value}`
                    };

                    const message = translations[lang] ? translations[lang] : translations["en"];

                    handle_error_message({ key: key, target: value.input_container, message: message });
                } else if (max_value !== undefined && value.input.value > max_value && value.input.value !== "") {
                    e.preventDefault();

                    const translations = {
                        "en": `Number can't be greather than ${max_value}`,
                        "fr": `Le nombre ne peut pas être supérieur à ${max_value}`,
                        "de": `Die Zahl darf nicht größer sein als ${max_value}`,
                        "it": `Il numero non può essere maggiore di ${max_value}`,
                        "es": `El número no puede ser mayor que ${max_value}`,
                        "nb": `Tallet kan ikke være større enn ${max_value}`,
                        "sv": `Numret kan inte vara större än ${max_value}`,
                        "da": `Tallet kan ikke være større end ${max_value}`,
                        "fi": `Luvun ei saa olla suurempi kuin ${max_value}`
                    };

                    const message = translations[lang] ? translations[lang] : translations["en"];

                    handle_error_message({ key: key, target: value.input_container, message: message });
                } else if (min_length !== undefined && value.input.value.length < min_length) {
                    e.preventDefault();

                    const translations = {
                        "en": `This field must have at least ${min_length} characters`,
                        "fr": `Ce champ doit comporter au moins ${min_length} caractères/chiffres`,
                        "de": `Dieses Feld muss mindestens ${min_length} Zeichen/Ziffern enthalten`,
                        "it": `Questo campo deve contenere almeno ${min_length} caratteri/cifre`,
                        "es": `Este campo debe tener al menos ${min_length} caracteres/dígitos`,
                        "nb": `Dette feltet må ha minst ${min_length} tegn/siffer`,
                        "sv": `Det här fältet måste ha minst ${min_length} tecken/siffror`,
                        "da": `Dette felt skal have mindst ${min_length} tegn/cifre`,
                        "fi": `Tässä kentässä on oltava vähintään ${min_length} merkkiä`
                    };

                    const message = translations[lang] ? translations[lang] : translations["en"];

                    handle_error_message({ key: key, target: value.input_container, message: message });

                } else if (allow_empty_fields !== undefined && allow_empty_fields == false && value.input.value === "") {
                    e.preventDefault();

                    const translations = {
                        "en": "This field can't be blank",
                        "fr": "Ce champ ne peut pas être vide",
                        "de": "Dieses Feld darf nicht leer sein",
                        "it": "Questo campo non può essere vuoto",
                        "es": "Este campo no puede estar en blanco",
                        "nb": "Dette feltet kan ikke være tomt",
                        "sv": "Det här fältet kan inte vara tomt",
                        "da": "Dette felt kan ikke være tomt",
                        "fi": "Tämä kenttä ei saa olla tyhjä"
                    };

                    const message = translations[lang] ? translations[lang] : translations["en"];

                    handle_error_message({ key: key, target: value.input_container, message: message });
                } else {
                    delete_error_message({ key: key, target: value.input_container });
                }

                if (fill_empty_with !== undefined) {
                    if (value.input.value === "") {
                        value.input.value = fill_empty_with;
                    }
                }
            }

            if (required_sum !== undefined && reached_sum == false) {
                e.preventDefault();

                const translations = {
                    "en": `Total sum must be equal to ${required_sum}`,
                    "fr": `La somme totale doit être égale à ${required_sum}`,
                    "de": `Die Gesamtsumme muss gleich ${required_sum} sein`,
                    "it": `La somma totale deve essere uguale a ${required_sum}`,
                    "es": `La suma total debe ser igual a ${required_sum}`,
                    "nb": `Total sum må være lik ${required_sum}`,
                    "sv": `Den totala summan måste vara lika med ${required_sum}`,
                    "da": `Den samlede sum skal være lig med ${required_sum}`,
                    "fi": `Kokonaissumman on oltava yhtä suuri kuin ${required_sum}`
                }

                const message = translations[lang] ? translations[lang] : translations["en"];

                const question_title = question_card.querySelector("h5");
                handle_error_message({ key: 0, target: question_title, message: message, where: "afterend" });
            }
        }

        if (top_of_mind !== undefined) {
            let first_textfield = Object.keys(answer_options)[0];
            // console.log(first_textfield);
            if (top_of_mind == true && answer_options[first_textfield].input.value === "") {
                // console.log(answer_options[first_textfield].input.value);
                e.preventDefault();

                const translations = {
                    "en": "Please, fill out the first textfield",
                    "fr": "Veuillez remplir le premier champ de texte",
                    "de": "Bitte füllen Sie das erste Textfeld aus",
                    "it": "Per favore, compila il primo campo di testo",
                    "es": "Por favor, complete el primer campo de texto",
                    "nb": "Vennligst fyll ut det første tekstfeltet",
                    "sv": "Var god fyll i det första textfältet",
                    "da": "Venligst udfyld det første tekstfelt",
                    "fi": "Täytä ensimmäinen tekstikenttä, kiitos"
                }

                const message = translations[lang] ? translations[lang] : translations["en"];
                handle_error_message({ key: first_textfield, target: answer_options[first_textfield].input_container, message: message });
            } else {
                delete_error_message({ key: first_textfield, target: answer_options[first_textfield].input_container });
            }
        }
    });
}
