// funckja zliczająca ilość dużych liter B w łanuchu znakowym
function liczB(s){
    dlugosc = s.length;
    wystapienia = 0;
    for(i = 0; i < dlugosc; i += 1){
        if (s[i] == 'B'){
            wystapienia += 1;
        }
    }
    return wystapienia;
}

s = 'BBBBAAABBBAAABBB';
console.log(liczB(s));