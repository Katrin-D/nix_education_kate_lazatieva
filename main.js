//Task 1

const counter = () => {
  let sum = 0;

  return function (value) {
    sum += value;
    console.log(sum);
  };
};

let funcCounter = counter();

funcCounter(5);
funcCounter(5);
funcCounter(5);
funcCounter(5);
funcCounter(5);

//Task 1 with letters

const letterCounter = () => {
  let a = "";

  return function (value) {
    if (typeof value === "string") {
      a += value;
      a = [...a].sort().join("");
      console.log(a);
    } else {
      a = "";
      console.log(a);
    }
  };
};

const funcLetterCounter = letterCounter();

funcLetterCounter("djdj");
funcLetterCounter("10rtqa");
funcLetterCounter("ancddlpyr");
funcLetterCounter("4892jfy");
funcLetterCounter(9999999);
funcLetterCounter();

//Task 2

const arrCounter = () => {
  let arr = [];

  return function (...value) {
    if (value.length > 0) {
      arr = [...arr, ...value];
      console.log(arr);
    } else {
      arr = [];
      console.log(arr);
    }
  };
};

const getUpdatedArr = arrCounter();
getUpdatedArr(3); // [3]
getUpdatedArr(5); // [3, 5]
getUpdatedArr({ name: "Vasya" }); // [3, 5, {name: 'Vasya'}]
getUpdatedArr(); // []
getUpdatedArr(4); // [4]

//Task 3

const timeCounter = () => {
  let latestTime = "Enabled";

  return function () {
    if (latestTime !== "Enabled") {
      let timeNow = new Date().getTime();
      let timeDifference = (timeNow - latestTime) / 1000;
      console.log(timeDifference);

      latestTime = timeNow;
    } else {
      console.log(latestTime);
      latestTime = new Date().getTime();
    }
  };
};

const getTime = timeCounter();

getTime();
setTimeout(getTime, 100);
setTimeout(getTime, 2000);
setTimeout(getTime, 3342);
setTimeout(getTime, 7432);
setTimeout(getTime, 1076);
