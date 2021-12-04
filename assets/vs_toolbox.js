"use strict";

(function () {
    let x = "Hello!!";  // I will invoke myself
})();

const add = (function () {
    // This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
    let counter = 0;
    return function () {counter += 1; return counter}
})();
add();
add();
add();

const GLOBAL_VARIABLE = "Something";

////////////////////////////////////////////////////////////////////////////////
function writeInformation( data ) {
    window.console(arguments.length);
    window.console(writeInformation.toString());
    window.console.log(data);
    window.console.debug(data);
    window.console.error(data);
    window.document.write(data)
    window.alert(data);
    window.print();
}
////////////////////////////////////////////////////////////////////////////////

function declareVariables() {
    const PI = 3.14;
    const arr = [];
    const obj = {};
    const myFunction = function() {
        console.log('do something');
    }
    // If a JavaScript statement does not fit on one line, the best place to break it is after an operator:
    const myRegex = 
    /^Ricky|StringThatIWantToFind|AnotherStringThatIWantToFind|SomeW.rd|b[aiu]g|[aeiou]|b[a-z0-9]g|[^ .!@/]|bo+a|go*|P(engu|umpk)in|caboose$/gi; // (g=all; i=ignoreCase)
    let _privateVariable = '';
    let myNumber = 0;
    let $var = 10;
    globalConstant = true;
    var my_string = '';
    let x = 123e5;    // 12300000
    let y = 123e-5;   // 0.00123
    let x2 = (0.2 * 10 + 0.1 * 10) / 10;

    let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    person = null;    // Now value is null, but type is still an object
    person = undefined;   // Now both value and type is undefined

    let x1 = "";             // new primitive string
    let x2 = 0;              // new primitive number
    let x3 = false;          // new primitive boolean
    const x4 = {};           // new object
    const x5 = [];           // new array object
    const x6 = /()/;         // new regexp object
    const x7 = function(){}; // new function object

}

function dateDemo() {
    const d1 = new Date(2018, 15, 24, 10, 33, 30);
    const d2 = new Date(2019, 3, 24, 10, 33, 30);

    d1.getFullYear();
    d1.getMonth();
    d1.getDate();
    d1.getHours();
    d1.getMinutes();
    d1.getSeconds();
    d1.getMilliseconds();
    d1.getTime();
    d1.getDay();
    d1.toISOString();
    d1.toJSON();
    Date.now()

    d2.setDate();
    d2.setFullYear();
    d2.setHours();
    d2.setMilliseconds();
    d2.setMinutes();
    d2.setMonth();
    d2.setSeconds();
    d2.setTime();
    
}

function MathDemo() {
    Math.E        // returns Euler's number
    Math.PI       // returns PI
    Math.SQRT2    // returns the square root of 2
    Math.SQRT1_2  // returns the square root of 1/2
    Math.LN2      // returns the natural logarithm of 2
    Math.LN10     // returns the natural logarithm of 10
    Math.LOG2E    // returns base 2 logarithm of E
    Math.LOG10E   // returns base 10 logarithm of E

    Math.round(15.5);
    Math.ceil(7.9);
    Math.floor(18.43);
    Math.trunc(15.43);

    Math.sign(-4);
    Math.sign(0);
    Math.sign(4);

    Math.pow(8, 2);
    Math.sqrt(64);
    Math.abs(-4.7);
    Math.sin(90 * Math.PI / 180);
    Math.cos(0 * Math.PI / 180);
    Math.min(0, 150, 30, 20, -8, -200);
    Math.max(0, 150, 30, 20, -8, -200);
    Math.random();
    Math.log(1);
    Math.log2(8);
    Math.log10(1000);
    Math.cbrt(8);
    // https://www.w3schools.com/js/js_math.asp



}

function operatorsDemo() {
    let my_sum = 2 + 2;
    let my_subtraction = 5 - 2;
    let my_multiplication = 5 * 2;
    let my_exponentiation = 5 ** 2 === Math.pow(5,2);
    let my_division = 10 / 2;
    let my_modulus = 10 % 3;

    my_sum++;
    my_sum--;

    ++my_sum;
    --my_sum;

    my_sum += 1;
    my_sum -= 1;
    my_sum *= 1;
    my_sum /= 1;
    my_sum %= 1;
    my_sum **= 1;

    let equalTo = ('5' == 5);
    let equalValueAndEqualType = (5 === 5);
    let notEqual = (5 != 2);
    let notEqualValueOrNotEqualType = ('5' !== 2);
    let greaterThan = (5 > 2);
    let lessThan = (2 < 5);
    let greaterThanOrEqualTo = (5 >= 5);
    let lessThanOrEqualTo = (2 <= 2);
    let ternaryOperator = (10 >= 5) ? 'Greater' : 'Lesser';

    let logicalAnd = ((5 === 5) && (2 === 2));
    let logicalOr = ((5 === 5) || (2 === 2));
    let logicalNot = !false;
}

