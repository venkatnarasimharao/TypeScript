/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/

// Usage of Destructing to assign each variable of an array to other vars
let employee = [1002,'narasimha','team lead'];
let eno = employee[0];
let emane= employee[1];
let edesg = employee[2];                  //instead of this we can do like as follows

let [empno,empname,empdesig] = employee;
let output = `empNo: ${empno} empName: ${empname} EmpDesig: ${empdesig}`;
console.log(output);
document.getElementById('display').innerHTML=output;
// Usage of Destructing to exchange the values of two vars
let a:number=10;
let b:number=20;
[a,b]=[b,a];
output= `a is : ${a}  b is : ${b}`;
console.log(output);
document.getElementById('display').innerHTML=output;

// Usage of Destructing to assign each variable of an Object to other vars
let student={
    sname :'Narasimha',
    age : 25,
    course : 'UI Developer'
};

let {sname:stdName,age:stdAge,course:stdcourse} =student;
output=`student Name is : ${stdName} Student Age: ${stdAge} Student Course: ${stdcourse}`;
console.log(output);
document.getElementById('display').innerHTML=output;
// Best usage is to exchange the value btw a & b
