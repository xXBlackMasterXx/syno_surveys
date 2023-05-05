function open_text({question_code, label, button } = {}) {
    const question_card = document.querySelector(`#q_${question_code}_card`);
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

    let answer_options = {}
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

    if(label !== undefined || button !== undefined){

        
        for(let [key, value] of Object.entries(answer_options)){
            
            let form_group = `
            <label for="${value.input.id}">${value.label !== undefined ? value.label : ""}</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    {prefix}{prefix_button}
                </div>
                ${value.input.outerHTML}
                <div class="input-group-append">
                    {suffix}{suffix_button}
                </div>
            </div>`;
            let btn, lbl;

            if(button !== undefined){
                btn = `<button class="btn btn-${button.color !== undefined ? button.color : "primary"}" type="button">${button.text}</button>`;
                if(button.type == "prefix"){
                    form_group = form_group.replace("{prefix_button}", btn);
                    form_group = form_group.replace("{suffix_button}", "");
                }

                else if(button.type == "suffix"){
                    form_group = form_group.replace("{suffix_button}", btn);
                    form_group = form_group.replace("{prefix_button}", "");
                }
            } else {
                form_group = form_group.replace("{suffix_button}", "");
                form_group = form_group.replace("{prefix_button}", "");
            }

            if(label !== undefined){
                lbl = `<span class="input-group-text">${label.text}</span>`
                if(label.type == "prefix"){
                    form_group = form_group.replace("{prefix}", lbl);
                    form_group = form_group.replace("{suffix}", "");
                }

                else if(label.type == "suffix"){
                    form_group = form_group.replace("{suffix}", lbl);
                    form_group = form_group.replace("{prefix}", "");
                }
            } else {
                form_group = form_group.replace("{suffix}", "");
                form_group = form_group.replace("{prefix}", "");
            }

            value.input_container.remove();
            if(value.label_container !== undefined) {
                value.label_container.remove();
            }
            question_card.innerHTML += form_group;
        }
    }
}

open_text({
    question_code : "CZ",
    label : {
        text : "Registration number",
        type : "prefix"
    },
    button : {
        text : "LOOKUP REG",
        color : "info",
        type : "suffix"
    }
});