import { tasksData } from "./data.js"
import "./style.scss"
import variables from "./variables.scss";
console.log(parseInt(variables.lineHeight));

setDate();
function setDate() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let dateNow = document.querySelector(".dateNow");

    dateNow.textContent = "Today: " + d.toLocaleDateString() + ", " + weekday[d.getUTCDay()];
}

const tasksContainer = document.querySelector(".tasks-container")
tasksData.map((el) => {
    let heightOfTask = parseInt(variables.lineHeight) / 60 * el.duration;
    let task = document.createElement("div");
    task.classList = "task";
    task.style.height = `${heightOfTask}px`;
    task.style.top = `${el.start}px`;
    task.innerHTML = `<p>${el.title}</p>`;
    tasksContainer.appendChild(task);
})
