import { tasksData } from "../data/data.js";
/*import "../style/style.scss";*/
/*import variables from "../style/variables.scss";*/

setDate();
function setDate() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let dateNow = document.querySelector(".dateNow");

  dateNow.textContent =
    "Today: " + d.toLocaleDateString() + ", " + weekday[d.getUTCDay()];
}

function getEventData() {
  return JSON.parse(localStorage.getItem("event"));
}

function setEventData(event) {
  localStorage.setItem("event", JSON.stringify(event));
  return false;
}

let itemsInStorage = getEventData() ? getEventData() : updateStorage(tasksData);
console.log(itemsInStorage);

const createBtn = document.getElementById("create-btn");
const newTaskColor = document.getElementById("newTask-color"),
  newTaskTitle = document.getElementById("newTask-title"),
  timeStart = document.getElementById("time-start"),
  timeEnd = document.getElementById("time-end");

createBtn.addEventListener("click", (event) => {
  itemsInStorage.push({
    start: +timeStart.value,
    duration: timeEnd.value - timeStart.value,
    title: newTaskTitle.value,
  });
  setEventData(itemsInStorage);
});

function updateStorage(data) {
  setEventData(data);
  return data;
}

const tasksContainer = document.querySelector(".tasks-container");
const tasks = () => {
  return tasksData
    .sort((el1, el2) => el1.start - el2.start)
    .reduce((previousValue, currentValue) => {
      const newTask = {
        ...currentValue,
        left: 0,
        width: "100%",
      };

      const prevElement =
        previousValue && previousValue[previousValue.length - 1];

      if (
        prevElement &&
        currentValue.start > prevElement.start &&
        currentValue.start < prevElement.start + prevElement.duration
      ) {
        newTask.left = prevElement.left + 200;
        newTask.width = `calc(100% - ${prevElement.left + 200}px)`;
        prevElement.width = "200px";
      }

      return previousValue.concat([newTask]);
    }, []);
};

const createTask = (el) => {
  let height = 60; /*let heightOfTask = (parseInt(variables.lineHeight) / 60) * el.duration;*/
  let heightOfTask = (height / 60) * el.duration;
  let task = document.createElement("div");

  task.classList.add("task");
  task.style.height = `${heightOfTask}px`;
  task.style.width = el.width;
  task.style.top = `${el.start}px`;
  task.style.left = `${el.left}px`;
  task.innerHTML = `<p>${el.title}</p>`;

  tasksContainer.appendChild(task);
};

tasks().map((el) => {
  createTask(el);
});

/*const getTaskDetails = () => {
  const title = document.getElementById("newTask-title").value;
  const start = +document.getElementById("time-start").value;
  const end = +document.getElementById("time-end").value;
  const duration = end - start;
  return {
    title,
    start,
    duration,
  };
};*/

const setNewTask = (event) => {
  const timeStart = document.getElementById("time-start");
  const timeEnd = document.getElementById("time-end");
  let containerTopPosition = tasksContainer.getBoundingClientRect().top;
  let clickedPosition = event.pageY - containerTopPosition;
  let start = Math.round(clickedPosition / 15) * 15; //15 это 1/4 от высоты строки

  let newTask = {
    start: start,
    duration: 15,
    title: "New Task",
  };

  timeStart.value = start;
  timeEnd.value = start + newTask.duration;

  if (start <= 525) {
    itemsInStorage.push(newTask);
    /*tasksData.push(newTask);*/
    createTask(newTask); //не учитывает все предыдущие таски
  } else {
    return null;
  }
};

const modal = document.querySelector(".modal-container");
tasksContainer.addEventListener("click", (event) => {
  event.stopPropagation();
  setNewTask(event);
  modal.classList.toggle("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.toggle("hidden");
});

const colorPicker = document.getElementById("newTask-color");
colorPicker.addEventListener("change", (event) => {
  /*variables.taskColor = event.target.value*/
});

console.log(tasks());
