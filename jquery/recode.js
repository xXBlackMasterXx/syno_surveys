function recode({ question_code, filter, dictionary, test_mode } = {}) {
  // Select the question card
  const question_card = $(`#q_${question_code}_card`);
  // If question code doesn't exists
  if (question_card.length == 0) {
    alert(`Question card with code "${question_code}" not found.`);
    return;
  }
  // Select the options container
  const options_container = question_card.find(`#p_${question_code}`);
  // Select all form-check elements
  const form_checks = question_card.find('.form-check');
  // If question doesn't have answer options
  if (form_checks.length == 0) {
    alert(`No answer options found for question with code "${question_code}".`);
    return;
  }
  // Create an object to store the answer options
  const answer_options = {};
  // Loop through each form-check element
  form_checks.each((index, form_check) => {
    // Select the input element
    const input = $(form_check).find('input');
    // Get the value of the input element
    const answer_code = input.val();
    // Get the label text
    const label = $(form_check).find('label > div > div').text().split('\n')[0].trim();
    // Select the open text input element
    const open_text = $(form_check).find('label > div:nth-child(2) > input');
    // Add the answer option to the answer_options object
    answer_options[answer_code] = { form_check, input, label, open_text };
  });

  // Clear all the options
  for (const [answer_code, value] of Object.entries(answer_options)) {
    value.input.prop('checked', false);
  }
  // Check options according to each region/country in hashmap dictionary
  let found_filter = false;
  // Loop over response.answers Objects
  response.answers.forEach(function (answer) {
    if (answer.questionCode == filter) {
      found_filter = true;
      const elements = dictionary[answer.code];
      for (const [answer_code, value] of Object.entries(answer_options)) {
        if (elements.includes(Number(answer_code))) {
          value.input.prop('checked', true);
        }
      }
    }
  });

  if (!found_filter) {
    alert(`Filter question with code "${filter}" not found in response object.`);
    return;
  }

  if (test_mode === undefined || test_mode == false) {
    // Hides the page and go to next page
    $('body').css('display', 'none');
    $('#p_next').click();
  } else if (test_mode == true) {
    // Shows the page if testing
    $('body').css('display', 'flex');
  }
}
