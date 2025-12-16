const employees = [
  { id: 1, name: "Ajay", age: 25, role: "Developer", location: "New York", salary: 80000 },
  { id: 2, name: "Rahul", age: 30, role: "Manager", location: "Mumbai", salary: 90000 },
  { id: 3, name: "Sneha", age: 28, role: "Designer", location: "New York", salary: 65000 },
  { id: 4, name: "Kiran", age: 35, role: "DevOps", location: "Bangalore", salary: 85000 },
  { id: 5, name: "Anita", age: 27, role: "Developer", location: "New York", salary: 75000 }
];
//1
// let data = employees.filter((value) =>{
//     return value.location === "New York" && value.salary > 70000;
// })
// console.log(data);

//2
function data(employe){
    employe.forEach((value) =>{
        console.log(`${value.name} - ${value.role}`);
    });
}
console.log(data(employees));

// function data(employees) {
//   return employees.map(emp => `${emp.name} - ${emp.role}`);
// }
// console.log(data(employees));




//3
// let data = employees.reduce((acc, value) =>{
//     return acc + value.salary;
// },0)
// console.log(data);

//4
// let data = employees.sort((a,b) =>{
//     return b.salary - a.salary;
// })
// console.log(data);

//5
// function product(employe) {
//   let b= employe.find((value) => {
//     return value.role === "DevOps";
//    });
//    return b;
// }
// console.log(product(employees));

// function employeedetails(employees) {
//   return employees.find(emp => emp.role === "DevOps");
// }
// console.log(employeeDetails(employees));