function typeOfAndInstanceOf( obj, type, object_type ) {
    const correctType = (typeof obj === type);
    //const correctInstanceOf = (instanceof obj);
    return (typeof obj === type);
}

function propertyOnObject( property, obj ) {
    return property in obj;
}

function objectDemo() {
    const person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
          return this.firstName + " " + this.lastName;
        }
      };

      person.id;
      person['id'];
      person.nationality = "English";
      delete person.id;
      delete person["id"];

      console.log(person.fullName());
      console.log(person.fullName);

    // Returns all properties as an array
    Object.getOwnPropertyNames(person);
    Object.keys(person);
    Object.values(person);
    Object.entries(person);
    Object.getOwnPropertyNames(person);
    Object.preventExtensions(person);
    Object.seal(person);
    Object.isSealed(person);
    Object.freeze(person);
    Object.isFrozen(person);


    const fruits = {Bananas:300, Oranges:200, Apples:500};

    let text = "";
    for (let [fruit, value] of Object.entries(fruits)) {
        text += fruit + ": " + value + "";
    }

    const fruits = {Bananas:300, Oranges:200, Apples:500};
    const myMap = new Map(Object.entries(fruits));

    let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
}

function eventsDemo() {
    // https://www.w3schools.com/jsref/dom_obj_event.asp
}

function stringsDemo() {
    let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = txt.length;
    let str = "Apple, Banana, Kiwi";
    let part = substring(7, 13); // Banana

    let str = "Please visit Microsoft!";
    let newStr = text.replace("Microsoft", "W3Schools");
    // CASE INSENSITIVE
    let text = "Please visit Microsoft!";
    let newText = text.replace(/MICROSOFT/gi, "W3Schools");

    let templateLiterals1 = `He's often called "Johnny ${text}"`;
    let templateLiterals2 =
        `The quick
        brown fox
        jumps over
        the lazy dog`;


    text.trim();
    text.toUpperCase();
    text.toLowerCase();
    text.padStart(4,0);
    text.padSEnd(4,0);
    text.charAt(0);
    text.charCodeAt(0);
    text.includes("world");
    text.startsWith("Hello");
    text.endsWith("Doe");
    text.split(' ');
    str.indexOf("something");
    str.lastIndexOf("something");
    str.search("regular_expression");

    let tags = ["template literals", "javascript", "es6"];
    let html = `<h2>${header}</h2><ul>`;
    for (const x of tags) {
    html += `<li>${x}</li>`;
    }
    html += `</ul>`;

    // https://www.w3schools.com/jsref/jsref_obj_string.asp
}

function regularExpressionsDemo() {
    const myRegex = 
    /^Ricky|StringThatIWantToFind|AnotherStringThatIWantToFind|SomeW.rd|b[aiu]g|[aeiou]|b[a-z0-9]g|[^ .!@/]|bo+a|go*|P(engu|umpk)in|caboose$/gi; // (g=all; i=ignoreCase)

    let text = "The rain in SPAIN stays mainly in the plain";
    text.match(/ain/gi);

    let n = text.search("W3Schools");
    text.search(/w3schools/i);
    text.replace("Microsoft", "W3Schools");
    text.replace(/microsoft/i, "W3Schools");

    const pattern = /e/;
    pattern.test("The best things in life are free!");

    /e/.test("The best things in life are free!");
    /e/.exec("The best things in life are free!");

    // Use /()/ instead of new RegExp()

    // https://www.w3schools.com/js/js_regexp.asp

}

function infinityDemo() {
    let myNumber = 2;
    while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    }
    console.log(Infinity);
    console.log(typeof 2 / 0);
}

function convertDecimalsTo() {
    let myNumber = 32;
    myNumber.toString(10);
    myNumber.toString(32);
    myNumber.toString(16);
    myNumber.toString(8);
    myNumber.toString(2);
}

function numbersDemo() {
    const a = Number('111');
    const b = parseInt('11');
    const c = parseFloat('0.78');
    Number(true);
    Number(false);
    Number("10");
    Number("  10");
    Number("10  ");
    Number(" 10  ");
    Number("10.33");
    Number("10,33");
    Number("10 33");
    Number("John");
    Number.MAX_VALUE;
    Number.MIN_VALUE;
    Number.POSITIVE_INFINITY;
    Number.NEGATIVE_INFINITY;
    Number.NaN;
    Number.isNaN(5);
}

