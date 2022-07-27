//Task 1
console.log("Task 1: ");
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    console.log("FizBuz");
  } else if (i % 2 !== 0) {
    console.log("Buz");
  } else if (i % 2 === 0) {
    console.log("Fiz");
  }
}

//Task 2
console.log("Task 2: ");
let result = 1;
for (let i = 1; i <= 7; i++) {
  let sum = result * i;
  result = sum;
}
console.log("7! = ", result);

//Task 3
console.log("Task 3: ");
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

//Solution 1
const totalReamPaper = (consumptionPerWeek * weeksAmount) / sheetsInReamPaper;

if (totalReamPaper % 1 === 0) {
  console.log("Solution 1: result", totalReamPaper);
} else {
  console.log("Solution 1: result", totalReamPaper - (totalReamPaper % 1) + 1);
}

//Solution 2
const totalSheetsConsumption = consumptionPerWeek * weeksAmount;
function totalReamPaper2() {
  let sheets = 0;
  while (sheets < totalSheetsConsumption) {
    sheets += sheetsInReamPaper;
  }
  return sheets / sheetsInReamPaper;
}
console.log("Solution 2: result", totalReamPaper2());

//Task 4
console.log("Task 4: ");
function checkPorchAndFloor(roomsOnFloor, floors, roomNumber) {
  const roomsInPorch = roomsOnFloor * floors;
  let porch;
  let floor;

  for (porch = 1; roomNumber > roomsInPorch * porch; porch++) {
    floor = (roomNumber - porch * roomsInPorch) / roomsOnFloor;
  }

  return console.log("porch = ", porch, "floor = ", floor);
}

checkPorchAndFloor(3, 9, 456);
