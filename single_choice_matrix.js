function single_choice_matrix({ question_code, randomize, array_filter, exclusive_answers, hide_answers, validation } = {}) {
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
        if (exclusive_answers["horizontal"] !== undefined) {
            matrix_container.addEventListener("change", () => {
                // Iterate over rows
                for (let [row, value] of Object.entries(answer_options)) {
                    if (row != 0) {
                        var exclude_siblings = false;
                        var exclusive_checked;
                        exclusive_answers["horizontal"].forEach((column_code) => {
                            if (value[column_code] !== undefined && value[column_code].input.checked == true) {
                                exclude_siblings = true;
                                exclusive_checked = column_code;

                                return; // breaks the foreach
                            }
                        })

                        for (let [col, value2] of Object.entries(value)) {
                            if (exclude_siblings == true && col != exclusive_checked) {
                                value2.input.disabled = true;
                                value2.input.checked = false;
                            } else {
                                value2.input.disabled = false;
                            }
                        }
                    }
                }
            });
        }

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

    /* MAKE ROWS NOT REQUIRED */
    /* SET MIN,MAX & REQ CHECKS PER ROW */
    var row_checks = [];
    if (validation !== undefined) {
        console.log("n_required", validation.n_required, "min_limit", validation.min_limit, "max_limit", validation.max_limit);

        function count_checked() {
            row_checks = [];
            // Iterate over rows
            for (let [row, value] of Object.entries(answer_options)) {
                if (row != 0 && document.body.contains(value[Object.keys(value)[0]]["rowNode"])) {
                    var n_checked = 0;
                    // Count n_check in this row
                    for (let [col, value2] of Object.entries(value)) {
                        if (value2.input.checked == true) {
                            n_checked++;
                        }
                    }

                    console.log(`row ${row} has n_checked: ${n_checked}`);

                    if ((validation["max_limit"] !== undefined && n_checked >= validation["max_limit"]) || (validation["n_required"] !== undefined && n_checked >= validation["n_required"])) {
                        for (let [col, value2] of Object.entries(value)) {
                            if (value2.input.checked == false) {
                                value2.input.disabled = true;
                            }
                        }
                    } else {
                        for (let [col, value2] of Object.entries(value)) {
                            if (value2.input.disabled == true) {
                                value2.input.disabled = false;
                            }
                        }
                    }
                    row_checks.push(n_checked);
                }

            }
        }

        window.addEventListener("load", count_checked);
        matrix_container.addEventListener("change", count_checked);
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

        // If n_required is not defined 
        if (validation["n_required"] === undefined) {
            // But min_limit is defined
            if (validation["min_limit"] !== undefined) {
                // validate that each row has min_limit checked options
                console.log("row checks min limit: ", row_checks);
                row_checks.forEach((n_checked) => {
                    if (n_checked < validation["min_limit"]) {
                        e.preventDefault();
                        feedback = document.querySelector("#feedback_" + question_code);
                        if (feedback != null) {
                            feedback.remove();
                        }

                        let translations = {
                            "en": "Please select at least {n} option(s) per row",
                            "fr": "Veuillez sélectionner au moins {n} option(s) par ligne",
                            "de": "Bitte wählen Sie mindestens {n} Option(en) pro Zeile aus",
                            "it": "Seleziona almeno {n} opzione(i) per riga",
                            "es": "Por favor, selecciona al menos {n} opción(es) por fila",
                            "no": "Vennligst velg minst {n} alternativ(er) per rad",
                            "sv": "Vänligen välj minst {n} alternativ per rad",
                            "da": "Vælg venligst mindst {n} valgmulighed(er) pr. række"
                        };

                        let lang = navigator.language.substring(0, 2);
                        let translation = translations[lang] || translations["en"];

                        matrix_container.insertAdjacentHTML(
                            "beforebegin",
                            `<span class="d-block custom-error pb-1 text-center" id="feedback_${question_code}">
                              <span class="form-error-message text-danger">${translation.replace('{n}', validation["min_limit"])}</span>
                            </span>`
                        );

                        question_card.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

                        return; // breaks the forEach
                    }
                });

            }

        } else { // If n_required is defined
            console.log("row checks required", row_checks);
            // Check that each row has n_required checks per row
            row_checks.forEach((n_checked) => {
                if (n_checked < validation["n_required"]) {
                    e.preventDefault();
                    feedback = document.querySelector("#feedback_" + question_code);
                    if (feedback != null) {
                        feedback.remove();
                    }

                    let translations = {
                        "en": "Please select {n} option(s) per row",
                        "fr": "Veuillez sélectionner {n} option(s) par ligne",
                        "de": "Bitte wählen Sie {n} Option(en) pro Zeile",
                        "it": "Seleziona {n} opzione(i) per riga",
                        "es": "Por favor, selecciona {n} opción(es) por fila",
                        "no": "Vennligst velg {n} alternativ(er) per rad",
                        "sv": "Vänligen välj {n} alternativ per rad",
                        "da": "Vælg venligst {n} mulighed(er) pr. række"
                    };

                    let lang = navigator.language.substring(0, 2);
                    let translation = translations[lang] || translations["en"];

                    matrix_container.insertAdjacentHTML(
                        "beforebegin",
                        `<span class="d-block custom-error pb-1 text-center" id="feedback_${question_code}">
                          <span class="form-error-message text-danger">${translation.replace("{n}", String(validation["n_required"]))}</span>
                        </span>`
                    );


                    question_card.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

                    return; // breaks the forEach
                }
            });
        }
    });
}
