/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/
// Usage of Destructing to assign each variable of an array to other vars
var employee = [1002, 'narasimha', 'team lead'];
var eno = employee[0];
var emane = employee[1];
var edesg = employee[2]; //instead of this we can do like as follows
var empno = employee[0], empname = employee[1], empdesig = employee[2];
var output = "empNo: " + empno + " empName: " + empname + " EmpDesig: " + empdesig;
console.log(output);
document.getElementById('display').innerHTML = output;
// Usage of Destructing to exchange the values of two vars
var a = 10;
var b = 20;
_a = [b, a], a = _a[0], b = _a[1];
output = "a is : " + a + "  b is : " + b;
console.log(output);
document.getElementById('display').innerHTML = output;
// Usage of Destructing to assign each variable of an Object to other vars
var student = {
    sname: 'Narasimha',
    age: 25,
    course: 'UI Developer'
};
var stdName = student.sname, stdAge = student.age, stdcourse = student.course;
output = "student Name is : " + stdName + " Student Age: " + stdAge + " Student Course: " + stdcourse;
console.log(output);
document.getElementById('display').innerHTML = output;
var _a;
// Best usage is to exchange the value btw a & b
