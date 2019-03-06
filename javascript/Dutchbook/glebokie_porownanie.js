// Funkcja porownujaca dwa obiekty badz zmienne
function glebokaRownowaznos(przedmiot1, przedmiot2){
    if(przedmiot1 === przedmiot2){
        return true;
    }
    else if (typeof przedmiot1 == typeof przedmiot2){
        for(key in przedmiot1.keys){
            if (przedmiot1.key != przedmiot2.key){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}

// funkcja powinna dzialac