/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/

// Create a function and provide few default parameters using ES6  ->void means no return
function greet(name:string,age:number):void{
    let output = 'hellow ' +name+ ' good morning ' +age+ 'year old';
    console.log(output);
    document.getElementById('display').innerHTML =output;
}
greet('john',40);

//example 2 defalut parameters

function greet1(name:string='willams',age:number=30):void{
    let output = 'hellow ' +name+ ' good morning ' +age+ 'year old';
    console.log(output);
    document.getElementById('display').innerHTML =output;
}
greet1();