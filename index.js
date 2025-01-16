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

// part 3


let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

//each of our cells 
let cell1 = ''
let cell2 = ''
let cell3 = ''
let cell4 = ''

//where we are in the cell
let curCell = 1;

//Looping through csv
for (let i = 0; i < csv.length; i++){
    let curCharacter = csv[i]
    // console.log(curCharacter)
    if(curCharacter === ","){
        curCell++
        // console.log(curCharacter){
    } else if (curCharacter === '\n') {
        console.log(cell1, cell2, cell3, cell4)
        cell1 = ""
        cell2 = ""
        cell3 = ""
        cell4 = ""
        curCell = 1
    } else {
        if (curCell === 1){
            cell1 += curCharacter
        } else if (curCell === 2){
            cell2 +=  curCharacter
        } else if (curCell === 3) {
            cell3 += curCharacter
        } else if (curCell === 4) {
            cell4 += curCharacter
        }
    } 

} //console.log(cell1)