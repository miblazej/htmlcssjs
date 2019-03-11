// Deklaracja pudelka
const pudelko = {
    zamkniete: true,
    otworz() {this.zamkniete = false; },
    zamknij() { this.zamkniete = true; },
    _zawartosc: [],
    get tajemnica(){
        if (this.zamkniete) throw new Error("Zamknięte!");
        return this._zawartosc;
    }
};

sejf = pudelko;

function zOtwartymPudelkiem(funkcja){
    let szyk = [1];
    try{
        szyk = funkcja.tajemnica;
    }
    catch(e){
        funkcja.otworz();
        szyk = funkcja.tajemnica;
        funkcja.zamknij();
    }
    return szyk
}

szyk2 = zOtwartymPudelkiem(sejf);