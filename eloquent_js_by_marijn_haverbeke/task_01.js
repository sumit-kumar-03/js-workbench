// Introduction



// ###############
// Chapter - 1
// ###############

// Initialize the task variable to undefined
let task = undefined;



// Setup for summing numbers from 1 to 10
let total = 0, count = 1;
// Loop to accumulate the sum of numbers 1 through 10
while (count <= 10) {
    total += count;
    count += 1;
}
// Store the computed sum in `task`
task = total





// Recursive function to calculate the factorial of a number
function factorial(n) {
    if(n == 0){
        return 1;
    }
    else {
        return factorial(n - 1) * n;
    }
    
}
// Compute 10! and assign to `task`
task = factorial(10)


// Boolean

// Boolean comparisons
task = 3 > 2
task = 3 < 2

// Demonstrate that NaN is not equal to NaN using `==`
task = NaN == NaN


// Logical

// Logical AND examples
task = true && false
task = false && false
task = true && true


// Logical OR examples
task = true || false
task = false || false
task = true || true


// Logical NOT examples
task = !true
task = !false


//ternary

// Ternary operator examples
task = true ? 'a' : 'b'
task = false ? 'a' : 'b'


// type conversion

// Type conversion examples in arithmetic and equality
task = 8 * null
task = "5" - 1
task = "5" + 1
task = 'five' * 2
task = false == 0


// type safe operators
// Strict equality (===) and inequality (!==) examples
task = "a" === 1
task = true !== false






// ###############
// Chapter - 2
// ###############



// bindings or variable
// Variable binding and multiplication example
let a = 10;
task = a * a


// Multiple variable declarations and addition
let one = 1, two = 2;
task = (one + two)


// String concatenation using variables
var name = 'sumit'
const greet = 'hello '
task = greet + name



// Loop to iterate even numbers from 0 to 12
let number = 0;
while (number <= 12) {
    //console.log(number);
    number += 2;
}



// Compute 2 to the power of 10 using a while loop
let result = 1, counter = 0;
while (counter < 10) {
    result *= 2;
    counter += 1;
}
task = result;


// Compute 2 raised to the 6th power using exponentiation operator
task = 2 ** 6;


// Prompt user for their name (example uses prompt-sync, currently commented out)
let your_name;
const prompt = require('prompt-sync')();
// do {
//     your_name = prompt("Who are you:");
// } while (!your_name);
task = "Hello " + your_name;




// Loop to iterate even numbers from 0 to 12 using a for loop
for (let num = 0; num <= 12; num += 2){
    //console.log(num)
}



// Compute 2 to the power of 10 using a for loop
let res = 1;
for (let conc = 0; conc < 10; conc += 1){
    res *= 2;
}
task = res;



// Find the first number >=20 that is divisible by 8 using an infinite loop with break
for (let num = 20; ; num += 1){
    if (num % 8==0) {
        task = num;
        break;
    }
}




// EX 1.
let output = "";
for (let num = 0; num < 7; num += 1){
    output += '#';
    //console.log(output);
}



// EX 2.
let num = 1;
while (num <= 20) {
    if (num % 15 === 0) {
        //console.log('FizzBuzz')
    }
    else if (num % 5 === 0) {
        //console.log('Buzz')
    }
    else if (num % 3 === 0) {
        //console.log('Fizz')
    }
    else {
        //console.log(num)
    }

    num += 1;
}



// EX 3.
let chess = '', coun = 1, turn = false;
while (coun <= 64) {
    if (coun % 2 === 0 && !turn) {
        chess += '#';
    }
    else if(coun % 2 === 0 && turn) {
        chess += " ";
    }
    else if(coun % 2 !== 0 && !turn) {
        chess += " ";
    }
    else if(coun % 2 !== 0 && turn) {
        chess += "#";
    }

    if (coun % 8 === 0 && coun<64) {
        turn = !turn;
        chess+='\n'
    }

    coun++;
}
// console.log(chess);




// ###############
// Chapter - 3
// ###############



// Recursive function to compute exponentiation (base^exponent)
function recu(base, exponent) {
    if (exponent === 0){
        return 1;
    }
    else {
        return base * recu(base, exponent - 1);
    }
}

task = recu(2,10)


console.log(task)




