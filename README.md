# Syno Survey Library

In order to make use of this library, copy this code into the Javascript editor in the page.
Once done, copy and paste the library URLS you want to use and configure them

```javascript
// Copy and paste library URLS separated by commas
let scripts = [""];

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
    /* Write scripts below this comment */

    /* Write scripts above this comment */
    document.querySelector("body").style.opacity = "1";
  })
  /* If a library could not be imported throw an error */
  .catch((error) => {
    console.error(`Failed to load script: ${error}`);
  });
```

Currently, you can import the following libraries:

| Question type            | Library URL                                                          | Supported features          |
| :----------------------- | :------------------------------------------------------------------- | :-------------------------- |
| _Single choice_          | `https://survey-library.azurewebsites.net/single_choice.js`          | - [x] Randomize subset of answers |
| _Multiple choice_        | `https://survey-library.azurewebsites.net/multiple_choice.js`        | aasd                        |
| _Single choice matrix_   | `https://survey-library.azurewebsites.net/single_choice_matrix.js`   | aasd                        |
| _Multiple choice matrix_ | `https://survey-library.azurewebsites.net/multiple_choice_matrix.js` | aasd                        |
| _Open texts_             | `https://survey-library.azurewebsites.net/multiple_open_text.js`     | aasd                        |
| _Rank (numeric)_         | `https://survey-library.azurewebsites.net/rank.js`                   | aasd                        |

Only import the necessary libraries for the question types that you need to configure.

# Examples of use

## **Example**: Randomize by

### For single choice

> - Step 1: Copy and paste the template into the Javascript editor.
> - Step 2. Add the library URL in the `scripts` to the list in quotes.
> - Step 2: Change the question code in `question_code`.
> - Step 4: Change the schema in `question_schema`

```javascript
// Copy and paste library URLS separated by commas
let scripts = ["https://survey-library.azurewebsites.net/single_choice.js"];

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
    /* Write scripts below this comment */

    /* PAGE1 */
    single_choice({
      /* Question code to apply these settings */
      question_code: "Q1",
      schema: "Q1xSCHEMA", // Open text in the same page
    });

    /* Write scripts above this comment */
    document.querySelector("body").style.opacity = "1";
  })
  /* If a library could not be imported throw an error */
  .catch((error) => {
    console.error(`Failed to load script: ${error}`);
  });
```

> - Step 5: Copy and paste the template into the Javascript editor.
> - Step 6. Add the library URL for single choice in the `scripts` list in quotes.
> - Step 7: Change the question code in `question_code`.
> - Step 8: Change the filter schema in `filter_schema` with exactly the same previous question's schema.

```javascript
// Copy and paste library URLS separated by commas
let scripts = ["https://survey-library.azurewebsites.net/single_choice.js"];

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
    /* Write scripts below this comment */

    /* PAGE1 */
    single_choice({
      /* Question code to apply these settings */
      question_code: "Q1",
      randomize: {
        filter_schema: "Q1xSCHEMA",
      },
    });

    /* Write scripts above this comment */
    document.querySelector("body").style.opacity = "1";
  })
  /* If a library could not be imported throw an error */
  .catch((error) => {
    console.error(`Failed to load script: ${error}`);
  });
```

### For multiple choice

> - Step 1: Copy and paste the template into the Javascript editor.
> - Step 2. Add the library URL for multiple choice in the `scripts` list in quotes.
> - Step 2: Change the question code in `question_code`.
> - Step 4: Change the schema in `question_schema`

```javascript
// Copy and paste library URLS separated by commas
let scripts = ["https://survey-library.azurewebsites.net/muliple_choice.js"];

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
    /* Write scripts below this comment */

    /* PAGE1 */
    multiple_choice({
      /* Question code to apply these settings */
      question_code: "Q1",
      schema: "Q1xSCHEMA", // Open text in the same page
    });

    /* Write scripts above this comment */
    document.querySelector("body").style.opacity = "1";
  })
  /* If a library could not be imported throw an error */
  .catch((error) => {
    console.error(`Failed to load script: ${error}`);
  });
```

> - Step 5: Copy and paste the template into the Javascript editor.
> - Step 6. Add the library URL for multiple choice in the `scripts` list in quotes.
> - Step 7: Change the question code in `question_code`.
> - Step 8: Change the filter schema in `filter_schema` with exactly the same previous question's schema.

