function multiple_open_text({ question_codes, numerical_validation, text_validation } = {}) {
  var question_cards = [];
  var visible_question_codes = [];
  question_codes.forEach((question_code) => {
    var card = document.querySelector(`#q_${question_code}_card`);
    if(card != null) {
      question_cards.push(card);
      visible_question_codes.push(question_code);
    }
  });

  // Create an object to save open text information
  var open_texts = {};
  // Create a variable to store the global sum
  var sum = 0;

  question_cards.forEach((question_card, index) => {
    var free_text = question_card.querySelector("input, textarea");

    if (index != 0) {
      var hr = document.createElement("hr");
      hr.setAttribute("class", "my-5");
      question_cards[0].appendChild(hr);
      question_cards[0].appendChild(question_card.querySelector("h5"));
      question_cards[0].appendChild(free_text);
      question_card.remove();
    }

    open_texts[visible_question_codes[index]] = free_text;

  });

  if (numerical_validation !== undefined && numerical_validation["required_sum"] !== undefined) {
    question_cards[0].insertAdjacentHTML(
      "beforebegin",
      `<div class="question card mb-5 px-4 pt-3 pb-4 border-0 bg-white sticky-top" style="padding-top: 15px !important;"><div class="progress" style="height: 20px; position: sticky; top: 0px; z-index:100">
    <div class="progress-bar progress-bar-striped progress-bar-animated font-weight-bold" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%" id="progressbar_sum"></div>
    </div><h5 class="text-center" id="progressbar_remaining" style="padding: 15px !important;">Remaining: ${numerical_validation["required_sum"]}</h5></div>`
    );
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

  function loadAnimateCSS() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
    document.head.appendChild(link);
  }
  

  function handle_error_message(key, input, message) {
    var input_container = input;
    while (!input_container.parentElement.classList.contains("card")) {
      input_container = input_container.parentElement;
    }

    var feedback = document.querySelector("#feedback_" + key);
    if (feedback != null) {
      feedback.remove();
      input.classList.remove("is-invalid");
    }

    input.classList.add("is-invalid");
    input_container.insertAdjacentHTML(
      "beforebegin",
      `<span class="d-block custom-error pb-1 text-center" id="feedback_${key}"><span class="form-error-message text-danger">${message}</span></span>`
    );

    console.log("Scrolling to" + key);
    feedback.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  function delete_error_message(key, input) {
    var feedback = document.querySelector("#feedback_" + key);
    if (feedback != null) {
      feedback.remove();
      input.classList.remove("is-invalid");
    }
  }

  function beep() {
    var context = new AudioContext();
    var o = context.createOscillator();
    var g = context.createGain();
    o.connect(g);
    g.connect(context.destination);
    o.start(0);
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1);
  }

  for (let [key, value] of Object.entries(open_texts)) {
    value.addEventListener("input", (e) => {

      // If there is any numerical validation
      if (numerical_validation !== undefined) {
        // Set up the input to allow only numbers
        e.target.value = e.target.value.replace(/[^0-9]/g, "");

        // Validate if textbox is not empty
        if (e.target.value != "") {
          // Set a required length for value per textbox
          if (numerical_validation["max_length"] !== undefined) {
            if (e.target.value.length > numerical_validation["max_length"]) {
              e.target.value = e.target.value.slice(0, numerical_validation["max_length"]);
            }
          }
        }

        // Set up the total sum if is required
        if (numerical_validation["required_sum"] !== undefined) {
          console.clear();
          console.log(`${key} : ${e.target.value}`);
          sum = 0;
          Object.values(open_texts).forEach((open_text) => {
            sum += Number(open_text.value);
          });

          console.log("sum", sum);
          updateProgress(sum, 0, 100);
        }
      }
    });
  }

  // Sumar total si la ventana acaba de cargar
  window.addEventListener("load", () => {
    if (numerical_validation !== undefined) {
      Object.values(open_texts).forEach((open_text) => {
        open_text.setAttribute('inputmode', 'numeric');
      });

      // Set up the total sum if is required
      if (numerical_validation["required_sum"] !== undefined) {
        loadAnimateCSS();
        sum = 0;
        Object.values(open_texts).forEach((open_text) => {
          sum += Number(open_text.value);
        });

        console.log("sum", sum);
        updateProgress(sum, 0, 100);
      }
    }
  });

  document.querySelector("#p_next").addEventListener("click", (e) => {
    var error = false;
    // Add numerical validation
    if (numerical_validation !== undefined) {
      if (numerical_validation["required_sum"] !== undefined && sum != numerical_validation["required_sum"]) {
        e.preventDefault();
        error=true;

        async function playAudio() {
          const audio = new Audio('https://dk8uke8mqjln7.cloudfront.net/526879/baabee2368e0b718feb12d98af458dd9_.mp3');
          await audio.play();
        }

        playAudio();
      }

      for (let [key, input] of Object.entries(open_texts)) {
        // Validate if textbox is not empty
        if (input.value != "") {
          // Set a required min value per textbox
          if (numerical_validation["min_value"] !== undefined) {
            if (input.value < numerical_validation["min_value"]) {
              e.preventDefault();
              error=true;
              handle_error_message(key, input, message = `The number can't be lesser than ${numerical_validation["min_value"]}`);
            } else {
              delete_error_message(key, input);
            }
          }

          // Set a required max value per textbox
          if (numerical_validation["max_value"] !== undefined) {
            if (input.value > numerical_validation["max_value"]) {
              e.preventDefault();
              error=true;
              handle_error_message(key, input, message = `The number can't be greather than ${numerical_validation["max_value"]}`);
            } else {
              delete_error_message(key, input);
            }
          }
        }
      }

      // Fill empty textboxes with 0 if click next page
      if (numerical_validation !== undefined && error != true) {
        for (let [key, input] of Object.entries(open_texts)) {
          if (input.value == "") {
            input.value = 0;
          }
        }
      }
    }

    // Add text validation
    if (text_validation !== undefined) {
      if (text_validation["required_words"] !== undefined) {
        function count_words(str) {
          str = str.replace(/(^s*)| (s*$)/gi, "");
          str = str.replace(/[ ]{2,}/gi, " ");
          str = str.replace(/n /, "n");
          return str.split(' ').length;
        }

        for (let [key, input] of Object.entries(open_texts)) {
          if (count_words(input.value) < text_validation["required_words"] || input.value == "") {
            e.preventDefault();

            handle_error_message(key, input, message = "This field doesn't meet the required amount of words");
          } else {
            delete_error_message(key, input);
          }
        }

      }
    }

  });

  return (open_texts);
}

multiple_open_text({
  /* Define the question codes for each textbox */
  question_codes: ["Q1x1", "Q1x2", "Q1x3", "Q1x4", "Q1x5", "Q1x6"],
  /* Define numerical validations */
  numerical_validation: {
    min_value: 10, // Set a min val for each textbox
    max_value: 100, // Set a max val for each textbox
    max_length: 3, // Set a max character length for each textbox
    required_sum: 100 // Set a required sum
  },
  /* OR */
  /* Define a word validation */
  /* text_validation: {
    required_words: 3 // Set a required amount of words per textbox
  } */
});
