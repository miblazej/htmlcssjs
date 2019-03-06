// Funkcja zliczajaca ilosc znakow podanych przez uzytkownika
function liczZnak(s, znak){
    dlugosc = s.length;
    wystapienia = 0;
    for (i = 0; i < dlugosc; i += 1) {
        if (s[i] == znak) {
            wystapienia += 1;
        }
    }
    return wystapienia;
}

s = 'BBBBAAABBBAAABBB';
console.log(liczZnak(s,'B'));
// Banał działa