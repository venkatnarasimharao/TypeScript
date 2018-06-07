// Hello World App
let greeting:string = 'Good Morning';
document.getElementById('display').innerHTML=greeting;

// Variables Creation in TypeScript

let a:number=10;
let b:number=20;

function sum(a:number, b:number):number{
    return a+b;
}
let output:string = 'the sum of a and b :' +sum(a,b);
console.log(output);
document.getElementById('display').innerHTML=output;


