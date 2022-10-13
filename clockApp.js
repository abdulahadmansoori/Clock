setInterval(() => {
    var date = new Date;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var formate = "AM";
    var day = date.getDate();
    var dayName = date.getDay();
    var month = date.toLocaleString('default', { month: "short" });

    let hourRotation = 30 * hours + minutes / 2;
    let minRotation = 6 * minutes + 6 * seconds;
    let secRotation = 6 * seconds;


    hour.style.transform = `rotate(${hourRotation})`;
    min.style.transform = `rotate(${minRotation})`;
    sec.style.transform = `rotate(${secRotation})`;

    var year = date.getFullYear();
    if (hours >= 12) {
        formate = "PM"
        if (hours != 12) {

            hours = hours - 12;
        }
    }
    var name = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];

    // console.log(hours + " : " + minutes + " : " + seconds + " ");
    document.getElementById("clock").innerHTML = hours + " : " + minutes + " : " + seconds + " " + formate;
    document.getElementById("date").innerHTML = name[dayName] + ' ' + month + ', ' + day + "th " + year;
}, 1000);
// element = document.getElementById("clock");
// setInterval(function () { element.innerHTML += "Hello" }, 1000);
var date = new Date;
console.log(date);
console.log(date.toLocaleString('default', { month: "short" }));
setInterval(() => {
    var date = new Date;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    let hourRotation = 30 * hours + minutes / 2;
    let minRotation = 6 * minutes;
    let secRotation = 6 * seconds;

    document.getElementById("hour").style.transform = `rotate(${hourRotation}deg)`;
    document.getElementById("min").style.transform = `rotate(${minRotation}deg)`;
    document.getElementById("sec").style.transform = `rotate(${secRotation}deg)`;
}, 1000);

let switchClock = (x) => {
    let analog = document.getElementById("analog");
    let digital = document.getElementById("digital");
    if (x === "digital") {
        digital.style.display = "block";
        analog.style.display = "none";
        document.getElementById("analogBtn").style.borderBottom = "none";
        document.getElementById("digitalBtn").style.borderBottom = "1px solid rgb(6, 232, 6)";
        

    } else {
        digital.style.display = "none";
        analog.style.display = "block";
        document.getElementById("analogBtn").style.borderBottom = "1px solid rgb(6, 232, 6)";
        document.getElementById("digitalBtn").style.borderBottom = "none";
        
    }
}