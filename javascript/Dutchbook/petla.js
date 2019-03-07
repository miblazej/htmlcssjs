// Funkcja symulujace petle
// Argumenty
/* wartosc - zmienna ktora najprawdopobniej bedzie zmieniana
   test - funckja ktora ma sprawdzac warunek ktory ma byc spelniony aby petla mogla dzialac
   wykonawcza - funkcja wykonujaca powiezone zdanie
   aktualizacja - funkcja zmieniajaca wartosc value
*/
function petla(wartosc,test,wykonawcza,aktualizacja){
    while(1){
        if(!test(wartosc)){
            break;
        }
        else{
            wykonawcza();
            wartosc = aktualizacja(wartosc);
        }
    }
}

function aktualizacja(a){
    return a +=1;
}

petla(0,(a)=> a < 3,() => console.log('Kodeina'),aktualizacja)