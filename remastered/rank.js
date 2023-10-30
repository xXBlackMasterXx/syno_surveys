let question_code = "Q4";

// Get the question card
let question_card = document.querySelector(`#q_${question_code}_card`);

if(question_card === null) {
    alert(`Question ${question_code} does not exist!`);
}

// Get the input textfields
let textfields = Array.from(question_card.querySelectorAll(".form-row > div > input[type='text'],textarea"));
// Get the text labels
let labels = Array.from(question_card.querySelectorAll(".form-row > div.col-12:not(.mb-2)"));

if(textfields.length !== labels.length){
    alert("There are missing labels in the multiple textfields! Cannot proceed to create the ranking");
}

// Get the answer codes
let answer_codes = textfields.map(textfield => {
    let answer_code = textfield.id.split("_")[2];
    return(answer_code);
});

// Create the list group
let list_group = document.createElement("div");
list_group.classList.add("list-group", "col-12");
list_group.id = "sortable";

// Create all list items
let list_items = labels.map((label, index) => {
    let list_item = document.createElement("a");
    list_item.setAttribute("href", "#");
    list_item.classList.add("list-group-item", "list-group-item-action", "rank-item");
    list_item.setAttribute("data-id", answer_codes[index]);

    let rank_badge = document.createElement("span");
    rank_badge.classList.add("badge", "badge-primary", "text-uppercase", "mr-2");
    
    list_item.appendChild(rank_badge);
    list_item.innerHTML = label.textContent;

    return(list_item);
});

// Insert all list items into the list group
list_group.append(...list_items);

// Insert the list group into the DOM
labels[0].insertAdjacentElement("beforebegin", list_group);

let rank_elements = document.querySelectorAll(".rank-item");


rank_elements.forEach((rank_element) => {
    rank_element.addEventListener("click", () => {
        rank_element.preventDefault();
        console.log(``);
    });
});