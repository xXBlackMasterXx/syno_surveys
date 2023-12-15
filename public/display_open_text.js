/* Code to show and hide a free answer */

function display_open_text({question_code, selector} = {}) {
    // Get the question csrd
    let question_card = document.querySelector(`#q_${question_code}_card`);

    // If the question card is not found in the page, throw a warning and end the program
    if(question_card === null) {
        console.warn(`Error: Question code ${question_code} was not found in the page\n\nPro-tip: Check if the question ${question_code} is scripted in the page and verify if the question code matches`);
        return;
    }
    
    // Get the open text field
    let open_text = question_card.querySelector("input[type='text']", "textarea");
    
    // If the open text is not found in the page, throws an warning message and end program
    if(open_text === null) {
        console.warn(`Warning: It seems that the question ${question_code} is not an open text`);
        return;
    }
    
    // Get the target of the input based on the selector provided
    let target = document.querySelector(selector);

    // If the selector is not found, then throw a warning and end program
    if(target === null) {
        console.warn(`Warning: Target with selector ${selector} not found in the page\n\nOpen text with code ${question_code} won't be displayed!`); 
        question_card.remove();
        return;
    }

    function show_open_text(question_card) {
        console.warn("Showing open text");
        question_card.classList.remove("d-none");
        question_card.classList.add("d-block");
    }

    function hide_open_text(question_card, open_text) {
        console.warn("Hiding and clearing open text");

        question_card.classList.remove("d-block");
        question_card.classList.add("d-none");
        open_text.value = ""; // Clear open text
    }

    function create_error_message({target, message}) {
        let span = question_card.querySelector(`#feedback_${question_code}`);
        if(span == null) {
            let span = document.createElement("span");
            span.classList.add("d-block", "custom-error", "pb-1", "text-center");
            span.id = `feedback_${question_code}`;
            
            let span_message = document.createElement("span");
            span_message.classList.add("form-error-message", "text-danger");
            span_message.textContent = message;
    
            span.append(span_message);
    
            target.classList.add("is-invalid", "text-danger");
            target.insertAdjacentElement("beforebegin", span);
        }

        question_card.scrollIntoView({ behavior:"smooth", block:"start", inline:"nearest"});
    }

    function delete_error_message({target}) {
        let span = question_card.querySelector(`#feedback_${question_code}`);
        if(span != null) {
            span.remove();
            target.classList.remove("is-invalid", "text-danger");
        }
    }

    window.addEventListener("load", () => {
        if( ["radio", "checkbox"].includes(target.type) ) {
            target.checked ? show_open_text(question_card) : hide_open_text(question_card, open_text);
        } else if( ["text", "textarea"].includes(target.type) ) {
            target.value !== "" ? show_open_text(question_card) : hide_open_text(question_card, open_text);
        }
    });

    target.addEventListener("input", (e) => {
        if( ["radio", "checkbox"].includes(e.target.type) ) {
            e.target.checked ? show_open_text(question_card) : hide_open_text(question_card, open_text);
        } else if( ["text", "textarea"].includes(e.target.type) ) {
            e.target.value !== "" ? show_open_text(question_card) : hide_open_text(question_card, open_text);
        }
    });

    document.querySelector("#p_next").addEventListener("click", (e) => {
        const lang = document.querySelector('html').getAttribute('lang').substring(0, 2);
        
        if(open_text.value === "" && !question_card.classList.contains("d-none")) {
            e.preventDefault();
            
            const translations = {
                "en" : "This field can't be blank",
                "fr" : "Ce champ ne peut pas être vide",
                "de" : "Dieses Feld darf nicht leer sein",
                "it" : "Questo campo non può essere vuoto",
                "es" : "Este campo no puede estar en blanco",
                "nb" : "Dette feltet kan ikke være tomt",
                "sv" : "Det här fältet kan inte vara tomt",
                "da" : "Dette felt kan ikke være tomt",
                "fi": "Tämä kenttä ei saa olla tyhjä"
            };
    
            const message = translations[lang] ? translations[lang]: translations["en"];
            create_error_message({target : open_text, message : message});
        } else {
            delete_error_message({target : open_text});
        }

    });
}