setInterval(() => {
    var date = new Date;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var formate = "AM";
    var day = date.getDate();
    var dayName = date.getDay();
    var month = date.toLocaleString('default', {month: "short"});
    
    var year = date.getFullYear();
    if (hours >= 12) {
        formate = "PM"
        if(hours !=  12){

            hours = hours - 12;
        }
    }
    var name = ['Sunday','Monday','Tueday','Wednesday','Thurday','Friday','Saturday'];

    // console.log(hours + " : " + minutes + " : " + seconds + " ");
    document.getElementById("clock").innerHTML = hours + " : " + minutes + " : " + seconds + " " + formate;
    document.getElementById("date").innerHTML =  name[dayName]+' '+month +', '+ day + "th "  + year;
}, 1000);
// element = document.getElementById("clock");
// setInterval(function () { element.innerHTML += "Hello" }, 1000);
var date = new Date;
console.log(date);
console.log(date.toLocaleString('default', {month: "short"}));