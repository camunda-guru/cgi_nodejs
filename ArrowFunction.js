'use strict';

var msg = ()=> {
    console.log("function invoked")
}


msg()

var bill = {
    servicenumber: 557,
    process: () => console.log(this)
};
bill.process();



var bill = {
    servicenumber: 557,
    process: function () {
        return () => console.log(this.servicenumber);
    }
};
var newBill = {
    servicenumber: 900
};
bill.process().bind(newBill)();


var somenumber = () => 1234;
console.log(typeof somenumber);

class GamesCollection {
    constructor(games = []) {
        this.games = games;
    }

    log() {
        this.games.forEach((game) => {
            console.log(game.name + ' on ' + game.platform);
        })
    }
}

class Game {
    constructor(name, platform) {
        this.name = name;
        this.platform = platform;
    }
}

new GamesCollection([
    new Game('Zelda', 'Nintendo'),
    new Game('Halo', 'Xbox'),
    new Game('Mario', 'Nintendo')
]).log();

var Language = function (name, delay) {
    this.name = name;
    this.delay = delay;
};

Language.prototype.greet = function () {
    setTimeout(() => {
        console.log('Hi, I am ' + this.name);
    }, this.delay);
};

var java = new Language('PHP', 2000);
var cpp = new Language('JavaScript', 30);

java.greet();
cpp.greet();


// Filter an array for only odd numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Before...
let es5OddNumbers = numbers.filter(function(number) {
    return number % 2;
});
console.log(es5OddNumbers);

// After...
let es6OddNumbers = numbers.filter(number => number % 2);
console.log(es6OddNumbers);

// Parens are optional depending on the number of arguments:
let square = x => x * x;
console.log(square(10));

let add = (a, b) => a + b;
console.log(add(3, 4));

// `return` is implied if using an expression after an arrow.
let developers = [{name: 'Rob'}, {name: 'Jake'}];
// Before...
let es5Output = developers.map(function(developer) {
    return developer.name;
});
console.log(es5Output);

// After...
let es6Output = developers.map(developer => developer.name);
console.log(es6Output);

// Fat arrows change how `this` is handled.

// Before...
// In ES5, `bind()` or var that = this; are necessary as functions
// create their own `this`. We need to store the parent `this` in
// a variable that can be referenced in the callback or take care
// of binding ourselves.
function CounterES5() {
    this.seconds = 0;
    setInterval(function() {
        this.seconds++;
    }.bind(this), 1000); // or }.bind(this), 1000) and skip that = this
}

var counterA = new CounterES5();
setTimeout(function() {
    console.log(counterA.seconds);
}, 1200);

// After...
// ES6 Arrows instead bind `this` to the immediate enclosing
// lexical scope:
function CounterES6() {
    this.seconds = 0;
   setInterval(() => this.seconds++, 1000);
}

let counterB = new CounterES6();
setTimeout(() => console.log(counterB.seconds), 1200);