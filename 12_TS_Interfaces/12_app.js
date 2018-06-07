function printstudent(student) {
    var output = "name: " + student.name + "\n                 age: " + student.age + "\n                 course: " + student.course + "\n                 city: " + student.address.city + "\n                 state: " + student.address.state + "\n                 course: " + student.address.country;
    console.log(output);
    document.getElementById('display').innerHTML = output;
}
var student = {
    name: 'Narasimha',
    age: 24,
    course: 'UI Developer',
    address: {
        city: 'Hyderabad',
        state: 'Andhra Pradesh',
        country: 'India'
    }
};
printstudent(student);
