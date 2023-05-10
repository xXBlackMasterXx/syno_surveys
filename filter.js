function filter({question_code, filter_question, test_mode} = {}) {
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

    if(filter_question["multiple_open_text"] !== undefined) {
        /* Clear all the checkboxes */
        for (let [key, value] in myObject.entries()) {
            value.input.checked = false;
        }
        
        /* Iterate over the saved data */
        response.answers.forEach((answer) => {
            /* If we have data for the specified open texts */
            if(filter_question["multiple_open_text"]["filter"].includes(answer.questionCode)) {
                /* Click the checkbox that belongs to the answer code */
                options[answer.questionCode]["input"].checked = true;
            }
        });
    }
}


filter({
    /* Question code of the current multiple choice filter */
    question_code : "", 
    /* Configurations depending on the filter question type */
    filter_question :  {
        "multiple_open_text" : {
            filters : ["B7_1","B7_2","B7_3","B7_4","B7_99"]
        }
    }
});