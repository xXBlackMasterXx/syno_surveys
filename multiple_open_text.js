// INPUT VARIABLES
var question_codes = ["Q1x1", "Q1x2", "Q1x3", "Q1x4"];

var question_cards = [];
question_codes.forEach((question_code) => {
  question_cards.push(document.querySelector(`#q_${question_code}_card`));
});

var open_text_containers = [];
question_cards.forEach((question_card) => {
  open_text_containers.push(question_card.querySelector("input, textarea"));
});

// Counter to validate required sum
var sum = 0;

// Event listener if input/textarea changes
open_text_containers.forEach((open_text_container) => {
  sum = 0;
  open_text_container.addEventListener("input", (e) => {
    if(e.target.value != ""){
      sum += Number(e.target.value);
      console.log(sum);
    }
  });
});

document.querySelector("#p_next").addEventListener("click", (e) => {
    e.preventDefault();
});