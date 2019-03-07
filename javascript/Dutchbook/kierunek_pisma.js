// Funckja ktora wyciaga ktory kierunek pisma dominuje w lancuchu znakowym
// kazdy element lanucha znakowego posiada wlasciwosc direction
// moze ona przybrac czy wartosci ltr rtl oraz ttb
function kierunekPisma(lanuch){
    d = lanuch.length;
    let a = [0,0,0];
    for(let i = 0 ; i < d ;i += 1){
        let znak = lanuch[i]
        if (znak.direction == 'rtl'){
            a[1] += 1;
        }
        else if (znak.direction == 'ltr'){
            a[0] += 1;
        }
        else {
            a[2] += 1;
        }
    }
    console.log("Rtl " + (a[1]/d)*100 + "% " + "Ltr " + (a[0]/d)*100 + "% " + 'Ttb' + (a[2]/d)*100 + '%' );
    return true;
}

let s = 'Wszczezjfskhsksf jfs kl f knas nkaskfsakldam samskld asdm aklsmdlkasmdkal mskda gajksnf anjk';
kierunekPisma(s);
// Property .direction nie dziala