// Funckja tworzaca odwrocony szyk
function odwrocSzyk(szyk){
    let nowy_szyk = [];
    l = szyk.length;
    for(l; l >0; l -= 1){
        nowy_szyk.push(szyk[l-1]);
    }
    return nowy_szyk;
}

// Funckja tworzaca odwrocony szyk w miejscu
function odwrocSzykWMiejscu(szyk){
    l = szyk.length;
    for(let i = 1; i < l ; i += 1 ){
        szyk.unshift(szyk[i]);
        console.log(szyk);
        szyk.splice(i+1, 1);
        console.log(szyk);
        
        
    }
    return szyk;
}
let listaNumerów = [2,3,4,5,6,7];

console.log(odwrocSzyk(listaNumerów));
console.log(odwrocSzykWMiejscu(listaNumerów));