function sliders({question_code, validation}) {
    const lang = document.querySelector('html').getAttribute('lang').substring(0, 2);
    const question_card = document.querySelector(`#q_${question_code}_card`);
    if (question_card === null) {
        alert(`Question ${question_code} does not exists`);
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

    const answer_options = get_answer_options();

    // Hide input fields
    for(let [key, value] of Object.entries(answer_options)){
        // Get the step, min and max values for slider
        const min_value = validation.min_value;
        const max_value = validation.max_value;
        const step = validation.step;
        
        // Define slider variable names
        const new_slider_id = `slider_${question_code}_${key}`;
        const new_slider_name = `slider_name_${question_code}_${key}`;
        const new_slider_value = `slider_badge_${question_code}_${key}`;
        const new_slider_label = `slider_label_${question_code}_${key}`;
        
        // Create a new slider
        const new_slider = `<label class="form-label w-100 mb-3" for="${new_slider_id}" id="${new_slider_label}">${value.label}</label>
        <input class="form-control-range bg-primary mb-4" id="${new_slider_id}" type="range" name="${new_slider_name}" min="${min_value}" max="${max_value}" step="${step}">
        <h5 class="w-100 text-center mb-5"><span class="fw-bold">Current value: </span><span class="badge bg-primary text-white" id="${new_slider_value}">Move to record a value</span></h5>                    
        `; 


        // Label and the the slider into the DOM
        value.input_container.insertAdjacentHTML(
            'beforebegin',
            new_slider
        );
        
        // Get the slider by ID
        const slider = document.getElementById(new_slider_id);
        const slider_badge = document.getElementById(new_slider_value);    
        
        // Write the value of the slider whenever it changes
        slider.addEventListener('input', (e) => {
            value.input.value = e.target.value;
            slider_badge.innerText = e.target.value;
        });

        window.addEventListener('load', (e) => {
            console.log("window loaded!");
            value.input.value = value.input.value;
            slider.value = value.input.value;
            slider_badge.innerText = value.input.value;
        });

        // Hides the input container
        value.input_container.style.display = "none";
        // Removes the input label
        value.label_container.remove();
    }

    function handle_error_message({ key, target, message, where = "beforebegin"}) {
        delete_error_message({ key: key, target: target });
        target.insertAdjacentHTML(
          where,
          `<span class="d-block custom-error mb-3 text-center" id="feedback_${key}"><span class="form-error-message text-danger">${message}</span></span>`
        );
        if(target.querySelector("input") !== null){
          target.querySelector("input").classList.add("is-invalid", "text-danger");
        }
        question_card.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      }
    
    function delete_error_message({ key, target }) {
        const feedback = document.querySelector(`#feedback_${key}`);
        if (feedback != null) {
            feedback.remove();
            if(target.querySelector("input") !== null){
            target.querySelector("input").classList.remove("is-invalid", "text-danger");
            }
        }
    }

    const next_button = document.getElementById("p_next");
    next_button.addEventListener('click', (e) => {
        for(let [key, value] of Object.entries(answer_options)) {
            // Get the slider label by ID
            const slider_label = document.getElementById(`slider_label_${question_code}_${key}`);

            if(value.input.value == ""){
                e.preventDefault();
                const translations = {
                    "en": `This field can't be blank`,
                    "fr": `Ce champ ne peut pas être vide`,
                    "de": `Dieses Feld darf nicht leer sein`,
                    "it": `Questo campo non può essere vuoto`,
                    "es": `Este campo no puede estar vacío`,
                    "nb": `Dette feltet kan ikke være tomt`,
                    "sv": `Detta fält får inte vara tomt`,
                    "da": `Dette felt må ikke være tomt`,
                };
        
                const message = translations[lang] ? translations[lang]: translations["en"];

                handle_error_message({ key : key, target : slider_label, message : message});
            } else {
                delete_error_message({key : key, target : slider_label});
            }
        }
    });
}

sliders({
    question_code : "SLIDER",
    validation : {
        min_value : 0,
        max_value : 100, 
        step : 1
    }
})