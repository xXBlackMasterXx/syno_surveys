function recode({ question_code, filter, dictionary, test_mode} = {}) {
    var question_card = document.querySelector("#q_" + question_code + "_card");
    var options_container = question_card.querySelector("#p_" + question_code);
    var form_checks = question_card.querySelectorAll(".form-check");
    var answer_options = {};
    form_checks.forEach((form_check, index) => {
        var input = form_check.querySelector("input");
        var code = input.value;
        var label = form_check.querySelector("label > div > div").innerText;
        var open_text = form_check.querySelector("label > div:nth-child(2) > input");
        answer_options[code] = { "form_check": form_check, "input": input, "label": label, "open_text": open_text };
    });

    // Clear all the options
    for (let [code, value] of Object.entries(answer_options)) {
        value.input.checked = false;
    }

    // Check options according to each region/country in hashmap dictionary
    response.answers.forEach((answer) => {
        if (answer.questionCode == filter) {
            var elements = dictionary[answer.code];
            for (let [code, value] of Object.entries(answer_options)) {
                if (elements.includes(Number(code))) {
                    value.input.checked = true;
                }
            }
        }
    });

    if(test_mode === undefined || test_mode == false){
        // Hides the page and go to next page
        document.querySelector("body").style.display = "none";
        document.querySelector("#p_next").click();
    } else if(test_mode == true){
        // Shows the page if testing
        document.querySelector("body").style.display = "flex";
    }  
}

recode({
    question_code: "Q12xRECODE",
    filter: "Q12",
    dictionary: {
        /* answer codes selected in filter : [list of answer codes in this question to be selected]*/
        1: [1, 2, 3, 4, 6, 7, 8, 9, 11],
        2: [1, 2, 3, 4, 6, 7, 8, 9, 11],
        3: [1, 2, 3, 4, 10, 17],
        4: [1, 2, 3, 4, 11, 12],
        5: [1, 2, 3, 4, 13, 14],
        8: [1, 2, 3, 4, 11, 15, 16, 17, 18, 19],
        9: [1, 2, 3, 4, 17, 18, 21],
        12: [1, 2, 3, 4, 9, 20],
        14: [1, 2, 3, 4, 23, 24, 25, 26],
        15: [1, 2, 3, 4, 23, 24, 25, 26],
        16: [1, 2, 3, 4, 27]
    },
    test_mode : true
});