//              Problem 1, log the current day and time to the console
//const today = new Date();
//   const day = today.getDay();
//   const daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//let hour = today.getHours();
//const minute = today.getMinutes();
//    const amPm = (hour >= 12)? " PM " : " AM ";
//        hour = (hour >= 12)? hour - 12: hour;

//console.log(`Today is ${daylist[day]} and the time is ${hour}:${minute}${amPm}.`);

//              Problem 2 log the current date to the console
const today = new Date();
    let month = today.getMonth() + 1;
        if(month<10) {
            month = '0' + month
        };
    let day = today.getDate();
        if (day<10) {
            day = '0' + day
        };
    year = today.getFullYear();
console.log(`Today's date is ${month}/${day}/${year}`)