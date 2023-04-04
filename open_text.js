function open_text({ question_code, array_filter } = {}) {
    var question_card = document.querySelector("#q_" + question_code + "_card");
    var open_text_container = question_card.querySelector("input, textarea");
    if (array_filter !== undefined) {
        if (array_filter["matrix"] !== undefined) {
            var matrix_card = document.querySelector("#q_" + array_filter["matrix"]["filter"] + "_card");
            var matrix_container = matrix_card.querySelector("table.matrix");

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
                                // console.log("row_index", rowIndex, row);
                                column_codes.push(col);
                            }
                        }
                    }
                });
            });

            console.log("answer_options", answer_options);
            function visibility_toggler(){
                var n_checked = 0;
                var coordinates_list = array_filter["matrix"]["coordinates"];
                console.log("coordinates list again", coordinates_list);
                coordinates_list.forEach((coordinate) => {
                    console.log(coordinate);
                    if(answer_options[coordinate[0]] !== undefined && answer_options[coordinate[0]][coordinate[1]] !== undefined){
                        var input = answer_options[coordinate[0]][coordinate[1]]["input"];
                        if (input.checked == true) {
                            n_checked++;
                        }
                    }
                });
    
                if (n_checked > 0) {
                    question_card.style.display = "flex";
                } else {
                    question_card.style.display = "none";
                    open_text_container.value = "";
                }
            }
            
            if (array_filter["matrix"]["coordinates"] != undefined) {
                matrix_container.addEventListener("change", visibility_toggler);
                window.addEventListener("load", visibility_toggler);
            }
        }

        /* HANDLE MESSAGE ERRORS */
        document.querySelector("#p_next").addEventListener("click", (e) => {
            if(array_filter["matrix"] !== undefined){
                if(question_card.style.display == "flex" && open_text_container.value == "") {
                    e.preventDefault();
                    var feedback = document.querySelector("#feedback_" + question_code);
                    if(feedback != null) {
                        open_text_container.classList.remove("is-invalid");
                        feedback.remove();
                    }

                    open_text_container.classList.add("is-invalid");
                    open_text_container.insertAdjacentHTML(
                        "beforebegin",
                        `<span class="d-block custom-error pb-1 text-center" id="feedback_` + question_code + `">
                        <span class="form-error-message text-danger">This field can't be blank (validation error)</span></span>`
                    );

                    question_card.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                }
            }
        });
    }
}



open_text({
    question_code: "Q7",
    array_filter: {
        matrix: {
            filter: "Q6",
            coordinates: [[2, 2], [2, 3]]
        }
    }
});