const time = document.getElementById("time");
const ampm = document.getElementById("ampm");
const date = document.getElementById("date");
const day = document.getElementById("day");

function updateClock(){

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    hours = hours.toString().padStart(2,'0');
    minutes = minutes.toString().padStart(2,'0');
    seconds = seconds.toString().padStart(2,'0');

    time.innerHTML = `${hours}:${minutes}:${seconds}`;
    ampm.innerHTML = period;

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    day.innerHTML = days[now.getDay()];

    date.innerHTML =
        `${now.getDate()} ${months[now.getMonth()]}, ${now.getFullYear()}`;
}

updateClock();

setInterval(updateClock,1000);