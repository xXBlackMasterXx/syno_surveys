
// Gets zip code from question S4
let zippy = Number(response.answers.find(ans => ans.questionCode == "S4").value); 

// Gets the market name
let market = dic.find(zip => zip['ZipCode'] == zippy);

if(market){
    market = dic.find(zip => zip['ZipCode'] == zippy).Market;
}else{
    market = 'None';
}

// Gathers all the check boxes of the question
 boxes = Array.from(document.querySelectorAll('#q_zip_card .form-check'));

// Checks the found market

boxes.map(ans =>{
    if(ans.querySelector('label').innerText == market){
        ans.querySelector('input').checked = true;
    }
});