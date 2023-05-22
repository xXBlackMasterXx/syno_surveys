// go with first name/ last name/ gender / yob / postal/ phone / region / email / password

// Get the rows and the container
const form_rows = document.querySelectorAll("div.form-group");
const rows_container = document.querySelector("form");

// Remove inputs from UI
for(let i=0;i<form_rows.length;i++) {
    form_rows[i].remove();
}

// Set the new order based in their index
const order = [0, 1, 5, 6, 7, 8, 9, 2, 3, 4, 10, 11];

// Add the again in the correct order
order.forEach((new_order) => {
    rows_container.appendChild(form_rows[new_order]);
});