function randomIntegerBetweenXandY(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function arraysDemo() {
    const fruits = ["Banana", "Orange", "Apple"];
    Array.isArray(fruits);
    fruits instanceof Array;

    fruits.join(" * ");
    fruits.pop();
    fruits.push("Kiwi");
    fruits.shift();
    fruits.unshift("Lemon");
    fruits[0] = "Kiwi";
    fruits.splice(2, 0, "Lemon", "Kiwi");
    fruits.splice(0, 1);
    fruits.concat([], []);
    fruits.slice(1);
    fruits.slice(1, 3);
    fruits.sort();
    fruits.reverse();

    // NUMBERIC SORT/REVERSE
    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a - b});
    points.sort(function(a, b){return b - a});

    // RANDOM ORDER
    for (let i = points.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = points[i]
        points[i] = points[j]
        points[j] = k
    }

    // MIN/MAX
    points.sort(function(a, b){return a - b});
    const min = points[0];
    const max = points[points.length-1];
    Math.max.apply(null, points);
    Math.min.apply(null, points);

    const cars = [
        {type:"Volvo", year:2016},
        {type:"Saab", year:2001},
        {type:"BMW", year:2010}
    ];
    // SORT BY NUMBER
    cars.sort(function(a, b){return a.year - b.year});
    // SORT BY STRING
    cars.sort(function(a, b){
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });

    const numbers = [45, 4, 9, 16, 25];
    let txt = "";
    numbers.forEach(myFunction);

    const numbers1 = [45, 4, 9, 16, 25];
    const numbers2 = numbers1.map(multiplyByTwo);
    const numbers3 = [45, 4, 9, 16, 25];
    const over18 = numbers.filter(isOver18);
    let sum = numbers.reduce(getSum);
    numbers.every(isOver18);
    numbers.some(isOver18);
    numbers.find(isOver18)
    numbers.findIndex(isOver18)
    let position = fruits.indexOf(100) + 1;
    position = fruits.lastIndexOf(100) + 1;
    fruits.includes("Mango");
    fruits.keys();
    Array.from('ABCDEFG');

    for (const x of [1,2,3,4,5] {
        // code block to be executed
    }

}

function myFunction(value, index, array) {
    txt += value + "<br>";
}

function multiplyByTwo(value, index, array) {
    return value * 2;
}

function isOver18(value, index, array) {
    return value > 18;
}

function getSum(total, value, index, array) {
    return total + value;
}

function getSum2(total, value) {
    return total + value;
}

function comparisons() {
    // https://www.w3schools.com/js/js_comparisons.asp
    let time = 11;
    if (time < 10) {
        greeting = "Good morning";
    } else if (time < 20) {
    greeting = "Good day";
    } else {
    greeting = "Good evening";
    }

    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Undefined";
            break;
    }
}

function loopsDemo() {
    let cars = ['Volvo', 'Renault', 'Mitsubishi'];
    for (let i = 0; i < cars.length; i++) {
        if (i === 3) { 
            continue;
        }

        if (i === 8) { 
            break;
        }
        console.log(cars[i]);
    }

    for (let x of cars) {
        text += x;
    }

    const letters = new Set(['a','b','c', 'c']);

    for (const x of letters) {
    // code block to be executed
    }

    let language = "JavaScript";

    let text = "";
    for (let x of language) {
        text += x;
    }

    const person = {
        fname:"John", 
        lname:"Doe", age:25
    };

    for (let x in person) {
        text += person[x];
    }

    let i = 0;
    while (i < 10) {
        text += "The number is " + i;
        i++;
    }

    i = 0;
    do {
        text += "The number is " + i;
        i++;
    }
    while (i < 10);



    


}

function setDemo() {
    const letters = new Set(['a','b','c','c']);
    letters.add('d');
    letters.delete('a');
    letters.has('a');
    letters.values();
    letters.size;

    Array.from(letters);
}

