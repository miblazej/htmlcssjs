// Napisz klae wektor ktora reprezentuje wektor w przestrzeni dwu wymiarowej
// Konstruktor potrzebuje dwoch elementów x oraz y 
// Metoda plus dodaj do wektora
// Metoda minus odejmuje od wektora
// pole getter ktore oblicza dlugosc wektora
class Wektor{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    plus(x,y){
        this.x += x;
        this.y += y;
    }
    minus(x,y){
        this.x -= x;
        this.y -= y;
    }
    get dlugosc(){
        return Math.sqrt(this.x*this.x+this.y*this.y);
    }
}

strzalka = new Wektor(10,10);
console.log(strzalka.dlugosc);