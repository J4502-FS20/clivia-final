"use strict";

//What is happening on lines 5 through 11?

var headline = document.getElementById('myHeadline');

var timeDiv = document.getElementById('timeDiv');

var adj = document.getElementById('adjective');

var count = document.getElementById('count');

//Based on what we saw in the browser, what can we guess is happening on lines 15 through 22?

var today = new Date();
var firstClass = new Date("August 25, 2020 09:30");

var milliseconds = today - firstClass;
var seconds = milliseconds/1000;
var minutes = seconds/60;
var hours = minutes/60;
var days = hours/24;

//Based on what we saw in the browser, what can we guess is happening on lines 26 through 38?

var hourOfTheDay = today.getHours();
var minuteOfTheHour = today.getMinutes();

if (hourOfTheDay < 12) {
  headline.innerText = "Good morning!";
} else {
  headline.innerText = "Greetings, and welcome!";
  if (hourOfTheDay > 12) {
    hourOfTheDay = hourOfTheDay - 12;
  }
}

headline.innerText += " It is " + hourOfTheDay + ":" + minuteOfTheHour;
