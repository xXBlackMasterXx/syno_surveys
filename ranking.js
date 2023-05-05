function ranking({ question_code, top_label, bottom_label } = {}) {
    // Load jQuery UI
    var jqueryUiScript = document.createElement("script");
    jqueryUiScript.src = "https://code.jquery.com/ui/1.12.1/jquery-ui.min.js";
    jqueryUiScript.onload = function () {
        // Your code that depends on jQuery UI can go here
        $(function () {
            $("#drop-area").sortable({
                cancel: "#not-draggable"
            });
            $("#sortable, #drop-area").sortable({
                connectWith: ".list-group"
            });
            $("#sortable, #drop-area").disableSelection();
        });
    };
    document.head.appendChild(jqueryUiScript);

    const question_card = document.querySelector(`#q_${question_code}_card`);
    if (question_card === null) {
        alert(`Question ${question_code} does not exists`);
        return;
    }

    function get_answer_options(){
        let answer_options = {};
        const form_rows = question_card.querySelectorAll(".form-row");
        // Give text labels, empty strings indicate is an inputs
        const form_labels = Array.from(form_rows).map((form_row) =>  (form_row.innerText));
        // List of non empty indexes that indicate visible labels
        const label_indexes = form_labels.reduce((acc, cur, idx) => {
            if (cur !== "") {
            acc.push(idx);
            }
            return acc;
        }, []);
    
        form_rows.forEach((form_row, index) => {
            if(!label_indexes.includes(index)) {
                let input = form_row.querySelector("input,textarea");
                let label = index > 0 && label_indexes.includes(index-1) ? form_rows[index-1] : undefined;
                let id = input.id.split("_")[2];
                
                answer_options[id] = {
                    "input_container" : form_row,
                    "input" : input,
                    "label_container" : label,
                    "label" : label === undefined ? undefined : label.querySelector(".col-12").innerText
                };
            }
        });

        return(answer_options);
    }

    let answer_options = get_answer_options();
    let draggable_items = [];
    let dropped_items = [];

    for (let [key, value] of Object.entries(answer_options)) {
        const element = `<a href="#" class="list-group-item list-group-item-action" data-id="${Number(key)}">${value.label}</a>`;
        if(value.input.value == ""){
            draggable_items.push(element);
        } else {
            dropped_items.push(element);
        }
    }

    let rank_html = `
    <div class="row">
        <div class="col-sm-12 mb-4">
            <div class="list-group" id="sortable">
                ${draggable_items.join("")}
            </div>
        </div>
        <div class="col-sm-12">
            <div class="border rounded p-4 bg-white mb-0">
                <p class="text-center my-3">${top_label}</p>
                <div class="list-group list-group-numbered" id="drop-area" style="min-height: 50px;">
                    ${dropped_items.join("")}
                </div>
                <p class="text-center my-3">${bottom_label}</p>
            </div>
        </div>
    </div>
    <br>
    `;

    question_card.innerHTML += rank_html; // Insert rank template into question card
    
    answer_options = get_answer_options();
    const form_rows = question_card.querySelectorAll(".form-row");
    form_rows.forEach((form_row) => {
        // form_row.style.display = "none";
    });

    document.querySelector("#p_next").addEventListener("click", (e) => {
        // e.preventDefault();
        let rank_order = [];
        question_card.querySelectorAll("#drop-area a").forEach((item) => {
            rank_order.push(item.getAttribute("data-id"));
        });

        console.log(rank_order);

        let ranked_options = 0;

        rank_order.forEach((rank_id, rank) => {
            console.log(`rank_id: ${rank_id}, rank : ${rank}`);
            console.log(answer_options[rank_id]);
            answer_options[rank_id].input.value = `Rank ${rank + 1}`;
            ranked_options++;
        });

        console.log(`Ranked options: ${ranked_options}`);
    });
}

ranking({
    question_code: "Q9",
    top_label: "Most important",
    bottom_label: "Less important",
    validation : {
        n_required : 3,
        min_limit : 1,
        max_limit : 3
    }
});