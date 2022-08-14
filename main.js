import { condidateArr } from "./candidates.js";

//task1
const arr = ["Vasya", "Petya", "Alexey"];

function removeUser(array, index) {
  console.log(array.splice(index, 1));
}
removeUser(arr, 1);

//task2
const obj = { name: "Vasya", age: 1 };

function getAllKeys(object) {
  console.log(Object.keys(object));
}
getAllKeys(obj); // ["name", "age"]

//task3
function getAllValues(object) {
  console.log(Object.values(object));
}
getAllValues(obj); /// ["Vasya", 1]

//task4
const firstObj = {
  id: 4,
  name: "Kate",
};

function insertIntoarr(addObj, id) {
  const startIndex = condidateArr.findIndex((el) => {
    return el._id === id;
  });

  condidateArr.splice(startIndex, 0, addObj);
}

insertIntoarr(firstObj, condidateArr[0]._id);
console.log(condidateArr);

//task5
class Candidates {
  constructor(candidateObj) {
    this.address = candidateObj.address;
  }

  get state() {
    return this.address.split(",")[2];
  }
}

const newCandidate = new Candidates(condidateArr[1]);

console.log(newCandidate.state);

//task6

function getCompanyNames(array) {
  const allCompany = [];
  array.forEach((candidate) => {
    let alredyUsed = allCompany.some((el) => el === candidate.company);
    if (!alredyUsed) {
      allCompany.push(candidate.company);
    }
  });
  return allCompany;
}

console.log(getCompanyNames(condidateArr));

//task7
function getUsersByYear(year) {
  const usersByYear = [];

  condidateArr.forEach((el) => {
    let regYear = new Date(el.registered).getFullYear();
    if (regYear === year) {
      usersByYear.push(el._id);
    }
  });

  return usersByYear;
}

console.log(getUsersByYear(2015));

//task8
function getCondidatesByUnreadMsg(number) {
  return condidateArr.filter((el) => {
    if (el.greeting) {
      return +el.greeting.split(" ")[5] === number;
    }
  });
}

console.log(getCondidatesByUnreadMsg(4));

//task9

function getCondidatesByGender(gender) {
  return condidateArr.filter((el) => {
    if (el.gender) {
      return el.gender === gender;
    }
  });
}

console.log(getCondidatesByGender("female"));
