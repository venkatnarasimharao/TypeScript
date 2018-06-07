/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/
// Usage of let vs Var inside if loop created variables
var course = 'MPC';
if (course === 'MPC') {
    var dept = 'Engineering';
}
var output = 'The dept is : ' + dept;
var course = 'MPC';
if (course === 'MPC') {
    var dept_1 = 'Engineering';
}
//we can't access the variable declared inside if condition using let
//var output = 'The dept is : ' +dept;  ->if u remove this comment you will understand
// Usage of let vs var inside for block
// Usage Const variable creation
var Month_Name = 'january';
//we cant re-assign name again if we give const before that name
//Month_Name = 'april';
