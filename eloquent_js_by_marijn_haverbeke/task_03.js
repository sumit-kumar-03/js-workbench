// ###############
// Chapter - 5
// ###############



// Initialize the task variable to undefined
let task = undefined;

// Load the scripts data from the support module
const SCRIPTS = require('./support/scripts.js');



// Generate an array of numbers from start to end (inclusive) with optional step
function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}
task = range(1, 10, 2);


// Compute the sum of all numeric elements in an array
function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}
task = sum(range(1, 100, 4));



// Recursive factorial function
function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}
task = factorial(5);



// Filter scripts that have top‑to‑bottom direction
function ttbLang(script) {
    let resp = script.filter(s => s.direction === 'ttb');
    return resp;
}
task = ttbLang(SCRIPTS);




// Generic map implementation applying a transform to each element
function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}
let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
task = (map(rtlScripts, s => s.name));



// Execute a given action n times, passing the current index
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
//task = repeat(3, console.log);


// Determine which script a Unicode code point belongs to
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}
task = characterScript(3648);



// Group items by a derived name and count occurrences
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.find(c => c.name == name);
    if (!known) {
      counts.push({name, count: 1});
    } else {
      known.count++;
    }
  }
  return counts;
}




// Analyze a piece of text and report the percentage of each script used
function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}


// Generic filter implementation returning elements that satisfy a test function
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}
task = filter(SCRIPTS, script => script.living);



// Generic reduce implementation aggregating array elements using a combine function
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}
task = reduce([1, 2, 3, 4], (a, b) => a + b, 0);




// Compute the total number of characters covered by a script's Unicode ranges
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

// Identify the script with the greatest number of characters
let biggest = null;
for (let script of SCRIPTS) {
  if (biggest == null ||
      characterCount(biggest) < characterCount(script)) {
    biggest = script;
  }
}
task = biggest;



// Compute average of numeric array
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
task = Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year)));
task = Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year)));



// Compute average year of living scripts using manual loop
let total = 0, count = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    count += 1;
  }
}
task = Math.round(total / count);

// Duplicate characterScript function (exercise)

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}
task = characterScript(121);



// Duplicate countBy function (used for later exercises)
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.find(c => c.name == name);
    if (!known) {
      counts.push({name, count: 1});
    } else {
      known.count++;
    }
  }
  return counts;
}
task = countBy([1, 2, 3, 4, 5], n => n > 2);




// Duplicate textScripts function (used for later exercises)
function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}
task = textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"');



// Exercises

// Flattening -
// Use the reduce method in combination with the concat method to 
// “flatten” an array of arrays into a single array that has all 
// the elements of the original arrays.

let arrays = [[1, 2, 3], [4, 5], [6]];
task = arrays.reduce((flat, current) => flat.concat(current), []);





// Your own loop
// Write a higher-order function loop that provides something like a 
// for loop statement. It should take a value, a test function, 
// an update function, and a body function. Each iteration, 
// it should first run the test function on the current loop value 
// and stop if that returns false. It should then call the body function, 
// giving it the current value, and finally call the update function to create a 
// new value and start over from the beginning.

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}
loop(3, n => n > 0, n => n - 1, console.log);



// Everything
// Arrays also have an every method analogous to the some method. 
// This method returns true when the given function returns true 
// for every element in the array. In a way, some is a version of 
// the || operator that acts on arrays, and every is like the && operator.

// Implement every as a function that takes an array and a predicate 
// function as parameters. Write two versions, one using a loop and 
// one using the some method.
function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}


function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}
task = every([1, 3, 5], n => n < 10);
task = every([2, 4, 16], n => n < 10);
task = every([], n => n < 10);



// Dominant writing direction
// Write a function that computes the dominant writing direction in a string of text. 
// Remember that each script object has a direction property that can be "ltr" (left to right),
//  "rtl" (right to left), or "ttb" (top to bottom).

// The dominant direction is the direction of a majority of the characters that have a script 
// associated with them. The characterScript and countBy functions defined earlier in the chapter 
// are probably useful here.
function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}
task = dominantDirection("Hello!");
task = dominantDirection("Hey, مساء الخير");

// Output the final result
console.log(task);