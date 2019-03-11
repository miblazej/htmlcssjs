// Sprawdzenie execa
let re = /x/;
let s = 'ixixixixixiixixix';
let a = re.exec(s);
console.log(a[0]);
// Napisanie ekspresji ktora zgadza sie tylko z Javascriptowym stylem liczb
// minus albo plus na poczatku liczby
// kropka dzisietna
// Notacja exponencjalna z plustem orz minusem
// istnieje opcja gdy kropka wystepuje tylko z przodu jednakze jest za nia liczba
re = /(|+|-|.|\d*)/