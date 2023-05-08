function multiple_open_text({ question_code, addons, numerical_validation, fill_empty_with, top_of_mind, allow_empty_fields } = {}) {
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

  function loadAnimateCSS() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
    document.head.appendChild(link);
  }

  function updateProgress(now, min, max) {
    const percentage = ((now - min) / (max - min)) * 100;
    const progressBar = document.querySelector("#progressbar_sum");
    const progressBarRemaining = document.querySelector("#progressbar_remaining");
    progressBar.setAttribute('aria-valuenow', now);
    progressBar.setAttribute('aria-valuemin', min);
    progressBar.setAttribute('aria-valuemax', max);
    progressBar.style.width = `${percentage}%`;
    progressBar.textContent = `${now}/${numerical_validation["required_sum"]}`;
    progressBarRemaining.textContent = `Remaining: ${numerical_validation["required_sum"] - now}`;
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
      progressBarRemaining.textContent = 'Completed';
    } else {
      progressBar.classList.remove('bg-warning', 'bg-info', 'bg-primary', 'bg-success');
      progressBar.classList.add('bg-danger');
      progressBarRemaining.classList.remove('text-success', 'font-weight-bold');
      progressBarRemaining.classList.add("text-danger", "font-weight-bold", "animate__animated", "animate__headShake");
    }
  }

  let answer_options = get_answer_options();

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
  </div><h5 class="text-center" id="progressbar_remaining" style="padding: 15px !important;">Remaining: ${numerical_validation.required_sum}</h5></div>`
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

  function handle_error_message({ key, value, message }) {
    delete_error_message({ key: key, value: value });
    value.input_container.insertAdjacentHTML(
      "beforebegin",
      `<span class="d-block custom-error pb-1 text-center" id="feedback_${key}"><span class="form-error-message text-danger">${message}</span></span>`
    )
    value.input.classList.add("is-invalid", "text-danger");
    question_card.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  function delete_error_message({ key, value }) {
    const feedback = document.querySelector(`#feedback_${key}`);
    if (feedback != null) {
      feedback.remove();
      value.input.classList.remove("is-invalid", "text-danger");
    }
  }

  let reached_sum = false;
  for (let [key, value] of Object.entries(answer_options)) {
    if (numerical_validation !== undefined) {
      const max_length = numerical_validation.max_length;
      value.input.setAttribute('inputmode', 'numeric');
      value.input.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
        if (max_length !== undefined) {
          e.target.value = e.target.value.slice(0, max_length);
        }

        // Sum all open text if required sum is needed
        if(numerical_validation.required_sum !== undefined) {
          let total_sum = 0;
          for (let [key, value] of Object.entries(answer_options)) {
            total_sum += Number(value.input.value);
            
            if(total_sum == numerical_validation.required_sum){
              reached_sum = true;
            } else {
              reached_sum = false;
            }
            console.log(`Suma recalculada: ${total_sum}, reached_sum: ${reached_sum}`);

            updateProgress(total_sum, 0, numerical_validation.required_sum);
          }
        }
      });
    }
  }

  const next_button = document.querySelector("#p_next");
  next_button.addEventListener("click", (e) => {
    if (numerical_validation !== undefined) {
      const min_value = numerical_validation.min_value;
      const max_value = numerical_validation.max_value;
      const required_sum = numerical_validation.required_sum;

      for (let [key, value] of Object.entries(answer_options)) {

        if (min_value !== undefined && value.input.value < min_value && value.input.value !== "") {
          e.preventDefault();
          handle_error_message({ key: key, value: value, message: `Number can't be lesser than ${min_value}` });
        } else if (max_value !== undefined && value.input.value > max_value && value.input.value !== "") {
          e.preventDefault();
          handle_error_message({ key: key, value: value, message: `Number can't be greather than ${max_value}` });
        } else if (allow_empty_fields !== undefined && allow_empty_fields == false && value.input.value === "") {
          e.preventDefault();
          handle_error_message({ key: key, value: value, message: "This field can't be blank" });
        } else {
          delete_error_message({ key: key, value: value });
        }
        
        if(fill_empty_with !== undefined){
          if(value.input.value === "") {
            value.input.value = fill_empty_with;
          }
        }
      }

      if (required_sum !== undefined && reached_sum == false) {
        e.preventDefault();
      }
    }
  });
}

multiple_open_text({
  question_code: "Q4",
  addons: {
    text: "%",
    type: "suffix"
  },
  numerical_validation: {
    min_value: 1,
    max_value: 100,
    max_length: 3,
    required_sum: 100
  },
  fill_empty_with: 0,
  top_of_mind: false,
  allow_empty_fields: true
});