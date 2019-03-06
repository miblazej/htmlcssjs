// Funkcja tworzaca szyk
function szyk(start,koniec,krok = 1){
    let szyk = [];
    for(i = start; i != koniec ; i += krok){
        szyk.push(i)
    }
    return szyk
}
// Funckja sumująca
function suma(szyk){
    suma = 0;
    let d = szyk.length;
    for(let i = 0;i < d;i += 1){
        suma += szyk[i];
    }
    return suma;
}

console.log(suma(szyk(1,10)));