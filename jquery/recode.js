function recode({ question_code, filter, dictionary, test_mode } = {}) {
    const question_card = $(`#q_${question_code}_card`);
    if (question_card.length == 0) {
      alert(`Question card with code "${question_code}" not found.`);
      return;
    }
    const options_container = question_card.find(`#p_${question_code}`);
    const form_checks = question_card.find('.form-check');
    if (form_checks.length == 0) {
      alert(`No answer options found for question with code ${question_code}.`);
      return;
    }
    const answer_options = {};
    form_checks.each(function () {
      const form_check = $(this);
      const input = form_check.find('input');
      const answer_code = input.val();
      const label = form_check.find('label > div > div').text().split('\n')[0].trim();
      const open_text = form_check.find('label > div:nth-child(2) > input');
      answer_options[answer_code] = { form_check, input, label, open_text };
    });
  
    // Clear all the options
    for (const [answer_code, value] of Object.entries(answer_options)) {
      value.input.prop('checked', false);
    }
  
    // Check options according to each region/country in hashmap dictionary
    response.answers.forEach(function (answer) {
      if (answer.questionCode == filter) {
        const elements = dictionary[answer.code];
        for (const [answer_code, value] of Object.entries(answer_options)) {
          if (elements.includes(Number(answer_code))) {
            value.input.prop('checked', true);
          }
        }
      }
    });
  
    if (test_mode === undefined || test_mode == false) {
      // Hides the page and go to next page
      $('body').css('display', 'none');
      $('#p_next').click();
    } else if (test_mode == true) {
      // Shows the page if testing
      $('body').css('display', 'flex');
    }
  }
  