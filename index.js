for (let i =1; i < 101; i++){
   if (i % 3 === 0 && i % 5 === 0){
        console.log("Fizz Buzz");
    } else if ( i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else {
        console.log(i);
    }
}


//part 2
let n = parseInt(prompt("Enter a number of your choice"))
let plusONe = n + 1

while(true){
    let isPrime = true; 
    for (let i =2; i < plusONe; i++){
        if (plusONe % i === 0) {
            isPrime = false; 
            break
        }
    }
    if (isPrime) {
        console.log(`The next prime number after ${n} is ${plusONe}`);
        break
    }
    plusONe++
}

