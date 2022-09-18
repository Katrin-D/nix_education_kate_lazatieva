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

const tasksContainer = document.querySelector(".tasks-container");

const tasksWithStyles = () => {
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

tasksWithStyles().map((el) => {
  createTask(el);
});

console.log(tasksWithStyles());

const modal = document.querySelector(".modal-container");
tasksContainer.addEventListener("click", (event) => {
  event.stopPropagation();
  let containerTopPosition = tasksContainer.getBoundingClientRect().top;
  let start = event.pageY - containerTopPosition;
  const timeStart = document.getElementById("time-start");
  const timeEnd = document.getElementById("time-end");

  console.log(start)
  let newTask = {
    start: start,
    duration: 15,
    title: "New Task",
  };


  timeStart.value = Math.floor((start)/ 60)+8;
  timeEnd.value = Math.floor((start)/ 60)+8;


  tasksData.push(newTask);
  modal.classList.toggle("hidden");
  console.log(tasksWithStyles());

  /*  tasksWithStyles().map((el) => {
    createTask(el);
  });*/ //все отрисовіваются еще раз, поверх старых

  createTask(newTask); //не учитывает все предыдущие таски
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.toggle("hidden");
});

const colorPicker = document.getElementById("newTask-color");
colorPicker.addEventListener("change", (event) => {
  /*variables.taskColor = event.target.value*/
});
