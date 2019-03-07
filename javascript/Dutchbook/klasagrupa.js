/* Standardowe srodowisko JavaScript zawiera strukture danych set, nie tak jak map
funkcja ta nie laczy ich z innymi wartosciami a jedynie jest zapisuje 
w tym zadaniu mam napisac grupe set ktora dziala w podobny sposob do set jednakze nzyw asie Grupa */

class Grupa{
    constructor(){
        this.szyk = [];
    }
    dodaj(wartosc){
        if (this.szyk == undefined){
            this.szyk[0] = wartosc;
        }
        else{
            for (let wartosci of this.szyk) {
                if (wartosc == wartosci) {
                    return false
                }
            }
            this.szyk.push(wartosc);
        }
        
    }
    usun(wartosc){
        for(let wartosci of this.szyk){
            if(wartosci == wartosc){
                this.szyk.remove(wartosci);
            }
        }
    }
    ma(wartosc){
        for(let wartosci of this.szyk){
            if(wartosc == wartosci){
                return true;
            }
        }
        return false;
    }
    static od (szyk){
        for(let wartosci of szyk){
            this.szyk.push(wartosci);
        }
    }
    wypisz(){
        for(let wartosci of this.szyk){
            console.log(wartosci + '\n');
        }
    }
}


class GrupaIterator{
    constructor(grupa){
        this.grupa = grupa;
        this.wielkosc = grupa.szyk.length;
        this.index = 0;
    }
    nastepny(){
        if(this.index < this.wielkosc){
            this.index += 1;
            return this.grupa.szyk[this.index - 1];
        }
        else{
            return false;
        }
    }


}

gru = new Grupa();

gru.dodaj(4);
gru.dodaj(5);
gru.dodaj(8);
gru.dodaj(10);
gru.dodaj(10);
gru.wypisz();
console.log(gru.ma(8));
gruI = new GrupaIterator(gru);
console.log(gruI.nastepny());
console.log(gruI.nastepny());
console.log(gruI.nastepny());
console.log(gruI.nastepny());
gruI.grupa.wypisz();