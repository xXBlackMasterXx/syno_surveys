let group_codes = ["GROUP1", "GROUP2", "GROUP3", "GROUP4"];
let answer_codes = response.answers.filter(answer => group_codes.includes(answer.questionCode) && answer.code != "99").map(answer => answer.code);

// Clear all buttons
document.querySelectorAll(".form-check > input").forEach((button) => {
  button.checked = false;
});

// Recode selected options in GROUPS
answer_codes.forEach((answer_code) => {
  document.querySelector(`.form-check > input[value="${answer_code}"]`).checked = true;
});