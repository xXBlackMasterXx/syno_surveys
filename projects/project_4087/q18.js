function shuffle(DOMList) {
    var i, j, temp;
    for (i = DOMList.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = DOMList[i];
        DOMList[i] = DOMList[j];
        DOMList[j] = temp;
    }

    return DOMList;
}

let q8 = [];
let q14 = [];

response.answers.forEach((answer) => {
  // Get responses from Q8
  if(answer.questionCode == "Q8" && answer.rowCode == "1") {
    q8.push(answer.columnCode);
  }

  // Get answer codes from Q14 that were Have visited, Visiten ofter or Favourite retailer.
  if(answer.questionCode == "Q14" && ["3","4","5"].includes(answer.columnCode)){
    q14.push(answer.rowCode);
  }
});

// Eliminate duplicates from Q8 answer codes
q8 = [...new Set(q8)];

let filteredAnswerCodes = q8.filter(answer => q14.includes(answer));

// Shuffle answer codes
filteredAnswerCodes = shuffle(filteredAnswerCodes);


// filteredAnswerCodes.forEach((answerCode) => {
//   document.querySelector(`.form-check > input[value='${answerCode}']`).checked = true;
// });