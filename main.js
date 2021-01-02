"use strict";

// declare global variables
const youtubeUsername = document.querySelector(".youtube-link");
const dataUi = document.querySelector(".dropdown_data_ui");
const body = document.body;
const darkModeBtn = document.querySelector(".darkmode");
const greetings = document.querySelector(".greeting_text");

(function () {
    youtubeUsername.addEventListener("click", function () {
        dataUi.classList.toggle("renderUi");
    })
})();

// Dark mode functionality

(() => {
    darkModeBtn.addEventListener("click", () => {
        body.classList.toggle("toggleDarkmode");
        // if (body.classList.toggle("toggleDarkmode")) darkModeBtn.innerHTML = "Normal mode";
    })
})();

// function to activate darkmode based on time i.e morning and night
// activate darkmode @7pm and deactivate @7am
const hourOfTheDay = new Date().getHours(24);
// console.log(hourOfTheDay)

(() => {
    if (hourOfTheDay >= 12 && hourOfTheDay <= 18) {
        greetings.innerHTML = "Hi, Good Afternoon!"
        // } else if (hourOfTheDay < 19) {
        //     greetings.innerHTML = "Hi, Good Morning!"
    } else if (hourOfTheDay >= 19 && hourOfTheDay <= 24) {
        body.classList.toggle("toggleDarkmode");
        greetings.innerHTML = "Hi, Good Evening";
    } else {
        // darkModeBtn.style.display = "none";
        // greetings.innerHTML = "Hi, How are you doing?"
        greetings.innerHTML = "Hi, Good Morning!"
    }
})()