// Funkcja budujaca liste z szyku
function czlon(wartosc, nastepny){
    this.wartosc = wartosc;
    this.nastepny = nastepny;
}

function szykDoListy(szyk){
    glowa = new czlon();
    glowa.wartosc = szyk[0];
    czlon_aktywny = glowa;
    l = szyk.length;
    for(let i = 1; i < l ; i += 1){
        if(szyk[i] != undefined){
            czlon_nastepny = new czlon();
            czlon_aktywny.nastepny = czlon_nastepny;
            czlon_nastepny.wartosc = szyk[i];
            czlon_aktywny = czlon_nastepny;
        }
        
           
    }   
    return glowa;
}
// konwersja z listy do szyku
function listaDoSzyku(glowa){
    let szyk = [];
    do{
        szyk.push(glowa.wartosc);
        glowa = glowa.nastepny;
    }
    while(glowa != undefined)
    return szyk;
}
// Dodanie elementu na poczatek szyku
function dodajStart(glowa,element){
    element.nastepny = glowa;
    return element;
}
// wyciagniecie danego elementu z listy
function ty(glowa, indeks){
    if (indeks == 0){
        return glowa.wartosc;
    }
    else{
        return ty(glowa.nastepny,indeks -1);
    }
}

let szyk = [1,2,3,4,5];
lista = szykDoListy(szyk);
console.log(lista.wartosc);
let szyk1 = listaDoSzyku(lista);
console.log(szyk1);
ele = new czlon(0,null);
let szyk2 = dodajStart(lista,ele);
console.log(szyk2);
szyk3 = listaDoSzyku(szyk2);
console.log(szyk3);
let enty = ty(szyk2,4);
console.log(enty);