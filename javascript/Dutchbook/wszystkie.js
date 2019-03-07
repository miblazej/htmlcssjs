// tak jak fukcja some istnieje rowniez funkcja every czyli kazdy
// Zwraca ona true kiedy kazdy element szyku spelnia warunek
// uzyj tej funkcji w funckji z petla oraz w funkcji z metoda
function jestSliczna(a){
    return a > 5;
}

function kazdy1(szyk,warunek){
    return szyk.every(warunek);
}

function kazdy2(szyk,warunek){
    for(let i = 0; i < 5; i +=1){
        szyk = szyk.map((a) => {return a-1;});
        console.log(szyk.every(warunek));
    }
}

function kazdy3(szyk,warunek){
    for (let i = 0; i < 5; i += 1) {
        szyk = szyk.map((a) => { return a - 1; });
        console.log(szyk.some(warunek));
    }
}

szyk = [8,9,10];
kazdy3(szyk,jestSliczna);