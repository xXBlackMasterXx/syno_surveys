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

| Question type            | Library URL                                                          |
| :----------------------- | :------------------------------------------------------------------- |
| _Single choice_          | `https://survey-library.azurewebsites.net/single_choice.js`          |
| _Multiple choice_        | `https://survey-library.azurewebsites.net/multiple_choice.js`        |
| _Single choice matrix_   | `https://survey-library.azurewebsites.net/single_choice_matrix.js`   |
| _Multiple choice matrix_ | `https://survey-library.azurewebsites.net/multiple_choice_matrix.js` |
| _Open texts_             | `https://survey-library.azurewebsites.net/multiple_open_text.js`     |
| _Rank (numeric)_         | `https://survey-library.azurewebsites.net/rank.js`                   |

Only import the necessary libraries for the question types that you need to configure.

# Index

- [Randomize by](README.md#example-randomize-by)
  - [Single choice](README.md#for-single-choice)

2. [Randomize a subset of answers](README.md#example-randomize-a-subset-of-answers)

# Examples of use

## **Example**: Randomize by

### For single choice

> - Step 1: In the first page, copy and paste the template into the Javascript editor.
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
      schema: "Q1xSCHEMA" // Open text in the same page
    });

    /* Write scripts above this comment */
    document.querySelector("body").style.opacity = "1";
  })
  /* If a library could not be imported throw an error */
  .catch((error) => {
    console.error(`Failed to load script: ${error}`);
  });
```

> - Step 5: In the second page, copy and paste the template into the Javascript editor.
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

    /* PAGE2 */
    single_choice({
      /* Question code to apply these settings */
      question_code: "Q1",
      randomize: {
        filter_schema: "Q1xSCHEMA"
      }
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
      schema: "Q1xSCHEMA" // Open text in the same page
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
        filter_schema: "Q1xSCHEMA"
      }
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

> [!IMPORTANT]
> Every answer code that is not included in the randomization list will be anchored

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
      }
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

> [!IMPORTANT]
> Every answer code that is not included in the randomization list will be anchored

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
      }
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

> [!IMPORTANT]
> Every answer code that is not included in the randomization list will be anchored

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
        answer_groups: [
          [1, 2, 3],
          [99], // Anchored since only one
          [999], // Anchored since only one
        ],
        randomize_groups: true // Randomize all the groups of above
      }
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

> [!IMPORTANT]
> Every answer code that is not included in the randomization list will be anchored

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
        answer_groups: [
          [1, 2, 3],
          [99], // Anchored since only one
          [999], // Anchored since only one
        ],
        randomize_groups: true, // Randomize all the groups of above
      }
    });

    /* Write scripts above this comment */
    document.querySelector("body").style.opacity = "1";
  })
  /* If a library could not be imported throw an error */
  .catch((error) => {
    console.error(`Failed to load script: ${error}`);
  });
```

## **Example**: Array filter (inclusive)

### For single choice

> [!IMPORTANT]
> Dump the schema means to save the answer codes and their order in an open text question.
> Only use in case you need to make an array filter using this question.

> - Step 1: Copy and paste the template into the Javascript editor.
> - Step 2. Add the library URL for single choice in the `scripts` list in quotes.
> - Step 3: Change the question code in `question_code`.
> - Step 4: Change the question used as a filter in `filter`
> - Step 5: Change the `filter_schema` with the schema of the filter question.
> - Step 6: Set the `type` to `inclusive`

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
      question_code: "Q2",
      array_filter: {
        filter: "Q1",
        filter_schema: "Q1xSCHEMA",
        type: "inclusive" // includes all checked answers in the filter
      }
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

> [!IMPORTANT]
> Dump the schema means to save the answer codes and their order in an open text question.
> Only use in case you need to make an array filter using this question.

> - Step 1: Copy and paste the template into the Javascript editor.
> - Step 2. Add the library URL for multiple choice in the `scripts` list in quotes.
> - Step 3: Change the question code in `question_code`.
> - Step 4: Change the question used as a filter in `filter`
> - Step 5: Change the `filter_schema` with the schema of the filter question.
> - Step 6: Set the `type` to `inclusive`

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
      question_code: "Q2",
      array_filter: {
        filter: "Q1",
        filter_schema: "Q1xSCHEMA",
        type: "inclusive" // includes all checked answers in the filter
      }
    });

    /* Write scripts above this comment */
    document.querySelector("body").style.opacity = "1";
  })
  /* If a library could not be imported throw an error */
  .catch((error) => {
    console.error(`Failed to load script: ${error}`);
  });
```

### For open text(s)

> [!IMPORTANT]
> Dump the schema means to save the answer codes and their order in an open text question.
> Only use in case you need to make an array filter using this question.

> - Step 1: Copy and paste the template into the Javascript editor.
> - Step 2. Add the library URL for multiple open text in the `scripts` list in quotes.
> - Step 3: Change the question code in `question_code`.
> - Step 4: Change the question used as a filter in `filter`
> - Step 5: Change the `filter_schema` with the schema of the filter question.
> - Step 6: Set the `type` to `inclusive`

```javascript
// Copy and paste library URLS separated by commas
let scripts = ["https://survey-library.azurewebsites.net/multiple_open_text.js"];

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

    multiple_open_text({
      /* Question code to apply these settings */
      question_code: "Q2",
      array_filter: {
        filter: "Q1",
        filter_schema: "Q1xSCHEMA",
        type: "inclusive" // includes all checked answers in the filter
      }
    });

    /* Write scripts above this comment */
    document.querySelector("body").style.opacity = "1";
  })
  /* If a library could not be imported throw an error */
  .catch((error) => {
    console.error(`Failed to load script: ${error}`);
  });
