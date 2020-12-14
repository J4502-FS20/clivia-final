"use strict";




var timeDiv = document.getElementById('timeDiv');

var today = new Date();
var firstStop = new Date("March 11, 2020 17:30");

var milliseconds = today - firstStop;
var seconds = milliseconds/1000;
var minutes = seconds/60;
var hours = minutes/60;
var days = hours/24;



timeDiv.innerHTML += '<p>Today is ' + today + '</p><p>It has been ' + days + ' days since MU first suspended class due to the pandemic in spring semester.</p>';
