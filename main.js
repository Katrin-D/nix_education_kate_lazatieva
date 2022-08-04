import { employeeArr } from "./employeeArr.js";

//Task 1, 2
class Employee {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.surname = obj.surname;
    this.salary = obj.salary;
    this.workExperience = obj.workExperience;
    this.isPrivileges = obj.isPrivileges;
    this.gender = obj.gender;
  }
  getFullName() {
    return `${this.surname} ${this.name}`;
  }

  fullInfo() {
    /*return console.log(Object.keys(this), Object.values(this));*/
    /*return `id - ${this.id}, name - ${this.name}, surname - ${this.surname}`;*/
  }
}

const employeeObj = new Employee(employeeArr[1]);
console.log("oneFullName: ", employeeObj.getFullName());

//Task 3
let createEmployeesFromArr = (arr) => {
    //return [...arr];
    return arr.map((employee) => {
      return new Employee(employee)
    });
};
const employeeConstructArr = createEmployeesFromArr(employeeArr);
console.log("employeeConstructArr: ",employeeConstructArr);

//Task 4
const getFullNamesFromArr = (arr) => {
    return arr.map((emplyee) => emplyee.getFullName());
}

console.log("FullNames: ",getFullNamesFromArr(employeeConstructArr));

//Task 5
const getMiddleSalary = (arr) => {
  let totalSalary = 0;
  arr.map((emplyee) => totalSalary += emplyee.salary );
  return totalSalary/arr.length ;
}

console.log("middleSalary: ", getMiddleSalary(employeeConstructArr));

//Task 6
const getRandomEmployee = (arr) => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return new Employee(employeeArr[randomIndex]);
}

console.log("RandomEmployee: ", getRandomEmployee(employeeConstructArr));

//Task 7
/*employeeObj.fullInfo();*/
