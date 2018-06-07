/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
let array = [10,20,30,40,50];
let min_val = Math.min(...array);
let output = `the min val is: ${min_val}`;
console.log(output);
document.getElementById('display').innerHTML=output;

//add some array between another array
let arr1 = [30,40,50];
let arr2 =[10,20,...arr1,60,70,80];
output=`the added array is: ${arr2.join(' , ')}`;
console.log(output);
document.getElementById('display').innerHTML=output;

//creat a copy of an array
let abc= ['html','css','javascript','bootstrap'];
let def= [...abc];   //same as abc.slice() concept in javascript
output= `the ef array values are: ${def.join(' , ')}`;
console.log(output);
document.getElementById('display').innerHTML=output;


//Ex:

function Employee(){

    let values = [];
    for(let i=0; i<arguments.length;i++){
        values[i] = arguments[i];
    }
    return values;

    /*let values = Array.prototype.splice.call(arguments,[0]);
    return values;*/
}

