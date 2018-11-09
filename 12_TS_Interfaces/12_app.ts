// Create a Student Interface , and printStudent function
//due to interface name that name can be change it to type
interface student{
    name:string,
    age:number,
    course:string,
    address:{
        city:string,
        state:string,
        country:string
    }
}
function printstudent(student:student){
    let output= `name: ${student.name}
                 age: ${student.age}
                 course: ${student.course}
                 city: ${student.address.city}
                 state: ${student.address.state}
                 course: ${student.address.country}`;
    console.log(output);
    document.getElementById('display').innerHTML=output;
}
let student:student={
    name:'Narasimha',
    age:24,
    course:'UI Developer',
    address:{
        city:'Hyderabad',
        state:'Andhra Pradesh',
        country:'India'
    }
};
printstudent(student);