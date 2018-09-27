/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/

// Normal No-args function , same Arrow Function
let greet = function():string {
    let greeting:string = 'good morning';
    return greeting;
};
let output:string = greet();
console.log(output);
document.getElementById('display').innerHTML=output;



let greetArrow = () => 'good morning from arrow function ';
output = greetArrow();
console.log(output);
document.getElementById('display').innerHTML=output;

// Normal function with Args and Arrow Function
let greetArg = function(name):string {
    return `Good Morning ${name}`;
};
output=greetArg('naveen');
console.log(output);
document.getElementById('display').innerHTML=output;

let greetArgsArrow = (name) => `${name},i am from greetArgs Arrow function`;


// Normal function to find the sum of two numbers with Arrow Function
let sum =function (a , b):number {
    return a+b;
};
output = `the sum of a,b is: ${sum(10,20)}`;
console.log(output);
document.getElementById('display').innerHTML=output;

let sumArrow =(a,b)=> a+b;
output=`sum of a,b is: ${sumArrow(20,30)}`;
console.log(output);
document.getElementById('display').innerHTML=output;
// Normal function to find the length of an array with Arrow Function

// Create an array with the length of each element of an array

let movies = ['Baahubali' , 'Dangal' , 'Drushyam'];

let movieLength = movies.map(function (movie) {
        return movie.length;
    }
);
console.log(movieLength.join(','));

// Arrow Function for the above example
let movielengtharrow = movies.map(movie1 => movie1.length);
output = movielengtharrow.join(',');
console.log(output);
document.getElementById('display').innerHTML=output;