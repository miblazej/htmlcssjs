// Funckja ma sprawdzić parzystość przy pomocy rekursji
function jestParzysta(x){
    x = x < 0 ? x*(-1):x;
    x = x > 1 ? x -=2 : x;
    if (x > 1){
         x = jestParzysta(x);
    }
    else{
        return x == 1 ? false : true;
    }
    return x;
}

// test
console.log(jestParzysta(-1))