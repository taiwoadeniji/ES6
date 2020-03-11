
/**
 * Find Method:
 */
var myArray = [ 'Hello, World!', 2, 3, true, 5, null, 38 ];
var myValue = myArray.find(function (element) { return element > 4;});
console.log(myValue); // returns 5, an element from our array! us one item ack.

// for checking if an element exists in array.
var isMyStringInside = myArray.find(function (element) { return element === 
    'Hello, World!'; });
console.log(isMyStringInside); // we would get the matching element.

//find is helpful for checking if an element exist in an array!
var isMyStringInside = myArray.find(function (element) { return element === 
    ' Goodbye, Everyone : ('; });
console.log(isMyStringInside); // Not found:)

/**
 * .findindex()
 */
var findAnIndex = myArray.findIndex( function ( element ) { return element === 2; });
console.log( findAnIndex ); // But this time, it returned the value's INDEX.

/**
 * .entries()
 */

 var pairing = myArray.entries();
 console.log(pairing); // Returns an interator.
 console.log( pairing.next().value ); // we can keep bumping to the next item, getting a nice key/value array to let us know what's inside!
 console.log( pairing.next().value );
 console.log( pairing.next().value );
 console.log( pairing.next().value );
 console.log( pairing.next().value );
 console.log( pairing.next().value );
 console.log( pairing.next().value );

 /**
  * .from() method:
  */
 var fromArray = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
 console.log(fromArray); // it gives a 26-element array.
 var fromArray2 = Array.from('Hello, World');
 console.log(fromArray2); //Even spaces and special characters will be captured as elements!

 /**
  * .filter () method:
  * Returns array of all matches.
  */
 var filtered = myArray.filter( function (element) { return element > 4; });
 console.log(filtered); // All matches returned! 5 and 38!

 /**
  * .reduce() method:
  * we can add on to a value, returns only a single.
  */
 var reduceResult = myArray.reduce(function ( accumulator, currentVal ) {
     return accumulator + currentVal;
 } );
 console.log( reduceResult );
 console.log( [ 1, 2, 3, 4 ].reduce(function( a, v) { return a+v; })); // Because we have numbers in here, they are being added (mathematically.)

/**
 * Let and Const
 */
var x = 3; // standard variable declaration. function-scoped.
let y = 7; // Let is block-scoped.
const z = 36; // Const is block-stcoped, but re-assignment is not allowed.
// z = 16; Not allowed! const must remain with its original assisgnment
console.log(z);

y = 13; // Allowed! var and let allow re-assignmnet
console.log(y);

for ( var myVar = 0; myVar < 10; myVar++) {
    console.log('for loop iteration...');
}
console.log('myVar = '+myVar);

for (let myNewVar = 0; myNewVar < 10; myNewVar++) {
    console.log('for loop iteration...');
    console.log('myNewVar = '+myNewVar);
}
// console.log('myNewVar = '+myNewVar); // we cant access it outside of the block.

const myObj = {
    name: 'Henry',
    age: 18
}

myObj.name = 'Sandy'; // can we update PROPERTIES or array ELEMENTS inside of a const-declared variable.
myObj.hobbies = [];
myObj.hobbies.push(' mountain climbing');
console.log(myObj);

/**
 * Lets shake things up with: FUNCTIONS
 * New syntax..
 */

 // Classic function declarattion..
 function myFunction (a,b) {
     return Number(a) + Number(b);
 }
 console.log(myFunction(3, 7) );
 // ES6 style:
 myFunction = (a, b) => Number(a) + Number(b); // Instant return with no curly braces.
 console.log(myFunction(3,8) );

 //Bigger function
 myOtherFunction = (a, b) => { // use curly braces for larger, more complex operations.
     const myAnswer = Number(a) + Number(b);
     return myAnswer;
 }
 console.log(myOtherFunction( 34, 6) );

 /**
  * function default parameter values.
  */

