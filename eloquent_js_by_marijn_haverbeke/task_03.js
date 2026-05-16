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

let biggest = null;
for (let script of SCRIPTS) {
  if (biggest == null ||
      characterCount(biggest) < characterCount(script)) {
    biggest = script;
  }
}
task = biggest;


console.log(task);