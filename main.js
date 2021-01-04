"use strict";

// declare global variables
const youtubeUsername = document.querySelector(".youtube-link");
const dataUi = document.querySelector(".dropdown_data_ui");
const body = document.body;
const darkModeBtn = document.querySelector(".darkmode");
const greetings = document.querySelector(".greeting_text");
const yt_sub_count = document.querySelector(".yt_sub_count");
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
        greetings.innerHTML = "Hi, Good Afternoon!";
    } else if (hourOfTheDay >= 19 && hourOfTheDay <= 24) {
        body.classList.toggle("toggleDarkmode");
        greetings.innerHTML = "Hi, Good Evening";
    } else {
        greetings.innerHTML = "Hi, Good Morning!"
    }
})()

// making fetch request to the youtube api

const url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&key=AIzaSyDDr11G0rgShLPEXmNpI66raLdsl83LxYM&id=UCaNTxRkQ01gMBnL1mgnM_KA";
(() => {
    fetch(url)
        .then(resp => {
            return resp.json();
        })
        .then(channelData => {
            yt_sub_count.innerHTML = channelData.items[0].statistics.subscriberCount;
        })
        .catch(e => {
            console.log("An error occured while fetching channel data ", e);
        });
})();