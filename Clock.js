const HourHand = document.querySelector("#hr");
const MinuteHand = document.querySelector("#min");
const SecondHand = document.querySelector("#sec");

var date = new Date();
console.log(date);



let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();



let hrposition = (hr * 360 / 12) + (min * (360 / 60) / 12);
let minposition = (min * 360 / 60) + (sec * (360 / 60) / 60);
let secposition = sec * 360 / 60;

function runningtheclock() {

    hrposition = hrposition + (3 / 360);
    minposition = minposition + (6 / 60);
    secposition = secposition + 6;

    HourHand.style.transform = "rotate(" + hrposition + "deg)";
    MinuteHand.style.transform = "rotate(" + minposition + "deg)";
    SecondHand.style.transform = "rotate(" + secposition + "deg)";

}

var settingInterval = setInterval(runningtheclock, 1000);