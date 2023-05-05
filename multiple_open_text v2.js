function multiple_open_text({ question_code, addons, numerical_validation, fill_empty_with, top_of_mind, allow_empty_fields} = {}) {
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

  let answer_options = get_answer_options();

  if(addons !== undefined){
    for (let [key, value] of Object.entries(answer_options)) {
      value.input_container.remove();
      if(value.label_container !== undefined){
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
  
    answer_options = {};
    const input_groups = question_card.querySelectorAll(".input-group");
    console.log(input_groups);
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
  
    console.log(answer_options);
  }

  function handle_error_message({key, value, message}){
    delete_error_message({key : key, value : value});
    value.input_container.insertAdjacentHTML(
      "beforebegin",
      `<span class="d-block custom-error pb-1 text-center" id="feedback_${key}"><span class="form-error-message text-danger">${message}</span></span>`
    )
    
    value.input.classList.add("is-invalid", "text-danger");

    question_card.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  function delete_error_message({key, value}) {
    const feedback = document.querySelector(`#feedback_${key}`);
    console.log(feedback);
    if(feedback != null){
      feedback.remove();
      value.input.classList.remove("is-invalid", "text-danger");
    }
  }
  
  for(let [key, value] of Object.entries(answer_options)) {
    if(numerical_validation !== undefined){
      const max_length = numerical_validation.max_length;
      value.input.setAttribute('inputmode', 'numeric');
      
      value.input.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
        if(max_length !== undefined){
          e.target.value = e.target.value.slice(0, max_length);
        }
      });
      
    }

  }
  
  const next_button = document.querySelector("#p_next");
  next_button.addEventListener("click", (e) => {
    let total_sum = 0;
    for(let [key, value] of Object.entries(answer_options)) {
      if(numerical_validation !== undefined){
        const min_value = numerical_validation.min_value;
        const max_value = numerical_validation.max_value;
        const required_sum = numerical_validation.required_sum;

        if(min_value !== undefined && value.input.value < min_value && value.input.value !== ""){
          e.preventDefault();
          handle_error_message({key : key, value : value, message : `Number can't be lesser than ${min_value}`});
        } else if(max_value !== undefined && value.input.value > max_value && value.input.value !== ""){
          e.preventDefault();
          handle_error_message({key : key, value : value, message : `Number can't be greather than ${max_value}`});
        } else if(allow_empty_fields !== undefined && allow_empty_fields == false && value.input.value === "") {
          e.preventDefault();
          handle_error_message({key : key, value : value, message : "This field can't be blank"});
        } else {
          delete_error_message({key : key, value : value});
        }

        if(value.input.value !== ""){
          total_sum += value.input.value;
        }
      }
    }
  });
}

// const first_field = Object.keys(answer_options)[0];
// answer_options[first_field].input.value == ""

multiple_open_text({
  question_code: "Q5",
  addons: {
    text: "USD",
    type: "suffix"
  }, 
  numerical_validation : {
    min_value : 10,
    max_value : 100,
    max_length : 3
    // required_sum : 100
  },
  fill_empty_with : 0,
  top_of_mind : true,
  allow_empty_fields : true
});