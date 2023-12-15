function add_insertans({filter, selector}) {
    response.answers.forEach((answer) => {
      var location = document.querySelector(selector);
      if (answer.questionCode == filter) {
        if (answer.value == "") {
          location.textContent = answer.label;
        } else {
          location.textContent = answer.value;
        }
      }
    });
}

add_insertans({
    // Single choice to use its selected option
    filter : "Q1", 
    // In the current page, the CSS selector (id or class) to be replaced
    selector : "#other"
});