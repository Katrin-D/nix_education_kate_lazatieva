import { tasksData } from "./data.js"

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let dateNow = document.querySelector(".dateNow");

dateNow.textContent = "Today: " + d.toLocaleDateString() + ", " + weekday[d.getUTCDay()];

tasksData.map((el) => {

})