/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
     In the global scope, `this` is automatically bound to the window or console
     Object. `this` represents the Object in which our current execution is
     taking place, so in the global scope it is the global object.
* 2. Implicit Binding
     Whenever a member function or attribute of an object is accessed with the
     dot operator, `this` is implicitly bound to the Object preceding the dot.
     This allows us to access the Object within member functions without
     explicitly passing it as an argument.
* 3. New Binding
     When instantiating a new object using a constructor function `this` is
     bound to the new instance of the object, allow us to assign and reference
     that instance's attributes within the constructor.
* 4. Explicit Binding
     Using the special methods `.call` and `.apply` we can override the default
     binding of `this` with an explicit value of our choosing. This enables us
     to use the member functions of one object in the context of another.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const testObj = {
  val: "test",
  logVal: function() {
    console.log(this.val);
  }
};

testObj.logVal();


// Principle 3

// code example for New Binding
function TestConstructor(val) {
  this.val = val;
  this.logVal = function() {
    console.log(this.val);
  }
}

const newTest = new TestConstructor("other");
newTest.logVal();

// Principle 4

// code example for Explicit Binding
testObj.logVal.call(newTest);
newTest.logVal.call(testObj);
