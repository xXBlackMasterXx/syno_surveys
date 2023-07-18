window.addEventListener("load", () => {
    let respondent_type = Number(response.answers.find(answer => answer.questionCode == "RESPONDENT").code);
    let country = Number(response.answers.find(answer => answer.questionCode == "COUNTRY").code);

    let team = document.querySelector("#team");
    let team_logo = document.querySelector("#team_logo");
    let team_banner = document.querySelector("#team_banner");
    let team_logo_container = document.querySelector("#team_logo_container");

    if (respondent_type == 1 && country == 1) {
        // Panelist and English
        team.innerText = "The Wahsel team";
        team_logo.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/0bf0461aa3bd2b938666ebfa6f7a5a61.png";
        team_logo_container.classList.add("bg-dark", "py-3");
        team_banner.src = "https://img.freepik.com/free-photo/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display_482257-2443.jpg?w=996&t=st=1688141021~exp=1688141621~hmac=c1e134e78869d65b8ad85b9a6e943073830d213df0285feb8c7a09f49ba34349";

    } else if (respondent_type == 2 && country == 1) {
        // XXL Member and English 
        team.innerText = "The XXL team";
        team_logo.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/29ab0ea8a857c844b091bc31fbcaec54.png";
        team_banner.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/6dc679766b8bf177c5fcaba261e22ef2.png";
        team_logo_container.classList.add("py-3");
        team_logo_container.style.background = "#000";

    } else if (respondent_type == 1 && country == 2) {
        // Panelist and Norwegian 
        team.innerText = "Wahsel-teamet";
        team_logo.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/0bf0461aa3bd2b938666ebfa6f7a5a61.png";
        team_logo_container.classList.add("bg-dark", "py-3");
        team_banner.src = "https://img.freepik.com/free-photo/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display_482257-2443.jpg?w=996&t=st=1688141021~exp=1688141621~hmac=c1e134e78869d65b8ad85b9a6e943073830d213df0285feb8c7a09f49ba34349";

    } else if (respondent_type == 2 && country == 2) {
        // XXL Member and Norwegian 
        team.innerText = "XXL-teamet";
        team_logo.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/29ab0ea8a857c844b091bc31fbcaec54.png";
        team_banner.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/6dc679766b8bf177c5fcaba261e22ef2.png";
        team_logo_container.classList.add("py-3");
        team_logo_container.style.background = "#000";

    } else if (respondent_type == 1 && country == 3) {
        // Panelist and Swedish 
        team.innerText = "Wahsel-teamet";
        team_logo.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/0bf0461aa3bd2b938666ebfa6f7a5a61.png";
        team_logo_container.classList.add("bg-dark", "py-3");
        team_banner.src = "https://img.freepik.com/free-photo/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display_482257-2443.jpg?w=996&t=st=1688141021~exp=1688141621~hmac=c1e134e78869d65b8ad85b9a6e943073830d213df0285feb8c7a09f49ba34349";

    } else if (respondent_type == 2 && country == 3) {
        // XXL Member and Swedish 
        team.innerText = "XXL-teamet";
        team_logo.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/29ab0ea8a857c844b091bc31fbcaec54.png";
        team_banner.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/6dc679766b8bf177c5fcaba261e22ef2.png";
        team_logo_container.classList.add("py-3");
        team_logo_container.style.background = "#000";

    } else if (respondent_type == 1 && country == 4) {
        // Panelist and Finnish 
        team.innerText = "Wahsel-tiimi";
        team_logo.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/0bf0461aa3bd2b938666ebfa6f7a5a61.png";
        team_logo_container.classList.add("bg-dark", "py-3");
        team_banner.src = "https://img.freepik.com/free-photo/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display_482257-2443.jpg?w=996&t=st=1688141021~exp=1688141621~hmac=c1e134e78869d65b8ad85b9a6e943073830d213df0285feb8c7a09f49ba34349";

    } else if (respondent_type == 2 && country == 4) {
        // XXL Member and Finnish 
        team.innerText = "XXL-tiimi";
        team_logo.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/29ab0ea8a857c844b091bc31fbcaec54.png";
        team_banner.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/6dc679766b8bf177c5fcaba261e22ef2.png";
        team_logo_container.classList.add("py-3");
        team_logo_container.style.background = "#000";

    } else if (respondent_type == 1 && country == 5) {
        // Panelist and Danish 
        team.innerText = "Wahsel-holdet";
        team_logo.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/0bf0461aa3bd2b938666ebfa6f7a5a61.png";
        team_logo_container.classList.add("bg-dark", "py-3");
        team_banner.src = "https://img.freepik.com/free-photo/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display_482257-2443.jpg?w=996&t=st=1688141021~exp=1688141621~hmac=c1e134e78869d65b8ad85b9a6e943073830d213df0285feb8c7a09f49ba34349";

    } else if (respondent_type == 2 && country == 5) {
        // XXL Member and Danish 
        team.innerText = "XXL-holdet";
        team_logo.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/29ab0ea8a857c844b091bc31fbcaec54.png";
        team_banner.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/6dc679766b8bf177c5fcaba261e22ef2.png";
        team_logo_container.classList.add("py-3");
        team_logo_container.style.background = "#000";
    }
});

