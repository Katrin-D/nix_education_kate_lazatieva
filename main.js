import { tasksData } from "./data.js"
import "./style.scss"
import variables from "./variables.scss";

setDate();
function setDate() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let dateNow = document.querySelector(".dateNow");

    dateNow.textContent = "Today: " + d.toLocaleDateString() + ", " + weekday[d.getUTCDay()];
}

const tasksContainer = document.querySelector(".tasks-container")
const taskWithStyles = tasksData.reduce((previousValue, currentValue) => {
    const newTask = {
        ...currentValue,
        left: 0,
    }

    const prevElement =
        previousValue && previousValue[previousValue.length - 1];

    if (
        prevElement &&
        currentValue.start > prevElement.start &&
        currentValue.start < prevElement.start + prevElement.duration

    ) { newTask.left = prevElement.left + 200}

   return  previousValue.concat([newTask]);
}, []);

console.log(taskWithStyles)


taskWithStyles.map((el) => {
    let heightOfTask = parseInt(variables.lineHeight) / 60 * el.duration;
    let task = document.createElement("div");

    task.classList = "task";
    task.style.height = `${heightOfTask}px`;
    task.style.top = `${el.start}px`;
    task.style.left = `${el.left}px`;
    task.innerHTML = `<p>${el.title}</p>`;
    tasksContainer.appendChild(task);
})