function mapDemo() {
    // A Map holds key-value pairs where the keys can be any datatype.
    // A Map remembers the original insertion order of the keys.
    // A Map has a property that represents the size of the map.

    // Create a Map
    const fruits = new Map();

    // Set Map Values
    fruits.set("apples", 500);
    fruits.set("bananas", 300);
    fruits.set("oranges", 200);

    fruits.get("apples");
    fruits.size;
    fruits.delete("apples");
    fruits.has("apples");
    fruits.entries();

    // Create a Map
    const fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ]);

    // Create a Map
    const fruits = new Map();

    // Set Map Values
    fruits.set("apples", 500);
    fruits.set("bananas", 300);
    fruits.set("oranges", 200);
    fruits.set("apples", 500);

    fruits.get("apples");    // Returns 500
    fruits.size;
    fruits.delete("apples");
    fruits.clear();

    typeof fruits;
    fruits instanceof Map;

    // Object	Map
    // Iterable	Not directly iterable	Directly iterable
    // Size	Do not have a size property	Have a size property
    // Key Types	Keys must be Strings (or Symbols)	Keys can be any datatype
    // Key Order	Keys are not well ordered	Keys are ordered by insertion
    // Defaults	Have default keys	Do not have default keys
    fruits.entries();
    fruits.keys();
    fruits.values();

    // Create Objects
    const apples = {name: 'Apples'};
    const bananas = {name: 'Bananas'};
    const oranges = {name: 'Oranges'};

    // Create a Map
    const fruitObjects = new Map();

    // Add new Elements to the Map
    fruitObjects.set(apples, 500);
    fruitObjects.set(bananas, 300);
    fruitObjects.set(oranges, 200);



}

function dataTypes() {
    // https://www.w3schools.com/js/js_typeof.asp
    typeof "John"                 // Returns "string"
    typeof 3.14                   // Returns "number"
    typeof NaN                    // Returns "number"
    typeof false                  // Returns "boolean"
    typeof [1,2,3,4]              // Returns "object"
    typeof {name:'John', age:34}  // Returns "object"
    typeof new Date()             // Returns "object"
    typeof function () {}         // Returns "function"
    typeof myCar                  // Returns "undefined" *
    typeof null                   // Returns "object"
    typeof {name:'John', age:34} // Returns "object"
    typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
    typeof null                  // Returns "object"
    typeof function myFunc(){}   // Returns "function"
    /*
    The data type of NaN is number
    The data type of an array is object
    The data type of a date is object
    The data type of null is object
    The data type of an undefined variable is undefined *
    The data type of a variable that has not been assigned a value is also undefined
    */
    "John".constructor                // Returns function String()  {[native code]}
    (3.14).constructor                // Returns function Number()  {[native code]}
    false.constructor                 // Returns function Boolean() {[native code]}
    [1,2,3,4].constructor             // Returns function Array()   {[native code]}

    new Date().constructor            // Returns function Date()    {[native code]}

    typeof undefined           // undefined
    typeof null                // object

    null === undefined         // false
    null == undefined          // true

}

function isArray(myArray) {
    return myArray.constructor === Array;
}

function tryCatchDemo() {
    try {
        // Block of code to try
    }
    catch(err) {
        // Block of code to handle errors
        throw "Too big";    // throw a text
        throw 500;    
        throw false;     
        throw {};   
    }
    finally {
        // Block of code to be executed regardless of the try / catch result
      }

    let x = 'Some input';
    try {
        if(x == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5) throw "too low";
        if(x > 10) throw "too high";
    }
    catch(err) {
        console.log(err.message + error.name);
    }

    // https://www.w3schools.com/js/js_errors.asp
}

function thisDemo() {
    // https://www.w3schools.com/js/js_this.asp
    // In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
    // With arrow functions the this keyword always represents the object that defined the arrow function.
}

const hello = val => "Hello " + val;

const arrowFunction1 = (a, b = 2) => a * b;

const arrowFunction2 = () => {
    return 0;
};

const arrowFunction3 = function() {
    return "Hello World!";
}

function jsonDemo() {
    const obj = JSON.parse('{ "name":"Helios","lastName":"Sunny"}');
    const str = JSON.stringify(obj);

    const arr = ["John", "Peter", "Sally", "Jane"];
    let myString = JSON.stringify(arr);
}

function numberDemo() {
    Number.MIN_SAFE_INTEGER;
    Number.MAX_SAFE_INTEGER;
    Number.isInteger(10);        // returns true
    Number.isInteger(10.5);      // returns false
    Number.isSafeInteger(10);    // returns true
    Number.isSafeInteger(12345678901234567890);  // returns false
    Number.isFinite(10/0);       // returns false
    Number.isFinite(10/1);       // returns true
    Number.isNaN("Hello");       // returns true


}

function promiseDemos() {
    let myPromise = new Promise();

    myPromise.then();
    myPromise.catch();
    myPromise.finally();


}

function primitivesDemo() {

    // string
    // number
    // boolean
    // null
    // undefined
}


function innerFunctionDemo() {
    let counter = 0;
    function plus() {counter += 1;}
    plus();   
    return counter;
}


class Car {
    
    static hello() {
        return "Hello!!";
      }

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }

    honk(sound) {
        console.log(sound);
    }
}

const person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO",
    get lang() {
      return this.language;
    },
    set lang(value) {
      this.language = value;
    }
  };

// document.getElementById("demo").innerHTML = myFunction;

////////////////////////////////////////////////////////////////////////////////

