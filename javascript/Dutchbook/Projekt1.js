/* Projekt bedacy adaptacją tego zamieszczonego w ksiazce  */
const drogi = [
    "34 - Przybyszówka",
    "34 - 35",
    "34 - Oliwa",
    "35 - 34",
    "35 - Most",
    "Most - 35",
    "Most - Oliwa",
    "Most - Dominika",
    "Most - Doły",
    "Oliwa - 34",
    "Oliwa - Przybyszówka",
    "Oliwa - Most",
    "Oliwa - Pałka",
    "Pałka - Oliwa",
    "Pałka - Pustki",
    "Pałka - Dominka",
    "Pałka - Piekarnia",
    "Przybyszówka - 34",
    "Przybyszówka - Oliwa",
    "Przybyszówka - Pustki",
    "Pustki - Przybyszówka",
    "Pustki - Pałka",
    "Pustki - Siorek",
    "Siorek - Pustki",
    "Siorek - Piekarnia",
    "Siorek - Kościół",
    "Siorek - DC",
    "Piekarnia - Pałka",
    "Piekarnia - Siorek",
    "Piekarnia - Kościół",
    "Kościół - Piekarnia",
    "Kościół - Siorek",
    "Kościół - Gubernat",
    "Gubernat - Kościół",
    "Gubernat - Dominika",
    "Gubernat - Budowa",
    "Budowa - Gubernat",
    "Budowa - DC",
    "Budowa - Doły",
    "DC - Siorek",
    "DC - Budowa",
    "Doły - Most",
    "Doły - Budowa"
];

function budujGraf(krawedzie){
    let graf = Object.create(null);
    function dodajKrawedz(od, cel){
        if (graf[od] == null ){
            graf[od] = [cel];
        }
        else{
            graf[od].push(cel);
        }
    }
    for (let[od, cel] of krawedzie.map(r => r.split("-"))){
        dodajKrawedz(od, cel);
    }
    return graf;
}

const grafDrog = budujGraf(drogi);