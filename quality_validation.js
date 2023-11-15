// Hide the page
document.querySelector("body").classList.add("d-none");

// Get the provider parameters
let source = response.parameters.source;
let yob = Number(response.parameters.yob);
let gender = response.parameters.g;

/* Verify if provider applies to the demographic validation
  1: Cint Access
  2: Cint Buyer API
  3: Syno
*/

if (["1", "2", "3"].includes(source)) {
    console.log("inside validation!");
    // Get the current year in yyyy format
    let current_year = Number(new Date().toISOString().split('T')[0].split('-')[0]);
    // Get the respondent gender from DEM1 [Change this qestion code if needed]
    let selected_gender = response.answers.find(answer => answer.questionCode == "DEM1").code;
    // Get the respondent age from DEM2A [Change this question if needed]
    let selected_age = Number(response.answers.find(answer => answer.questionCode == "DEM2A").value);

    // Compute the age different
    let computed_age = current_year - yob;
    // Set a max age difference threshold
    let threshold = 3;

    /* Verify the age difference based on a threshold */
    let age_diff = (yob !== undefined && (selected_age - computed_age) > threshold || (selected_age - computed_age) < -threshold);
    /* Verify the gender difference */
    let gender_diff = (gender !== undefined && (gender == "M" && selected_gender == "2") || (gender == "F" && selected_gender == "1"));

    if (age_diff == true || gender_diff == true) {
        // If found any inconsistency in demographic data
        console.error("Age or gender error!");
        document.querySelector(".form-check > input[value='1']").checked = true; // Click terminate
        document.querySelector("#p_next").click();
    } else {
        // If provider do not apply to dempgraphic validation, proceed.
        console.log("Proceed!");
        document.querySelector(".form-check > input[value='2']").checked = true; // Click proceed
        document.querySelector("#p_next").click();
    }
} else {
    // If provider do not apply to dempgraphic validation, proceed.
    console.log("Proceed!");
    document.querySelector(".form-check > input[value='2']").checked = true; // Click proceed
    document.querySelector("#p_next").click();
}