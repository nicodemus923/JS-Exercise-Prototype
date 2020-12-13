/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) { // initialize with name, age
  this.name = name;
  this.age = age;
  this.stomach = []; // initialize with empty stomach array.
};
Person.prototype.eat = function (someFood) { // instance of Person ability to eat (EAT METHOD)
  if (this.stomach.length < 10) { // once reaches 10, the food is no longer pushed to stomach
    this.stomach.push(someFood); // when eating, someFood is pushed into .stomach
  };
};
Person.prototype.poop = function () { // instance of Person ability to poop method
  this.stomach = []; // when method poop runs it returns the stomach to an empty array
};
Person.prototype.toString = function () { // toString method
  return this.name + this.age; // returns instance name and age 
};








/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) { // initialize  2 inputs
  this.tank = 0;                     // initializes with tank with an integer  
  this.odometer = 0;                 // initializes odometer with an integer 


}

Car.prototype.fill = function (gallons) {
  let fillTank = parseInt(gallons) + parseInt(this.tank) // parseInt() is safest choice for this input/adds gallons input to tank
  this.tank = fillTank; // sets this.tank to new value from above
  return fillTank; // final output to return function
}

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favToy) { // initialize
  Person.call(this, name, age); // class parameters being called with 'this' and binds to subclasss
  this.favoriteToy = favToy;
}
Baby.prototype = Object.create(Person.prototype) //new baby prototype being created which links person and baby proto together
Baby.prototype.play = function () {
  return ("Playing with " + this.favoriteToy);
}
let newBaby = new Baby('Reggie', 3, 'Cobra Commander');
/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Global Scope: 'this' value is the window. (never use)
  2. Implicity binding: 'this' is always to the left of the "."
  3. New Binding: Using the 'new' keyword to create Objects from a Constructor function defines 'this'
  4. EXPLICIT BINDING (call/apply): 'this is "explicitly" defined
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo() {
  return 'bar';
}

export default {
  foo,
  Person,
  Car,
  Baby
}