addNums = (x =0, y= 0 ) => x+y;
console.log(addNums() ); // No arguments! but our default values kick in!

/**
 * Reset parameter.
 */

 findHighNums = (minNum = 0, ...args) => { // ....args will capture any number of arguments that we pass!
    minNum = Number(minNum);
    if (minNum === NaN ) minNum = 0;
    const highNums = args.filter( ( element) => element > minNum);
    return highNums;
    // console.log(args); // It can be called by the name we had in between parenthesis.
     //return args;
 }
 console.log(findHighNums (5,2,20,50,3,0,10,24, -508));

 addAllNums = (...nums) => nums.reduce( (a,v) => a + v);
console.log(addAllNums(64, 6, 10, 20) );

/**
 * Template Literals
 */

 const helloVar = 'Hello, World!';
 const sampleName = 'Sam';

 const myNewString = `Hey there, my name is ${sampleName}; I\'d like to give you a big: "${helloVar}"!!`; // The syntax for template literals is : ${variableName}
 // NOTE: This only works inside of backticks! but is super useful. It saves us from extra concatenation.
 console.log(myNewString);

 /**
  * Spread Opertaor
  * ***Dont get this confused with the rest parameter! Both are three dots...
  * ***Remember that rest parameter is always in parameter drea of a function, nowhere else.. Spread is used ANYWHERE else, basically.
  */
 const newArray = ['Hello', ',', ',', 'world', '!'];
 console.log(newArray);
 console.log(...newArray); // broght the values in the array together as one string.

 //string operator separates into separates values.
 const aBunchOfNums = [5,10,36,58];
 console.log( addAllNums(5,10,36,58)); // This and the below, are equivalent (our array gets broken up!)
 console.log( addAllNums(...aBunchOfNums)); // spreading an argument.

 /**
  * String () Method:
  * Regex Learning tool: https://regexone.com
  */
 const myTestString = 'Greetings, Programs!';
 console.log(myTestString.search( /TING/i)); // Regax match. i is for case-Insensitive. Returns the SUBSTRING POSITION. TING is position 4 in string.

 /**
  * .replace() Method:
  */

  const myReplacedString = myTestString.replace( /programs/, 'World'); // Find a string, and replace it/
  console.log(myReplacedString);

  /**
   * Blocks:
   */
{
    const myBlockNestedVar = 38;
}

let myFinalResult = 0;
// We CAN name blocks if we want.
myOrganizeName: { // This could be named anything...
    // We can organize some code in here, and control scope of let/const.
    let myBlockNestedVar = 55; // We used the same name as in our unnamed block!? That's okay, it was born in a differently scoped block!
    myBlockNestedVar++;
    console.log( myBlockNestedVar );
    myFinalResult = myBlockNestedVar;
}
console.log( myFinalResult );

/**
 * Classes.
 * *** CHECK OUR IMPORT, THAT'S HOW WE'RE ACCESSING THIS!
 */

class Movie {
    constructor( name, genre, year ) {
        this.name = name;
        this.genre = genre;
        this.year = year;
    }
    get getname() {
        return this.name;
    }
    set setname(newName) {
        if (typeof name === 'string') {
            this.name = name;
        } else {
            this.name = name.toString();
        }
    }
    get getYear() {
        return 'y'+this.year;
    }
    set setYear( year ) {
        this.year = Number( year );
    }
    showPoster() { // This is a method! We can name them as we'd like.
        const info = `
            MOVIE INFO
            ==========
            Name: ${this.name}
            Genre: ${this.genre}
            Year: ${this.year}
        `;
        return info;
    }
}
const tron = new Movie( 'Disney\'s TRON', 'Adventure', 1982 );
const dragonheart = new Movie( 'Dragonheart', 'Medieval Fantasy', 1996 );
const godfather = new Movie( 'Godfather II', 'Action/Thriller', 1974 );

console.log( tron );
console.log( dragonheart );
console.log( godfather );