// Program generujacy plansze szachowa
let binding_size = 30;
// produkcja dwoch linni
let a = ''
let b = ''
for(i = 1; i < binding_size + 1; i += 1){
    if (i % 2 == 1){
        a += ' ';
        b += '#';
    }
    else{
        a += '#';
        b += ' ';
    }
}

// Dodanie new line
a += '\n';
b += '\n';
let szachownica = ''
for(i = 1; i < binding_size + 1; i+=1){
    if(i % 2 == 1){
        szachownica += a;
    }
    else{
        szachownica += b;
    }
}
console.log(szachownica);