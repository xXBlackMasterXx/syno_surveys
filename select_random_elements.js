function select_random_elements({question_code, n}) {
    // Select the question card
    const question_card = document.querySelector(`#q_${question_code}_card`);
    // If answer code doesn't exists
    if (question_card === undefined){ 
        alert(`Question card with code "${question_code}" not found.`);
        return;
    }
    // Select the options container
    const answer_options_container = question_card.querySelector(`#p_${question_code}`);
    // Select all form-check elements
    const form_checks = question_card.querySelectorAll(".form-check");
    // If question doesn't have answer options
    if (form_checks === undefined) {
        alert(`No answer options found for question with code "${question_code}".`);
        return;
    }
    // Create an object to store the answer options
    let answer_options = {};
    // Loop through each form-check element
    form_checks.forEach((form_check, index) => {
        // Select the input element
        const input = form_check.querySelector("input");
        // Get the value of the input element
        const answer_code = input.value;
        // Get the label text
        const label = form_check.querySelector("label > div > div").innerText;
        // Select the open text input element
        const open_text = form_check.querySelector("label > div:nth-child(2) > input");
        // Add the answer option to the answer_options object
        answer_options[answer_code] = { "form_check": form_check, "input": input, "label": label, "open_text": open_text };
    });

    const arr = Object.keys(answer_options);

    let result = new Array(n);
    let len = arr.length;
    let taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandomElements: more elements taken than available");
    while (n--) {
      let x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? Number(taken[x]) : Number(x)];
      taken[x] = --len in taken ? taken[len] : len;
    }

    for(let [key, value] of Object.entries(answer_options)){
        if(result.includes(key)){
            value.input.checked = true;
        } else {
            value.input.checked = false;
        }
    }

    return result;
}
  
console.log(select_random_elements({question_code : "F18xFILTER", n : 15}));
  