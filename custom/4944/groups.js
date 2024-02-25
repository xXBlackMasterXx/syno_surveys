function shuffle(array) {
    /* Randomize an array of elements */
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return(array);
}

/* Change this part with the question codes of the groups of statements */
let group_codes = ["GROUP1", "GROUP2", "GROUP3", "GROUP4"];

// Save the metadata of each group
let metadata = group_codes.map((group_code) => {
    /*
        List schema
        [
            {
                "question" : "..."
                "answer_codes" : [...]
                "n_answers" : #
            }
        ]
     */

    // Get the answer codes available in each group where answer code is not 99
    let answer_codes = Array.from(document.querySelectorAll(`#p_${group_code} .form-check > input`)).map(button => Number(button.value)).filter(code => code !== 99);

    let info = {
        "question" : group_code,
        "answer_codes" : shuffle(answer_codes),
        "n_answers" : answer_codes.length
    };

    return(info);
});

let leg_type = response.answers.find(answer => answer.questionCode == "LEG").code;

group_codes.forEach((group_code) => {
    document.querySelector(`#p_${group_code} .form-check > input[value="99"]`).checked = true;
});

// If TEST LEG
if(leg_type == "1"){
    let first_item = metadata.find(group => group.question == group_codes[0]);
    
    let candidates = shuffle(metadata.filter(group => group.question != group_codes[0] && group.n_answers > 0));
    let second_item = candidates[0];

    console.log(first_item["question"], first_item["answer_codes"][0]);
    console.log(second_item["question"], second_item["answer_codes"][0]);

    // Selects the first random item from group1
    document.querySelector(`#p_${first_item["question"]} .form-check > input[value="${first_item["answer_codes"][0]}"]`).checked = true;

    // Selects the first random item from a random group
    document.querySelector(`#p_${second_item["question"]} .form-check > input[value="${second_item["answer_codes"][0]}"]`).checked = true;

    // If CONTROL LEG
} else if(leg_type == "2") {
    let candidates = metadata.filter(group => group.n_answers > 0).map(group => group.question);
    let selections = shuffle(candidates).slice(0,3);
    console.log(selections);
    selections.forEach((selection) => {
        let item = metadata.find(group => group.question == selection);
        // Selects the first random item in the selection group
        document.querySelector(`#p_${selection} .form-check > input[value="${item["answer_codes"][0]}"]`).checked = true;
    });
}

// Hide the page and go to next question
// document.querySelector("body").classList.add("d-none");
// document.querySelector("#p_next").click();