/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative. In this we use ` (back tick).

*/
/*
Create en Employee Object and prepares a Template String using
String Concatenation and Template String.
 */
var employee = {
    name: 'john',
    age: 40,
    designation: 'manager'
};
var strconcat = '<div style="background-color: yellow">' +
    '<h1>' + employee.name + '</h1>' +
    '<h1>' + employee.age + '</h1>' +
    '<h1>' + employee.designation + '</h1>' +
    '</div>';
document.getElementById('container').innerHTML = strconcat;
//insted of + so we can use ` this symbol is above the tab key
var templateStr = "<div style=\"background-color: purple\"> \n                <h1>" + employee.name + "</h1>\n                <h1>" + employee.age + "</h1>\n                <h1>" + employee.designation + "</h1>\n                </div>";
document.getElementById('container').innerHTML = templateStr;
