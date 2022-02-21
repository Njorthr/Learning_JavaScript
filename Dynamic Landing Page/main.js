// DOM Elements 
const time = document.querySelector("#time"),
    greeting = document.querySelector("#greeting"),
    name = document.querySelector("#name"),
    focus = document.querySelector("#focus");

// Options
const showAmPm = true;

// Show time

const showTime = () => {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? "PM" : "AM";

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} <span>${showAmPm ? amPm : ""}</span>`;

    setTimeout(showTime, 1000);

}

// Add Zero 
const addZero = n => (parseInt(n, 10) < 10 ? "0" : "") + n;

// Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
        greeting.textContent = "Good Morning";
    } else if(hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
        greeting.textContent = "Good Afternoon";
    } else {
        // Evening
        document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
        greeting.textContent = "Good Evening";
        document.body.style.color = "white";
    }
}

// Set Name

function setName(e) {
    if (e.type === "keypress") {
        // Make sure enter is pressed
        if (e.keyCode === 13) {
            localStorage.setItem("name", e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem("name", e.target.innerText);
    }
}

// Set Focus

function setFocus(e) {
    if (e.type === "keypress") {
        // Make sure enter is pressed
        if (e.keyCode === 13) {
            localStorage.setItem("focus", e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem("focus", e.target.innerText);
    }
}

// Get Name
function getName() {
    if (localStorage.getItem("name") === null || localStorage.getItem("name") === "") {
        name.textContent = "[Enter Name]";

    } else {
        name.textContent = localStorage.getItem("name");
    }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem("focus") === null || localStorage.getItem("focus") === "") {
        focus.textContent = "[Enter Focus]";

    } else {
        focus.textContent = localStorage.getItem("focus");
    }

}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
name.addEventListener("click", (e) => e.target.textContent = "");
focus.addEventListener("click", (e) => e.target.textContent = "");
focus.addEventListener("blur", setFocus);
focus.addEventListener("keypress", setFocus);



// Run 
showTime();
setBgGreet();
getName();
getFocus();