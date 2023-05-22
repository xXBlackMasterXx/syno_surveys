$(document).ready(function () {
    $('#page').hide();

    var country = Number("{COUNTRY.NAOK}");
    var age = 0;

    if(country == 7){
        age += Number("{AGExRECxBL.NAOK}");
    } else {
        age += Number("{AGExREC.NAOK}");
    }

    console.log(country);
    console.log(age);

    var quotas = [ //for age ranges gen y, gen x and baby boomer
        [244, 307, 230], //uk
        [340, 430, 320], //fr
        [244, 307, 230], //se
        [148, 184, 140], //dk
        [372, 471, 350], //de
        [404, 512, 380], //nl
        [308, 389, 290], //be
    ];

    var lang_list = ["en-Bri", "fr", "sv", "da", "de", "nl", "nl"]

    var quota_number = 0;
    var current_quota = quotas[country - 1][age - 1];

    quota_number += Number(countAGExREC[lang_list[country - 1]][age - 1]);

    console.log(quota_number);
    console.log(current_quota);

    if (quota_number < current_quota) {
        $($('.radio')[0]).attr('checked', true);
    } else {
        $($('.radio')[1]).attr('checked', true);
    };

    $('#movenextbtn').click();
})