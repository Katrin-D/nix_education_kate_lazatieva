import { tasksData } from "../data/data.js";
import "../scss/style.scss";
/*import variables from "../scss/variables.scss";*/
/*console.log(variables)*/

const DEFAULT_ID = "default";

function removeDefaultTask() {
  document.getElementById(DEFAULT_ID).remove();
}

function randomId() {
  return Math.floor(Math.random() * 1000);
}

//Calendar-header section
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

const taskList = document.querySelectorAll(".task");
const defaultColor = document.getElementById("default-color");
/*if(defaultColor){
  defaultColor.setAttribute("value", variables.taskColor)
}*/

defaultColor.addEventListener("change", () => {
  console.log(defaultColor.value);
  /*task.style.setProperty("--task-color", defaultColor.value);*/
  /*  task.style.setProperty("background-color", defaultColor.value);*/
  /*defaultColor.style.setProperty('taskColor', defaultColor.value);*/
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

function getEventData() {
  return JSON.parse(localStorage.getItem("event"));
}

function setEventData(event) {
  localStorage.setItem("event", JSON.stringify(event));
  return false;
}

let itemsInStorage = getEventData() ? getEventData() : updateStorage(tasksData);
console.log(itemsInStorage);

function updateStorage(data) {
  setEventData(data);
  return data;
}

const tasksContainer = document.querySelector(".tasks-container");
const tasks = () => {
  return itemsInStorage
    .sort((el1, el2) => el1.start - el2.start)
    .reduce((previousValue, currentValue) => {
      const newTask = {
        ...currentValue,
        id: previousValue.length + 1,
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
  task.setAttribute("id", el.id);
  task.style.height = `${heightOfTask}px`;
  task.style.width = el.width;
  task.style.top = `${el.start}px`;
  task.style.left = `${el.left}px`;
  task.style.backgroundColor = el.color;
  task.innerHTML = `<p>${el.title}</p>`;

  tasksContainer.appendChild(task);
};

tasks().map((el) => {
  createTask(el);
});

const setNewTask = (event) => {
  let containerTopPosition = tasksContainer.getBoundingClientRect().top;
  let clickedPosition = event.pageY - containerTopPosition;
  let start = Math.round(clickedPosition / 15) * 15; //15 это 1/4 от высоты строки

  let newTask = {
    id: DEFAULT_ID,
    start: start,
    duration: 15,
    title: "New Task",
  };

  timeStart.value = start;
  timeEnd.value = start + newTask.duration;

  if (start <= 525) {
    createTask(newTask);
    return null;
  }
};

const modal = document.querySelector(".modal-container"),
  createBtn = document.getElementById("create-btn"),
  changeBtn = document.getElementById("change-btn"),
  deleteBtn = document.getElementById("delete-btn"),
  newTaskColor = document.getElementById("newTask-color"),
  newTaskTitle = document.getElementById("newTask-title"),
  timeStart = document.getElementById("time-start"),
  timeEnd = document.getElementById("time-end");

//Open modal and create task on click
tasksContainer.addEventListener("click", (e) => {
  if (e.target === tasksContainer) {
    e.stopPropagation();
    setNewTask(e);
    modal.classList.toggle("hidden");
  }
});

//Close modal and remove default task
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.toggle("hidden");
    removeDefaultTask();
  }
});

//Open modal and change task on click
tasksContainer.addEventListener("click", (e) => {
  if (e.target.className === "task") {
    let taskId = +e.target.id;
    const clickedTask = tasks().find(({ id }) => +id === taskId);
    console.log(clickedTask);
    newTaskTitle.value = clickedTask.title;
    timeStart.value = clickedTask.start;
    timeEnd.value = clickedTask.start + clickedTask.duration;

    modal.classList.toggle("hidden");
    changeTask(taskId);
  }
});

const colorPicker = document.getElementById("newTask-color");
colorPicker.addEventListener("change", (event) => {
  /*variables.taskColor = event.target.value*/
});
console.log(tasks());

createBtn.addEventListener("click", (event) => {
  const dataFromModal = {
    start: +timeStart.value,
    duration: timeEnd.value - timeStart.value,
    title: newTaskTitle.value,
    color: newTaskColor.value,
  };
  removeDefaultTask();

  setEventData(itemsInStorage.concat(dataFromModal));
  console.log(newTaskColor);
});

function changeTask(id) {
  changeBtn.addEventListener("click", (event) => {
    const changedTask = {
      start: +timeStart.value,
      duration: timeEnd.value - timeStart.value,
      title: newTaskTitle.value,
      color: newTaskColor.value,
    };

    /*setEventData(itemsInStorage[].replace());*/
  });
}
