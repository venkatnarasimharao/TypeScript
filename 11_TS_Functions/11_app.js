// Create a simple function to add two numbers
function sum(a, b) {
    var sum = a + b;
    return sum;
}
var output = "the sum of a,b is " + sum(10, 20);
console.log(output);
document.getElementById('display').innerHTML = output;
// Create the same add function with first number as 'any' type
function add(a, b) {
    var sum = 0;
    if (typeof a === "string") {
        if (isNaN(parseInt(a, 10))) {
            a = 0;
        }
        else {
            a = parseInt(a, 10);
        }
        sum = a + b;
    }
    else if (typeof a === 'number') {
        sum = a + b;
    }
    else {
        a = 0;
        sum = a + b;
    }
    return sum;
}
output = "the addition of a , b is : " + add([10, 20], 30);
console.log(output);
document.getElementById('display').innerHTML = output;
function findmax(a, b, c) {
    if (b === undefined && c === undefined) {
        return Math.max(a);
    }
    else if (c === undefined) {
        return Math.max(a, b);
    }
    else {
        return Math.max(a, b, c);
    }
}
output = "The max value is: " + findmax(10);
output = "the max of 2 numbers is: " + findmax(10, 20);
output = "the max of 3 numbers is: " + findmax(10, 20, 40);
console.log(output);
document.getElementById('display').innerHTML = output;
// Function Overloading in TypeScript , find Min using Math
// Create an Employee function and get an Employee Object
function creatEmployee(name, age, designation, salary) {
    var emp = {
        name: name,
        age: age,
        designation: designation,
        salary: salary
    };
    return emp;
}
var employee = creatEmployee('narasimha', 25, 'UIdeveloper', 30000);
output = "Name: " + employee.name + "  age:" + employee.age + "  designation:" + employee.designation + "  salary:" + employee.salary;
console.log(output);
document.getElementById('display').innerHTML = output;
