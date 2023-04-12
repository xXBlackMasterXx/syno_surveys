function single_choice_matrix({ question_code, randomize, array_filter, exclusive_answers, hide_answers } = {}) {
    var question_card = document.querySelector("#q_" + question_code + "_card");
    var matrix_container = question_card.querySelector("table.matrix");
    // Obtener todas las celdas con la clase .form-check
    const formCheckCells = matrix_container.querySelectorAll('.form-check');

    // Crear un objeto para almacenar las opciones de respuesta
    let answer_options = {};

    // Obtener las filas del tbody y del thead
    const tableRows = document.querySelectorAll('tbody tr, thead tr');

    function reverseNodeList(nodeList) {
        var nodeArray = Array.prototype.slice.call(nodeList);
        return nodeArray.reverse();
    }

    var column_codes = [];
    var col_i = 0;
    // Recorrer todas las filas
    reverseNodeList(tableRows).forEach((row, rowIndex) => {
        // Obtener los nodos de columna de la fila
        const colNodes = row.querySelectorAll('th, td');

        // Recorrer las columnas
        colNodes.forEach((colNode, colIndex) => {
            // Si es la primera fila, agregar una nueva propiedad al objeto answer_options
            if (rowIndex === tableRows.length - 1) {
                if (colIndex != 0) {
                    answer_options[0] = answer_options[0] || {};
                    answer_options[0][column_codes[col_i]] = {
                        form_check: null,
                        input: null,
                        rowNode: row,
                        colNode: colNode
                    };
                    col_i++;
                }
            } else {
                // Si no es la primera fila, obtener la celda .form-check de la columna
                const cell = colNode.querySelector('.form-check');

                if (cell) {
                    // Obtener el input de la celda
                    const input = cell.querySelector('input');

                    // Obtener el ID del input y dividirlo en secciones
                    const id = input.id;
                    const idSections = id.split('_');

                    // Obtener el número de fila y de columna
                    const rowId = idSections[2];
                    const col = input.value;

                    // Almacenar los datos en el objeto answer_options
                    answer_options[rowId] = answer_options[rowId] || {};
                    answer_options[rowId][col] = {
                        form_check: cell,
                        input: input,
                        rowNode: row,
                        colNode: colNode
                    };
                    if (rowIndex === 0) {
                        column_codes.push(col);
                    }
                }

            }
        });
    });

    /* RANDOMIZATION */
    if (randomize !== undefined) {

    }


    /* ARRAY FILTER */
    if (array_filter !== undefined) {
        if (array_filter["rows"] !== undefined) {
            var filter = [];
            var filter_schema = [];

            response.answers.forEach((answer) => {
                if (answer.questionCode == array_filter["rows"]["filter"]) {
                    filter.push(answer.code);
                }

                if (answer.questionCode == array_filter["rows"]["filter_schema"]) {
                    filter_schema = answer.value.split(",");
                }
            });

            // console.log("array_filter", filter);
            // console.log("filter_schema", filter_schema);

            // Iterate over all the rows
            for (let [key, value] of Object.entries(answer_options)) {
                if (array_filter["rows"]["type"] == "inclusive") {
                    if (key != 0 && !filter.includes(key) && filter_schema.includes(key)) {
                        // console.log(key, value);
                        // console.log(value[Object.keys(value)[0]]);
                        value[Object.keys(value)[0]]["rowNode"].remove();
                    }
                } else if (array_filter["rows"]["type"] == "exclusive") {
                    if (key != 0 && filter.includes(key) && filter_schema.includes(key)) {
                        // console.log(key, value);
                        // console.log(value[Object.keys(value)[0]]);
                        value[Object.keys(value)[0]]["rowNode"].remove();
                    }
                }
            }
        }

        if (array_filter["columns"] !== undefined) {
            var filter = [];
            var filter_schema = [];

            response.answers.forEach((answer) => {
                if (answer.questionCode == array_filter["columns"]["filter"]) {
                    filter.push(answer.code);
                }

                if (answer.questionCode == array_filter["columns"]["filter_schema"]) {
                    filter_schema = answer.value.split(",");
                }
            });

            // console.log("array_filter", filter);
            // console.log("filter_schema", filter_schema);

            for (let [key, value] of Object.entries(answer_options)) {
                if (array_filter["columns"]["type"] == "inclusive") {
                    // console.log("row", key)
                    for (let [key2, value2] of Object.entries(value)) {
                        if (!filter.includes(key2) && filter_schema.includes(key2)) {
                            // console.log("cols", value);
                            // console.log("col", key2, "value", value2);
                            value2.colNode.remove();
                        }
                    }

                } else if (array_filter["columns"]["type"] == "exclusive") {
                    for (let [key2, value2] of Object.entries(value)) {
                        if (filter.includes(key2) && filter_schema.includes(key2)) {
                            value2.colNode.remove();
                        }
                    }
                }
            }
        }
    }

    /* EXCLUSIVE ANSWERS */
    if (exclusive_answers !== undefined) {
        if (exclusive_answers["vertical"] !== undefined) {
            // console.log("exclusive rows", exclusive_answers);
            matrix_container.addEventListener("change", () => {
                var row_ids = Object.keys(answer_options)
                var col_ids = Object.keys(answer_options[row_ids[1]]);

                // Iterave over columns
                col_ids.forEach((col_id) => {
                    if (exclusive_answers["vertical"].includes(Number(col_id))) {
                        var exclude_siblings = false;
                        var exclusive_checked;

                        // Iterate over rows in the same column
                        row_ids.forEach((row_id) => {
                            if (row_id != 0) {
                                // If button is checked
                                console.log("cell: ", answer_options[row_id][col_id]);
                                if (answer_options[row_id][col_id].input.checked == true) {
                                    exclude_siblings = true;
                                    exclusive_checked = row_id;
                                }
                            }
                        });

                        // If an answer is checked in the same column
                        row_ids.forEach((row_id) => {
                            if (row_id != 0) {
                                if (row_id != exclusive_checked && exclude_siblings == true) {
                                    answer_options[row_id][col_id].input.disabled = true;
                                    answer_options[row_id][col_id].input.checked = false;
                                } else if (answer_options[row_id][col_id].input.disabled == true) {
                                    answer_options[row_id][col_id].input.disabled = false;
                                }
                            }
                        });
                    }
                });
            });
        }
    }

    /* HIDE COLS AND ROWS */
    if (hide_answers !== undefined) {
        if (hide_answers["rows"] !== undefined) {
            // Iterate answer rows configured by user
            hide_answers["rows"].forEach((row) => {
                if (Object.keys(answer_options).includes(String(row))) {
                    var this_row = answer_options[String(row)];
                    this_row[Object.keys(this_row)[0]]["rowNode"].remove();
                }
            });
        }

        if (hide_answers["columns"] !== undefined) {
            // Iterate over rows
            for (let [row, value] of Object.entries(answer_options)) {
                for (let [col, value2] of Object.entries(value)) {
                    if (hide_answers["columns"].includes(Number(col))) {
                        value2.colNode.remove();
                    }
                }
            }
        }
    }

    /* HANDLE MESSAGE ERRORS */
    document.querySelector("#p_next").addEventListener("click", (e) => {
        if ((array_filter !== undefined && array_filter["rows"] !== undefined) || (hide_answers !== undefined && hide_answers["rows"] !== undefined)) {
            var n_checked;
            var displayed_rows = matrix_container.querySelectorAll("tbody > tr");
            // console.log("validating rows");
            displayed_rows.forEach((row) => {
                // console.log(row);
                n_checked = row.querySelectorAll("input:checked").length;
                if (n_checked == 0) {
                    e.preventDefault();
                    var feedback = document.querySelector("#feedback_" + question_code);
                    if (feedback != null) {
                        feedback.remove();
                    }

                    let translations = {
                        "en": "Please select an answer for each row",
                        "fr": "Veuillez sélectionner une réponse pour chaque ligne",
                        "de": "Bitte wählen Sie eine Antwort für jede Zeile aus",
                        "it": "Seleziona una risposta per ogni riga",
                        "es": "Por favor, selecciona una respuesta para cada fila",
                        "no": "Vennligst velg et svar for hver rad",
                        "sv": "Vänligen välj ett svar för varje rad",
                        "da": "Vælg venligst et svar for hver række"
                    };

                    // Detect the language
                    let lang = navigator.language.substring(0, 2);

                    // Get the translation for the detected language or use English as fallback
                    let translation = translations[lang] || translations["en"];

                    // Insert the error message
                    matrix_container.insertAdjacentHTML(
                        "beforebegin",
                        `<span class="d-block custom-error pb-1 text-center" id="feedback_${question_code}"><span class="form-error-message text-danger">${translation}</span></span>`
                    );


                    question_card.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    return; // breaks the foreach
                }
            });
        }
    });
}

