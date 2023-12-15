
function matrix_recode({question_code, filter, column_codes} = {}) {
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

    // Clear all checked buttons
    for(let [key, value] of Object.entries(options)) {
        value.input.checked = false;
    }

    // Iterate over all the saved answers by Survey
    response.answers.forEach((answer) => {
        // If the page code and question code matches to our matrix
        if(answer.questionCode == filter) {
            // If the column code matches is in the desired column codes
            if( column_codes.includes(Number(answer.columnCode)) ) {
                // Click the checkbox based in the row code of the matrix
                options[Number(answer.rowCode)].input.checked = true;
            }
        }
    })
}

matrix_filter({
    question_code : "Q1",
    filter : "Q0",
    column_codes : [1,2,3]
})