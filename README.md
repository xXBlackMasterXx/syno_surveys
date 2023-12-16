# Syno Survey Library

The repository for the temporal Javascript codes

In order to make use of this library, you have to copy this code into the Javascript editor within a question page.
Once done, copy and paste the library URLS you want to use and cofigure them

```javascript
// Insert your script URLs
let scripts = ["Add library here separated by commas"];

let promises = scripts.map((script) => {
  return new Promise((resolve, reject) => {
    document.querySelector("body").style.opacity = "0";
    let s = document.createElement("script");
    s.src = script;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
});

Promise.all(promises)
  .then(() => {
    /* All scripts are loaded, you can execute your functions here */
    rank({ question_code: "Q1" });
    display_open_text({ question_code: "Q3", selector: "#p_Q2_0" });

    /* All script ends here */
    document.querySelector("body").style.opacity = "1";
  })
  /* If a library could not be imported throw an error */
  .catch((error) => {
    console.error(`Failed to load script: ${error}`);
  });
```

Currently, you can import the following libraries:

| Question type            | Library URL                                                  |
| :----------------------- | :----------------------------------------------------------- |
| _Single choice_          | `survey-library.azurewebsites.net/single_choice.js`          |
| _Multiple choice_        | `survey-library.azurewebsites.net/multiple_choice.js`        |
| _Single choice matrix_   | `survey-library.azurewebsites.net/single_choice_matrix.js`   |
| _Multiple choice matrix_ | `survey-library.azurewebsites.net/multiple_choice_matrix.js` |
| _Open texts_             | `survey-library.azurewebsites.net/multiple_open_text.js`     |
| _Rank (numeric)_         | `survey-library.azurewebsites.net/rank.js`                   |

Only import the necessary libraries for the question types you need to configure.

## Examples of use

### Single choice

To randomize the answers inside the question


```javascript
single_choice({
  /* Question code to apply these settings */
  question_code: "Q1",
  randomize: {
    answer_groups: [[1, 2, 3]],
    randomize_groups: false,
  },
});
```

To anchor answers inside the question

```javascript
single_choice({
  /* Question code to apply these settings */
  question_code: "Q1",
  randomize: {
    answer_groups: [
      [1, 2, 3],
      [99],  // Anchored since only one
      [999], // Anchored since only one
    ],
    randomize_groups: false,
  },
});
```

To randomize answers by groups

```javascript
single_choice({
  /* Question code to apply these settings */
  question_code: "Q1",
  randomize: {
    answer_groups: [
      [1, 2, 3],
      [99],  // Anchored since only one
      [999], // Anchored since only one
    ],
    randomize_groups: true, // Randomize all the groups of above
  },
});
```
