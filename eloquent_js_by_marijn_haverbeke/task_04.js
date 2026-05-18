// ###############
// Chapter - 6
// ###############



// Initialize the task variable to undefined
let task = undefined;




// Helper function for rabbit objects to speak a line.
function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

//whiteRabbit.speak("Oh my fur and whiskers");
//hungryRabbit.speak("Got any carrots?");

//speak.call(whiteRabbit,"hello")


// Adds a number to the object's value property if it's a valid number.
function add(num = 0) {
  if (typeof num === 'number' && !Number.isNaN(num)) {
    this.value += num;
  }
}

let val = { 'value': 5, add };
val.add('A');
task = val.value;




let empty = {};
task = typeof empty;
task = empty.toString;
task = empty.toString();
task = Object.getPrototypeOf(empty);



let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
  'type':undefined,
}
let blackRabbit = Object.create(protoRabbit);
blackRabbit.type = 'Black';
blackRabbit.speak('HI!')



// Class representing a rabbit with a type and speak method.
class Rabbit{
  constructor(type) {
    this.type = type;
  }
   speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit('killer');
killerRabbit.speak('Grrrr!!')




// Class for temperature conversion between Celsius and Fahrenheit.
class Temperature{
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(fah) {
    this.celsius = (fah - 32) / 1.8;
  }
  static fromFahrenheit(fah) {
    return new Temperature((fah - 32) / 1.8);
  }
}
let temp = new Temperature(43);
task = temp.fahrenheit;
temp.fahrenheit = 102;
task = temp.celsius;

let boil = Temperature.fromFahrenheit(212);
task = boil.celsius;


// Demonstrating use of Symbol as a unique property key.
let sym = Symbol('name');
task = (sym == Symbol('name'));
Rabbit.prototype[sym] = 55;
task = killerRabbit[sym];


// Symbol used to add a hidden length property to arrays.
const length = Symbol("length");
Array.prototype[length] = 0;
let temp_arr = [1, 2];
task = `Array.length = ${temp_arr.length} and Array[length] = ${temp_arr[length]}`;



// Example of manually iterating over a string using its iterator.
let tempIterator = "sumit"[Symbol.iterator]();
let run = true;
while (run) {
  let op = tempIterator.next()
  console.log(op);
  run = !op.done;
}


// Simple linked list implementation with length property and fromArray factory.
class List{
  constructor(val, rest) {
    this.value = val;
    this.rest = rest;
  }

  get length() {
    return 1 + (this.rest ? this.rest.length : 0); 
  }

  static fromArray(array) {
    let result = null;
    for (let i = array.length - 1; i >= 0; i--){
      result = new this(array[i], result);
    }
    return result;
  }

}




// 2D vector class with basic arithmetic operations and magnitude calculation.
class Vec{
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(new_vec) {
    this.x += new_vec.x;
    this.y += new_vec.y;
    return new Vec(this.x,this.y)
  }

  minus(new_vec) {
    this.x -= new_vec.x;
    this.y -= new_vec.y;
    return new Vec(this.x,this.y)
  }

  get length() {
    let len = (this.x ** 2 + this.y ** 2) ** (1 / 2);
    return len
  }

}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5


// Group class representing a collection of unique values.
class Group {
  #members = [];

  add(value) {
    if (!this.has(value)) {
      this.#members.push(value);
    }
  }

  delete(value) {
    this.#members = this.#members.filter(v => v !== value);
  }

  has(value) {
    return this.#members.includes(value);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false








class Group {
  #members = [];

  add(value) {
    if (!this.has(value)) {
      this.#members.push(value);
    }
  }

  delete(value) {
    this.#members = this.#members.filter(v => v !== value);
  }

  has(value) {
    return this.#members.includes(value);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this.#members);
  }
}

// Iterator for the Group class to enable for...of loops.
class GroupIterator {
  #members;
  #position;

  constructor(members) {
    this.#members = members;
    this.#position = 0;
  }

  next() {
    if (this.#position >= this.#members.length) {
      return {done: true};
    } else {
      let result = {value: this.#members[this.#position],
                    done: false};
      this.#position++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c

// Output the final result
// console.log(task);