```

### For ranking

> [!IMPORTANT]
> Dump the schema means to save the answer codes and their order in an open text question.
> Only use in case you need to make an array filter using this question.

> - Step 1: Copy and paste the template into the Javascript editor.
> - Step 2. Add the library URL for multiple open text in the `scripts` list in quotes.
> - Step 3: Change the question code in `question_code`.
> - Step 4: Change the question used as a filter in `filter`
> - Step 5: Change the `filter_schema` with the schema of the filter question.
> - Step 6: Set the `type` to `inclusive`

```javascript
// Copy and paste library URLS separated by commas
let scripts = ["https://survey-library.azurewebsites.net/ranking.js"];

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

    ranking({
      /* Question code to apply these settings */
      question_code: "Q2",
      array_filter: {
        filter: "Q1",
        filter_schema: "Q1xSCHEMA",
        type: "inclusive" // includes all checked answers in the filter
      }
    });

    /* Write scripts above this comment */
    document.querySelector("body").style.opacity = "1";
  })
  /* If a library could not be imported throw an error */
  .catch((error) => {
    console.error(`Failed to load script: ${error}`);
  });
```

## **Example**: Array filter (exclusive)

### For single choice

> [!IMPORTANT]
> Dump the schema means to save the answer codes and their order in an open text question.
> Only use in case you need to make an array filter using this question.

> - Step 1: Copy and paste the template into the Javascript editor.
> - Step 2. Add the library URL for single choice in the `scripts` list in quotes.
> - Step 3: Change the question code in `question_code`.
> - Step 4: Change the question used as a filter in `filter`
> - Step 5: Change the `filter_schema` with the schema of the filter question.
> - Step 6: Set the `type` to `exclusive`

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
      question_code: "Q2",
      array_filter: {
        filter: "Q1",
        filter_schema: "Q1xSCHEMA",
        type: "exclusive" // includes all checked answers in the filter
      }
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

> [!IMPORTANT]
> Dump the schema means to save the answer codes and their order in an open text question.
> Only use in case you need to make an array filter using this question.

> - Step 1: Copy and paste the template into the Javascript editor.
> - Step 2. Add the library URL for multiple choice in the `scripts` list in quotes.
> - Step 3: Change the question code in `question_code`.
> - Step 4: Change the question used as a filter in `filter`
> - Step 5: Change the `filter_schema` with the schema of the filter question.
> - Step 6: Set the `type` to `exclusive`

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
      question_code: "Q2",
      array_filter: {
        filter: "Q1",
        filter_schema: "Q1xSCHEMA",
        type: "exclusive" // includes all checked answers in the filter
      }
    });

    /* Write scripts above this comment */
    document.querySelector("body").style.opacity = "1";
  })
  /* If a library could not be imported throw an error */
  .catch((error) => {
    console.error(`Failed to load script: ${error}`);
  });
```

### For open text(s)

> [!IMPORTANT]
> Dump the schema means to save the answer codes and their order in an open text question.
> Only use in case you need to make an array filter using this question.

> - Step 1: Copy and paste the template into the Javascript editor.
> - Step 2. Add the library URL for multiple open text in the `scripts` list in quotes.
> - Step 3: Change the question code in `question_code`.
> - Step 4: Change the question used as a filter in `filter`
> - Step 5: Change the `filter_schema` with the schema of the filter question.
> - Step 6: Set the `type` to `exclusive`

```javascript
// Copy and paste library URLS separated by commas
let scripts = ["https://survey-library.azurewebsites.net/multiple_open_text.js"];

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

    multiple_open_text({
      /* Question code to apply these settings */
      question_code: "Q2",
      array_filter: {
        filter: "Q1",
        filter_schema: "Q1xSCHEMA",
        type: "exclusive" // excludes all checked answers in the filter
      }
    });

    /* Write scripts above this comment */
    document.querySelector("body").style.opacity = "1";
  })
  /* If a library could not be imported throw an error */
  .catch((error) => {
    console.error(`Failed to load script: ${error}`);
  });
```

### For ranking

> [!IMPORTANT]
> Dump the schema means to save the answer codes and their order in an open text question.
> Only use in case you need to make an array filter using this question.

> - Step 1: Copy and paste the template into the Javascript editor.
> - Step 2. Add the library URL for multiple open text in the `scripts` list in quotes.
> - Step 3: Change the question code in `question_code`.
> - Step 4: Change the question used as a filter in `filter`
> - Step 5: Change the `filter_schema` with the schema of the filter question.
> - Step 6: Set the `type` to `exclusive`

```javascript
// Copy and paste library URLS separated by commas
let scripts = ["https://survey-library.azurewebsites.net/ranking.js"];

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

    ranking({
      /* Question code to apply these settings */
      question_code: "Q2",
      array_filter: {
        filter: "Q1",
        filter_schema: "Q1xSCHEMA",
        type: "exclusive" // excludes all checked answers in the filter
      }
    });

    /* Write scripts above this comment */
    document.querySelector("body").style.opacity = "1";
  })
  /* If a library could not be imported throw an error */
  .catch((error) => {
    console.error(`Failed to load script: ${error}`);
  });
```

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
