// console.log('This is from the closures.js')

/*
    JavaScript Closures
*/

let subject = 'JavaScript'; // block scoped variable - window

function homework(student){ // student - function scoped
    console.log(`${student}, did you finish your ${subject} homework?`);
};

homework('Usama');


// Scopes can be nested

let hometown = 'Baltimore'; // Block scoped

{
    var state = 'Maryland'; // Globally scoped
    let hometown = 'Cockeysville'; // Block scoped
    {
        console.log(`I am from ${hometown}, ${state}`);
    }
}

console.log(`I am from ${hometown}, ${state}`);


// Function scopes can also be nested

function outer(){
    let outerMessage = 'This is the outer message';

    function inner(){
        let innerMessage = ' and this is the inner message';
        console.log(outerMessage + innerMessage);
    }
    return inner;
}

console.log(outer);

let outerReturn = outer(); // return value of the outer function

console.log(outerReturn);
console.log(typeof outerReturn);

// inner() function is a closure
// A closure is a function that preserves the outer scope in its inner scope

outerReturn();
outerReturn();
outerReturn();
outerReturn();
outerReturn();

// console.log(outerMessage);


// A more practical example

function makeMultiplier(x){
    function times(y){
        return x * y
    };
    return times
};

// Create multiplier function

let double = makeMultiplier(2);

console.log(double);

console.log(double(5));
console.log(double(3));
console.log(double(6));
console.log(double(12));
console.log(double(15));

console.log('===========')

let triple = makeMultiplier(3);

console.log(triple(5));
console.log(triple(10));
console.log(triple(14));
console.log(triple(20));
console.log(triple(30));


// Set up a "hidden variable using closures

function setCounter(){
    console.log('Setting Counter....');
    let count = 0; // Scoped to the setCounter Function scope
    function increaseCount(){
        count++;
        return count;
    };
    return increaseCount;
}

let step = setCounter();

console.log(step);

console.log(step());
console.log(step());
console.log(step());
console.log(step());
console.log(step());
console.log(step());
console.log(step());

console.clear();


// Another Practical Example - hiding variables


// var cache = {}

// function fib(num){
//     if (num < 2){
//         return num
//     } else if (num in cache){
//         return cache[num]
//     } else {
//         let fib_num = fib(num - 1) + fib(num - 2);
//         cache[num] = fib_num
//         return fib_num
//     }
// }


// console.log(fib(10));

// Hide the Cache in a Closure

function makeFibWithCache(){
    var cache = {};
    function innerFib(num){
        if (num < 2){
            return num
        } else if (num in cache){
            return cache[num]
        } else {
            let fib_num = innerFib(num - 1) + innerFib(num - 2);
            cache[num] = fib_num
            return fib_num
        }
    }
    return innerFib
}


const fib = makeFibWithCache();

console.log(fib(10));
console.log(fib(40));
console.log(fib(100));


// IIFE - Immediately Invoked Function Expression


let myFullName = (function formatName(first, last){
    return [first, last].join(' ')
})('Brian', 'Stanton')

console.log(myFullName);

// Set up closures with IIFE

let stepByFive = (function setCounter(step){
    let count = 0;
    function inner(){
        return count += step
    }
    return inner
})(5);


console.log(stepByFive);
console.log(stepByFive());
console.log(stepByFive());
console.log(stepByFive());
console.log(stepByFive());
console.log(stepByFive());



let fibAgain = (function makeFibWithCache(){
    var cache = {};
    function fib(num){
        if (num < 2){
            return num
        } else if (num in cache){
            return cache[num]
        } else {
            let fibNum = fib(num - 1) + fib(num - 2);
            cache[num] = fibNum
            return fibNum
        }
    };

    return fib;
})()

console.log(fibAgain(100));



let addName = (function countNames(){
    let newName = [];
    function inside(name){
        newName.push(name)
        return newName
    }
    return inside;
})();

console.log(addName('Brian'));
console.log(addName('Usama'));
console.log(addName('Sarah'));