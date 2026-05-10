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



console.log(task)




