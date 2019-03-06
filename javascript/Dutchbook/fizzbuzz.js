// program fizzbuzz
const fizz = 'Fizz';
const buzz = 'Buzz';
const bf = 'FizzBuzz';
for(i = 1; i<101 ; i += 1){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(bf);
    }
    else if(i % 3 == 0){
        console.log(fizz);
    }
    else if (i % 5 == 0){
        console.log(buzz)
    }
    else{
        console.log(i);
    }
    
}