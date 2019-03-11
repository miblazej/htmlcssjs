// deklaracja funckji prymitywneMnozenie
function prymitywneMnozenie(a,b){
    let elementLosowy = Math.random();
    if (elementLosowy < 0.21){
        return a*b;
    }
    else {
        throw new Error("Blad");
    }
}
// deklaracja funkcji pytajDoSkutku
function pytajDoSkutku(a,b,funkcja){
    let error = false;
    let c = true
    for(;;){
        try{
            error = false;
            c = funkcja(a, b);
        }catch (e){
            error = true;
        }
        if(!error){
            return c;
        }
    }
}

let b = pytajDoSkutku(1,2,prymitywneMnozenie);