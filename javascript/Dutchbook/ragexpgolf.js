// sprawdzenie moich umiejetnosci
// Deklaracja regular expresion
/*let re = /abc/;
let catre = /(ca)t|r/;
console.log(catre.test('car'));
console.log(catre.test('cat'));
console.log(catre.test('ca'));
console.log(catre.test('caturday'));
console.log(catre.test('catr'));
console.log(catre.test('caret'));*/
// pop and prop
let re = /pr*op/;
//console.log(re.test('popluarity'));
//console.log(re.test('propality'));
// ferret, ferry and ferrari
//re = /ferr[eya](t|(ri))*/;
//console.log(re.test('ferr'));
//re = /\w*(ious)/;
//console.log(re.test('precious'));
//console.log(re.test('malicious'));
// whitespace followed by period comma colon or semicolon
//re = /\s.|,|;/;
//console.log(re.test(' .'));
// slowo dluzsze niz 6 liter
//re = /\w{6,}/;
//console.log(re.test('kokokoko'));
// Slowo bez e badź E
re = /[a-d]|[f-z]/i;
console.log(re.test('elementarz'));