single_choice_matrix({
    /* Question code of the multi choice matrix */
    question_code: "Q3",
    /* If randomization is required */
    randomize: {
        /* If randomization is required for rows */
        rows: {
            /* filter schema */
            filter_schema: "Q0xSCHEMA",
            /* OR */
            /* Answer codes groups, not lister answer codes will remain anchored */
            answer_groups: [[1, 2]],
            /* If true, randomize between groups, if not, only randomize elements inside each group  */
            randomize_groups: true
        },
        /* If randomization is required for columns */
        columns: {
            /* filter schema */
            filter_schema: "Q0xSCHEMA",
            /* OR */
            /* Answer codes groups, not lister answer codes will remain anchored */
            answer_groups: [[1, 2]],
            /* If true, randomize between groups, if not, only randomize elements inside each group  */
            randomize_groups: true
        }
    },
    /* If array filter is required */
    array_filter: {
        /* If array filter for rows is required */
        rows: {
            /* Define the filter question code to use as array filter */
            filter: "Q0",
            /* Filter schema */
            filter_schema: "Q0xSCHEMA",
            /* If inclusive, keep rows that were selected in filter, if exclusive, delete rows selected in filter
            Not listed answer codes in schema will be remain visible */
            type: "exclusive"
        },
        /* If array filter for columns is required */
        columns: {
            /* Define the filter question code to use as array filter */
            filter: "Q0",
            /* Filter schema */
            filter_schema: "Q0xSCHEMA",
            /* If inclusive, keep rows that were selected in filter, if exclusive, delete rows selected in filter
            Not listed answer codes in schema will be remain visible */
            type: "inclusive"
        }
    },
    /* If column codes needs to be set as exclusive */
    exclusive_answers: {
        /* Define exclusive column codes vertically */
        vertical : [3, 4]
    },
    /* If answer codes needs to be hidden */
    hide_answers: {
        /* Define row codes to be hidden */
        rows: [1, 3, 5],
        /* Define column codes to be hidden */
        columns: [2, 4]
    }
})