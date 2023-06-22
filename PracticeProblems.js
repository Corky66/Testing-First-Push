const today = new Date();
   const day = today.getDay();
   const daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let hour = today.getHours();
const minute = today.getMinutes();
    const amPm = (hour >= 12)? " PM " : " AM ";
        hour = (hour >= 12)? hour - 12: hour;

console.log(`Today is ${daylist[day]} and the time is ${hour}:${minute}${amPm}.`);