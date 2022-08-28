import { condidateArr } from "./candidates.js";

//Task 1
const searchCandidatesByPhoneNumber = (phone) => {
  phone = phone.match(/\d+/g).join();

  return condidateArr.filter(el => {
    return el.phone.match(/\d+/g).join().indexOf(phone) > -1;
  });
};
console.log(searchCandidatesByPhoneNumber('43'))
console.log(searchCandidatesByPhoneNumber('+1 (803) 433-2863'))

//Task 2

const getCandidateById = (id) => {
  const candidate = condidateArr.find(el => el._id === id);
  const date = new Date(candidate.registered);
  const newDateFormat = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return {...candidate, registered: newDateFormat};
}

console.log(getCandidateById('5e216bc9a6059760578aefa4'))
console.log(condidateArr)

//Task 3
const sortCandidatesArr = (sortBy) => {
  const cleanBalance = el => +el.balance.replace(/[,$]/g, "");
  return [...condidateArr].sort((a,b) => {
    if (sortBy === "asc") {
      return cleanBalance(a) - cleanBalance(b);
    } else if (sortBy === "desc") {
      return cleanBalance(b) - cleanBalance(a);
    } else {
      return 0;
    }
  })
      /*.map(el => el.balance)*/
}

console.log(sortCandidatesArr());
console.log(sortCandidatesArr("asc"));
console.log(sortCandidatesArr("desc"));


//Task 4

const getEyeColorMap = () => {
  const result = {};
  condidateArr.map((el) =>
  {
    if (!result[el.eyeColor]) {
      return result[el.eyeColor] = [el];
    }else {
      result[el.eyeColor].push(el);
    }
  });
  return result;
}

console.log(getEyeColorMap());



