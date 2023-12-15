let question_code = "Q4";
let question_card = document.querySelector(`#q_${question_code}_card`);

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

let answer_options = get_answer_options();
let button = document.querySelector("#p_Q4_99");
question_card.appendChild(button);
document.querySelector("#q_Q4_99_card").remove();

function disableTextFields(){
    if (button.querySelector(".form-check > input").checked) {
        for(let [key, value] of Object.entries(answer_options)) {
            value.input.disabled = true;
            value.input.readOnly = true;
            value.input.value = "";
        }
    } else {

        for(let [key, value] of Object.entries(answer_options)) {
            value.input.disabled = false;
            value.input.readOnly = false;
        }
    }
}

button.addEventListener("click", () => {
    disableTextFields();
});

let answer_codes = Object.keys(answer_options);
let i;
let last_key;

function showInputsProgressively(){
    i = answer_codes.length-1;
    last_key = Number(answer_codes[i]);
    
    while( last_key != Number(answer_codes[0]) ){
        
        if(answer_options[answer_codes[i-1]].input.value === "") {
            answer_options[last_key].input_container.style.display = "none";
            answer_options[last_key].label_container.style.display = "none";
            answer_options[last_key].input.value == "";
        
            i--;
            last_key = Number(answer_codes[i]);
        } else {
            answer_options[last_key].input_container.style.display = "block";
            answer_options[last_key].label_container.style.display = "block";
    
            break;
        }
    }
}

window.addEventListener("load", () => {
    showInputsProgressively();
    disableTextFields();
})

question_card.addEventListener("input", () => {
    showInputsProgressively();
});

let next_button = document.querySelector("#p_next");
next_button.addEventListener("click", (e) => {
    let button = document.querySelector("#p_Q4_99");
    if(!button.querySelector(".form-check > input").checked && answer_options[answer_codes[0]].input.value == "") {
        answer_options[answer_codes[0]].input.classList.add("is-invalid");
        alert("Fill out missing inputs");
        e.preventDefault();
    }
});