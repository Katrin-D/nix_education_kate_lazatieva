import { tasksData } from "./data.js"

setDate();
function setDate() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let dateNow = document.querySelector(".dateNow");

    dateNow.textContent = "Today: " + d.toLocaleDateString() + ", " + weekday[d.getUTCDay()];
}

const tasksContainer = document.querySelector(".tasks-container")
tasksData.map((el) => {
let task = document.createElement("div");
    task.classList = "task";
    task.innerHTML = `<p>${el.title}</p>`;
    tasksContainer.appendChild(task);
})