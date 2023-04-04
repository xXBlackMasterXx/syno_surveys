single_choice({
    question_code: "Q1",
    schema: "Q1xSCHEMA",
    randomize: {
        filter_schema: "Q0xSCHEMA",
        /* OR */
        answer_groups: [[1, 2]],
        randomize_groups: true
    },
    array_filter: {
        filter: "Q0",
        filter_schema: "Q0xSCHEMA",
        type: "inclusive"
    },
    hide_answers: [1, 2]
});

multiple_choice({
    /* REQUIRED QUESTION CODE TO APPLY THIS SETTINGS */
    question_code: "Q1",
    schema: "Q1xSCHEMA",
    /* SECTION TO RANDOMIZE ANSWER CODES*/
    randomize: {
        filter_schema: "Q0xSCHEMA",
        /* OR */
        answer_groups: [[1, 2]],
        randomize_groups: true
    },
    /* SECTION TO FILTER ANSWER CODES */
    array_filter: {
        filter: "Q0",
        filter_schema: "Q0xSCHEMA",
        type: "inclusive"
    },
    /* SECTION TO HIDE ANSWER CODES */
    hide_answers: [1, 2],
    /* SECTION TO SET UP A REQUIRED AMOUNT OF CHECKED CHECKBOXES OR SET UP A MIN AND/OR MAX AMOUNT OF CHECKS */
    validation: {
        n_required: 1,
        /* OR */
        min_limit: 1,
        max_limit: 2
    }
});

single_choice_matrix({
    question_code: "Q3",
    randomize: {
        rows: {
            filter_schema: "Q0xSCHEMA",
            answer_groups: [[1, 2]],
            randomize_groups: true
        },
        columns: {
            filter_schema: "Q0xSCHEMA",
            answer_groups: [[1, 2]],
            randomize_groups: true
        }
    },
    array_filter: {
        rows: {
            filter: "Q0",
            filter_schema: "Q0xSCHEMA",
            type: "inclusive"
        },
        columns: {
            filter: "Q0",
            filter_schema: "Q0xSCHEMA",
            type: "inclusive"
        }
    },
    exclusive_answers: {
        columns: [3, 4],
        /* OR - NOT SIMULTANEOUSLY */
        vertical : [3, 4]
    },
    hide_answers: {
        rows: [1, 3, 5],
        columns: [2, 4]
    },
    validation: {
        n_required: 2,
        /* OR */
        min_limit: 2,
        max_limit: 3
    }
})