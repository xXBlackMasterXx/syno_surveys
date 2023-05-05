function single_choice_matrix({question_code, randomize, array_filter, exclusive_answers, hide_answers} = {}) {
    const question_code = "Q6";
    const question_card = $(`#q_${question_code}_card`);
    const matrix_container = question_card.find("table.matrix");
    const form_checks_cells = matrix_container.find(".form-check");

    let answer_options = {};

    const table_rows = matrix_container.find("tbody tr, thead tr");

    function reverse_node_list(jquery_list) {
        let jquery_array = jquery_list.get();
        return jquery_array.reverse();
    }

    let column_codes = [];
    let col_index = 0;

    reverse_node_list(table_rows).forEach((row, row_index) => {
        console.log(row);
        const col_nodes = $(row).find("th, td");

        $.each(col_nodes, function (col_node, col_node_index) {
            if(row_index === table_rows.length - 1) { 
                if(col_node_index != 0){
                    answer_options[0] = answer_options[0] || {};
                    answer_options[0][column_codes[col_index]]= {
                        form_check : null,
                        input : null,
                        row_node : row,
                        col_node : col_node
                    };
                    col_index++;
                }
            } else {
                const cell = $(col_node).find(".form_check");
                if (cell.length != 0){
                    const input = $(cell).find("input");
                    const id = input.id;
                    const id_sections = id.split("_");
                    const row_id = id_sections[2];
                    const col = input.val();

                    answer_options[row_id] = answer_options[row_id] || {};
                    answer_options[row_id][col] = {
                        form_check : cell, 
                        input : input,
                        row_node : row,
                        col_node : col_node
                    }

                    if(row_index === 0) {
                        column_codes.push(col);
                    }
                }
            }
        });
    });

    console.log(answer_options);
}

single_choice_matrix({
    question_code : "Q6"
})