```javascript
// Copy and paste library URLS separated by commas
let scripts = ["https://survey-library.azurewebsites.net/multiple_choice.js"];

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
    /* Write scripts below this comment */

    /* PAGE1 */
    multiple_choice({
      /* Question code to apply these settings */
      question_code: "Q1",
      randomize: {
        filter_schema: "Q1xSCHEMA",
      },
    });

    /* Write scripts above this comment */
    document.querySelector("body").style.opacity = "1";
  })
  /* If a library could not be imported throw an error */
  .catch((error) => {
    console.error(`Failed to load script: ${error}`);
  });
```

## **Example**: Randomize a subset of answers

### For single choice

> - Step 1: Copy and paste the template into the Javascript editor.
> - Step 2. Add the library URL for single choice in the `scripts` list in quotes.
> - Step 3: Change the question code in `question_code`.
> - Step 4: Inside `answer_groups` and the second brackets, put the list of answer codes that needs to be randomized together.
> - Step 5: Set `randomize` to `false` since there are not more groups to randomize

```javascript
// Copy and paste library URLS separated by commas
let scripts = ["https://survey-library.azurewebsites.net/single_choice.js"];

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
    /* Write scripts below this comment */

    single_choice({
      /* Question code to apply these settings */
      question_code: "Q1",
      randomize: {
        answer_groups: [[1, 2, 3]],
        randomize_groups: false
      },
    });

    /* Write scripts above this comment */
    document.querySelector("body").style.opacity = "1";
  })
  /* If a library could not be imported throw an error */
  .catch((error) => {
    console.error(`Failed to load script: ${error}`);
  });
```

### For multiple choice

> - Step 1: Copy and paste the template into the Javascript editor.
> - Step 2. Add the library URL for multiple choice in the `scripts` list in quotes.
> - Step 3: Change the question code in `question_code`.
> - Step 4: Inside `answer_groups` and the second brackets, put the list of answer codes that needs to be randomized together.
> - Step 5: Set `randomize` to `false` since there are not more groups to randomize

```javascript
// Copy and paste library URLS separated by commas
let scripts = ["https://survey-library.azurewebsites.net/multiple_choice.js"];

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
    /* Write scripts below this comment */

    multiple_choice({
      /* Question code to apply these settings */
      question_code: "Q1",
      randomize: {
        answer_groups: [[1, 2, 3]],
        randomize_groups: false
      },
    });

    /* Write scripts above this comment */
    document.querySelector("body").style.opacity = "1";
  })
  /* If a library could not be imported throw an error */
  .catch((error) => {
    console.error(`Failed to load script: ${error}`);
  });
```

## **Example**: Randomize answer groups

### For single choice

```javascript
single_choice({
  /* Question code to apply these settings */
  question_code: "Q1",
  randomize: {
    answer_groups: [
      [1, 2, 3],
      [99], // Anchored since only one
      [999], // Anchored since only one
    ],
    randomize_groups: true, // Randomize all the groups of above
  },
});
```

### For multiple choice

```javascript
multiple_choice({
  /* Question code to apply these settings */
  question_code: "Q1",
  randomize: {
    answer_groups: [
      [1, 2, 3],
      [99], // Anchored since only one
      [999], // Anchored since only one
    ],
    randomize_groups: true, // Randomize all the groups of above
  },
});
```

## **Example**: Array filter (inclusive)

### For single choice

Step 1. Dump the schema of the filter question

```javascript
single_choice({
  /* Question code to apply these settings */
  question_code: "Q2",
  array_filter: {
    filter: "Q1",
    filter_schema: "Q1xSCHEMA",
  },
});
```

Step 2.

```javascript
single_choice({
  /* Question code to apply these settings */
  question_code: "Q2",
  array_filter: {
    filter: "Q1",
    filter_schema: "Q1xSCHEMA",
  },
});
```

### For multiple choice

```javascript
multiple_choice({
  /* Question code to apply these settings */
  question_code: "Q1",
  randomize: {
    answer_groups: [
      [1, 2, 3],
      [99], // Anchored since only one
      [999], // Anchored since only one
    ],
    randomize_groups: false,
  },
});
```

### For open text(s)

### For ranking

## **Example**: Array filter (exclusive)

## Example: Validate selections

### For multiple choice

### For multiple choice matrix

### For ranking

## Example: Exclusive rows

### For single choice matrix

### For multiple choice matrix

## Example: Exclusive columns

### For single choice matrix

### For multiple choice matrix

## Example: First text field mandatory

### For multiple open text

## Example: Numerical validation

### For open text(s)

## Example: Create a dropdown

### For single choice

## Add suffix to textfields

### For open text(s)
