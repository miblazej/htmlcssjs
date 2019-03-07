// Funkcja ktora uzywa metody reduce w polaczaczeniu z concat
// w celu utworzenia z szyku szyków jednego szyku.

function splaszcz(szyk, start){
    let aktualny = start;
    for(let element of szyk){
        aktualny = aktualny.concat(element);
    }
    return aktualny;
}

let a = [
    [1,2],
    [3,4],
];

console.log(splaszcz(a,[]));

// Dziala