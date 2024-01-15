# Syno Survey Library

The repository for the temporal Javascript codes

In order to make use of this library, you have to copy this code into the Javascript editor within a question page.
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

Only import the necessary libraries for the question types you need to configure.

# Examples of use

## **Example**: Randomize by

###  For single choice

Step 1: Save the question schema in an open text

```javascript
/* PAGE1 */
single_choice({
  /* Question code to apply these settings */
  question_code : "Q1",
  schema: "Q1xSCHEMA" // Open text in the same page
});
```
Step 2: Use a saved schema to arrange answers

```javascript
/* PAGE2 */
single_choice({
  /* Question code to apply these settings */
  question_code : "Q2",
  randomize: {
    filter_schema : "Q1xSCHEMA"
  }
});
```

### For multiple choice

```javascript
/* PAGE1 */
multiple_choice({
  /* Question code to apply these settings */
  question_code : "Q1",
  schema: "Q1xSCHEMA" // Open text in the same page
});
```

Step 2: Use a saved schema to arrange answers

```javascript
/* PAGE2 */
multiple_choice({
  /* Question code to apply these settings */
  question_code : "Q2",
  randomize: {
    filter_schema : "Q1xSCHEMA"
  }
});
```

## **Example**: Randomize answers by groups

### For single choice

```javascript
single_choice({
  /* Question code to apply these settings */
  question_code: "Q1",
  randomize: {
    answer_groups: [[1, 2, 3]],
    randomize_groups: false
  }
});
```

### For multiple choice

```javascript
multiple_choice({
  /* Question code to apply these settings */
  question_code: "Q1",
  randomize: {
    answer_groups: [[1, 2, 3]],
    randomize_groups: false
  },
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
      [99],  // Anchored since only one
      [999], // Anchored since only one
    ],
    randomize_groups: true // Randomize all the groups of above
  }
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
      [99],  // Anchored since only one
      [999], // Anchored since only one
    ],
    randomize_groups: true // Randomize all the groups of above
  }
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
    filter : "Q1",
    filter_schema : "Q1xSCHEMA"
  }
});
```

Step 2. 
```javascript
single_choice({
  /* Question code to apply these settings */
  question_code: "Q2",
  array_filter: {
    filter : "Q1",
    filter_schema : "Q1xSCHEMA"
  }
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
      [99],  // Anchored since only one
      [999], // Anchored since only one
    ],
    randomize_groups: false
  }
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

## 