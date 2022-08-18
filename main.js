import { condidateArr } from "./candidates.js";

//Task 1
const searchCandidatesByPhoneNumber = (phone) => {
  condidateArr.filter();
};

//Task
const eyesColor = condidateArr.map((el) => el.eyeColor);
const unique = new Set(eyesColor);

console.log(unique);

function piramid(iter) {
  let item = iter * 2 - 1;
  for (let i = 0; i < iter; i++) {
    let row = "";
    for (let j = 1; j <= item; j++) {
      if (j === iter || (j >= iter - i && j <= iter + i)) {
        row += "#";
      } else {
        row += "-";
      }
    }
    console.log(row);
  }
}
piramid(6);
