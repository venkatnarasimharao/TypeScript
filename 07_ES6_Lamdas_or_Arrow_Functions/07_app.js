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
var greet = function () {
    var greeting = 'good morning';
    return greeting;
};
var output = greet();
console.log(output);
document.getElementById('display').innerHTML = output;
var greetArrow = function () { return 'good morning from arrow function '; };
output = greetArrow();
console.log(output);
document.getElementById('display').innerHTML = output;
// Normal function with Args and Arrow Function
var greetArg = function (name) {
    return "Good Morning " + name;
};
output = greetArg('naveen');
console.log(output);
document.getElementById('display').innerHTML = output;
var greetArgsArrow = function (name) { return name + ",i am from greetArgs Arrow function"; };
// Normal function to find the sum of two numbers with Arrow Function
var sum = function (a, b) {
    return a + b;
};
output = "the sum of a,b is: " + sum(10, 20);
console.log(output);
document.getElementById('display').innerHTML = output;
var sumArrow = function (a, b) { return a + b; };
output = "sum of a,b is: " + sumArrow(20, 30);
console.log(output);
document.getElementById('display').innerHTML = output;
// Normal function to find the length of an array with Arrow Function
// Create an array with the length of each element of an array
var movies = ['Baahubali', 'Dangal', 'Drushyam'];
var movieLength = movies.map(function (movie) {
    return movie.length;
});
console.log(movieLength.join(','));
// Arrow Function for the above example
var movielengtharrow = movies.map(function (movie1) { return movie1.length; });
output = movielengtharrow.join(',');
console.log(output);
document.getElementById('display').innerHTML = output;
