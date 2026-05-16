// ###############
// Chapter - 4
// ###############


// Initialize the task variable to undefined
let task = undefined;

// Load external journal data (assumed to be an array of entries)
const JOURNAL = require('./support/journal.js');



// Demonstrate array indexing
let listOfNumbers = [2, 3, 5, 7, 11];
// Access the 4th element (value 7)
task = listOfNumbers[3];
// Access the first element (value 2)
task = listOfNumbers[0];



// Show case‑insensitive upper‑casing of a string
let doh = 'DOh';
// Convert to upper case using locale‑aware method
task = doh.toLocaleUpperCase();
// Convert the same string to lower case
task = doh.toLocaleLowerCase();



// Create a numeric sequence and demonstrate push()
let seq = [1, 5, 3, 7, 4, 9, 0];
seq.push(7); // add 7 at the end
seq.push(4); // add 4 at the end
// Assign the resulting array to task
task = seq;



// Remove the last element using pop()
seq.pop();
// Assign the shortened array to task
task = seq;


// Define an object with boolean, array and numeric properties
let val = { bol: false, eve: ['work', 'run', 'sleep'], pos: 123 };
// Access individual properties
task = val.bol;   // false
task = val.pos;   // 123
// Retrieve an array of the object's keys
task = Object.keys(val);


// Merge a second object into the first using Object.assign()
let new_val = { str: 'hi, hello!!', num: 100 };
Object.assign(val, new_val);
// `val` now contains the combined properties
task = val;



// Simple in‑memory journal implementation
let journal = [];
// Helper to add a new entry (events array + squirrel flag)
function addEntry(events, is_squirrel) {
    journal.push({ events, is_squirrel });
}
// Populate the journal with sample data
addEntry(['eat', 'sleep'], false);
addEntry(['eat', 'sleep', 'pizza'], false);
addEntry(['run', 'sleep', 'touched tree'], true);
// Export the filled journal for later use
task = journal;



// Extract a list of all unique events that appear in the journal
function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}
// Compute the unique events from the external JOURNAL data
task = journalEvents(JOURNAL);







// Compute the phi statistic (correlation) for a 2×2 contingency table
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}

// Build a 2×2 table counting how often `event` occurs with/without squirrel
function tableFor(event, journal) {
    let table = [0, 0, 0, 0]; // [¬E∧¬S, E∧¬S, ¬E∧S, E∧S]
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1; // event occurred
        if (entry.squirrel) index += 2;              // squirrel flag set
        table[index] += 1;
    }
    return table;
}


// Find events that have a strong correlation (|phi| > 0.1) with squirreliness
for (let event of journalEvents(JOURNAL)) {
    let coorelation = phi(tableFor(event, JOURNAL));
    if (coorelation > 0.1 || coorelation < -0.1) {
        // Uncomment to see the event and its phi value
        // console.log(`${event}: ${coorelation}`);
    }
}


// Add a synthetic combined event when peanuts are eaten without brushing teeth
for (let entry of JOURNAL) {
    if (entry.events.includes('peanuts') && !entry.events.includes('brushed teeth')) {
        entry.events.push('peanuts teeth');
    }
}
// Compute the correlation for the new combined event
task = phi(tableFor('peanuts teeth', JOURNAL));



// Simple FIFO / LIFO todo list implementation
let toDoList = [];
// Add a task to the end (FIFO)
function remember(task) {
    toDoList.push(task);
}
// Retrieve and remove the oldest task
function getTask() {
    return toDoList.shift();
}
// Add a task to the front (LIFO)
function rememberUrgently(task) {
    toDoList.unshift(task);
}
// Populate the list with sample entries
remember('q');
remember('c');
rememberUrgently('a');
// Retrieve the next task (should be 'a' because it was added urgently)
task = getTask();


// Demonstrate indexOf and lastIndexOf on an array of numbers
let indList = [2, 8, 5, 9, 4, 7, 0, 3, 5];
// First occurrence of 2
task = indList.indexOf(2);
// First occurrence of 5
task = indList.indexOf(5);
// Last occurrence of 5
task = indList.lastIndexOf(5);


// Slice portions of the array
task = indList.slice(2, 7); // elements 2 through 6
task = indList.slice(5);    // from index 5 to end


// Remove an element at a specific index without mutating the original array
function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}
// Example: remove the element at index 3
task = remove(indList, 3);



// String slicing and searching examples
let str = 'iamsumitkumar';
// Extract characters 3 through 7 ("sumit")
task = str.slice(3, 8);
// Find the first occurrence of 's'
task = str.indexOf('s');



// Return the maximum value from a list of numbers
function max(...nums) {
    let result = -Infinity;
    for (let num of nums) {
        if (num > result) {
            result = num;
        }
    }
    return result;
}
let nums = [1, 4, 5, 76, 99, 123, 345];
// Compute the maximum value
task = max(...nums);


// Create a new array by spreading existing numbers and adding new ones at both ends
let new_nums = [756, ...nums, 987];
task = new_nums;


// Generate an array of numbers from `start` to `end` (inclusive) with optional step
function range(start, end, step = 0) {
    let data = [];
    while (start <= end) {
        data.push(start);
        if (step > 0) {
            start += step;
        } else {
            start++;
        }
    }
    return data;
}
// Sum an arbitrary list of numbers
function sum(...nums) {
    let res = 0;
    for (let num of nums) {
        res += num;
    }
    return res;
}
// Example: sum of odd numbers from 1 to 9
task = sum(...range(1, 10, 2));



// Return a new array with the elements of `list` in reverse order
function reverseArray(list) {
    let res = [], index = list.length - 1;
    while (index >= 0) {
        res.push(list[index]);
        index--;
    }
    return res;
}
// Example usage
task = reverseArray([1, 2, 3, 4, 5]);


// Output the final computed value to the console
console.log(task);